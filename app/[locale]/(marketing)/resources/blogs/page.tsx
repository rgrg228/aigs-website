import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS } from "@/content/blog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";
import { alternatesFor } from "@/lib/i18n/alternates";

export function generateMetadata(
  { params }: { params: { locale: string } },
): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
    alternates: alternatesFor(params.locale, "/resources/blogs"),
  };
}

function formatDate(isoDate: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

export default function BlogsPage({
  params,
}: {
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const dict = getDictionary(locale);
  const sorted = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.blog.eyebrow}</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {dict.blog.title}
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">{dict.blog.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {sorted.map((post) => {
            const content = post.locales[locale];
            return (
              <article key={post.slug} className="card flex flex-col">
                <div className="flex items-center gap-3 text-xs font-semibold text-ink-900/55">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">
                    {post.tag}
                  </span>
                  <span>{formatDate(post.date, locale)}</span>
                  <span>·</span>
                  <span>
                    {dict.blog.minReadTemplate.replace(
                      "{n}",
                      String(post.readMinutes),
                    )}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-900">
                  {content.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-900/65">
                  {content.excerpt}
                </p>
                <a
                  href={localeHref(locale, `/resources/blogs/${post.slug}`)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
                >
                  {dict.blog.readMore}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
