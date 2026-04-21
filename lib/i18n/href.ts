import type { Locale } from "./config";

export function localeHref(locale: Locale, href: string): string {
  if (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  if (href.startsWith("#")) return href;
  const normalized = href.startsWith("/") ? href : `/${href}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}
