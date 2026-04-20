/* eslint-disable @next/next/no-img-element */

const PILLARS = [
  {
    tag: "Sales 💰",
    title: "AI Sales Agent",
    body: "Your always-on virtual sales assistant — automates lead generation, personalized conversations, and smart follow-ups with human-like precision, 24/7.",
    image: "/images/pillar-sales.webp",
    tint: "from-amber-100 to-orange-50",
  },
  {
    tag: "Marketing 🚀",
    title: "AI Marketing Agent",
    body: "Your always-on digital marketer — automates campaign management, personalized communication, and data-driven optimization to lift ROI.",
    image: "/images/pillar-marketing.webp",
    tint: "from-emerald-100 to-sky-50",
  },
  {
    tag: "Customer Service 💬",
    title: "AI Support Agent",
    body: "Combines AI and your team to respond instantly, solve problems, and boost satisfaction around the clock — on every channel.",
    image: "/images/pillar-customer-service.webp",
    tint: "from-rose-100 to-pink-50",
  },
];

export default function Pillars() {
  return (
    <section id="solutions" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Solutions</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Onboard a human-like AI team.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            From small businesses to large enterprises, Chat2Sales AI agents
            help you scale operations, reduce manual workload, and maximize
            profitability through intelligent automation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${p.tint}`}
              />
              <div className="relative flex h-56 items-center justify-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="relative mt-4">
                <span className="inline-flex rounded-full bg-ink-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
