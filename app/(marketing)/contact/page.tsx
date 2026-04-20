import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Chat2Sales",
  description:
    "Book a demo or get in touch with the Chat2Sales team — based in Kuala Lumpur, Malaysia.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-xl grid gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">
            Tell us about your business and we&apos;ll show you exactly how
            Chat2Sales can turn more conversations into closed deals.
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
              <p>Wilayah Persekutuan</p>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-ink-900/[0.08] bg-white p-8 shadow-sm">
          <div className="grid gap-4">
            <Field label="Your name" name="name" placeholder="Jane Doe" />
            <Field label="Work email" name="email" type="email" placeholder="jane@company.com" />
            <Field label="Company" name="company" placeholder="Acme Inc." />
            <Field label="Phone / WhatsApp" name="phone" placeholder="+60 12 345 6789" />
            <label className="block">
              <span className="text-sm font-semibold text-ink-900">How can we help?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your use case…"
                className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              />
            </label>
            <button type="submit" className="btn-primary mt-2 justify-center">
              Book a demo
            </button>
            <p className="text-xs text-ink-900/50">
              By submitting, you agree to our privacy policy. We usually reply
              within a few hours.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink-900">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </label>
  );
}
