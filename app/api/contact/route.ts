import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  requirement?: string;
  message?: string;
  website?: string; // honeypot
};

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_IP = 5;

function clientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function deliverEmail(payload: Payload): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? "hello@chat2sales.ai";
  const from =
    process.env.CONTACT_EMAIL_FROM ?? "Chat2Sales <noreply@chat2sales.ai>";

  const safeName = escapeHtml(payload.name ?? "");
  const safePhone = escapeHtml(payload.phone ?? "");
  const safeEmail = escapeHtml(payload.email ?? "");
  const safeReq = escapeHtml(payload.requirement ?? "");
  const safeMsg = escapeHtml(payload.message ?? "").replace(/\n/g, "<br>");

  const subject = `New demo request, ${payload.name ?? "unknown"}`;
  const html = `
    <h2>New Chat2Sales demo request</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Phone/WhatsApp:</strong> ${safePhone}</p>
    ${safeEmail ? `<p><strong>Email:</strong> ${safeEmail}</p>` : ""}
    ${safeReq ? `<p><strong>Interested in:</strong> ${safeReq}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${safeMsg}</p>
    <hr>
    <p style="color:#888;font-size:12px">Submitted at ${new Date().toISOString()}</p>
  `;

  if (resendKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.email || undefined,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Resend error ${res.status}: ${text}`);
    }
    return;
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "chat2sales.ai contact form",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });
    if (!res.ok) throw new Error(`Webhook error ${res.status}`);
    return;
  }

  console.log("[contact] no RESEND_API_KEY or CONTACT_WEBHOOK_URL set, dropping on floor", payload);
}

export async function POST(req: Request) {
  const ip = clientIp(req);
  const rl = rateLimit(`contact:${ip}`, { windowMs: WINDOW_MS, max: MAX_PER_IP });
  if (!rl.allowed) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSeconds) },
      },
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const missing = (["name", "phone", "message"] as const).filter(
    (k) => !body[k]?.toString().trim(),
  );
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const email = body.email?.toString().trim();
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 },
      );
    }
  }

  const name = body.name!.toString().trim();
  const phone = body.phone!.toString().trim();
  const message = body.message!.toString().trim();

  if (name.length > 200 || phone.length > 40 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  try {
    await deliverEmail({ name, phone, email, message, requirement: body.requirement });
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json(
      { ok: false, error: "Could not deliver the message. Please email hello@chat2sales.ai." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
