"use client";

import { useState } from "react";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  highlight?: boolean;
  features: string[];
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "For solo founders testing the waters.",
    monthly: 49,
    yearly: 39,
    features: [
      "1,000 AI conversations / mo",
      "Website chat widget",
      "1 channel connection",
      "Email support",
      "Basic analytics",
    ],
    cta: "Start free",
  },
  {
    name: "Growth",
    tagline: "The most popular plan for scaling teams.",
    monthly: 149,
    yearly: 119,
    highlight: true,
    features: [
      "10,000 AI conversations / mo",
      "WhatsApp, Instagram & Messenger",
      "HubSpot & Salesforce sync",
      "Calendar booking",
      "5 team seats",
      "Priority support",
    ],
    cta: "Start 14-day trial",
  },
  {
    name: "Scale",
    tagline: "For high-volume stores and B2B teams.",
    monthly: 399,
    yearly: 319,
    features: [
      "50,000 AI conversations / mo",
      "All channels + SMS & voice",
      "Unlimited integrations",
      "Advanced playbooks & A/B",
      "SSO, SCIM, audit logs",
      "Dedicated CSM",
    ],
    cta: "Talk to sales",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pricing</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Pays for itself in the first week.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            Simple, usage-friendly plans. Start free — no credit card required.
          </p>

          <div className="mx-auto mt-8 inline-flex items-center rounded-full border border-ink-900/10 bg-white p-1">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition ${
                !yearly ? "bg-ink-900 text-white" : "text-ink-900/70"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition ${
                yearly ? "bg-ink-900 text-white" : "text-ink-900/70"
              }`}
            >
              Yearly
              <span className="ml-1 rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
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
                  className={`text-5xl font-extrabold tracking-tight ${
                    plan.highlight ? "text-white" : "text-ink-900"
                  }`}
                >
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight ? "text-white/70" : "text-ink-900/55"
                  }`}
                >
                  / mo
                </span>
              </div>
              {yearly && (
                <p
                  className={`mt-1 text-xs ${
                    plan.highlight ? "text-white/70" : "text-ink-900/50"
                  }`}
                >
                  Billed ${plan.yearly * 12} yearly
                </p>
              )}
              <a
                href="#signup"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-brand-700 hover:bg-white/90"
                    : "bg-ink-900 text-white hover:bg-ink-800"
                }`}
              >
                {plan.cta}
              </a>
              <ul className="mt-8 space-y-3 text-sm">
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
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-900/60">
          Need something custom? <a href="#" className="font-semibold text-brand-600 hover:underline">Talk to sales →</a>
        </p>
      </div>
    </section>
  );
}
