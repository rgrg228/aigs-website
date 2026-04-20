const CASES = [
  {
    tag: "E-commerce",
    title: "Recover 32% more carts, without discount codes.",
    body:
      "Ava proactively engages hesitating shoppers, answers sizing and shipping questions, and checks them out right in the chat.",
    metric: "+32%",
    metricLabel: "Cart recovery",
    color: "from-brand-500/15 to-accent-500/10",
  },
  {
    tag: "B2B SaaS",
    title: "5x more qualified demos on the calendar.",
    body:
      "Ava runs your MEDDICC questions inline, enriches with Clearbit, and auto-assigns to the right AE with context attached.",
    metric: "5×",
    metricLabel: "Booked demos",
    color: "from-accent-500/15 to-brand-500/10",
  },
  {
    tag: "Real estate",
    title: "Never miss a late-night inquiry.",
    body:
      "Ava books property viewings, answers listing questions in 180+ languages, and warms leads before the agent even wakes up.",
    metric: "24/7",
    metricLabel: "Response time",
    color: "from-brand-400/15 to-emerald-400/10",
  },
];

export default function UseCases() {
  return (
    <section className="section bg-brand-50/40">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Use cases</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Built for teams that sell.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <div
              key={c.title}
              className={`group relative overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${c.color} opacity-60`}
              />
              <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100">
                {c.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold text-ink-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/70">
                {c.body}
              </p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-extrabold text-ink-900">
                    {c.metric}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-900/55">
                    {c.metricLabel}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
                >
                  Read story →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
