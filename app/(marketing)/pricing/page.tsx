import type { Metadata } from "next";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing | Chat2Sales",
  description:
    "Simple plans in MYR — AI Lite, AI Smart, and AI Master. No hidden cost. No markup cost (Meta charges). No contract period.",
};

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-ink-900/[0.06]">
        <div className="container-xl pb-10 pt-16 sm:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Pricing</span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              We have multiple plans for your growth.
            </h1>
            <p className="mt-4 text-lg text-ink-900/70">
              No hidden cost. No markup cost (Meta charges). No contract period.
            </p>
          </div>
        </div>
      </section>
      <Pricing />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}
