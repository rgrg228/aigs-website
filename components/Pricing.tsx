"use client";

import { useState } from "react";

type Cycle = "monthly" | "yearly";

type Plan = {
  name: string;
  tagline: string;
  monthlyMYR: number;
  yearlyMYR: number;
  highlight?: boolean;
  cta: string;
  bullets: { label: string; value: string }[];
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "AI Lite",
    tagline: "For individuals just getting started with chatbots.",
    monthlyMYR: 499,
    yearlyMYR: 4999,
    cta: "Let's Try It Out",
    bullets: [
      { label: "Messages", value: "30,000" },
      { label: "Team members", value: "1" },
      { label: "Contacts", value: "1,000" },
      { label: "Agents", value: "1" },
      { label: "Conversation history", value: "30 days" },
    ],
    features: [
      "Multilingual chatbot",
      "Unified Inbox",
      "Auto reply",
      "Appointment booking",
      "Tutorial documentation",
      "Self setup",
    ],
  },
  {
    name: "AI Smart",
    tagline: "For businesses enhancing comms on WhatsApp, Facebook, website & more.",
    monthlyMYR: 699,
    yearlyMYR: 6999,
    highlight: true,
    cta: "Let's Try It Out",
    bullets: [
      { label: "Messages", value: "Unlimited" },
      { label: "Team members", value: "5" },
      { label: "Contacts", value: "3,000" },
      { label: "Agents", value: "3" },
      { label: "Conversation history", value: "90 days" },
    ],
    features: [
      "Everything in AI Lite",
      "iOS & Android apps",
      "AI Sales Flow",
      "FB & IG automation",
      "Customer tagging",
      "Senior tech manager",
    ],
  },
  {
    name: "AI Master",
    tagline: "For teams needing fully custom chatbots with unlimited updates.",
    monthlyMYR: 1499,
    yearlyMYR: 14999,
    cta: "Contact Us",
    bullets: [
      { label: "Messages", value: "50,000" },
      { label: "Team members", value: "10" },
      { label: "Contacts", value: "50,000" },
      { label: "Agents", value: "5" },
      { label: "Conversation history", value: "90 days" },
    ],
    features: [
      "Everything in AI Smart",
      "Fully custom built",
      "Unlimited future updates",
    ],
  },
];

const formatMYR = (amount: number) =>
  new Intl.NumberFormat("en-MY", { maximumFractionDigits: 0 }).format(amount);

export default function Pricing() {
  const [cycle, setCycle] = useState<Cycle>("yearly");

  return (
    <section id="pricing" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Multiple plans for your growth.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            No hidden cost. No markup cost (Meta charges). No contract period.
          </p>

          <div className="mx-auto mt-8 inline-flex items-center rounded-full border border-ink-900/10 bg-white p-1">
            <button
              onClick={() => setCycle("monthly")}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition ${
                cycle === "monthly" ? "bg-ink-900 text-white" : "text-ink-900/70"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setCycle("yearly")}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition ${
                cycle === "yearly" ? "bg-ink-900 text-white" : "text-ink-900/70"
              }`}
            >
              Yearly
              <span className="ml-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                Free 2 months
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => {
            const amount = cycle === "yearly" ? plan.yearlyMYR : plan.monthlyMYR;
            const suffix = cycle === "yearly" ? "/year" : "/month";
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.highlight
                    ? "border-transparent bg-gradient-to-b from-brand-600 to-accent-600 text-white shadow-glow"
                    : "border-ink-900/[0.08] bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 shadow-sm">
                    Most popular
                  </span>
                )}
                <h3
                  className={`text-xl font-bold ${
                    plan.highlight ? "text-white" : "text-ink-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlight ? "text-white/80" : "text-ink-900/65"
                  }`}
                >
                  {plan.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`text-3xl font-extrabold tracking-tight ${
                      plan.highlight ? "text-white" : "text-ink-900"
                    }`}
                  >
                    RM{formatMYR(amount)}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-white/70" : "text-ink-900/55"
                    }`}
                  >
                    {suffix}
                  </span>
                </div>
                <a
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-brand-700 hover:bg-white/90"
                      : "bg-ink-900 text-white hover:bg-ink-800"
                  }`}
                >
                  {plan.cta}
                </a>

                <dl
                  className={`mt-8 grid grid-cols-2 gap-x-4 gap-y-2 border-t pt-6 text-sm ${
                    plan.highlight ? "border-white/20" : "border-ink-900/10"
                  }`}
                >
                  {plan.bullets.map((b) => (
                    <div key={b.label}>
                      <dt
                        className={`text-xs font-semibold uppercase tracking-wide ${
                          plan.highlight ? "text-white/60" : "text-ink-900/50"
                        }`}
                      >
                        {b.label}
                      </dt>
                      <dd
                        className={`mt-0.5 font-semibold ${
                          plan.highlight ? "text-white" : "text-ink-900"
                        }`}
                      >
                        {b.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                          plan.highlight ? "text-white" : "text-brand-600"
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 111.4-1.4L8 12.6l7.3-7.3a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={
                          plan.highlight ? "text-white/90" : "text-ink-900/75"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink-900/60">
          Need something custom?{" "}
          <a href="/contact" className="font-semibold text-brand-600 hover:underline">
            Talk to us →
          </a>
        </p>
      </div>
    </section>
  );
}
