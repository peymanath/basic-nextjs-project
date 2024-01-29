
export const i18n = {
  defaultLocale: 'fa',
  locales: ['fa', 'en'], //The first language must be the same as the default language.
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const dir: Record<Locale, string> = {
  en: 'ltr',
  fa: 'rtl',
};
export const langName: Record<Locale, string> = {
  en: 'English',
  fa: 'فارسی',
};
