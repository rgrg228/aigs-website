import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubPageTemplate from "@/components/SubPageTemplate";
import { getSubPageView, listSubPageSlugs } from "@/lib/sub-pages";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LOCALES, isLocale } from "@/lib/i18n/config";
import { alternatesFor } from "@/lib/i18n/alternates";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    listSubPageSlugs("ai-bots").map((slug) => ({ locale, slug })),
  );
}

export function generateMetadata(
  { params }: { params: { locale: string; slug: string } },
): Metadata {
  if (!isLocale(params.locale)) return {};
  const page = getSubPageView("ai-bots", params.slug, params.locale);
  if (!page) return {};
  return {
    title: `${page.eyebrow} | Chat2Sales`,
    description: page.subtitle,
    alternates: alternatesFor(params.locale, `/ai-bots/${params.slug}`),
  };
}

export default function AiBotPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const page = getSubPageView("ai-bots", params.slug, params.locale);
  if (!page) notFound();
  const dict = getDictionary(params.locale);
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: params.locale === "zh" ? "首页" : "Home", href: `/${params.locale}` },
          { name: params.locale === "zh" ? "AI 机器人" : "AI Bots", href: `/${params.locale}` },
          { name: page.eyebrow, href: `/${params.locale}/ai-bots/${params.slug}` },
        ]}
      />
      <SubPageTemplate page={page} dict={dict} locale={params.locale} />
    </>
  );
}
