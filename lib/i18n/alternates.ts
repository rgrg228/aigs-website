import type { Metadata } from "next";
import type { Locale } from "./config";

/**
 * Build the canonical + hreflang alternates for a page.
 *
 * @param locale   The locale currently rendering the page (used for canonical).
 * @param path     The path *without* the locale prefix (e.g. "/contact", "/ai-bots/instagram").
 *                 Use "/" for the home page.
 */
export function alternatesFor(
  locale: Locale,
  path: string,
): NonNullable<Metadata["alternates"]> {
  const normalized =
    path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  return {
    canonical: `/${locale}${normalized}`,
    languages: {
      en: `/en${normalized}`,
      "zh-CN": `/zh${normalized}`,
      "x-default": `/en${normalized}`,
    },
  };
}
