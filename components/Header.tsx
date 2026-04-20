"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Product", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/[0.06] bg-white/80 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="text-lg font-bold tracking-tight text-ink-900">
            Chat2Sales
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-900/75 transition hover:bg-ink-900/[0.04] hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#login" className="btn-ghost">
            Sign in
          </a>
          <a href="#signup" className="btn-primary">
            Start free
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-5 w-5"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-900/[0.06] bg-white lg:hidden">
          <div className="container-xl flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-ink-900/80 hover:bg-ink-900/[0.04]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a href="#login" className="btn-secondary w-full">
                Sign in
              </a>
              <a href="#signup" className="btn-primary w-full">
                Start free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
