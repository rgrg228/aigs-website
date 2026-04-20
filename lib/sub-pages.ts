export type SubPage = {
  slug: string;
  section: "ai-bots" | "solutions" | "resources";
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  channelLogo?: string;
  features: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
};

const BOT_FAQ = [
  {
    q: "How fast can I go live?",
    a: "Most stores go live in under a day. Our team handles setup, training, and channel connection for you.",
  },
  {
    q: "Does it support my language?",
    a: "Yes — 50+ languages including English, Mandarin, Bahasa Malaysia, and Cantonese.",
  },
  {
    q: "Can I hand off to a human agent?",
    a: "Absolutely. You can jump in at any time — the AI pauses automatically when you reply.",
  },
];

export const AI_BOTS: Record<string, SubPage> = {
  instagram: {
    slug: "instagram",
    section: "ai-bots",
    eyebrow: "AI Instagram Chatbot",
    title: "Turn Instagram DMs into paying customers.",
    subtitle:
      "Reply instantly to story mentions, comments, and DMs. Chat2Sales qualifies leads and closes sales while you focus on content.",
    channelLogo: "/images/channel-instagram.webp",
    heroImage: "/images/pillar-marketing.webp",
    features: [
      { title: "Auto-reply to story mentions", body: "Never miss a lead from a story reaction or comment again." },
      { title: "Qualify in DMs", body: "Capture name, phone, and intent inline — push straight to your CRM." },
      { title: "Book appointments", body: "Share a calendar, confirm the slot, and drop a reminder — all in chat." },
    ],
    faq: BOT_FAQ,
  },
  whatsapp: {
    slug: "whatsapp",
    section: "ai-bots",
    eyebrow: "AI WhatsApp Chatbot",
    title: "Your best salesperson, now on WhatsApp.",
    subtitle:
      "Official WhatsApp Business API. Automated replies, lead capture, and appointment booking at scale — 24/7.",
    channelLogo: "/images/channel-whatsapp.webp",
    heroImage: "/images/pillar-sales.webp",
    features: [
      { title: "Official Business API", body: "We're a Meta Business Partner — set up verified WhatsApp Business for you." },
      { title: "Broadcast & follow-up", body: "Send compliant broadcasts and automated follow-ups that drive replies." },
      { title: "Team inbox", body: "One shared inbox with AI suggestions, routing, and canned replies." },
    ],
    faq: BOT_FAQ,
  },
  facebook: {
    slug: "facebook",
    section: "ai-bots",
    eyebrow: "AI Facebook Chatbot",
    title: "Convert Facebook visitors into buyers.",
    subtitle:
      "Answer FAQs, qualify leads, and book appointments in Messenger — 24/7, without lifting a finger.",
    channelLogo: "/images/channel-messenger.webp",
    features: [
      { title: "Reply in <1 second", body: "AI-first replies keep Messenger conversions high while your team sleeps." },
      { title: "Ad-click auto-reply", body: "Trigger flows directly from your FB/IG ad click-to-Messenger campaigns." },
      { title: "Book & remind", body: "Book slots on Google/Outlook and send WhatsApp/SMS reminders." },
    ],
    faq: BOT_FAQ,
  },
  websites: {
    slug: "websites",
    section: "ai-bots",
    eyebrow: "AI Websites Chatbot",
    title: "A smart chat widget that sells for you.",
    subtitle:
      "Drop a snippet on your site. Resolves FAQs, recommends products, and nudges checkout 24/7.",
    channelLogo: "/images/channel-website.webp",
    features: [
      { title: "One-line embed", body: "Paste a single script tag — no dev work required." },
      { title: "Trained on your site", body: "Ava indexes your pages, docs, and catalog automatically." },
      { title: "Proactive nudges", body: "Engage hesitating visitors before they bounce — recover lost sales." },
    ],
    faq: BOT_FAQ,
  },
  shopify: {
    slug: "shopify",
    section: "ai-bots",
    eyebrow: "AI Shopify Chatbot",
    title: "Recover carts. Answer questions. Upsell.",
    subtitle:
      "A native Shopify integration that turns shoppers into buyers — on your store, WhatsApp, and DMs.",
    heroImage: "/images/pillar-sales.webp",
    features: [
      { title: "Cart recovery", body: "Re-engage abandoned carts on WhatsApp and Messenger automatically." },
      { title: "Product recommendations", body: "Chat2Sales reads your catalog and suggests the perfect product." },
      { title: "Order lookup", body: "Customers check order status in chat without opening a ticket." },
    ],
    faq: BOT_FAQ,
  },
  woocommerce: {
    slug: "woocommerce",
    section: "ai-bots",
    eyebrow: "AI WooCommerce Chatbot",
    title: "Turn your WooCommerce store into a 24/7 sales machine.",
    subtitle:
      "Native WooCommerce connector. Recover carts, answer FAQs, and close more sales across chat channels.",
    heroImage: "/images/pillar-sales.webp",
    features: [
      { title: "WooCommerce sync", body: "Two-way sync with products, orders, and customer data." },
      { title: "Abandoned cart flow", body: "Automated WhatsApp + email flow to recover lost revenue." },
      { title: "Smart upsell", body: "Chat2Sales suggests add-ons at the right moment — mid-conversation." },
    ],
    faq: BOT_FAQ,
  },
  telegram: {
    slug: "telegram",
    section: "ai-bots",
    eyebrow: "AI Telegram Chatbot",
    title: "A custom AI assistant for your Telegram community.",
    subtitle:
      "Engage subscribers, answer questions at scale, and turn Telegram chats into loyal, paying customers.",
    channelLogo: "/images/channel-telegram.webp",
    features: [
      { title: "Group + DM support", body: "AI replies in groups, channels, and private messages." },
      { title: "Custom commands", body: "Design slash-commands for your product catalog, prices, and offers." },
      { title: "Subscriber insights", body: "Tag and segment subscribers for targeted broadcasts." },
    ],
    faq: BOT_FAQ,
  },
};

