const QUOTES = [
  {
    quote:
      "Ava books more qualified meetings than our two SDRs combined. It paid for itself in 11 days.",
    name: "Laura Chen",
    role: "VP Growth, Lumen HQ",
    initials: "LC",
  },
  {
    quote:
      "We plugged Chat2Sales into WhatsApp and revenue-per-conversation jumped 41%. Wild.",
    name: "Diego Romero",
    role: "Head of CX, Noma Outdoors",
    initials: "DR",
  },
  {
    quote:
      "The HubSpot sync is immaculate. Lead quality is finally better than the leads we buy.",
    name: "Amelia Patel",
    role: "RevOps Lead, Helix Labs",
    initials: "AP",
  },
  {
    quote:
      "Setup took 90 minutes. Ava closed its first deal the same afternoon.",
    name: "Jonas Weber",
    role: "Founder, Kitsune Studio",
    initials: "JW",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Loved by revenue teams</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            More pipeline, less payroll.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {QUOTES.map((q) => (
            <figure key={q.name} className="card">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M9.05 2.927a1 1 0 011.9 0l1.5 4.6a1 1 0 00.95.69h4.84a1 1 0 01.59 1.81l-3.92 2.85a1 1 0 00-.36 1.12l1.5 4.6a1 1 0 01-1.54 1.12L10 16.9l-3.92 2.85a1 1 0 01-1.54-1.12l1.5-4.6a1 1 0 00-.36-1.12L1.76 10.03a1 1 0 01.59-1.81h4.84a1 1 0 00.95-.69l1.5-4.6z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed text-ink-900">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                  {q.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{q.name}</p>
                  <p className="text-xs text-ink-900/60">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
