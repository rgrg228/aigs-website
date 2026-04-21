import type { MetadataRoute } from "next";
import { AI_BOTS, SOLUTIONS } from "@/lib/sub-pages";
import { LOCALES } from "@/lib/i18n/config";
import { POSTS } from "@/content/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chat2sales.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/contact",
    "/resources/affiliate-partners",
    "/resources/blogs",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const botRoutes = Object.keys(AI_BOTS).map((slug) => `/ai-bots/${slug}`);
  const solutionRoutes = Object.keys(SOLUTIONS).map(
    (slug) => `/solutions/${slug}`,
  );
  const blogRoutes = POSTS.map((p) => `/resources/blogs/${p.slug}`);

  const paths = [...staticRoutes, ...botRoutes, ...solutionRoutes, ...blogRoutes];

  return LOCALES.flatMap((locale) =>
    paths.map((path) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
