import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Chat2Sales",
  description:
    "Insights and strategies to grow your business with AI chatbots.",
};

export default function BlogsPage() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Resources</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Insights and Strategies to Grow Your Business with AI Chatbots
          </h1>
          <p className="mt-4 text-lg text-ink-900/70">
            Playbooks, guides, and research on AI-powered sales, marketing, and
            support — coming soon.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-dashed border-ink-900/15 bg-white/60 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ink-900/55">
            Blog
          </p>
          <p className="mt-2 text-2xl font-bold text-ink-900">
            No blogs found.
          </p>
          <p className="mt-3 text-sm text-ink-900/65">
            We&apos;re working on our first articles. In the meantime, reach out
            if you have a topic you&apos;d like us to cover.
          </p>
          <a href="/contact" className="btn-primary mt-6">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
