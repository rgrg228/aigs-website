import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Partners | Chat2Sales",
  description:
    "Earn recurring revenue by introducing Chat2Sales to agencies, coaches, and e-commerce teams.",
};

const PERKS = [
  {
    title: "30% recurring",
    body: "Earn 30% recurring commission on every customer for 12 months.",
  },
  {
    title: "90-day cookie",
    body: "Plenty of time for prospects to decide — you still get credit.",
  },
  {
    title: "Co-marketing",
    body: "We'll co-host webinars, share playbooks, and feature top partners.",
  },
  {
    title: "Dedicated manager",
    body: "A real human to help you close bigger deals, faster.",
  },
];

export default function AffiliatePartnersPage() {
  return (
    <section className="section">
      <div className="container-xl max-w-4xl">
        <div className="text-center">
          <span className="eyebrow">Affiliate Partners</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Earn with Chat2Sales.
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">
            Refer agencies, coaches, and e-commerce brands — earn recurring
            revenue every month they stay on Chat2Sales.
          </p>
          <a href="/contact" className="btn-primary mt-8">
            Apply to join
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
