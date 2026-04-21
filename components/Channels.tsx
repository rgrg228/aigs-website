/* eslint-disable @next/next/no-img-element */
import type { Dictionary } from "@/lib/i18n/types";

const LOGOS = [
  "/images/channel-whatsapp.webp",
  "/images/channel-instagram.webp",
  "/images/channel-messenger.webp",
  "/images/channel-website.webp",
  "/images/channel-telegram.webp",
  "/images/channel-wechat.webp",
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
          {dict.items.map((c, i) => (
            <div key={c.name} className="card flex gap-4">
              <img
                src={LOGOS[i % LOGOS.length]}
                alt={c.name}
                className="h-12 w-12 flex-shrink-0 rounded-xl object-contain"
              />
              <div>
                <h3 className="text-base font-semibold text-ink-900">{c.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-900/65">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
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
