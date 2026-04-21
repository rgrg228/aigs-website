import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";
import { alternatesFor } from "@/lib/i18n/alternates";

export function generateMetadata(
  { params }: { params: { locale: string } },
): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.affiliate.metaTitle,
    description: dict.affiliate.metaDescription,
    alternates: alternatesFor(params.locale, "/resources/affiliate-partners"),
  };
}

const PERK_STYLES = [
  {
    badge: "bg-brand-600 text-white",
    ring: "ring-brand-500/20",
    wash: "from-brand-500/12 via-brand-300/5 to-transparent",
    glow: "bg-brand-400/40",
    icon: (
      <path d="M12 2 14.5 8.5 21 9.5l-5 4.5 1.5 7L12 17l-5.5 4L8 14l-5-4.5 6.5-1z" />
    ),
  },
  {
    badge: "bg-emerald-600 text-white",
    ring: "ring-emerald-500/25",
    wash: "from-emerald-400/15 via-emerald-200/5 to-transparent",
    glow: "bg-emerald-400/40",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.5L6.5 12l1.4-1.4L11 13.7l5.1-5.1 1.4 1.4z" />
    ),
  },
  {
    badge: "bg-amber-500 text-white",
    ring: "ring-amber-400/25",
    wash: "from-amber-400/15 via-orange-200/5 to-transparent",
    glow: "bg-amber-400/40",
    icon: (
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    ),
  },
  {
    badge: "bg-rose-500 text-white",
    ring: "ring-rose-400/25",
    wash: "from-rose-400/15 via-pink-200/5 to-transparent",
    glow: "bg-rose-400/40",
    icon: (
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 0118 0z" />
    ),
  },
];

export default function AffiliatePartnersPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const t = getDictionary(locale).affiliate;

  return (
    <section className="section">
      <div className="container-xl max-w-5xl">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600 p-10 text-center text-white sm:p-14">
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent-400/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              {t.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              {t.subtitle}
            </p>
            <a
              href={localeHref(locale, "/contact")}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-700 shadow-xl transition hover:scale-[1.02] hover:shadow-2xl"
            >
              {t.cta}
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.perks.map((p, i) => {
            const style = PERK_STYLES[i % PERK_STYLES.length];
            return (
              <article
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${style.ring}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.wash}`}
                  aria-hidden="true"
                />
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition duration-500 group-hover:opacity-80 ${style.glow}`}
                  aria-hidden="true"
                />
                <div className="relative flex items-center">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm ${style.badge}`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      {style.icon}
                    </svg>
                  </span>
                </div>
                <h3 className="relative mt-5 text-lg font-bold leading-snug text-ink-900">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-ink-900/65">
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
