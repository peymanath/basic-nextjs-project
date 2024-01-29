import { i18n } from '@/dictionary/i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse, type NextRequest } from 'next/server';

function getLocale(): string | undefined {
  const lang = i18n.locales.join(',');

  let headers = { 'accept-language': `${lang};` };

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers }).languages();
  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export const DictionaryMiddlewareConfig = (request: NextRequest, pathname: string) => {
  // Redirect if there is no locale

  const locale = getLocale();

  if (locale === i18n.defaultLocale) {
    return NextResponse.rewrite(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    );
  }

  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
  );
};
