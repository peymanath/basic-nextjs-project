import { DictionaryMiddlewareConfig } from '@/dictionary/middleware-config';
import type { NextRequest } from 'next/server';
import { i18n } from './src/dictionary';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.includes('/api/') || PUBLIC_FILE.test(pathname)) {
    return;
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // ====================== Dictionary Config ====================== //
  if (pathnameIsMissingLocale) {
    return DictionaryMiddlewareConfig(request, pathname);
  }
  // ====================== Dictionary Config ====================== //
}
