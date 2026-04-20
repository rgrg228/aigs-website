const STEPS = [
  {
    n: "01",
    title: "Connect your knowledge",
    body:
      "Point Ava at your website, PDFs, docs, and Shopify catalog. She indexes it in minutes — no prompt engineering required.",
  },
  {
    n: "02",
    title: "Set your playbook",
    body:
      "Teach Ava your ICP, pricing, objections, and handoff rules. Every answer stays on-brand and on-script.",
  },
  {
    n: "03",
    title: "Launch on every channel",
    body:
      "Drop a snippet on your website or connect WhatsApp & Instagram. Ava is live — qualifying, booking, and closing.",
  },
  {
    n: "04",
    title: "Measure & improve",
    body:
      "See conversion, AOV, and revenue-per-chat in one dashboard. Weekly coaching suggestions keep Ava sharp.",
  },
];

export default function HowItWorks() {
  return (
    <section id="use-cases" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Live in one afternoon.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            No code, no dev team, no long implementation. Most customers go from
            signup to first closed deal in under 24 hours.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-ink-900/[0.08] bg-gradient-to-b from-white to-brand-50/40 p-6"
            >
              <div className="text-sm font-bold text-brand-600">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                {s.body}
              </p>
              {i < STEPS.length - 1 && (
                <div className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 lg:block">
                  <svg
                    className="h-5 w-5 text-ink-900/20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.22 14.78a.75.75 0 010-1.06L10.94 10 7.22 6.28a.75.75 0 111.06-1.06l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
