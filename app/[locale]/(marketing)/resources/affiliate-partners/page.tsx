import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Partners | Chat2Sales",
  description:
    "Become a Chat2Sales Affiliate Partner and earn up to 30% lifetime recurring commission promoting AI-powered chatbots.",
};

const PERKS = [
  {
    title: "Up to 30% recurring",
    body: "Earn up to 30% recurring commission — for life — on every license you help sell.",
  },
  {
    title: "Promote anywhere",
    body: "Share on social media, blogs, YouTube, or tech forums — wherever your audience lives.",
  },
  {
    title: "Product built to convert",
    body: "AI-powered chatbots that customers already want — sell the future of conversation.",
  },
  {
    title: "Dedicated support",
    body: "Our team backs you up with assets, playbooks, and real humans to help you close.",
  },
];

export default function AffiliatePartnersPage() {
  return (
    <section className="section">
      <div className="container-xl max-w-4xl">
        <div className="text-center">
          <span className="eyebrow">Affiliate Partners</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Become a Chatbot Affiliate Partner and earn up to 30% lifetime
            recurring commission.
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">
            Join the Chat2Sales Affiliate Program and promote AI-powered
            chatbots to your audience. Share on social media, blogs, YouTube,
            or tech forums — and earn up to 30% recurring commission for life
            on every license you help sell.
          </p>
          <a href="/contact" className="btn-primary mt-8">
            Contact Us To Know More
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PERKS.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-lg font-semibold text-ink-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
