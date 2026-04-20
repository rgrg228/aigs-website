const FEATURES = [
  {
    title: "AI that sounds like your best rep",
    body:
      "Train Ava on your website, docs, catalog, and past conversations. She answers with your voice, your pricing, your policies.",
    icon: (
      <path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5zm-7 9h2a5 5 0 0010 0h2a7 7 0 01-6 6.93V20h3v2H8v-2h3v-2.07A7 7 0 015 11z" />
    ),
  },
  {
    title: "Books meetings automatically",
    body:
      "Native calendar sync with Google & Outlook. Ava qualifies leads, picks the right rep, and books the meeting — all in chat.",
    icon: (
      <path d="M7 2v3H3v16h18V5h-4V2h-2v3H9V2H7zm12 7v11H5V9h14zm-9 3H7v3h3v-3zm4 0h-3v3h3v-3zm4 0h-3v3h3v-3z" />
    ),
  },
  {
    title: "Works on every channel",
    body:
      "One inbox for website chat, WhatsApp Business, Instagram DMs, Messenger, email, and SMS. No copy-paste, no lost threads.",
    icon: (
      <path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2h-3l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2zm3 4v2h10V8H7zm0 4v2h7v-2H7z" />
    ),
  },
  {
    title: "Native CRM handoff",
    body:
      "Push clean, enriched leads to HubSpot, Salesforce, Pipedrive, or Attio in real time — with full transcripts and intent scores.",
    icon: (
      <path d="M3 4h18v4H3V4zm0 6h12v4H3v-4zm0 6h18v4H3v-4z" />
    ),
  },
  {
    title: "Multilingual by default",
    body:
      "Sell in 180+ languages with one agent. Ava auto-detects the visitor's language and keeps the context across every message.",
    icon: (
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 015.6 2.3L6.3 17.6A8 8 0 0112 4zm0 16a8 8 0 01-5.6-2.3L17.7 6.4A8 8 0 0112 20z" />
    ),
  },
  {
    title: "Enterprise-grade privacy",
    body:
      "SOC 2 Type II, GDPR, HIPAA-ready. Data stays in your region. BYO-model, PII redaction, and audit logs included.",
    icon: (
      <path d="M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4zm0 4L5 8v4c0 4 3 7.4 7 8 4-.6 7-4 7-8V8l-7-2z" />
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Product</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            A full sales team, compressed into one AI agent.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            Ava qualifies, answers, recommends, and closes. You get the pipeline —
            without the headcount.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="card group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                {f.body}
              </p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition group-hover:opacity-100">
                Learn more
                <span aria-hidden>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
