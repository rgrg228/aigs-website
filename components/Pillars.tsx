/* eslint-disable @next/next/no-img-element */
import type { Dictionary } from "@/lib/i18n/types";

const IMAGES = [
  "/images/pillar-sales.webp",
  "/images/pillar-marketing.webp",
  "/images/pillar-customer-service.webp",
];
const TINTS = [
  "from-amber-100 to-orange-50",
  "from-emerald-100 to-sky-50",
  "from-rose-100 to-pink-50",
];

export default function Pillars({ dict }: { dict: Dictionary["pillars"] }) {
  return (
    <section id="solutions" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">{dict.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {dict.items.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${TINTS[i % TINTS.length]}`}
              />
              <div className="relative flex h-56 items-center justify-center">
                <img
                  src={IMAGES[i % IMAGES.length]}
                  alt={p.title}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="relative mt-4">
                <span className="inline-flex rounded-full bg-ink-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-900/65">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
