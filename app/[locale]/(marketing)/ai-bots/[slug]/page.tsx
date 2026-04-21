import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubPageTemplate from "@/components/SubPageTemplate";
import { getSubPageView, listSubPageSlugs } from "@/lib/sub-pages";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LOCALES, isLocale } from "@/lib/i18n/config";

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
  return <SubPageTemplate page={page} dict={dict} locale={params.locale} />;
}
