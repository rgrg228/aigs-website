"use client";

import Logo from "./Logo";

const GROUPS = [
  {
    title: "AI Bots",
    items: [
      { label: "AI Instagram Chatbot", href: "#" },
      { label: "AI WhatsApp Chatbot", href: "#" },
      { label: "AI Facebook Chatbot", href: "#" },
      { label: "AI Websites Chatbot", href: "#" },
      { label: "AI Shopify Chatbot", href: "#" },
      { label: "AI WooCommerce Chatbot", href: "#" },
      { label: "AI Telegram Chatbot", href: "#" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Chatbot for Marketing", href: "#" },
      { label: "Chatbot for Sales", href: "#" },
      { label: "Chatbot for Lead Generation", href: "#" },
      { label: "Chatbot for Engagement", href: "#" },
      { label: "Chatbot for Customer Support", href: "#" },
      { label: "Chatbot for Ecommerce", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "#" },
      { label: "Affiliate Partners", href: "#" },
      { label: "Blogs", href: "#" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink-900/[0.08] bg-ink-900 text-white">
      <div className="container-xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="rounded-xl bg-white p-3 inline-block">
              <Logo className="h-8" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              Empowering businesses with innovative solutions, we are committed
              to providing seamless support and fostering growth. Connect with
              us for a brighter, smarter future!
            </p>
            <div className="mt-6 space-y-1 text-sm text-white/80">
              <p className="font-semibold text-white">AI GROWTH SOLUTIONS</p>
              <p>Level 9, Tower B</p>
              <p>Menara UOA Bangsar 5,</p>
              <p>Jln. Bangsar Utama 1,</p>
              <p>59000 Kuala Lumpur,</p>
              <p>Wilayah Persekutuan</p>
              <p className="pt-2">
                <a
                  href="mailto:hello@chat2sales.ai"
                  className="font-semibold text-accent-300 hover:text-accent-400"
                >
                  hello@chat2sales.ai
                </a>
              </p>
            </div>
          </div>

          {GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-white">{g.title}</h4>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© AI Growth Solution {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
