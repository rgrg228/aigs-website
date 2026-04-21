import type { Dictionary } from "../types";

const dict: Dictionary = {
  common: {
    bookDemo: "预约演示",
    contact: "联系我们",
    tryItOut: "预约演示",
    seeAllChannels: "查看所有渠道",
    close: "关闭",
    languageSwitcher: "语言",
  },
  header: {
    contactCta: "联系我们",
    bookDemo: "预约演示",
    groups: [
      {
        label: "AI 机器人",
        items: [
          { label: "Instagram AI 聊天机器人", href: "/ai-bots/instagram" },
          { label: "WhatsApp AI 聊天机器人", href: "/ai-bots/whatsapp" },
          { label: "Facebook AI 聊天机器人", href: "/ai-bots/facebook" },
          { label: "网站 AI 聊天机器人", href: "/ai-bots/websites" },
          { label: "Shopify AI 聊天机器人", href: "/ai-bots/shopify" },
          { label: "WooCommerce AI 聊天机器人", href: "/ai-bots/woocommerce" },
          { label: "Telegram AI 聊天机器人", href: "/ai-bots/telegram" },
        ],
      },
      {
        label: "解决方案",
        items: [
          { label: "AI 销售助理", href: "/solutions/ai-sales-agents" },
          { label: "AI 营销助理", href: "/solutions/ai-marketing-agents" },
          { label: "营销聊天机器人", href: "/solutions/chatbot-for-marketing" },
          { label: "销售聊天机器人", href: "/solutions/chatbot-for-sales" },
          { label: "获客聊天机器人", href: "/solutions/chatbot-for-lead-generation" },
          { label: "用户互动聊天机器人", href: "/solutions/chatbot-for-engagement" },
          { label: "客服聊天机器人", href: "/solutions/chatbot-for-customer-support" },
          { label: "电商聊天机器人", href: "/solutions/chatbot-for-ecommerce" },
        ],
      },
      {
        label: "资源",
        items: [
          { label: "联盟合作伙伴", href: "/resources/affiliate-partners" },
          { label: "博客", href: "/resources/blogs" },
          { label: "联系我们", href: "/contact" },
        ],
      },
    ],
  },
  hero: {
    eyebrow: "Meta 商业合作伙伴 · Google 合作伙伴",
    titleLine1: "让每一次对话",
    titleHighlight: "都变成成交。",
    subtitle:
      "覆盖 WhatsApp、Facebook、Instagram、网站、Telegram 等渠道的 AI 聊天机器人。以极低成本雇用你的第一位 AI 员工，Chat2Sales 会像你最得力的员工一样回复客户、跟进线索、预约客户，不同的是它从不下班。",
    primaryCta: "预约演示",
    secondaryCta: "看它能做什么",
    stats: [
      { v: "10 倍", l: "线索" },
      { v: "90%", l: "问题解决" },
      { v: "70%", l: "更多互动" },
      { v: "90%", l: "更多营收" },
    ],
  },
  partners: {
    heading: "全球认证与战略合作",
  },
  features: {
    eyebrow: "为什么选择 Chat2Sales",
    title: "以极低成本，雇用你的第一位 AI 员工。",
    subtitle:
      "Chat2Sales 回复客户、跟进线索、预约客户，就像你最得力的员工，但从不停歇。",
    items: [
      {
        title: "永远不漏掉一条消息",
        body:
          "每一条私信、评论和网站对话，1 秒内都会收到回复，哪怕是凌晨三点。",
      },
      {
        title: "睡觉时也在成交",
        body:
          "AI 自动筛选意向、回答价格问题、直接帮你预约，完全不用真人参与。",
      },
      {
        title: "客服时间砍掉 80%",
        body:
          "AI 处理那些重复无聊的问题，团队只处理真正重要的事。",
      },
      {
        title: "一个收件箱，所有渠道",
        body:
          "WhatsApp、Facebook、Instagram、LINE、你的网站，所有回复集中在一个地方，告别到处切换。",
      },
    ],
  },
  pillars: {
    eyebrow: "解决方案",
    title: "一支像人一样的 AI 团队。",
    subtitle:
      "从小微商家到大型企业，Chat2Sales 的 AI 助理帮你扩大运营、减少人工、用智能自动化提升利润。",
    items: [
      {
        tag: "销售 💰",
        title: "AI 销售助理",
        body:
          "你的全天候虚拟销售助理，自动获客、个性化对话、智能跟进，和真人一样精准，7×24 小时在线。",
      },
      {
        tag: "营销 🚀",
        title: "AI 营销助理",
        body:
          "你的全天候数字营销员，自动管理活动、个性化沟通、数据驱动优化，持续提升 ROI。",
      },
      {
        tag: "客户服务 💬",
        title: "AI 客服助理",
        body:
          "AI 与你的团队协作，秒回客户、解决问题，全渠道全天候提升客户满意度。",
      },
    ],
  },
  channels: {
    eyebrow: "全平台更聪明地成交",
    title: "WhatsApp、Facebook、LINE，一个 AI，全部渠道。",
    subtitle:
      "Chat2Sales 帮你自动回复、跟进、成交，一个平台搞定全部。把 AI 聊天机器人加到网站、在线客服、Messenger 或 Slack，7×24 小时处理每一次对话。",
    items: [
      {
        name: "WhatsApp",
        body:
          "自动回复、筛选线索、完成成交，全部通过个性化、像真人的对话完成。",
      },
      {
        name: "Instagram",
        body:
          "即时回复、跟进线索、驱动转化，让你专心做内容。",
      },
      {
        name: "Facebook Messenger",
        body:
          "即时互动、回答常见问题、7×24 小时预约，提升转化率和客户信任度。",
      },
      {
        name: "网站嵌入",
        body:
          "一个智能网站小工具，7×24 小时解答常见问题、推荐产品、引导结账。",
      },
      {
        name: "Telegram",
        body:
          "为你定制 AI 助理，吸引粉丝，把对话变成忠实客户。",
      },
      {
        name: "WeChat",
        body:
          "连接、互动、成交，每一个触点都提供个性化体验。",
      },
    ],
    multichannelAlt: "Chat2Sales 把每一次对话分配到合适的工具",
  },
  faq: {
    eyebrow: "常见问题",
    title: "常见问题",
    subtitle: "还有疑问？我们会亲自回复，通常几小时内。",
    contactLink: "联系我们 →",
    items: [
      {
        q: "Chat2Sales AI 是什么？",
        a: "Chat2Sales 是你的 7×24 小时 AI 销售助理，自动在 WhatsApp、Instagram、网站、Facebook、LINE 等渠道回复客户、预约客户、跟进线索。",
      },
      {
        q: "可以对接我现有的账号吗？",
        a: "可以。Chat2Sales 支持 WhatsApp、Facebook、Instagram、LINE、WeChat、Telegram 以及你网站上的聊天插件。",
      },
      {
        q: "需要技术基础吗？",
        a: "完全不需要。我们可以 100% 为你完成设置。",
      },
      {
        q: "AI 能讲多种语言吗？",
        a: "可以。Chat2Sales 支持 50 多种语言，包括英语、中文、马来语和粤语。",
      },
      {
        q: "我想自己回复时可以吗？",
        a: "当然可以。你可以随时接管对话，AI 会自动暂停。",
      },
      {
        q: "AI 聊天机器人和普通聊天机器人有什么区别？",
        a: "生成式 AI 聊天机器人（例如 Chat2Sales）使用人工智能实时生成自然、个性化的回复，而不仅仅是按照预设脚本回答。与规则式机器人只能照脚本回答不同，生成式 AI 聊天机器人能理解用户输入的上下文和意思，并即时生成全新的、针对性的回复。",
      },
    ],
  },
  cta: {
    titleLine1: "用 AI 自动化",
    titleHighlight: "轻松提升营收。",
    subtitle:
      "免费预约一次专家演示与咨询。我们帮你把第一个 AI 助理设置好，零代码、零麻烦，直接看到结果。",
    primaryCta: "预约演示",
    reassurance: "按年付费享 2 个月免费 · 零设置费 · 由我们帮你设置",
  },
  footer: {
    tagline:
      "以创新的解决方案赋能企业，我们致力于提供无缝支持、助力成长。携手我们，共创更聪明、更光明的未来！",
    groups: [
      {
        title: "AI 机器人",
        items: [
          { label: "Instagram AI 聊天机器人", href: "/ai-bots/instagram" },
          { label: "WhatsApp AI 聊天机器人", href: "/ai-bots/whatsapp" },
          { label: "Facebook AI 聊天机器人", href: "/ai-bots/facebook" },
          { label: "网站 AI 聊天机器人", href: "/ai-bots/websites" },
          { label: "Shopify AI 聊天机器人", href: "/ai-bots/shopify" },
          { label: "WooCommerce AI 聊天机器人", href: "/ai-bots/woocommerce" },
          { label: "Telegram AI 聊天机器人", href: "/ai-bots/telegram" },
        ],
      },
      {
        title: "解决方案",
        items: [
          { label: "营销聊天机器人", href: "/solutions/chatbot-for-marketing" },
          { label: "销售聊天机器人", href: "/solutions/chatbot-for-sales" },
          { label: "获客聊天机器人", href: "/solutions/chatbot-for-lead-generation" },
          { label: "用户互动聊天机器人", href: "/solutions/chatbot-for-engagement" },
          { label: "客服聊天机器人", href: "/solutions/chatbot-for-customer-support" },
          { label: "电商聊天机器人", href: "/solutions/chatbot-for-ecommerce" },
        ],
      },
      {
        title: "快速入口",
        items: [
          { label: "首页", href: "/" },
          { label: "联盟合作伙伴", href: "/resources/affiliate-partners" },
          { label: "博客", href: "/resources/blogs" },
          { label: "联系我们", href: "/contact" },
        ],
      },
    ],
    companyName: "AI GROWTH SOLUTIONS",
    addressLines: [
      "Level 9, Tower B",
      "Menara UOA Bangsar 5,",
      "Jln. Bangsar Utama 1,",
      "59000 Kuala Lumpur,",
      "Wilayah Persekutuan",
    ],
    privacyLink: "隐私政策",
    termsLink: "服务条款",
    copyrightSuffix: "版权所有。",
  },
  chatMockup: {
    agentName: "Chat2Sales AI",
    status: "WhatsApp · 1 秒内回复",
    bubbles: [
      {
        from: "bot",
        text: "你好 👋 感谢联系 Chat2Sales，今天想解决什么问题呢？",
      },
      {
        from: "user",
        text: "想给 Shopify 店铺和 WhatsApp 加一个聊天机器人。",
      },
      {
        from: "bot",
        text: "明白了。你所有渠道每个月大约收到多少条消息？",
        typing: true,
      },
    ],
    recommended: "推荐",
    recommendedTitle: "定制方案 · 根据你的流量量身打造",
    recommendedBullets: [
      "按团队规模量身设计",
      "覆盖 WhatsApp、FB、IG 与 Shopify",
      "含设置与培训",
    ],
    recommendedCta: "预约演示",
    inputPlaceholder: "输入消息…",
  },
  contact: {
    metaTitle: "联系我们 | Chat2Sales",
    metaDescription:
      "用 AI 自动化轻松提升营收。和位于马来西亚吉隆坡的 Chat2Sales 团队预约免费现场演示与咨询。",
    eyebrow: "联系我们",
    title: "用 AI 自动化，轻松提升营收。",
    subtitle:
      "在 WhatsApp、Instagram 和你的网站上即时接待客户，让转化自动上涨。",
    subtitle2:
      "免费预约专家的现场演示与咨询。借助更强的客户互动，把营收提升最多 2 倍。",
    emailHeading: "电子邮件",
    officeHeading: "办公室",
    officeLines: [
      "AI Growth Solutions",
      "Level 9, Tower B",
      "Menara UOA Bangsar 5,",
      "Jln. Bangsar Utama 1,",
      "59000 Kuala Lumpur,",
      "Wilayah Persekutuan, Malaysia",
    ],
    form: {
      heading: "取得联系",
      subtext: "30 秒就能填完。我们通常几小时内就会回复你，多半直接在 WhatsApp 上。",
      nameLabel: "姓名",
      namePlaceholder: "王小明",
      phoneLabel: "电话或 WhatsApp",
      phonePlaceholder: "+60 12 345 6789",
      emailLabel: "电子邮件（选填）",
      emailPlaceholder: "name@company.com",
      requirementLabel: "你想了解什么？（选填）",
      requirementPlaceholderOption: "请选择…",
      requirementOptions: [
        "AI 聊天机器人",
        "联盟合作伙伴",
        "定制聊天机器人开发",
        "其他",
      ],
      messageLabel: "我们可以怎么帮你？",
      messagePlaceholder: "告诉我们你的使用场景…",
      submit: "预约演示",
      submitting: "发送中…",
      success: "收到了，我们会在 24 小时内回复你。",
      errorDefault:
        "出错了，请发送邮件至 hello@chat2sales.ai。",
      consentBefore: "提交即表示你同意我们的",
      consentTerms: "服务条款",
      consentMiddle: "和",
      consentPrivacy: "隐私政策",
      consentAfter: "。",
    },
  },
  blog: {
    metaTitle: "博客 | Chat2Sales",
    metaDescription:
      "用 AI 聊天机器人驱动业务增长的洞察与策略。",
    eyebrow: "资源",
    title: "用 AI 聊天机器人驱动业务增长的洞察与策略",
    subtitle:
      "为忙碌的企业主而写，简单实用的 AI 销售、营销与客服打法。",
    readMore: "阅读全文 →",
    minReadTemplate: "{n} 分钟阅读",
    backToIndex: "← 所有文章",
    ctaBox: {
      heading: "在你自己的业务上看效果。",
      subtitle:
        "预约一次免费演示，我们直接用你店铺的场景演示 Chat2Sales 如何运作。",
      button: "预约演示",
    },
  },
  affiliate: {
    metaTitle: "联盟合作伙伴 | Chat2Sales",
    metaDescription:
      "加入 Chat2Sales 联盟伙伴计划，推广 AI 聊天机器人即可赚取高达 30% 的终身复利佣金。",
    eyebrow: "联盟合作伙伴",
    title:
      "加入 Chat2Sales 联盟计划，赚取高达 30% 的终身复利佣金。",
    subtitle:
      "加入 Chat2Sales 联盟计划，把 AI 聊天机器人推荐给你的观众。通过社交媒体、博客、YouTube 或科技论坛分享，每卖出一份授权，你就能终身赚取高达 30% 的复利佣金。",
    cta: "联系我们了解更多",
    perks: [
      {
        title: "最高 30% 复利佣金",
        body: "每卖出一份授权，终身赚取最高 30% 复利佣金。",
      },
      {
        title: "任意渠道推广",
        body: "在社交媒体、博客、YouTube、科技论坛，观众在哪里都可以。",
      },
      {
        title: "天然好卖的产品",
        body: "客户本来就在寻找的 AI 聊天机器人，你卖的是未来的沟通方式。",
      },
      {
        title: "专属支持",
        body: "团队为你提供素材、攻略和真人支持，帮你成交。",
      },
    ],
  },
  subPage: {
    whatYouGet: "你会得到什么",
    whatYouGetTitle: "为你团队真正的销售方式而造。",
    faqsEyebrow: "常见问题",
    faqsTitle: "常见问题解答",
    bookDemo: "预约演示",
    seeAllChannels: "查看所有渠道",
  },
  legal: {
    eyebrow: "法律",
    privacyMetaTitle: "隐私政策 | Chat2Sales",
    privacyMetaDescription:
      "AI Growth Solution 如何收集、使用、存储、共享与保护你的信息。",
    privacyIntroTitle: "我们认真对待你的隐私。",
    privacyIntroBody:
      '本隐私政策描述了 AI Growth Solution（以下称"AI Growth Solution"、"我们"）在 https://chat2sales.ai 所提供服务中，如何收集、使用、存储、共享和保护你的信息。',
    termsMetaTitle: "服务条款 | Chat2Sales",
    termsMetaDescription:
      "AI Growth Solution 网站（https://chat2sales.ai）的使用规则。",
    termsIntroTitle: "服务条款",
    termsIntroBody:
      "本服务条款规定了 AI Growth Solution 网站（https://chat2sales.ai）的使用规则。访问本网站即代表你接受这些条款。如不同意，请停止使用 Chat2SalesAI。",
  },
};

export default dict;
