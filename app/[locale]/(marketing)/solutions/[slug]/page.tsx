import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubPageTemplate from "@/components/SubPageTemplate";
import { SOLUTIONS, listSubPageSlugs } from "@/lib/sub-pages";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { LOCALES, isLocale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    listSubPageSlugs("solutions").map((slug) => ({ locale, slug })),
  );
}

export function generateMetadata(
  { params }: { params: { locale: string; slug: string } },
): Metadata {
  const page = SOLUTIONS[params.slug];
  if (!page) return {};
  return {
    title: `${page.eyebrow} | Chat2Sales`,
    description: page.subtitle,
  };
}

export default function SolutionPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const page = SOLUTIONS[params.slug];
  if (!page) notFound();
  const dict = getDictionary(params.locale);
  return <SubPageTemplate page={page} dict={dict} locale={params.locale} />;
}
