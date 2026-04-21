import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALES, DEFAULT_LOCALE, isLocale } from "./lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

function detectLocale(req: NextRequest): string {
  const acceptLang = req.headers.get("accept-language") ?? "";
  if (/\bzh\b/i.test(acceptLang)) return "zh";
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.ico" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first && isLocale(first)) {
    const res = NextResponse.next();
    res.headers.set("x-locale", first);
    return res;
  }

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

// Keep LOCALES referenced so tree-shaking doesn't drop the import.
void LOCALES;
