import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-50 via-white to-accent-50 px-6">
          <div className="max-w-md text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
              404 · Not found
            </p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
              This page went offline.
            </h1>
            <p className="mt-4 text-base text-ink-900/70">
              The link might be broken, or the page may have moved. Head back
              home and we&apos;ll get you sorted, or message us on WhatsApp,
              we reply in a minute.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/en" className="btn-primary">
                Back to home
              </Link>
              <a
                href="https://wa.me/60172498763"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink-900/10 bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-900/[0.03]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
