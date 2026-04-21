/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      // AI Bot flat slugs -> nested slugs
      { source: "/chatbot-for-instagram", destination: "/ai-bots/instagram", permanent: true },
      { source: "/chatbot-for-whatsapp", destination: "/ai-bots/whatsapp", permanent: true },
      { source: "/chatbot-for-facebook", destination: "/ai-bots/facebook", permanent: true },
      { source: "/chatbot-for-websites", destination: "/ai-bots/websites", permanent: true },
      { source: "/chatbot-for-website", destination: "/ai-bots/websites", permanent: true },
      { source: "/chatbot-for-shopify", destination: "/ai-bots/shopify", permanent: true },
      { source: "/chatbot-for-woocommerce", destination: "/ai-bots/woocommerce", permanent: true },
      { source: "/chatbot-for-telegram", destination: "/ai-bots/telegram", permanent: true },

      // Solutions flat slugs -> nested
      { source: "/ai-agent/sales", destination: "/solutions/ai-sales-agents", permanent: true },
      { source: "/ai-agent/marketing", destination: "/solutions/ai-marketing-agents", permanent: true },
      { source: "/chatbot-for-marketing", destination: "/solutions/chatbot-for-marketing", permanent: true },
      { source: "/chatbot-for-sales", destination: "/solutions/chatbot-for-sales", permanent: true },
      { source: "/chatbot-for-lead-generation", destination: "/solutions/chatbot-for-lead-generation", permanent: true },
      { source: "/chatbot-for-customer-engagement", destination: "/solutions/chatbot-for-engagement", permanent: true },
      { source: "/chatbot-for-engagement", destination: "/solutions/chatbot-for-engagement", permanent: true },
      { source: "/chatbot-for-customer-support", destination: "/solutions/chatbot-for-customer-support", permanent: true },
      { source: "/chatbot-for-ecommerce", destination: "/solutions/chatbot-for-ecommerce", permanent: true },

      // Resources flat slugs -> nested
      { source: "/affiliate-partners", destination: "/resources/affiliate-partners", permanent: true },
      { source: "/blogs", destination: "/resources/blogs", permanent: true },
      { source: "/blog", destination: "/resources/blogs", permanent: true },
      { source: "/blogs/:slug", destination: "/resources/blogs/:slug", permanent: true },
      { source: "/blog/:slug", destination: "/resources/blogs/:slug", permanent: true },

      // Contact variants
      { source: "/contact-us", destination: "/contact", permanent: true },

      // Removed pricing page -> contact so old ad links still land
      { source: "/pricing", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
