/* eslint-disable @next/next/no-img-element */

const CHANNELS = [
  {
    name: "WhatsApp",
    logo: "/images/channel-whatsapp.webp",
    body: "Automates replies, qualifies leads, and closes sales — all through personalized, human-like chats.",
  },
  {
    name: "Instagram",
    logo: "/images/channel-instagram.webp",
    body: "Replies instantly, follows up leads, and drives conversions — while you focus on creating content.",
  },
  {
    name: "Facebook Messenger",
    logo: "/images/channel-messenger.webp",
    body: "Engages instantly, answers FAQs, and books appointments 24/7 — boosting conversions and customer trust.",
  },
  {
    name: "Website Embed",
    logo: "/images/channel-website.webp",
    body: "A smart website widget that resolves FAQs, recommends products, and nudges checkout 24/7.",
  },
  {
    name: "Telegram",
    logo: "/images/channel-telegram.webp",
    body: "Builds a custom AI assistant that engages your audience and turns chats into loyal customers.",
  },
  {
    name: "WeChat",
    logo: "/images/channel-wechat.webp",
    body: "Connects, engages, and closes deals — delivering personalized experiences at every touchpoint.",
  },
];

export default function Channels() {
  return (
    <section id="channels" className="section bg-brand-50/40">
      <div className="container-xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Channels</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Sell smarter on every platform.
          </h2>
          <p className="mt-4 text-lg text-ink-900/70">
            From WhatsApp to Facebook to LINE, Chat2Sales helps you reply,
            follow up, and sell — automatically, all in one place. Add an AI
            chatbot to your website, LiveChat, Messenger, or Slack to handle
            all support cases 24/7.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c) => (
            <div key={c.name} className="card flex gap-4">
              <img
                src={c.logo}
                alt={c.name}
                className="h-12 w-12 flex-shrink-0 rounded-xl object-contain"
              />
              <div>
                <h3 className="text-base font-semibold text-ink-900">
                  {c.name}
                </h3>
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
            alt="Chat2Sales routes every conversation to the right tool"
            className="w-full max-w-3xl rounded-3xl border border-ink-900/[0.08] bg-white p-4 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
