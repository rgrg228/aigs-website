/* eslint-disable @next/next/no-img-element */
import type { Dictionary } from "@/lib/i18n/types";

type CardStyle = {
  colSpan: string;
  gradient: string;
  ring: string;
  badge: string;
  accent: string;
};

const STYLES: CardStyle[] = [
  {
    colSpan: "md:col-span-7",
    gradient: "from-brand-500/15 via-brand-500/5 to-transparent",
    ring: "ring-brand-500/20",
    badge: "bg-brand-600 text-white",
    accent: "text-brand-600",
  },
  {
    colSpan: "md:col-span-5",
    gradient: "from-amber-400/15 via-rose-300/10 to-transparent",
    ring: "ring-amber-400/20",
    badge: "bg-amber-500 text-white",
    accent: "text-amber-600",
  },
  {
    colSpan: "md:col-span-5",
    gradient: "from-emerald-400/20 via-teal-300/10 to-transparent",
    ring: "ring-emerald-400/25",
    badge: "bg-emerald-600 text-white",
    accent: "text-emerald-600",
  },
  {
    colSpan: "md:col-span-7",
    gradient: "from-violet-500/15 via-fuchsia-400/10 to-transparent",
    ring: "ring-violet-500/20",
    badge: "bg-violet-600 text-white",
    accent: "text-violet-600",
  },
];

const CHANNEL_LOGOS = [
  "/images/channel-whatsapp.webp",
  "/images/channel-instagram.webp",
  "/images/channel-messenger.webp",
  "/images/channel-website.webp",
  "/images/channel-telegram.webp",
  "/images/channel-wechat.webp",
];

export default function Features({ dict }: { dict: Dictionary["features"] }) {
  return (
    <section id="features" className="section">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">{dict.subtitle}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-12">
          {dict.items.map((item, i) => {
            const style = STYLES[i % STYLES.length];
            return (
              <article
                key={item.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${style.ring} ${style.colSpan}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.gradient}`}
                  aria-hidden="true"
                />
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/40 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-3">
                  <span
                    className={`inline-flex h-7 items-center justify-center rounded-full px-2.5 text-[11px] font-bold uppercase tracking-wider ${style.badge}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-900/45">
                    {dict.eyebrow}
                  </span>
                </div>

                <h3 className="relative mt-6 text-2xl font-bold leading-tight tracking-tight text-ink-900 sm:text-3xl">
                  {item.title}
                </h3>
                <p className="relative mt-3 max-w-lg text-[15px] leading-relaxed text-ink-900/70">
                  {item.body}
                </p>

                <div className="relative mt-auto pt-8">
                  <Visual index={i} accent={style.accent} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Visual({ index, accent }: { index: number; accent: string }) {
  if (index === 0) return <ChatBubbles accent={accent} />;
  if (index === 1) return <MoonClock accent={accent} />;
  if (index === 2) return <BigPercent accent={accent} />;
  return <ChannelRow />;
}

function ChatBubbles({ accent }: { accent: string }) {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex items-start gap-2">
        <div className={`inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-ink-900/5 ${accent}`}>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M4 4h16a2 2 0 012 2v9a2 2 0 01-2 2h-3l-5 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
          </svg>
        </div>
        <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-sm text-ink-900 ring-1 ring-ink-900/5">
          <span className="inline-flex gap-0.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-500 [animation-delay:240ms]" />
          </span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-2xl rounded-br-sm bg-brand-600 px-3 py-2 text-xs font-medium text-white shadow-sm">
          Hey, is this in stock?
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-semibold text-ink-900/70 ring-1 ring-ink-900/5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Replied in 0.8s
        </span>
      </div>
    </div>
  );
}

function MoonClock({ accent }: { accent: string }) {
  return (
    <div className="flex items-end justify-between">
      <div className="rounded-2xl bg-white p-4 ring-1 ring-ink-900/5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-900/45">
          Next booking
        </p>
        <p className="mt-1 text-xl font-bold text-ink-900">Tomorrow · 2:00 PM</p>
        <p className="mt-1 text-[11px] text-ink-900/55">Booked at 02:14 AM</p>
      </div>
      <svg viewBox="0 0 64 64" className={`h-16 w-16 flex-shrink-0 ${accent}`} fill="currentColor" aria-hidden="true">
        <path d="M42 8a24 24 0 1014 30A20 20 0 0142 8z" opacity=".15" />
        <path d="M42 8a24 24 0 1014 30A20 20 0 0142 8zm4.24 26.7a15.8 15.8 0 01-21 12.48 19 19 0 0021-21 15.68 15.68 0 010 8.52z" />
      </svg>
    </div>
  );
}

function BigPercent({ accent }: { accent: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className={`text-6xl font-black tracking-tighter ${accent} sm:text-7xl`}>
        80%
      </span>
      <div className="text-right">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-900/45">
          Fewer tickets
        </p>
        <p className="mt-1 text-xs font-medium text-ink-900/70">Hands back to your team</p>
      </div>
    </div>
  );
}

function ChannelRow() {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {CHANNEL_LOGOS.map((src, i) => (
        <div
          key={src}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white ring-1 ring-ink-900/5 shadow-sm"
          style={{ transform: `translateY(${i % 2 === 0 ? "0px" : "4px"})` }}
        >
          <img src={src} alt="" className="h-6 w-6 object-contain" />
        </div>
      ))}
    </div>
  );
}
