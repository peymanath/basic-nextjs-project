import { Locale } from '@/dictionary';
import en from '@/dictionary/translate/en.json';
import fa from '@/dictionary/translate/fa.json';

export const dictionariesClient: Record<Locale, any> = {
  en,
  fa,
};

export const useDictionary = (locale: Locale = 'fa') => {
  return dictionariesClient[locale];
};
