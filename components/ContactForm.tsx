"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  dict,
  locale,
}: {
  dict: Dictionary["contact"]["form"];
  locale: Locale;
}) {
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
      <h2 className="text-2xl font-bold text-ink-900">{dict.heading}</h2>
      <p className="mt-2 text-sm text-ink-900/65">{dict.subtext}</p>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-4">
        <Field
          label={dict.nameLabel}
          name="name"
          placeholder={dict.namePlaceholder}
          required
        />
        <Field
          label={dict.phoneLabel}
          name="phone"
          placeholder={dict.phonePlaceholder}
          required
        />
        <Field
          label={dict.emailLabel}
          name="email"
          type="email"
          placeholder={dict.emailPlaceholder}
          required
        />
        <label className="block">
          <span className="text-sm font-semibold text-ink-900">
            {dict.requirementLabel} <span className="text-rose-500">*</span>
          </span>
          <select
            name="requirement"
            required
            defaultValue=""
            className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          >
            <option value="" disabled>
              {dict.requirementPlaceholderOption}
            </option>
            {dict.requirementOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink-900">
            {dict.messageLabel} <span className="text-rose-500">*</span>
          </span>
          <textarea
            name="message"
            rows={4}
            required
            placeholder={dict.messagePlaceholder}
            className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
          />
        </label>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary mt-2 justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? dict.submitting : dict.submit}
        </button>

        {status === "success" && (
          <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {dict.success}
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700">
            {error || dict.errorDefault}
          </p>
        )}

        <p className="text-xs text-ink-900/50">
          {dict.consentBefore}
          <a
            href={localeHref(locale, "/terms-and-conditions")}
            className="underline hover:text-ink-900"
          >
            {dict.consentTerms}
          </a>
          {dict.consentMiddle}
          <a
            href={localeHref(locale, "/privacy-policy")}
            className="underline hover:text-ink-900"
          >
            {dict.consentPrivacy}
          </a>
          {dict.consentAfter}
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
