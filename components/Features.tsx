const FEATURES = [
  {
    title: "Generate 10x more leads",
    body:
      "Engage prospects instantly with smart AI chats that capture more leads — without extra ad spend.",
    icon: (
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 4v5.59l3.29 3.29-1.42 1.42L11 13.41V7h2z" />
    ),
  },
  {
    title: "Book 10x more appointments",
    body:
      "Qualify leads and auto-book meetings — even while you sleep.",
    icon: (
      <path d="M7 2v3H3v16h18V5h-4V2h-2v3H9V2H7zm12 7v11H5V9h14zm-9 3H7v3h3v-3zm4 0h-3v3h3v-3zm4 0h-3v3h3v-3z" />
    ),
  },
  {
    title: "Provide 24/7 instant support",
    body:
      "Combines AI and your team to respond instantly, solve problems, and boost satisfaction around the clock.",
    icon: (
      <path d="M12 2a10 10 0 00-10 10v5a3 3 0 003 3h2v-8H4v-.02A8 8 0 0120 12v.02h-3V20h2a3 3 0 003-3v-5a10 10 0 00-10-10z" />
    ),
  },
  {
    title: "Sell smarter on every platform",
    body:
      "From WhatsApp to Facebook to LINE, Chat2Sales helps you reply, follow up, and sell — automatically, all in one place.",
    icon: (
      <path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2h-3l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2zm3 4v2h10V8H7zm0 4v2h7v-2H7z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Chat2Sales</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Hire your first AI employee for a fraction of the cost.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            Chat2Sales replies to customers, follows up leads, and books
            appointments — just like your best staff, but works non-stop.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.title} className="card group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
