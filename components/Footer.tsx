"use client";

import Logo from "./Logo";

const GROUPS = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "E-commerce", href: "#" },
      { label: "SaaS", href: "#" },
      { label: "Agencies", href: "#" },
      { label: "Real estate", href: "#" },
      { label: "Education", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Blog", href: "#" },
      { label: "Docs", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Prompt library", href: "#" },
      { label: "Community", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/[0.08] bg-ink-900 text-white">
      <div className="container-xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-bold">Chat2Sales</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              The AI sales agent for modern teams. Qualify every lead, book more
              meetings, and close deals around the clock.
            </p>
            <form
              className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>

          {GROUPS.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-white">{g.title}</h4>
              <ul className="mt-4 space-y-3">
                {g.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-sm text-white/65 transition hover:text-white"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Chat2Sales, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Security</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
