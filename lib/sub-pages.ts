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
      zh: {
        eyebrow: "Instagram AI 聊天机器人",
        title: "搭建 Instagram AI 聊天机器人，自动接待每一次互动",
        subtitle:
          "用 Chat2Sales AI 获取并筛选线索，把私信变成成交机会，即时回复评论，全天候为客户服务。零代码，零麻烦，只看结果。",
        features: [
          { title: "营销自动化", body: "用智能群发和个性化滴灌活动，持续养熟每一条线索。" },
          { title: "卖出产品", body: "用个性化推荐与对话式购物，把浏览者变成买家。" },
          { title: "即时客服与常见问题", body: "通过 AI 聊天，提供即时、友好的服务。" },
          { title: "获取线索", body: "让 AI 轻松获取并筛选高意向客户。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "WhatsApp AI 聊天机器人",
        title: "自动化你的 WhatsApp 对话，成交更多客户",
        subtitle:
          "用 Chat2Sales AI 即时接触客户、获取线索、全天候提供支持。一个对话，搞定营销与销售。",
        features: [
          { title: "营销自动化", body: "对客户进行分群，发送个性化的滴灌或群发活动。" },
          { title: "卖出产品", body: "直接在 WhatsApp 上宣传并卖出产品。" },
          { title: "客户支持", body: "AI WhatsApp 机器人即时响应客户问题，并支持在线人工。" },
          { title: "预约时间", body: "客户可直接在对话中预约会议或课程，并自动同步到日历。" },
          { title: "AI 驱动的聊天机器人", body: "为你的业务量身打造专属 AI WhatsApp 机器人。" },
          { title: "对接 80+ 应用", body: "与 80 多个平台无缝对接——CRM、营销工具、自动化流程。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "Facebook AI 聊天机器人",
        title: "用 Facebook AI 聊天机器人自动接待客户、加速增长",
        subtitle:
          "用 AI 聊天机器人触达 Facebook 的庞大用户群。通过群发与滴灌活动 7×24 小时保持存在感，自动获取并筛选线索，协助客服与购物，并自动回复评论。",
        features: [
          { title: "训练 Facebook 机器人", body: "让聊天机器人学习你的产品、常见问题和服务。" },
          { title: "自动回复评论", body: "自动回复评论，感谢用户并引导他们继续对话。" },
          { title: "随处展示机器人", body: "把机器人加到你的网站，或通过二维码分享。" },
          { title: "群发消息", body: "一键给所有粉丝发送活动、提醒或上新。" },
          { title: "智能对话流程", body: "设计简单的对话路径，把客户从打招呼引导到下单。" },
          { title: "智能触发器", body: "根据关键词或时间自动回复。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "网站 AI 聊天机器人",
        title: "用 AI 聊天机器人，把网站访客变成客户",
        subtitle:
          "在你的网站上提供 7×24 小时服务。让 AI 聊天机器人处理常见问题、预约、产品咨询和下单——零代码部署，基于你自己的内容训练，答案准确可靠。",
        features: [
          { title: "训练你的 AI 聊天机器人", body: "用常见问题、网站内容和知识库让它更聪明。" },
          { title: "获取高质量线索", body: "收集联系方式，直接同步到你的 CRM。" },
          { title: "提供及时客服", body: "把客户转接到在线人工，并协助他们使用网站。" },
          { title: "预约时间", body: "把会议、课程或体验课与你的日历自动同步。" },
          { title: "提升转化率", body: "推荐产品、提供订单更新、支付支持和弃购挽回。" },
          { title: "网站在线客服", body: "全渠道在线客服，支持真人实时接手。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "Shopify AI 聊天机器人",
        title: "用 Shopify 聊天机器人，提升客户满意度与销售",
        subtitle:
          "专为 Shopify 商家打造的 AI 聊天机器人，简化店铺运营，同时提升客户体验。",
        features: [
          { title: "弃购挽回", body: "自动跟进弃购客户，把流失的订单赢回来。" },
          { title: "订单确认、取消与发货", body: "实时更新让客户在每个环节都安心。" },
          { title: "AI 购物助理", body: "个性化产品推荐，实时解答疑问。" },
          { title: "货到付款通知", body: "货到付款订单即时通知。" },
          { title: "退货与退款更新", body: "让客户随时了解退货与退款进度。" },
          { title: "7×24 小时客服", body: "全天候服务，培养忠诚客户与复购。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "WooCommerce AI 聊天机器人",
        title: "用 AI 聊天机器人升级你的 WooCommerce 店铺",
        subtitle:
          "即时提供客服、自动发送订单更新、轻松提升购物体验。用 WhatsApp 聊天机器人自动化弃购挽回、订单更新、确认和 7×24 小时 AI 客服，推动 WooCommerce 销售增长。",
        features: [
          { title: "弃购挽回", body: "通过 WhatsApp 自动提醒，把客人拉回结账。" },
          { title: "个性化产品推荐", body: "AI 驱动的向上销售与交叉销售。" },
          { title: "订单确认与发货", body: "即时确认与配送更新。" },
          { title: "AI 购物助理", body: "实时跟踪与配送通知。" },
          { title: "退货与换货申请", body: "基于你自己的退货政策与页面训练。" },
          { title: "7×24 小时客服", body: "专为 WooCommerce 打造的全天候 WhatsApp 机器人。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "Telegram AI 聊天机器人",
        title: "自动化你的 Telegram 对话，持续拉升互动",
        subtitle:
          "用 Chat2Sales AI 在 Telegram 上即时接触客户、养熟线索、提供 7×24 小时服务——驱动业务的每一个环节。",
        features: [
          { title: "提供客户支持", body: "7×24 小时即时响应，覆盖私聊、群组与频道。" },
          { title: "营销自动化", body: "对用户分群，发送更新或促销。" },
          { title: "提升销售", body: "推荐产品、处理订单、挽回弃购。" },
          { title: "统一收件箱与在线客服", body: "为团队提供集中式收件箱与在线客服工具。" },
          { title: "预约时间", body: "直接在对话中安排会议、课程或体验。" },
          { title: "分享文件", body: "用 Telegram 的端到端加密分享文档、视频、图片。" },
        ],
        faq: BOT_FAQ_ZH,
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
      zh: {
        eyebrow: "AI 销售助理",
        title: "用 7×24 小时在线的 AI 销售助理，数倍提升成交",
        subtitle:
          "让 AI 销售助理帮团队自动化跟进线索、个性化对话、更快完成成交——你专心做战略与增长。",
        features: [
          { title: "7×24 小时在线", body: "跨时区持续为客户提供支持。" },
          { title: "数据驱动洞察", body: "覆盖整个销售漏斗的绩效分析。" },
          { title: "上下文感知", body: "适配你的品牌语气与沟通风格。" },
          { title: "自动化线索筛选", body: "识别并优先处理最高潜力的客户。" },
          { title: "自动化跟进", body: "根据用户行为触发个性化跟进。" },
          { title: "原生应用集成", body: "无缝对接 CRM、营销工具与沟通应用。" },
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
      zh: {
        eyebrow: "AI 营销助理",
        title: "用 AI 营销助理，把你的营销推上新高度",
        subtitle:
          "用 AI 驱动的自动化、个性化和无缝集成，优化每一场营销活动——更聪明的执行、更快的决策、更高的 ROI。",
        features: [
          { title: "精准活动", body: "基于行为、兴趣和意图进行 AI 分群。" },
          { title: "线索评分", body: "自动把高质量线索排在最前面。" },
          { title: "预测性洞察", body: "预判用户下一步动作与购买行为。" },
          { title: "实时个性化", body: "根据实时信号动态调整内容。" },
          { title: "活动优化", body: "根据实时互动自动调优投放。" },
          { title: "全渠道覆盖", body: "在一个平台上同时跑邮件、社交媒体、短信与广告。" },
          { title: "内容创作", body: "生成多语言、本地化的营销素材。" },
          { title: "无缝对接", body: "同步数据、自动化流程，增长不中断。" },
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
      zh: {
        eyebrow: "营销聊天机器人",
        title: "把你的线索变成付费客户",
        subtitle:
          "你负责把流量引进来——Chat2Sales AI 负责搞定剩下的。智能聊天机器人在 WhatsApp、Instagram 和你的网站上互动、筛选、养熟每一条线索。",
        features: [
          { title: "让聊天机器人配合营销目标", body: "识别关键触点，把机器人目标与营销结果对齐。" },
          { title: "设计有吸引力的对话体验", body: "7×24 小时像真人一样互动，让线索持续参与。" },
          { title: "部署到所有重要渠道", body: "WhatsApp、Facebook、Instagram 或你的网站。" },
          { title: "分析、学习、持续优化", body: "追踪表现、找到流失点、优化策略。" },
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
      zh: {
        eyebrow: "销售聊天机器人",
        title: "把琐事交给机器人，专心成交更多订单",
        subtitle:
          "Chat2Sales AI 为销售团队带来智能助手与聊天机器人，提升效率、简化流程、稳定带来营收增长。",
        features: [
          { title: "让机器人匹配你的销售策略", body: "识别关键触点，把机器人流程和销售流程对齐。" },
          { title: "按你的筛选标准训练它", body: "按照你的规则教机器人如何筛选客户。" },
          { title: "对接 CRM 与日历，部署到任何渠道", body: "自动化预约、数据同步与跟进。" },
          { title: "养熟线索、优化表现", body: "监测对话、识别流失点、优化流程。" },
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
      zh: {
        eyebrow: "获客聊天机器人",
        title: "告别枯燥表单，让对话自动带来订单",
        subtitle:
          "不用再担心表单太长、流失太多。用网站或 WhatsApp 上的对话式获客，收集信息与授权——让每一次互动都自然、贴心又有吸引力。",
        features: [
          { title: "对话式线索获取", body: "用网站或 WhatsApp 的对话代替静态表单收集信息与授权。" },
          { title: "识别高意向客户", body: "自定义规则与预置模块自动为客户打分。" },
          { title: "即时路由到合适的同事", body: "当客户意向成熟时，立即把对话交给真人。" },
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
      zh: {
        eyebrow: "用户互动聊天机器人",
        title: "用互动式 AI 对话，持续留住你的用户",
        subtitle:
          "Chat2Sales AI 在用户旅程的每一个环节都与客户保持连接——即时回复、提醒、产品推荐和互动体验，持续增强品牌忠诚度。",
        features: [
          { title: "提升产品采用与发现", body: "通过网页与移动端的日常沟通，持续教育新用户。" },
          { title: "智能通知", body: "自动发送服务更新、提醒和通知，减少客户咨询。" },
          { title: "定制化沟通", body: "对接主流 CRM、客服与营销工具，让每条消息都带着正确的上下文。" },
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
      zh: {
        eyebrow: "客服聊天机器人",
        title: "提供五星级客服，建立更强客户关系",
        subtitle:
          "用 AI 聊天机器人自动化客服、节省时间、提供个性化支持——出现在客户本来就用的每一个渠道。",
        features: [
          { title: "7×24 小时响应客户", body: "通过自动常见问题、智能回复、主动通知，让客户自助解决大多数问题。" },
          { title: "团队共享收件箱", body: "真人接手、自动化工具和快捷语集中管理复杂咨询。" },
          { title: "定制化回复", body: "对接 CRM、客服系统和营销工具，让每条回复都带着正确上下文。" },
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
      zh: {
        eyebrow: "电商聊天机器人",
        title: "用 Chat2Sales AI 自动化电商的销售与客服",
        subtitle:
          "通过 WhatsApp、Instagram 和你的网站，即时接待购物者、推荐产品、挽回弃购，并提供 7×24 小时客服。",
        features: [
          { title: "自动挽回流失订单", body: "通过 WhatsApp 或 Instagram 发送个性化跟进。" },
          { title: "即时、全天候客服", body: "随时回答关于产品、价格或配送的问题。" },
          { title: "挽回弃购", body: "复杂咨询时可真人接手，还有自动化工具和快捷语辅助。" },
          { title: "推荐卖得出去的产品", body: "用 AI 驱动的推荐提升客单价。" },
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
