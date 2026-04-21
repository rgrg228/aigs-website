/* eslint-disable @next/next/no-img-element */
import CTA from "@/components/CTA";
import Channels from "@/components/Channels";
import Partners from "@/components/Partners";
import type { SubPageView } from "@/lib/sub-pages";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

type FeatureStyle = {
  badge: string;
  ring: string;
  wash: string;
  glow: string;
};

const FEATURE_STYLES: FeatureStyle[] = [
  {
    badge: "bg-brand-600 text-white",
    ring: "ring-brand-500/20",
    wash: "from-brand-500/10 via-brand-300/5 to-transparent",
    glow: "bg-brand-400/40",
  },
  {
    badge: "bg-emerald-600 text-white",
    ring: "ring-emerald-500/25",
    wash: "from-emerald-400/15 via-emerald-200/5 to-transparent",
    glow: "bg-emerald-400/40",
  },
  {
    badge: "bg-amber-500 text-white",
    ring: "ring-amber-400/25",
    wash: "from-amber-400/15 via-orange-200/5 to-transparent",
    glow: "bg-amber-400/40",
  },
  {
    badge: "bg-violet-600 text-white",
    ring: "ring-violet-500/20",
    wash: "from-violet-500/15 via-fuchsia-300/5 to-transparent",
    glow: "bg-violet-400/40",
  },
  {
    badge: "bg-rose-500 text-white",
    ring: "ring-rose-400/25",
    wash: "from-rose-400/15 via-pink-200/5 to-transparent",
    glow: "bg-rose-400/40",
  },
  {
    badge: "bg-sky-600 text-white",
    ring: "ring-sky-500/20",
    wash: "from-sky-500/15 via-cyan-200/5 to-transparent",
    glow: "bg-sky-400/40",
  },
];

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

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-500/20 via-accent-500/20 to-transparent blur-2xl" />
              {page.heroImage ? (
                <img
                  src={page.heroImage}
                  alt=""
                  className="mx-auto w-full max-w-md"
                />
              ) : (
                <HeroChannelPreview
                  channelLogo={page.channelLogo}
                  eyebrow={page.eyebrow}
                  locale={locale}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Partners dict={dict.partners} />

      {page.explainer && (
        <section className="section">
          <div className="container-xl max-w-4xl">
            <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand-50 via-white to-accent-50 p-8 ring-1 ring-brand-500/15 sm:p-14">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-400/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-accent-400/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="eyebrow">{locale === "zh" ? "概念" : "The basics"}</span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
                  {page.explainer.heading}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink-900/75">
                  {page.explainer.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">{t.whatYouGet}</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              {t.whatYouGetTitle}
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.features.map((f, i) => {
              const style = FEATURE_STYLES[i % FEATURE_STYLES.length];
              return (
                <article
                  key={f.title}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${style.ring}`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.wash}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-2xl opacity-0 transition duration-500 group-hover:opacity-80 ${style.glow}`}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${style.badge}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="relative mt-5 text-lg font-bold leading-snug text-ink-900">
                    {f.title}
                  </h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-ink-900/65">
                    {f.body}
                  </p>
                </article>
              );
            })}
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

function HeroChannelPreview({
  channelLogo,
  eyebrow,
  locale,
}: {
  channelLogo?: string;
  eyebrow: string;
  locale: Locale;
}) {
  const previewMessages =
    locale === "zh"
      ? ["你好 👋 今天想找什么？", "有货吗？多少钱？", "✅ 明天 2:00 PM 已预约"]
      : ["Hi 👋 What are you looking for?", "Is this in stock? How much?", "✅ Booked for tomorrow 2:00 PM"];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-[32px] bg-white p-5 shadow-2xl ring-1 ring-ink-900/5">
        <div className="flex items-center gap-3 border-b border-ink-900/5 pb-3">
          {channelLogo && (
            <img src={channelLogo} alt="" className="h-10 w-10 rounded-xl" />
          )}
          <div>
            <p className="text-sm font-semibold text-ink-900">{eyebrow}</p>
            <p className="text-[11px] text-ink-900/55">
              {locale === "zh" ? "1 秒内回复" : "Replies in < 1s"}
            </p>
          </div>
          <span className="ml-auto inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-brand-50 px-3.5 py-2 text-sm text-ink-900 ring-1 ring-brand-500/10">
              {previewMessages[0]}
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-brand-600 px-3.5 py-2 text-sm text-white shadow-sm">
              {previewMessages[1]}
            </div>
          </div>
          <div className="flex justify-start">
            <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-emerald-50 px-3.5 py-2 text-sm text-emerald-900 ring-1 ring-emerald-500/15">
              {previewMessages[2]}
            </div>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-2 border-t border-ink-900/5 pt-3">
          <span className="flex-1 rounded-full bg-ink-900/[0.04] px-3 py-1.5 text-xs text-ink-900/40">
            {locale === "zh" ? "输入消息…" : "Type a message…"}
          </span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3.105 3.105a1.5 1.5 0 011.628-.334l13.5 5.5a1.5 1.5 0 010 2.78l-13.5 5.5a1.5 1.5 0 01-2.044-1.69l.94-4.231a1.5 1.5 0 011.17-1.144L10 10 4.8 8.514a1.5 1.5 0 01-1.17-1.144l-.94-4.231a1.5 1.5 0 01.415-1.034z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