export const SOLUTIONS: Record<string, SubPage> = {
  "ai-sales-agents": {
    slug: "ai-sales-agents",
    section: "solutions",
    eyebrow: "AI Sales Agents",
    title: "Your always-on AI sales team.",
    subtitle:
      "Chat2Sales qualifies budget, need, and timeline — then books meetings with your reps while you sleep.",
    heroImage: "/images/pillar-sales.webp",
    features: [
      { title: "Qualify on BANT", body: "Budget, need, timeline, and authority captured in chat automatically." },
      { title: "Auto-book meetings", body: "Find a slot, confirm the invite, and send reminders — zero back-and-forth." },
      { title: "CRM push", body: "Enriched lead goes straight to HubSpot, Salesforce, or Pipedrive." },
    ],
  },
  "ai-marketing-agents": {
    slug: "ai-marketing-agents",
    section: "solutions",
    eyebrow: "AI Marketing Agents",
    title: "Turn every visitor into a contact.",
    subtitle:
      "Capture leads across every channel, nurture with smart follow-ups, and fill the top of your funnel — on autopilot.",
    heroImage: "/images/pillar-marketing.webp",
    features: [
      { title: "Multi-channel capture", body: "Collect leads from ads, website, DMs, and WhatsApp into one place." },
      { title: "Segment on the fly", body: "Chat2Sales tags contacts by intent, source, and attributes." },
      { title: "Warm-up sequences", body: "Automated follow-ups nudge leads to book a meeting or make a purchase." },
    ],
  },
  "chatbot-for-marketing": {
    slug: "chatbot-for-marketing",
    section: "solutions",
    eyebrow: "Chatbot for Marketing",
    title: "Marketing on every channel, answered in seconds.",
    subtitle:
      "Run click-to-chat ads, capture leads, and nurture them — without adding headcount.",
    heroImage: "/images/pillar-marketing.webp",
    features: [
      { title: "Click-to-chat ads", body: "Route Meta and Google ads directly into AI conversations." },
      { title: "Campaign dashboards", body: "Track which campaigns drive conversations, pipeline, and revenue." },
      { title: "Promo broadcasts", body: "Send compliant WhatsApp broadcasts with reply intent tracking." },
    ],
  },
  "chatbot-for-sales": {
    slug: "chatbot-for-sales",
    section: "solutions",
    eyebrow: "Chatbot for Sales",
    title: "Close more deals on chat.",
    subtitle:
      "AI that qualifies, recommends, and books — so your sales team only talks to ready-to-buy prospects.",
    heroImage: "/images/pillar-sales.webp",
    features: [
      { title: "Lead scoring", body: "Every chat produces an intent and fit score pushed to your CRM." },
      { title: "Product recommendation", body: "Chat2Sales matches products to needs using your real catalog." },
      { title: "Human handoff", body: "Route hot leads to a live rep with full transcript and context." },
    ],
  },
  "chatbot-for-lead-generation": {
    slug: "chatbot-for-lead-generation",
    section: "solutions",
    eyebrow: "Chatbot for Lead Generation",
    title: "Fill your funnel while you sleep.",
    subtitle:
      "Capture contacts from ads, website, and DMs — enrich, qualify, and deliver them to your team, ready to call.",
    heroImage: "/images/pillar-marketing.webp",
    features: [
      { title: "Capture everywhere", body: "Website widget, WhatsApp, IG, Messenger, and Telegram — one inbox." },
      { title: "Auto-enrichment", body: "Email, phone, company, and intent captured without forms." },
      { title: "Instant routing", body: "Route qualified leads to the right rep by region or product." },
    ],
  },
  "chatbot-for-engagement": {
    slug: "chatbot-for-engagement",
    section: "solutions",
    eyebrow: "Chatbot for Engagement",
    title: "Engage 70% more visitors.",
    subtitle:
      "Proactive chat nudges, personalized greetings, and helpful suggestions — right when they matter.",
    heroImage: "/images/pillar-customer-service.webp",
    features: [
      { title: "Proactive messages", body: "Trigger messages by URL, time on page, or scroll depth." },
      { title: "Personalized greeting", body: "Greet returning visitors by name and context." },
      { title: "Live interventions", body: "Let humans jump in on high-value conversations." },
    ],
  },
  "chatbot-for-customer-support": {
    slug: "chatbot-for-customer-support",
    section: "solutions",
    eyebrow: "Chatbot for Customer Support",
    title: "Solve 90% of queries automatically.",
    subtitle:
      "AI handles FAQs, order status, and account questions — your team handles the 10% that really matters.",
    heroImage: "/images/pillar-customer-service.webp",
    features: [
      { title: "Trained on your docs", body: "Point Chat2Sales at your help center — answers stay on-brand." },
      { title: "Ticket deflection", body: "Cut support volume 50–90% without hurting CSAT." },
      { title: "Smart routing", body: "Escalate by priority, language, or customer tier — automatically." },
    ],
  },
  "chatbot-for-ecommerce": {
    slug: "chatbot-for-ecommerce",
    section: "solutions",
    eyebrow: "Chatbot for Ecommerce",
    title: "Recover carts. Drive repeat buys. Delight shoppers.",
    subtitle:
      "Built for Shopify, WooCommerce, and custom stores — Chat2Sales helps you sell more with less effort.",
    heroImage: "/images/pillar-sales.webp",
    features: [
      { title: "Abandoned cart recovery", body: "WhatsApp + email flows that recover 20–40% of abandoned carts." },
      { title: "Order tracking", body: "Customers self-serve order status in chat — lower tickets, happier buyers." },
      { title: "Personalized offers", body: "Upsell and cross-sell based on browsing and purchase history." },
    ],
  },
};

export function getSubPage(section: "ai-bots" | "solutions", slug: string): SubPage | undefined {
  return (section === "ai-bots" ? AI_BOTS : SOLUTIONS)[slug];
}

export function listSubPageSlugs(section: "ai-bots" | "solutions"): string[] {
  return Object.keys(section === "ai-bots" ? AI_BOTS : SOLUTIONS);
}
