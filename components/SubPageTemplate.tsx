/* eslint-disable @next/next/no-img-element */
import CTA from "@/components/CTA";
import Channels from "@/components/Channels";
import Partners from "@/components/Partners";
import type { SubPageView } from "@/lib/sub-pages";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

export default function SubPageTemplate({
  page,
  dict,
  locale,
}: {
  page: SubPageView;
  dict: Dictionary;
  locale: Locale;
}) {
  const t = dict.subPage;
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[560px] bg-grid" />
          <div className="blob absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-400" />
          <div className="blob absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-500" />
        </div>

        <div className="container-xl pb-20 pt-16 sm:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="eyebrow">
                {page.channelLogo && (
                  <img src={page.channelLogo} alt="" className="h-4 w-4 rounded" />
                )}
                {page.eyebrow}
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-ink-900/70">
                {page.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={localeHref(locale, "/contact")}
                  className="btn-primary text-base"
                >
                  {t.bookDemo}
                </a>
                <a
                  href={localeHref(locale, "/#channels")}
                  className="btn-secondary text-base"
                >
                  {t.seeAllChannels}
                </a>
              </div>
            </div>

            {page.heroImage && (
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-500/20 via-accent-500/20 to-transparent blur-2xl" />
                <img
                  src={page.heroImage}
                  alt=""
                  className="mx-auto w-full max-w-md"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <Partners dict={dict.partners} />

      <section className="section">
        <div className="container-xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t.whatYouGet}</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {t.whatYouGetTitle}
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {page.features.map((f) => (
              <div key={f.title} className="card">
                <h3 className="text-lg font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Channels dict={dict.channels} />

      {page.faq && page.faq.length > 0 && (
        <section className="section">
          <div className="container-xl max-w-3xl">
            <div className="text-center">
              <span className="eyebrow">{t.faqsEyebrow}</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                {t.faqsTitle}
              </h2>
            </div>
            <div className="mt-10 divide-y divide-ink-900/10 rounded-3xl border border-ink-900/[0.08] bg-white">
              {page.faq.map((item) => (
                <details key={item.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink-900">
                    {item.q}
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/70 transition group-open:rotate-45 group-open:bg-ink-900 group-open:text-white">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path
                          fillRule="evenodd"
                          d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/70">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA dict={dict.cta} locale={locale} />
    </>
  );
}
