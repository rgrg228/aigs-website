import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat2Sales — Turn conversations into revenue with AI",
  description:
    "Chat2Sales is the AI sales agent that qualifies leads, books meetings, and closes deals 24/7 — directly on your website, WhatsApp, and Instagram.",
  openGraph: {
    title: "Chat2Sales — Turn conversations into revenue with AI",
    description:
      "The AI sales agent that qualifies leads, books meetings, and closes deals 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
