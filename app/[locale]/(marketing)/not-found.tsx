import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/href";

const COPY: Record<Locale, {
  eyebrow: string;
  title: string;
  body: string;
  home: string;
  whatsapp: string;
}> = {
  en: {
    eyebrow: "404 · Not found",
    title: "This page went offline.",
    body:
      "The link might be broken, or the page may have moved. Head back home and we'll get you sorted, or message us on WhatsApp, we reply in a minute.",
    home: "Back to home",
    whatsapp: "Chat on WhatsApp",
  },
  zh: {
    eyebrow: "404 · 未找到",
    title: "这个页面暂时离线了。",
    body:
      "链接可能坏了，或者页面已经移动。点下面回到首页，我们帮你搞定，也可以直接在 WhatsApp 上找我们，一分钟内回复。",
    home: "回到首页",
    whatsapp: "WhatsApp 联系",
  },
};

function resolveLocale(): Locale {
  const headerList = headers();
  const url = headerList.get("x-url") ?? headerList.get("referer") ?? "";
  const match = url.match(/\/(en|zh)(\/|$)/);
  if (match && isLocale(match[1])) return match[1];
  const xLocale = headerList.get("x-locale") ?? undefined;
  if (isLocale(xLocale)) return xLocale;
  return DEFAULT_LOCALE;
}

export default function NotFound() {
  const locale = resolveLocale();
  const t = COPY[locale];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="blob absolute -left-40 top-20 h-80 w-80 rounded-full bg-brand-400" />
        <div className="blob absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-500" />
      </div>
      <div className="container-xl max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
          {t.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 text-base text-ink-900/70">{t.body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={localeHref(locale, "/")} className="btn-primary">
            {t.home}
          </a>
          <a
            href="https://wa.me/60172498763"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-ink-900/10 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-900/[0.03]"
          >
            {t.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
