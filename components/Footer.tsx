import Logo from "./Logo";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary["footer"];
  locale: Locale;
}) {
  return (
    <footer className="border-t border-ink-900/[0.08] bg-ink-900 text-white">
      <div className="container-xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="rounded-xl bg-white p-3 inline-block">
              <Logo className="h-8" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">{dict.tagline}</p>
            <div className="mt-6 space-y-1 text-sm text-white/80">
              <p className="font-semibold text-white">{dict.companyName}</p>
              {dict.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href="mailto:hello@chat2sales.ai"
                  className="font-semibold text-accent-300 hover:text-accent-400"
                >
                  hello@chat2sales.ai
                </a>
              </p>
            </div>
          </div>

          {dict.groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-white">{g.title}</h4>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={localeHref(locale, i.href)}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>
            © AI Growth Solution {new Date().getFullYear()}. {dict.copyrightSuffix}
          </p>
          <div className="flex items-center gap-6">
            <a href={localeHref(locale, "/privacy-policy")} className="hover:text-white">
              {dict.privacyLink}
            </a>
            <a href={localeHref(locale, "/terms-and-conditions")} className="hover:text-white">
              {dict.termsLink}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
