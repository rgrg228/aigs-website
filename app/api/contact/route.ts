import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  requirement?: string;
  message?: string;
  website?: string; // honeypot
};

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const missing = (["name", "phone", "email", "requirement", "message"] as const).filter(
    (k) => !body[k]?.toString().trim(),
  );
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email!.trim())) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 400 },
    );
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chat2sales.ai contact form",
          submittedAt: new Date().toISOString(),
          ...body,
        }),
      });
    } catch (err) {
      console.error("Contact webhook failed", err);
    }
  } else {
    console.log("[contact] new submission", body);
  }

  return NextResponse.json({ ok: true });
}
