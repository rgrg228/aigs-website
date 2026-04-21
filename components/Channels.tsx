/* eslint-disable @next/next/no-img-element */
import type { Dictionary } from "@/lib/i18n/types";

type ChannelStyle = {
  logo: string;
  // gradient used as the logo chip background
  chipBg: string;
  // soft wash behind the whole card
  cardWash: string;
  ring: string;
  // animated accent bar at the bottom
  bar: string;
  glow: string;
};

const STYLES: ChannelStyle[] = [
  // WhatsApp
  {
    logo: "/images/channel-whatsapp.webp",
    chipBg: "bg-[#25D366]/10",
    cardWash: "from-emerald-400/10 via-emerald-200/5 to-transparent",
    ring: "ring-emerald-500/15 hover:ring-emerald-500/40",
    bar: "bg-[#25D366]",
    glow: "bg-[#25D366]/25",
  },
  // Instagram
  {
    logo: "/images/channel-instagram.webp",
    chipBg: "bg-gradient-to-br from-[#F58529]/15 via-[#DD2A7B]/15 to-[#8134AF]/15",
    cardWash:
      "from-[#DD2A7B]/10 via-[#F58529]/5 to-transparent",
    ring: "ring-[#DD2A7B]/15 hover:ring-[#DD2A7B]/40",
    bar: "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    glow: "bg-[#DD2A7B]/25",
  },
  // Facebook Messenger
  {
    logo: "/images/channel-messenger.webp",
    chipBg: "bg-[#0084FF]/10",
    cardWash: "from-[#0084FF]/10 via-[#0084FF]/5 to-transparent",
    ring: "ring-[#0084FF]/15 hover:ring-[#0084FF]/40",
    bar: "bg-[#0084FF]",
    glow: "bg-[#0084FF]/25",
  },
  // Website Embed
  {
    logo: "/images/channel-website.webp",
    chipBg: "bg-brand-500/10",
    cardWash: "from-brand-500/10 via-brand-300/5 to-transparent",
    ring: "ring-brand-500/15 hover:ring-brand-500/40",
    bar: "bg-brand-600",
    glow: "bg-brand-400/25",
  },
  // Telegram
  {
    logo: "/images/channel-telegram.webp",
    chipBg: "bg-[#0088CC]/10",
    cardWash: "from-sky-500/10 via-cyan-300/5 to-transparent",
    ring: "ring-sky-500/15 hover:ring-sky-500/40",
    bar: "bg-[#0088CC]",
    glow: "bg-sky-400/25",
  },
  // WeChat
  {
    logo: "/images/channel-wechat.webp",
    chipBg: "bg-[#07C160]/10",
    cardWash: "from-[#07C160]/10 via-emerald-200/5 to-transparent",
    ring: "ring-[#07C160]/15 hover:ring-[#07C160]/40",
    bar: "bg-[#07C160]",
    glow: "bg-[#07C160]/25",
  },
];

export default function Channels({ dict }: { dict: Dictionary["channels"] }) {
  return (
    <section id="channels" className="section bg-brand-50/40">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">{dict.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dict.items.map((c, i) => {
            const style = STYLES[i % STYLES.length];
            return (
              <article
                key={c.name}
                className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-7 ring-1 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${style.ring}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${style.cardWash}`}
                  aria-hidden="true"
                />
                <div
                  className={`pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition duration-500 group-hover:opacity-100 ${style.glow}`}
                  aria-hidden="true"
                />

                <div className="relative flex items-start gap-4">
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${style.chipBg} shadow-sm ring-1 ring-white/60 transition duration-300 group-hover:scale-105`}
                  >
                    <img
                      src={style.logo}
                      alt={c.name}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-ink-900">
                      {c.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-900/65">
                      {c.body}
                    </p>
                  </div>
                </div>

                <span
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${style.bar}`}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <img
            src="/images/multichannel.webp"
            alt={dict.multichannelAlt}
            className="w-full max-w-3xl rounded-3xl border border-ink-900/[0.08] bg-white p-4 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
