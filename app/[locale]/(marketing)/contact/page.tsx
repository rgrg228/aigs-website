import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Chat2Sales",
  description:
    "Boost revenue effortlessly with AI automation. Get a free live demo and consultation with the Chat2Sales team — based in Kuala Lumpur, Malaysia.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-xl grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact Us</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Boost Revenue Effortlessly with AI Automation.
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">
            Engage customers instantly across WhatsApp, Instagram, and your
            website while driving more conversions on autopilot.
          </p>
          <p className="mt-4 text-base text-ink-900/70">
            Get a free live demo and consultation call with our experts. Boost
            your revenue up to 2x with enhanced client engagement.
          </p>

          <div className="mt-10 space-y-6 text-sm text-ink-900/80">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-900/55">
                Email
              </p>
              <a
                href="mailto:hello@chat2sales.ai"
                className="mt-1 inline-block text-lg font-semibold text-brand-700 hover:underline"
              >
                hello@chat2sales.ai
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-900/55">
                Office
              </p>
              <p className="mt-1 font-semibold text-ink-900">AI Growth Solutions</p>
              <p>Level 9, Tower B</p>
              <p>Menara UOA Bangsar 5,</p>
              <p>Jln. Bangsar Utama 1,</p>
              <p>59000 Kuala Lumpur,</p>
              <p>Wilayah Persekutuan, Malaysia</p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
