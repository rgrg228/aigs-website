"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "How quickly can I launch Chat2Sales?",
    a: "Most teams go live in under 90 minutes. Paste a snippet on your site, connect WhatsApp or Instagram, and Ava is ready to talk to customers.",
  },
  {
    q: "Do I need to write prompts or train a model?",
    a: "No. Point Ava at your website or docs and she indexes them automatically. You can optionally add playbooks to teach her your ICP, pricing, and objections.",
  },
  {
    q: "Which LLM powers Chat2Sales?",
    a: "By default we use a blend of frontier models (OpenAI, Anthropic, Google) with intelligent routing for cost and quality. Enterprise customers can BYO-model.",
  },
  {
    q: "Is my customer data safe?",
    a: "Yes. We are SOC 2 Type II certified, GDPR-compliant, and offer HIPAA BAAs. Data is encrypted at rest and in transit, and can be pinned to EU or US regions.",
  },
  {
    q: "Can Ava hand off to a human agent?",
    a: "Absolutely. You can set handoff rules by intent, deal size, or sentiment. Conversations route seamlessly to your team in our inbox, Slack, or Intercom.",
  },
  {
    q: "Does Chat2Sales work on WhatsApp Business?",
    a: "Yes — we are an official WhatsApp Business Solution Provider. Same for Instagram DMs, Messenger, SMS, and email.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-brand-50/40">
      <div className="container-xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              Questions, answered.
            </h2>
            <p className="mt-4 text-ink-900/70">
              Still curious? Our team replies in under 2 hours — usually faster.
            </p>
            <a href="#" className="mt-6 inline-flex text-sm font-semibold text-brand-600">
              Contact support →
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
