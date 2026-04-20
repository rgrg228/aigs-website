"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What is Chat2Sales AI?",
    a: "Chat2Sales is your 24/7 AI sales assistant that replies to customers, books appointments, and follows up leads automatically across WhatsApp, Instagram, Website, Facebook, LINE, and more.",
  },
  {
    q: "Can I connect it to my existing accounts?",
    a: "Yes. Chat2Sales works with WhatsApp, Facebook, Instagram, LINE, WeChat, Telegram, and your website chat widget.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Not at all. We can 100% set up for you.",
  },
  {
    q: "Can the AI speak multiple languages?",
    a: "Yes. Chat2Sales supports over 50 languages, including English, Mandarin, Bahasa Malaysia, and Cantonese.",
  },
  {
    q: "Can I still chat manually if I want to?",
    a: "Of course. You can jump into any conversation anytime — your AI will pause automatically.",
  },
  {
    q: "Difference between an AI chatbot and a chatbot?",
    a: "A generative AI chatbot (Chat2Sales) is an advanced type of chatbot that uses artificial intelligence to create dynamic, human-like responses in real time rather than relying solely on predefined scripts or answers. Unlike rule-based bots, which can only respond with pre-programmed replies, a generative AI chatbot understands the context and meaning behind a user's input, and generates new and unique responses based on the conversation.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow">FAQs</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-ink-900/70">
              Still curious? We reply personally — usually within a few hours.
            </p>
            <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-brand-700">
              Contact us →
            </a>
          </div>

          <div className="divide-y divide-ink-900/10 rounded-3xl border border-ink-900/[0.08] bg-white">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={item.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base font-semibold text-ink-900">
                      {item.q}
                    </h3>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-ink-900/10 text-ink-900/70 transition ${
                        isOpen ? "rotate-45 bg-ink-900 text-white" : ""
                      }`}
                    >
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                        <path
                          fillRule="evenodd"
                          d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-900/70">
                      {item.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
