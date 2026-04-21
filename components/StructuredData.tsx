import type { Locale } from "@/lib/i18n/config";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://chat2sales.ai";

export function BlogPostingJsonLd({
  locale,
  slug,
  title,
  excerpt,
  date,
}: {
  locale: Locale;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  const url = `${SITE_URL}/${locale}/resources/blogs/${slug}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title,
    description: excerpt,
    url,
    inLanguage: locale === "zh" ? "zh-CN" : "en",
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: "AI Growth Solution",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Growth Solution",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.webp`,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type Crumb = { name: string; href: string };

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.href.startsWith("http") ? c.href : `${SITE_URL}${c.href}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
