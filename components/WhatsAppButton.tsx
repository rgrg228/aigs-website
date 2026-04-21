import type { Locale } from "@/lib/i18n/config";

const PHONE = "60172498763";

const LABEL: Record<Locale, string> = {
  en: "Chat on WhatsApp",
  zh: "WhatsApp 联系",
};

const DEFAULT_MESSAGE: Record<Locale, string> = {
  en: "Hi Chat2Sales, I'd like to learn more about your AI chatbot.",
  zh: "你好 Chat2Sales，我想了解一下你们的 AI 聊天机器人。",
};

export default function WhatsAppButton({ locale }: { locale: Locale }) {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(
    DEFAULT_MESSAGE[locale],
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={LABEL[locale]}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:scale-105 hover:shadow-xl sm:bottom-8 sm:right-8"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-6 w-6 fill-current"
      >
        <path d="M19.11 17.2c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.04 3.2C9.35 3.2 3.92 8.62 3.92 15.3c0 2.39.7 4.62 1.91 6.5L3.2 28.8l7.2-2.38a12.04 12.04 0 005.64 1.4c6.69 0 12.12-5.42 12.12-12.1 0-3.22-1.26-6.24-3.54-8.52a12.07 12.07 0 00-8.58-3.54z" />
      </svg>
      <span className="hidden sm:inline">{LABEL[locale]}</span>
    </a>
  );
}
