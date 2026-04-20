import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Chat2Sales",
  description:
    "Boost revenue effortlessly with AI automation. Get a free live demo and consultation with the Chat2Sales team — based in Kuala Lumpur, Malaysia.",
};

const REQUIREMENTS = [
  "Affiliate Partner",
  "Custom ChatBot Development",
  "Others",
];

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

        <form className="rounded-3xl border border-ink-900/[0.08] bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-ink-900">Let&apos;s get in touch</h2>
          <p className="mt-2 text-sm text-ink-900/65">
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <div className="mt-6 grid gap-4">
            <Field label="Full Name" name="name" placeholder="Jane Doe" required />
            <Field label="Phone" name="phone" placeholder="+60 12 345 6789" required />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
            <label className="block">
              <span className="text-sm font-semibold text-ink-900">
                Select Your Requirement <span className="text-rose-500">*</span>
              </span>
              <select
                name="requirement"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              >
                <option value="" disabled>
                  Choose an option…
                </option>
                {REQUIREMENTS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-ink-900">
                Enter Your Message Below <span className="text-rose-500">*</span>
              </span>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about your use case…"
                className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
              />
            </label>
            <button type="submit" className="btn-primary mt-2 justify-center">
              Submit
            </button>
            <p className="text-xs text-ink-900/50">
              By submitting the form you agree to the Terms and Privacy Policy.
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
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink-900">
        {label} {required && <span className="text-rose-500">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm placeholder:text-ink-900/40 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </label>
  );
}
