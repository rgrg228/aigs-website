import type { MetadataRoute } from "next";
import { AI_BOTS, SOLUTIONS } from "@/lib/sub-pages";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chat2sales.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/pricing",
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

  return [...staticRoutes, ...botRoutes, ...solutionRoutes].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
