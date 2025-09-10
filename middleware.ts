import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { languages, defaultLanguage } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/blog")) {
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname}`, request.url)
    );
  }

  const pathnameIsMissingValidLocale = Object.keys(languages).every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingValidLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLanguage}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)"],
};
