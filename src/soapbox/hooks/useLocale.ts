import { getFTLLocale, getLocale } from 'soapbox/actions/settings';

import { useAppSelector } from './useAppSelector';

import type { CSSProperties } from 'react';

/** Locales which should be presented in right-to-left. */
const RTL_LOCALES = ['ar', 'ckb', 'fa', 'he', 'ps', 'ur'];

interface UseLocaleResult {
  locale: string
  direction: CSSProperties['direction']
}

/** Get valid FTL locale from settings. */
const useFTLLocale = (): UseLocaleResult => {
  const locale = useAppSelector((state) => getFTLLocale(state));

  const direction: CSSProperties['direction'] =
    RTL_LOCALES.includes(locale.split('-')[0])
      ? 'rtl'
      : 'ltr';

  return {
    locale,
    direction,
  };
};

/** Get valid locale from settings.
 *  @deprecated Use `useFTLLocale` instead.
 */
const useLocale = (fallback = 'en'): UseLocaleResult => {
  const locale = useAppSelector((state) => getLocale(state, fallback));

  const direction: CSSProperties['direction'] =
    RTL_LOCALES.includes(locale)
      ? 'rtl'
      : 'ltr';

  return {
    locale,
    direction,
  };
};

export { useFTLLocale, useLocale };
