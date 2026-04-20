import ChatMockup from "./ChatMockup";

const STATS = [
  { v: "10x", l: "More leads" },
  { v: "90%", l: "Queries solved" },
  { v: "70%", l: "More engagement" },
  { v: "90%", l: "More revenue" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-grid" />
        <div className="blob absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-400" />
        <div className="blob absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-400" />
      </div>

      <div className="container-xl pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              Meta Business Partner · Google Partner
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              Turn every chat into a{" "}
              <span className="gradient-text">closed deal.</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-ink-900/80">
              Turning Every Conversation Into Sales.
            </p>
            <p className="mt-3 max-w-xl text-lg text-ink-900/65">
              AI Chatbot for WhatsApp, Facebook, Instagram, Website, Telegram &amp;
              more — Chat2Sales replies to customers, follows up leads, and books
              appointments, just like your best staff but works non-stop.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/contact" className="btn-primary text-base">
                Book a demo
                <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.22 14.78a.75.75 0 010-1.06L10.94 10 7.22 6.28a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#features" className="btn-secondary text-base">
                Let&apos;s Try It Out
              </a>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-6 border-t border-ink-900/10 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.l}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink-900/50">
                    {s.l}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold text-ink-900">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-500/20 via-accent-400/20 to-transparent blur-2xl" />
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
