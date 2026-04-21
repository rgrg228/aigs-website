import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n/config";
import { alternatesFor } from "@/lib/i18n/alternates";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export function generateMetadata(
  { params }: { params: { locale: string } },
): Metadata {
  const { locale } = params;
  if (!isLocale(locale)) return {};
  return {
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      locale: locale === "zh" ? "zh_CN" : "en_MY",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!isLocale(locale)) notFound();
  void (locale satisfies Locale);
  return <>{children}</>;
}
