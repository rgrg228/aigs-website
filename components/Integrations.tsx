const INTEGRATIONS = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Shopify",
  "WooCommerce",
  "WhatsApp",
  "Instagram",
  "Messenger",
  "Slack",
  "Zapier",
  "Notion",
  "Google Cal",
  "Outlook",
  "Stripe",
  "Intercom",
  "Zendesk",
];

export default function Integrations() {
  return (
    <section id="integrations" className="section bg-ink-900 text-white">
      <div className="container-xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
              Integrations
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Plugs into the tools you already{" "}
              <span className="gradient-text">live in.</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              One-click connections to your CRM, calendar, help-desk, and
              e-commerce stack. Ava reads your catalog, your deals, and your
              docs — and pushes every conversation where it belongs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#signup" className="btn-primary">
                Connect your stack
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
              >
                View all 50+ integrations →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {INTEGRATIONS.map((name, i) => (
              <div
                key={name}
                className={`flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs font-semibold text-white/80 transition hover:border-white/20 hover:bg-white/10 ${
                  i % 5 === 0 ? "col-span-2 aspect-[2/1]" : ""
                }`}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
