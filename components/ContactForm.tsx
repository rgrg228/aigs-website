"use client";

import { useState } from "react";

const REQUIREMENTS = [
  "Affiliate Partner",
  "Custom ChatBot Development",
  "Others",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-ink-900/[0.08] bg-white p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-ink-900">Let&apos;s get in touch</h2>
      <p className="mt-2 text-sm text-ink-900/65">
        Fill up the form and our team will get back to you within 24 hours.
      </p>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-4">
        <Field label="Full Name" name="name" placeholder="Jane Doe" required />
        <Field label="Phone" name="phone" placeholder="+60 12 345 6789" required />
        <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
        <label className="block">
          <span className="text-sm font-semibold text-ink-900">
            Select Your Requirement <span className="text-rose-500">*</span>
          </span>
          <select
            name="requirement"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          >
            <option value="" disabled>
              Choose an option…
            </option>
            {REQUIREMENTS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-900">
            Enter Your Message Below <span className="text-rose-500">*</span>
          </span>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us about your use case…"
            className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          />
        </label>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit"}
        </button>

        {status === "success" && (
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            Thanks — we&apos;ve received your message and will reply within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            {error || "Something went wrong. Please email hello@chat2sales.ai."}
          </p>
        )}

        <p className="text-xs text-ink-900/50">
          By submitting the form you agree to the{" "}
          <a href="/terms-and-conditions" className="underline hover:text-ink-900">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy-policy" className="underline hover:text-ink-900">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink-900">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </label>
  );
}
