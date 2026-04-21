import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost, listPostSlugs } from "@/content/blog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    listPostSlugs().map((slug) => ({ locale, slug })),
  );
}

export function generateMetadata(
  { params }: { params: { locale: string; slug: string } },
): Metadata {
  if (!isLocale(params.locale)) return {};
  const post = getPost(params.slug);
  if (!post) return {};
  const content = post.locales[params.locale];
  return {
    title: `${content.title} | Chat2Sales`,
    description: content.excerpt,
    openGraph: {
      title: content.title,
      description: content.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(isoDate: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "zh" ? "zh-CN" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;
  const post = getPost(params.slug);
  if (!post) notFound();

  const content = post.locales[locale];
  const dict = getDictionary(locale);
  const Body = content.body;

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="section">
      <div className="container-xl max-w-3xl">
        <a
          href={localeHref(locale, "/resources/blogs")}
          className="text-sm font-semibold text-brand-600"
        >
          {dict.blog.backToIndex}
        </a>

        <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-ink-900/55">
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

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-4 text-lg text-ink-900/70">{content.excerpt}</p>

        <div className="prose prose-slate mt-10 max-w-none text-ink-900/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink-900 [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1 [&_blockquote]:mt-4 [&_blockquote]:border-l-4 [&_blockquote]:border-brand-500 [&_blockquote]:bg-brand-50/50 [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:italic">
          <Body />
        </div>

        <div className="mt-16 rounded-3xl border border-ink-900/[0.08] bg-gradient-to-br from-brand-50/60 to-white p-8 text-center">
          <h3 className="text-2xl font-bold text-ink-900">
            {dict.blog.ctaBox.heading}
          </h3>
          <p className="mt-2 text-sm text-ink-900/65">
            {dict.blog.ctaBox.subtitle}
          </p>
          <a
            href={localeHref(locale, "/contact")}
            className="btn-primary mt-6"
          >
            {dict.blog.ctaBox.button}
          </a>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h3 className="text-xl font-bold text-ink-900">
              {locale === "zh" ? "继续阅读" : "Keep reading"}
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => {
                const rc = r.locales[locale];
                return (
                  <a
                    key={r.slug}
                    href={localeHref(locale, `/resources/blogs/${r.slug}`)}
                    className="card flex flex-col transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                      {r.tag}
                    </span>
                    <h4 className="mt-2 text-lg font-bold text-ink-900">
                      {rc.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                      {rc.excerpt}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
