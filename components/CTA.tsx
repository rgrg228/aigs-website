import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

export default function CTA({
  dict,
  locale,
}: {
  dict: Dictionary["cta"];
  locale: Locale;
}) {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="relative overflow-hidden rounded-[40px] bg-ink-900 px-8 py-16 text-center sm:px-16 sm:py-24">
          <div className="absolute inset-0 -z-0 opacity-60">
            <div className="blob absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-500" />
            <div className="blob absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-accent-500" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {dict.titleLine1}{" "}
              <span className="gradient-text">{dict.titleHighlight}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              {dict.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={localeHref(locale, "/contact")}
                className="btn-primary bg-white text-brand-700 shadow-none hover:bg-white/90"
              >
                {dict.primaryCta}
              </a>
              <a
                href="mailto:hello@chat2sales.ai"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                hello@chat2sales.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
