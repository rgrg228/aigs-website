import type { Dictionary } from "@/lib/i18n/types";

export default function ChatMockup({
  dict,
}: {
  dict: Dictionary["chatMockup"];
}) {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-ink-900/[0.06] bg-white/70 px-5 py-3.5 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-accent-500 p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-sm font-bold text-brand-600">
              C2
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">{dict.agentName}</p>
            <p className="text-xs text-ink-900/55">{dict.status}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="space-y-4 bg-gradient-to-b from-brand-50/60 to-white px-5 py-6">
        {dict.bubbles.map((b, i) => (
          <Bubble key={i} from={b.from} typing={b.typing}>
            {b.text}
          </Bubble>
        ))}

        <div className="rounded-2xl border border-ink-900/10 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
            {dict.recommended}
          </p>
          <p className="mt-1 text-lg font-bold text-ink-900">
            {dict.recommendedTitle}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-ink-900/70">
            {dict.recommendedBullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <button className="mt-3 w-full rounded-full bg-brand-600 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            {dict.recommendedCta}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-ink-900/[0.06] bg-white px-4 py-3">
        <input
          className="flex-1 rounded-full bg-ink-900/[0.04] px-4 py-2 text-sm placeholder:text-ink-900/40 focus:outline-none"
          placeholder={dict.inputPlaceholder}
          readOnly
        />
        <button className="rounded-full bg-brand-600 p-2 text-white hover:bg-brand-700">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3.105 3.105a1.5 1.5 0 011.628-.334l13.5 5.5a1.5 1.5 0 010 2.78l-13.5 5.5a1.5 1.5 0 01-2.044-1.69l.94-4.231a1.5 1.5 0 011.17-1.144L10 10 4.8 8.514a1.5 1.5 0 01-1.17-1.144l-.94-4.231a1.5 1.5 0 01.415-1.034z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Bubble({
  from,
  children,
  typing,
}: {
  from: "bot" | "user";
  children: React.ReactNode;
  typing?: boolean;
}) {
  const isBot = from === "bot";
  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
          isBot
            ? "rounded-bl-sm bg-white text-ink-900"
            : "rounded-br-sm bg-brand-600 text-white"
        }`}
      >
        {typing && (
          <span className="mr-1 inline-flex items-center gap-0.5 align-middle">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400 [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-400 [animation-delay:240ms]" />
          </span>
        )}
        {children}
      </div>
    </div>
  );
}
