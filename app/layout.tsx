import type { Metadata } from "next";
import { headers } from "next/headers";
import Analytics from "@/components/Analytics";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { LOCALE_HTML_LANG, DEFAULT_LOCALE, isLocale } from "@/lib/i18n/config";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://chat2sales.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chat2Sales | Your AI Sales Agent",
    template: "%s | Chat2Sales",
  },
  description:
    "Turning every conversation into sales. AI chatbot for WhatsApp, Facebook, Instagram, Website, Telegram & more — Chat2Sales replies to customers, follows up leads, and books appointments, 24/7.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Chat2Sales | Your AI Sales Agent",
    description:
      "Turning every conversation into sales. AI chatbot across WhatsApp, Instagram, Website and more — built by AI Growth Solution (Kuala Lumpur).",
    type: "website",
    url: SITE_URL,
    siteName: "Chat2Sales",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chat2Sales | Your AI Sales Agent",
    description:
      "Turning every conversation into sales. AI chatbot for WhatsApp, Instagram, Website & more.",
  },
  icons: {
    icon: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerLocale = headers().get("x-locale") ?? undefined;
  const locale = isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE;
  const htmlLang = LOCALE_HTML_LANG[locale];

  return (
    <html lang={htmlLang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OrganizationJsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
