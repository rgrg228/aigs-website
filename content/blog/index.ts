import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";

export type LocalizedPost = {
  title: string;
  excerpt: string;
  body: () => ReactNode;
};

export type BlogPost = {
  slug: string;
  date: string;
  tag: string;
  readMinutes: number;
  locales: Record<Locale, LocalizedPost>;
};

import stopReplyingAt11pm from "./posts/stop-replying-at-11pm";
import cartAbandonmentOneLine from "./posts/cart-abandonment-one-line";
import aiVsSmartChatbot from "./posts/ai-vs-smart-chatbot";
import instagramDmsToCustomers from "./posts/instagram-dms-to-customers";
import aiFirstEmployee from "./posts/ai-first-employee";

export const POSTS: BlogPost[] = [
  stopReplyingAt11pm,
  cartAbandonmentOneLine,
  aiVsSmartChatbot,
  instagramDmsToCustomers,
  aiFirstEmployee,
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function listPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
