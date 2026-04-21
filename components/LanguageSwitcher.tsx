"use client";

import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n/config";

export default function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname() || "/";

  function pathFor(locale: Locale): string {
    const segments = pathname.split("/");
    if (segments.length >= 2 && (LOCALES as readonly string[]).includes(segments[1])) {
      segments[1] = locale;
      return segments.join("/") || "/";
    }
    return `/${locale}${pathname === "/" ? "" : pathname}`;
  }

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-ink-900/10 bg-white p-0.5 text-xs font-semibold">
      {LOCALES.map((locale) => (
        <a
          key={locale}
          href={pathFor(locale)}
          hrefLang={locale === "zh" ? "zh-CN" : "en"}
          aria-current={locale === current ? "page" : undefined}
          className={`rounded-full px-3 py-1 transition ${
            locale === current
              ? "bg-ink-900 text-white"
              : "text-ink-900/70 hover:bg-brand-50"
          }`}
        >
          {LOCALE_LABELS[locale]}
        </a>
      ))}
    </div>
  );
}
