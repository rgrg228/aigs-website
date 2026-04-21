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
      <div className="container-xl max-w-4xl">
        <div className="text-center">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">{t.subtitle}</p>
          <a href={localeHref(locale, "/contact")} className="btn-primary mt-8">
            {t.cta}
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.perks.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-lg font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
