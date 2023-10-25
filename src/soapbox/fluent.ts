import { FluentBundle, FluentResource } from '@fluent/bundle';

const AVAILABLE_LOCALES = process.env.AVAILABLE_LOCALES as Array<string> | undefined || ['en'];

const DEFAULT_LOCALE = 'en-US';

const fetchMessages = async (locale: string) => {
  const resp = await fetch(`/locales/${locale}/app.ftl`);
  return [locale, await resp.text()];
};

function* lazyParseBundle(fetchedMessages: Array<[string, string]>) {
  for (const [locale, messages] of fetchedMessages) {
    const bundle = new FluentBundle(locale);
    bundle.addResource(new FluentResource(messages));
    yield bundle;
  }
}

export {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
  fetchMessages,
  lazyParseBundle,
};