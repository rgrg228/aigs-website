import ChatMockup from "./ChatMockup";

const LOGOS = ["Shopify", "Notion", "HubSpot", "Zapier", "Intercom", "Salesforce"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-grid" />
        <div className="blob absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-400" />
        <div className="blob absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-500" />
      </div>

      <div className="container-xl pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              New · AI Agents for WhatsApp and Instagram
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Turn every chat into a{" "}
              <span className="gradient-text">closed deal.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-900/70">
              Chat2Sales is the AI sales agent that qualifies leads, answers
              questions, books meetings, and checks out customers — on your
              website, WhatsApp, Instagram, and Messenger, 24/7.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#signup" className="btn-primary text-base">
                Start free — no card required
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.22 14.78a.75.75 0 010-1.06L10.94 10 7.22 6.28a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#demo" className="btn-secondary text-base">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch 2-min demo
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-ink-900/10 pt-8">
              <Stat value="+38%" label="Conversion lift" />
              <Stat value="4.9/5" label="G2 rating" />
              <Stat value="180+" label="Languages" />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-500/20 via-accent-500/20 to-transparent blur-2xl" />
            <ChatMockup />
          </div>
        </div>

        <div className="mt-20 border-t border-ink-900/10 pt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-900/50">
            Trusted by fast-growing teams
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {LOGOS.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-ink-900/40 transition hover:text-ink-900/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-ink-900/50">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-bold text-ink-900">{value}</dd>
    </div>
  );
}
