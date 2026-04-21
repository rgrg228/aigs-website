/* eslint-disable @next/next/no-img-element */
import type { Dictionary } from "@/lib/i18n/types";

type PillarStyle = {
  image: string;
  gradient: string;
  ring: string;
  tagBg: string;
  tagText: string;
  glow: string;
};

const STYLES: PillarStyle[] = [
  {
    image: "/images/pillar-sales.webp",
    gradient: "from-amber-200/60 via-orange-100/40 to-transparent",
    ring: "ring-amber-400/25",
    tagBg: "bg-amber-500",
    tagText: "text-white",
    glow: "bg-amber-300/40",
  },
  {
    image: "/images/pillar-marketing.webp",
    gradient: "from-brand-200/60 via-brand-100/40 to-transparent",
    ring: "ring-brand-400/25",
    tagBg: "bg-brand-600",
    tagText: "text-white",
    glow: "bg-brand-300/40",
  },
  {
    image: "/images/pillar-customer-service.webp",
    gradient: "from-rose-200/60 via-pink-100/40 to-transparent",
    ring: "ring-rose-400/25",
    tagBg: "bg-rose-500",
    tagText: "text-white",
    glow: "bg-rose-300/40",
  },
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

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {dict.items.map((p, i) => {
            const style = STYLES[i % STYLES.length];
            return (
              <article
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${style.ring}`}
              >
                <div className={`relative h-60 overflow-hidden bg-gradient-to-b ${style.gradient}`}>
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-3xl opacity-60 transition duration-500 group-hover:opacity-90 ${style.glow}`}
                    aria-hidden="true"
                  />
                  <img
                    src={style.image}
                    alt={p.title}
                    className="relative z-10 mx-auto h-full w-auto object-contain transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="relative flex flex-1 flex-col p-7">
                  <span
                    className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-sm ${style.tagBg} ${style.tagText}`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold leading-snug text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-900/70">
                    {p.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
