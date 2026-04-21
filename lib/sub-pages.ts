import type { Locale } from "./i18n/config";

export type Section = "ai-bots" | "solutions" | "resources";

export type SubPageContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
};

export type SubPage = {
  slug: string;
  section: Section;
  heroImage?: string;
  channelLogo?: string;
  locales: Partial<Record<Locale, SubPageContent>> & { en: SubPageContent };
};

export type SubPageView = SubPageContent & {
  slug: string;
  section: Section;
  heroImage?: string;
  channelLogo?: string;
};

const BOT_FAQ_EN: SubPageContent["faq"] = [
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

const BOT_FAQ_ZH: SubPageContent["faq"] = [
  {
    q: "多久可以上线？",
    a: "大多数客户一天内就能上线。我们的团队帮你完成设置、训练和渠道对接。",
  },
  {
    q: "支持哪些语言？",
    a: "支持超过 50 种语言，包括英语、中文、马来语和粤语。",
  },
  {
    q: "可以交给真人客服接手吗？",
    a: "当然可以。你可以随时接管对话——一旦你回复，AI 会自动暂停。",
  },
];

export const AI_BOTS: Record<string, SubPage> = {
  instagram: {
    slug: "instagram",
    section: "ai-bots",
    channelLogo: "/images/channel-instagram.webp",
    heroImage: "/images/pillar-marketing.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For Instagram",
        title: "Create an AI Chatbot for Instagram & Automate Every Interaction",
        subtitle:
          "Use Chat2Sales AI to capture and qualify leads, turn DMs into sales opportunities, reply to comments instantly, and provide round-the-clock customer support. No coding. No setup headaches. Just results.",
        features: [
          {
            title: "Marketing Automation",
            body: "Nurture leads with smart broadcasts and personalized drip campaigns.",
          },
          {
            title: "Sell Products",
            body: "Showcase products with personalized recommendations and conversational shopping experiences.",
          },
          {
            title: "Provide Support & FAQs",
            body: "Deliver instant, friendly support through AI-powered chat.",
          },
          {
            title: "Lead Generation",
            body: "Capture and qualify leads effortlessly using AI.",
          },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
  whatsapp: {
    slug: "whatsapp",
    section: "ai-bots",
    channelLogo: "/images/channel-whatsapp.webp",
    heroImage: "/images/pillar-sales.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For WhatsApp",
        title: "Automate Your WhatsApp Conversations and Close More Sales",
        subtitle:
          "Reach customers instantly, capture leads, and deliver 24/7 support with Chat2Sales AI. Simplify marketing and sales in one chat.",
        features: [
          {
            title: "Marketing Automation",
            body: "Segment customers and send personalized drip or broadcast campaigns.",
          },
          {
            title: "Sell Products",
            body: "Advertise and sell products directly through WhatsApp.",
          },
          {
            title: "Customer Support",
            body: "AI WhatsApp bot handles customer queries instantly with live chat.",
          },
          {
            title: "Book Appointments",
            body: "Customers schedule meetings, tickets, or sessions and sync automatically with their calendars.",
          },
          {
            title: "AI-Powered Chatbot",
            body: "Build an AI WhatsApp Chatbot tailored to your business.",
          },
          {
            title: "Extend With 80+ Integrations",
            body: "Connect WhatsApp Chatbot with over 80 platforms and apps — CRMs, marketing tools, automation workflows.",
          },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
  facebook: {
    slug: "facebook",
    section: "ai-bots",
    channelLogo: "/images/channel-messenger.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For Facebook",
        title: "Automate Conversations & Grow Faster with AI Chatbot for Facebook",
        subtitle:
          "Tap into the vast customer base on Facebook with our AI chatbot. Be on their mind 24/7 with broadcast and drip campaigns, capture and qualify leads, assist with support & shopping, and auto-reply to comments.",
        features: [
          { title: "Train Your Facebook Bot", body: "Teach your chatbot your products, FAQs, and services." },
          { title: "Comment Auto-Reply", body: "Auto-reply to comments, thank users, and invite them to chat." },
          { title: "Display Your Bot Anywhere", body: "Add your bot to your website or share it via a QR code." },
          { title: "Broadcast Messages", body: "Share offers, reminders, or launches with all of your followers." },
          { title: "Smart Chat Flows", body: "Set simple chat paths that lead customers from hello to purchase." },
          { title: "Smart Triggers", body: "Auto-reply based on keywords or timing." },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
  websites: {
    slug: "websites",
    section: "ai-bots",
    channelLogo: "/images/channel-website.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For Websites",
        title: "Turn Website Visitors into Customers with an AI Chatbot",
        subtitle:
          "Provide 24/7 assistance on your website. Let your AI chatbot handle FAQs, appointment bookings, product inquiries, and purchases — launched without coding and trained on your content for accurate answers.",
        features: [
          { title: "Train Your AI Chatbot", body: "Power it with FAQs, website content, and your knowledge base." },
          { title: "Get Qualified Leads", body: "Collect contact details and sync them directly to your CRM." },
          { title: "Give Timely Customer Support", body: "Connect customers to live chat and assist with navigation." },
          { title: "Book Appointments", body: "Meetings, classes, or sessions synced with your calendar." },
          { title: "Improve Conversion Rates", body: "Product suggestions, order updates, payment support, and cart recovery." },
          { title: "Live Chat for Website", body: "Omnichannel live chat with real-time human takeover." },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
  shopify: {
    slug: "shopify",
    section: "ai-bots",
    heroImage: "/images/pillar-sales.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For Shopify",
        title: "Maximize Customer Satisfaction and Sales with Chatbot for Shopify",
        subtitle:
          "Simplify Shopify store operations and enhance customer experiences using our AI-powered chatbot built specifically for Shopify businesses.",
        features: [
          { title: "Abandoned Cart Recovery", body: "Automatic cart-abandonment follow-ups that win back lost sales." },
          { title: "Order Confirmation, Cancellation & Fulfillment", body: "Real-time updates keep customers in the loop at every step." },
          { title: "AI Shopping Assistant", body: "Personalized product suggestions and real-time support." },
          { title: "COD Order Notifications", body: "Instant notifications for cash-on-delivery orders." },
          { title: "Return & Refund Updates", body: "Keep customers informed about return and refund status." },
          { title: "24/7 Customer Support", body: "Always-on support that builds loyalty and repeat buyers." },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
  woocommerce: {
    slug: "woocommerce",
    section: "ai-bots",
    heroImage: "/images/pillar-sales.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For WooCommerce",
        title: "Enhance Your WooCommerce Store with an AI Chatbot",
        subtitle:
          "Deliver real-time support, send order updates, and improve customer shopping experiences effortlessly. Grow WooCommerce sales with a WhatsApp chatbot that automates cart recovery, order updates, confirmations, and 24/7 AI support.",
        features: [
          { title: "Abandoned Cart Recovery", body: "Automatic WhatsApp reminders that bring shoppers back to checkout." },
          { title: "Personalized Product Recommendations", body: "Upselling and cross-selling powered by AI." },
          { title: "Order Confirmation & Fulfillment", body: "Instant confirmations and delivery updates." },
          { title: "AI Shopping Assistant", body: "Real-time tracking and delivery notifications." },
          { title: "Return & Exchange Requests", body: "Trained on your store's policies and URLs." },
          { title: "24/7 Customer Support", body: "Round-the-clock WhatsApp chatbot for WooCommerce." },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
  telegram: {
    slug: "telegram",
    section: "ai-bots",
    channelLogo: "/images/channel-telegram.webp",
    locales: {
      en: {
        eyebrow: "AI Chatbot For Telegram",
        title: "Automate Your Telegram Chats and Boost Engagement",
        subtitle:
          "Connect instantly, nurture leads, and offer 24/7 support with Chat2Sales AI on Telegram — powering every part of your business.",
        features: [
          { title: "Provide Customer Support", body: "24/7 instant responses across chats, groups, and channels." },
          { title: "Marketing Automation", body: "Segment audiences and send updates or promotions." },
          { title: "Increase Sales", body: "Recommend products, handle orders, and recover abandoned carts." },
          { title: "Unified Inbox & Live Chat", body: "A centralized inbox and live chat tool for your team." },
          { title: "Appointment Booking", body: "Schedule meetings, sessions, or classes directly in chat." },
          { title: "Share Files", body: "Documents, videos, and images with Telegram's end-to-end encryption." },
        ],
        faq: BOT_FAQ_EN,
      },
    },
  },
};

export const SOLUTIONS: Record<string, SubPage> = {
  "ai-sales-agents": {
    slug: "ai-sales-agents",
    section: "solutions",
    heroImage: "/images/pillar-sales.webp",
    locales: {
      en: {
        eyebrow: "AI Sales Agent",
        title: "Multiply Sales Conversions with an AI Sales Agent That Works 24/7",
        subtitle:
          "Empower your team with an AI sales agent that automates lead follow-ups, personalizes conversations, and closes deals faster — while you focus on strategy and growth.",
        features: [
          { title: "24/7 Availability", body: "Continuous support for your customers across all timezones." },
          { title: "AI-Driven Insights", body: "Performance data analysis across your entire sales pipeline." },
          { title: "Contextual Awareness", body: "Adapts to your brand voice and communication style." },
          { title: "Lead Qualification Automation", body: "Identify and prioritize your highest-potential prospects." },
          { title: "Automated Follow-Ups", body: "Personalized follow-ups triggered by user behavior." },
          { title: "Native App Integrations", body: "Seamless with CRMs, marketing tools, and communication apps." },
        ],
      },
    },
  },
  "ai-marketing-agents": {
    slug: "ai-marketing-agents",
    section: "solutions",
    heroImage: "/images/pillar-marketing.webp",
    locales: {
      en: {
        eyebrow: "AI Marketing Agent",
        title: "Supercharge Your Marketing with an AI Marketing Agent",
        subtitle:
          "Leverage AI-driven automation, personalization, and seamless integration to optimize every campaign — smarter execution, faster decisions, higher ROI.",
        features: [
          { title: "Targeted Campaigns", body: "AI segmentation by behavior, interests, and intent." },
          { title: "Lead Scoring", body: "Prioritize high-quality leads automatically." },
          { title: "Predictive Insights", body: "Anticipate actions and buying behavior." },
          { title: "Real-Time Personalization", body: "Adapt messages in real time based on signals." },
          { title: "Campaign Optimization", body: "Auto-refine campaigns based on live interactions." },
          { title: "Omnichannel Presence", body: "Email, social media, SMS, and ads from one platform." },
          { title: "Content Creation", body: "Multilingual, culturally-aware marketing assets." },
          { title: "Seamless Integration", body: "Sync data, automate workflows, and scale without disruption." },
        ],
      },
    },
  },
  "chatbot-for-marketing": {
    slug: "chatbot-for-marketing",
    section: "solutions",
    heroImage: "/images/pillar-marketing.webp",
    locales: {
      en: {
        eyebrow: "Chatbot for Marketing",
        title: "Turn Your Leads Into Paying Customers",
        subtitle:
          "You drive the traffic — Chat2Sales AI does the heavy lifting. Smart chatbots engage, qualify, and nurture every lead across WhatsApp, Instagram, and your website.",
        features: [
          { title: "Align the Chatbot with Your Marketing Goals", body: "Identify key touchpoints and align chatbot objectives with marketing outcomes." },
          { title: "Design an Engaging Conversational Experience", body: "Engage leads 24/7 with human-like interactions." },
          { title: "Deploy Across Every Channel That Matters", body: "WhatsApp, Facebook, Instagram, or your website." },
          { title: "Analyze, Learn, and Optimize for Growth", body: "Track performance, identify drop-offs, and refine strategy." },
        ],
      },
    },
  },
  "chatbot-for-sales": {
    slug: "chatbot-for-sales",
    section: "solutions",
    heroImage: "/images/pillar-sales.webp",
    locales: {
      en: {
        eyebrow: "Chatbot for Sales",
        title: "Automate Tedious Tasks and Focus on Closing More Deals",
        subtitle:
          "Chat2Sales AI empowers your sales team with smart assistants and chatbots that boost productivity, streamline workflows, and drive consistent revenue growth.",
        features: [
          { title: "Align the Chatbot with Your Sales Strategy", body: "Identify key touchpoints and align with your sales process." },
          { title: "Train It with Your Sales Qualification Criteria", body: "Teach the bot to qualify prospects based on your unique rules." },
          { title: "Connect to Your CRM and Calendar, Then Launch Anywhere", body: "Automate scheduling, data syncing, and follow-ups." },
          { title: "Nurture Leads and Optimize Performance", body: "Monitor conversations, identify drop-offs, and refine flows." },
        ],
      },
    },
  },
  "chatbot-for-lead-generation": {
    slug: "chatbot-for-lead-generation",
    section: "solutions",
    heroImage: "/images/pillar-marketing.webp",
    locales: {
      en: {
        eyebrow: "Chatbot for Lead Generation",
        title: "Automate Tedious Tasks and Focus on Closing More Deals",
        subtitle:
          "Say goodbye to boring forms and high drop-offs. Turn conversations into conversions by collecting data and opt-ins via your website or WhatsApp — make every interaction smooth, personal, and engaging.",
        features: [
          { title: "Conversational Lead Capture", body: "Collect data and opt-ins via your website or WhatsApp instead of static forms." },
          { title: "Identify High-Intent Leads", body: "Custom conditions and pre-built blocks score leads automatically." },
          { title: "Route to the Right Person", body: "Transition chats to humans instantly when intent is ready." },
        ],
      },
    },
  },
  "chatbot-for-engagement": {
    slug: "chatbot-for-engagement",
    section: "solutions",
    heroImage: "/images/pillar-customer-service.webp",
    locales: {
      en: {
        eyebrow: "Chatbot for Customer Engagement",
        title: "Keep Your Audience Engaged with Interactive AI Chat Experiences",
        subtitle:
          "Chat2Sales AI helps you connect with customers across every stage of their journey through instant replies, reminders, product recommendations, and interactive experiences that strengthen brand loyalty.",
        features: [
          { title: "Boost Adoption & Discovery", body: "Educate new users with regular communications on web & mobile." },
          { title: "Smart Notifications", body: "Automatically send service updates, reminders, and alerts to reduce support requests." },
          { title: "Tailored Messaging", body: "Integrate with leading CRMs, helpdesks & marketing apps for the right data at the right time." },
        ],
      },
    },
  },
  "chatbot-for-customer-support": {
    slug: "chatbot-for-customer-support",
    section: "solutions",
    heroImage: "/images/pillar-customer-service.webp",
    locales: {
      en: {
        eyebrow: "Chatbot for Customer Support",
        title: "Deliver 5-Star Support and Build Stronger Customer Relationships",
        subtitle:
          "Use AI chatbots to automate customer service, save time, and deliver personalized support — on every channel your customers already use.",
        features: [
          { title: "Help Customers 24/7", body: "Empower customers to solve their own questions with automated FAQs, smart replies, and proactive notifications." },
          { title: "Shared Team Inbox", body: "Human takeover, automation tools, and shortcuts to manage complex queries in one place." },
          { title: "Tailored Messaging", body: "Integrate with CRMs, helpdesks, and marketing apps so every reply has the right context." },
        ],
      },
    },
  },
  "chatbot-for-ecommerce": {
    slug: "chatbot-for-ecommerce",
    section: "solutions",
    heroImage: "/images/pillar-sales.webp",
    locales: {
      en: {
        eyebrow: "Chatbot for Ecommerce",
        title: "Automate Your eCommerce Sales and Support with Chat2Sales AI",
        subtitle:
          "Engage shoppers instantly, recommend products, recover abandoned carts, and provide 24/7 customer service through WhatsApp, Instagram, and your website.",
        features: [
          { title: "Recover Lost Sales Automatically", body: "Personalized follow-ups via WhatsApp or Instagram." },
          { title: "Deliver Instant, 24/7 Customer Support", body: "Answer questions about products, pricing, or delivery any time of day." },
          { title: "Recover Abandoned Carts", body: "Human takeover, automation tools, and shortcuts for complex queries." },
          { title: "Recommend Products That Sell", body: "AI-driven recommendations to boost average order value." },
        ],
      },
    },
  },
};

export function getSubPage(section: Section, slug: string): SubPage | undefined {
  if (section === "ai-bots") return AI_BOTS[slug];
  if (section === "solutions") return SOLUTIONS[slug];
  return undefined;
}

export function getSubPageView(
  section: Section,
  slug: string,
  locale: Locale,
): SubPageView | undefined {
  const page = getSubPage(section, slug);
  if (!page) return undefined;
  const content = page.locales[locale] ?? page.locales.en;
  return {
    slug: page.slug,
    section: page.section,
    heroImage: page.heroImage,
    channelLogo: page.channelLogo,
    ...content,
  };
}

export function listSubPageSlugs(section: "ai-bots" | "solutions"): string[] {
  return Object.keys(section === "ai-bots" ? AI_BOTS : SOLUTIONS);
}

export const BOT_FAQ_BY_LOCALE: Record<Locale, SubPageContent["faq"]> = {
  en: BOT_FAQ_EN,
  zh: BOT_FAQ_ZH,
};
