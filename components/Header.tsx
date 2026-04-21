"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV: { label: string; items: { label: string; href: string }[] }[] = [
  {
    label: "AI Bots",
    items: [
      { label: "AI Instagram Chatbot", href: "/ai-bots/instagram" },
      { label: "AI WhatsApp Chatbot", href: "/ai-bots/whatsapp" },
      { label: "AI Facebook Chatbot", href: "/ai-bots/facebook" },
      { label: "AI Websites Chatbot", href: "/ai-bots/websites" },
      { label: "AI Shopify Chatbot", href: "/ai-bots/shopify" },
      { label: "AI WooCommerce Chatbot", href: "/ai-bots/woocommerce" },
      { label: "AI Telegram Chatbot", href: "/ai-bots/telegram" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "AI Sales Agents Chatbot", href: "/solutions/ai-sales-agents" },
      { label: "AI Marketing Agents Chatbot", href: "/solutions/ai-marketing-agents" },
      { label: "Chatbot for Marketing", href: "/solutions/chatbot-for-marketing" },
      { label: "Chatbot for Sales", href: "/solutions/chatbot-for-sales" },
      { label: "Chatbot for Lead Generation", href: "/solutions/chatbot-for-lead-generation" },
      { label: "Chatbot for Engagement", href: "/solutions/chatbot-for-engagement" },
      { label: "Chatbot for Customer Support", href: "/solutions/chatbot-for-customer-support" },
      { label: "Chatbot for Ecommerce", href: "/solutions/chatbot-for-ecommerce" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Affiliate Partners", href: "/resources/affiliate-partners" },
      { label: "Blogs", href: "/resources/blogs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/[0.06] bg-white/85 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-8" />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="/pricing"
            className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-900/75 transition hover:bg-brand-50 hover:text-brand-700"
          >
            Pricing
          </a>
          {NAV.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setDropdown(group.label)}
              onMouseLeave={() => setDropdown(null)}
            >
              <button
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-900/75 transition hover:bg-brand-50 hover:text-brand-700"
                type="button"
              >
                {group.label}
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 4l4 4 4-4z" />
                </svg>
              </button>
              {dropdown === group.label && (
                <div className="absolute left-0 top-full w-64 rounded-2xl border border-ink-900/[0.08] bg-white p-2 shadow-lg">
                  {group.items.map((i) => (
                    <a
                      key={i.label}
                      href={i.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-900/75 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="/contact" className="btn-ghost">
            Contact
          </a>
          <a href="/contact" className="btn-primary">
            Book a demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/[0.06] bg-white lg:hidden">
          <div className="container-xl flex flex-col gap-1 py-4">
            <a
              href="/pricing"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-ink-900 hover:bg-brand-50"
            >
              Pricing
            </a>
            {NAV.map((group) => (
              <details key={group.label} className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-ink-900 hover:bg-brand-50">
                  {group.label}
                  <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4z" />
                  </svg>
                </summary>
                <div className="ml-2 flex flex-col gap-1 py-1">
                  {group.items.map((i) => (
                    <a
                      key={i.label}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-2 text-sm text-ink-900/70 hover:bg-brand-50"
                    >
                      {i.label}
                    </a>
                  ))}
                </div>
              </details>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a href="/contact" className="btn-secondary w-full">
                Contact
              </a>
              <a href="/contact" className="btn-primary w-full">
                Book a demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
