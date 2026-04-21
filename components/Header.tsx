"use client";

import { useState } from "react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

export default function Header({
  dict,
  locale,
}: {
  dict: Dictionary["header"];
  locale: Locale;
}) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/[0.06] bg-white/85 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between">
        <a href={localeHref(locale, "/")} className="flex items-center gap-2">
          <Logo className="h-8" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {dict.groups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setDropdown(group.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-900/75 transition hover:bg-brand-50 hover:text-brand-700"
                type="button"
              >
                {group.label}
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 4l4 4 4-4z" />
                </svg>
              </button>
              {dropdown === group.label && (
                <div className="absolute left-0 top-full w-64 rounded-2xl border border-ink-900/[0.08] bg-white p-2 shadow-lg">
                  {group.items.map((i) => (
                    <a
                      key={i.label}
                      href={localeHref(locale, i.href)}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-900/75 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher current={locale} />
          <a href={localeHref(locale, "/contact")} className="btn-ghost">
            {dict.contactCta}
          </a>
          <a href={localeHref(locale, "/contact")} className="btn-primary">
            {dict.bookDemo}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/[0.06] bg-white lg:hidden">
          <div className="container-xl flex flex-col gap-1 py-4">
            {dict.groups.map((group) => (
              <details key={group.label} className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-ink-900 hover:bg-brand-50">
                  {group.label}
                  <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4z" />
                  </svg>
                </summary>
                <div className="ml-2 flex flex-col gap-1 py-1">
                  {group.items.map((i) => (
                    <a
                      key={i.label}
                      href={localeHref(locale, i.href)}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-2 text-sm text-ink-900/70 hover:bg-brand-50"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}
            <div className="mt-3 flex items-center justify-center">
              <LanguageSwitcher current={locale} />
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <a href={localeHref(locale, "/contact")} className="btn-secondary w-full">
                {dict.contactCta}
              </a>
              <a href={localeHref(locale, "/contact")} className="btn-primary w-full">
                {dict.bookDemo}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
