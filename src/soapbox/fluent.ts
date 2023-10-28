import { FluentBundle, FluentResource } from '@fluent/bundle';

import { FluentOption } from './components/maybe-localized';

const DEFAULT_LOCALE = 'en-US';
const AVAILABLE_LOCALES_TO_LOCALIZED_NAMES: Record<string, string> = {
  'en-GB': 'English (GB)',
  'en-US': 'English (US)',
  'id-ID': 'Bahasa Indonesia',
  'ja-JP': '日本語',
};
const AVAILABLE_LOCALES: Array<string> = process.env.AVAILABLE_LOCALES ? JSON.parse(process.env.AVAILABLE_LOCALES) : Object.keys(AVAILABLE_LOCALES_TO_LOCALIZED_NAMES);

const getAvailableLocales = () => {
  return new Map(AVAILABLE_LOCALES.map(locale => {
    return [locale, AVAILABLE_LOCALES_TO_LOCALIZED_NAMES[locale] || locale];
  }));
};

const fetchMessages = async (locale: string) => {
  const resp = await fetch(`/locales/${locale}/app.ftl`);
  return [locale, await resp.text()];
};

function* lazyParseBundle(fetchedMessages: Array<[string, string]>) {
  for (const [locale, messages] of fetchedMessages) {
    const bundle = new FluentBundle(locale);
    bundle.addResource(new FluentResource(messages));
    /* Couldn't figure out how to format things like Number, DateTime, etc.
     * This is workaround for that.
     *
     * Example:
     * <Localized id="naive-format" vars={{
     *   data: new FluentNumber(0, { Intl.NumberFormat options goes here })
     * }}>
     *   0
     * </Localized>
     */
    bundle.addResource(new FluentResource('naive-format = { $data }'));
    yield bundle;
  }
}

const formatMessage = (opts: FluentOption): FluentOption => opts;

export {
  AVAILABLE_LOCALES,
  AVAILABLE_LOCALES_TO_LOCALIZED_NAMES,
  DEFAULT_LOCALE,
  fetchMessages,
  formatMessage,
  getAvailableLocales,
  lazyParseBundle,
};