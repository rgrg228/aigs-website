import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";

export function generateMetadata(
  { params }: { params: { locale: string } },
): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  };
}

export default function ContactPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const t = dict.contact;

  return (
    <section className="section">
      <div className="container-xl grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">{t.subtitle}</p>
          <p className="mt-4 text-base text-ink-900/70">{t.subtitle2}</p>

          <div className="mt-10 space-y-6 text-sm text-ink-900/80">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-900/55">
                {t.emailHeading}
              </p>
              <a
                href="mailto:hello@chat2sales.ai"
                className="mt-1 inline-block text-lg font-semibold text-brand-700 hover:underline"
              >
                hello@chat2sales.ai
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-900/55">
                {t.officeHeading}
              </p>
              {t.officeLines.map((line, i) => (
                <p key={line} className={i === 0 ? "mt-1 font-semibold text-ink-900" : ""}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        <ContactForm dict={t.form} locale={locale} />
      </div>
    </section>
  );
}
