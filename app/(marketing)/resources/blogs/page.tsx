import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Chat2Sales",
  description:
    "Insights, guides, and playbooks on AI sales agents, WhatsApp marketing, and conversational commerce.",
};

const POSTS = [
  {
    title: "How to cut response time to under 60 seconds with an AI sales agent",
    excerpt:
      "Speed-to-lead is the single biggest lever in conversion. Here's how to automate the first response without losing the human feel.",
    tag: "Playbook",
    date: "Mar 14, 2026",
  },
  {
    title: "WhatsApp Business API: the 2026 buyer's guide",
    excerpt:
      "Everything you need to know about pricing, compliance, and templates — without the jargon.",
    tag: "Guide",
    date: "Feb 28, 2026",
  },
  {
    title: "Recovering abandoned carts on WhatsApp: a 7-step flow",
    excerpt:
      "The exact sequence we use to recover 20–40% of abandoned carts for our Shopify customers.",
    tag: "E-commerce",
    date: "Feb 10, 2026",
  },
  {
    title: "Multilingual AI: should your bot pick the language or the visitor?",
    excerpt:
      "A short, practical breakdown with real data from Malaysian and SEA markets.",
    tag: "Research",
    date: "Jan 22, 2026",
  },
];

export default function BlogsPage() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Resources</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Chat2Sales Blog
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">
            Playbooks, guides, and research on AI-powered sales and support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {POSTS.map((p) => (
            <article key={p.title} className="card flex flex-col">
              <div className="flex items-center gap-3 text-xs font-semibold text-ink-900/55">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">
                  {p.tag}
                </span>
                <span>{p.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-ink-900">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-900/65">
                {p.excerpt}
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
