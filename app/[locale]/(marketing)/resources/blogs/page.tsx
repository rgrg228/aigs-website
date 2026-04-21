import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, type BlogPost } from "@/content/blog";
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

const TAG_ACCENTS: Record<string, { bg: string; text: string; ring: string; gradient: string }> = {
  WhatsApp: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    ring: "ring-emerald-500/20",
    gradient: "from-emerald-500/15 via-emerald-400/5 to-transparent",
  },
  "E-commerce": {
    bg: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-500/20",
    gradient: "from-amber-500/15 via-rose-300/5 to-transparent",
  },
  Instagram: {
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-700",
    ring: "ring-fuchsia-500/20",
    gradient: "from-fuchsia-500/15 via-violet-400/5 to-transparent",
  },
  Explainer: {
    bg: "bg-brand-50",
    text: "text-brand-700",
    ring: "ring-brand-500/20",
    gradient: "from-brand-500/15 via-brand-400/5 to-transparent",
  },
  Strategy: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    ring: "ring-violet-500/20",
    gradient: "from-violet-500/15 via-violet-400/5 to-transparent",
  },
};

function accentFor(tag: string) {
  return (
    TAG_ACCENTS[tag] ?? {
      bg: "bg-brand-50",
      text: "text-brand-700",
      ring: "ring-brand-500/20",
      gradient: "from-brand-500/15 via-brand-400/5 to-transparent",
    }
  );
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
  const [featured, ...rest] = sorted;

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

        {featured && (
          <FeaturedCard
            post={featured}
            locale={locale}
            readMoreLabel={dict.blog.readMore}
            minReadTemplate={dict.blog.minReadTemplate}
            featuredLabel={locale === "zh" ? "精选文章" : "Featured"}
          />
        )}

        {rest.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Card
                key={post.slug}
                post={post}
                locale={locale}
                readMoreLabel={dict.blog.readMore}
                minReadTemplate={dict.blog.minReadTemplate}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({
  post,
  locale,
  readMoreLabel,
  minReadTemplate,
  featuredLabel,
}: {
  post: BlogPost;
  locale: Locale;
  readMoreLabel: string;
  minReadTemplate: string;
  featuredLabel: string;
}) {
  const content = post.locales[locale];
  const tone = accentFor(post.tag);
  return (
    <a
      href={localeHref(locale, `/resources/blogs/${post.slug}`)}
      className={`group relative mt-14 block overflow-hidden rounded-[32px] bg-white p-8 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-12 ${tone.ring}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.gradient}`}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/50 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <div className="relative grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-ink-900/60">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 ${tone.bg} ${tone.text}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {featuredLabel}
            </span>
            <span className="rounded-full bg-white/80 px-2.5 py-1 ring-1 ring-ink-900/5">{post.tag}</span>
            <span>{formatDate(post.date, locale)}</span>
            <span>·</span>
            <span>{minReadTemplate.replace("{n}", String(post.readMinutes))}</span>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-900/70">
            {content.excerpt}
          </p>
          <span
            className={`mt-8 inline-flex items-center gap-1.5 text-sm font-semibold ${tone.text}`}
          >
            {readMoreLabel}
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.22 14.78a.75.75 0 010-1.06L10.94 10 7.22 6.28a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
            </svg>
          </span>
        </div>

        <div className="relative hidden items-end justify-end lg:flex">
          <div className="relative w-full max-w-xs rounded-3xl bg-white p-5 ring-1 ring-ink-900/5 shadow-xl rotate-2">
            <div className="flex items-center gap-2 border-b border-ink-900/5 pb-3">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-ink-900/40">
                Chat2Sales
              </span>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-ink-900/40">
              {post.tag}
            </p>
            <p className="mt-1 text-[15px] font-bold text-ink-900">
              {content.title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

function Card({
  post,
  locale,
  readMoreLabel,
  minReadTemplate,
}: {
  post: BlogPost;
  locale: Locale;
  readMoreLabel: string;
  minReadTemplate: string;
}) {
  const content = post.locales[locale];
  const tone = accentFor(post.tag);
  return (
    <a
      href={localeHref(locale, `/resources/blogs/${post.slug}`)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${tone.ring}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.gradient}`}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-2 text-xs font-semibold text-ink-900/55">
        <span className={`rounded-full px-2.5 py-1 ${tone.bg} ${tone.text}`}>
          {post.tag}
        </span>
        <span>{formatDate(post.date, locale)}</span>
        <span>·</span>
        <span>{minReadTemplate.replace("{n}", String(post.readMinutes))}</span>
      </div>
      <h3 className="relative mt-4 text-lg font-bold leading-snug text-ink-900">
        {content.title}
      </h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-900/65">
        {content.excerpt}
      </p>
      <span className={`relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${tone.text}`}>
        {readMoreLabel}
        <svg className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.22 14.78a.75.75 0 010-1.06L10.94 10 7.22 6.28a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
        </svg>
      </span>
    </a>
  );
}
