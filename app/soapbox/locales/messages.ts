type MessageJson   = Record<string, string>;
type MessageModule = { default: MessageJson };

/** Import custom messages */
const importCustom = (locale: string): Promise<MessageModule> => {
  return import(/* @vite-ignore */`custom/locales/${locale}.json`)
    .catch(() => ({ default: {} }));
};

/** Import git-checked messages */
const importMessages = (locale: string): Promise<MessageModule> => {
  return import(/* @vite-ignore */`./${locale}.json`);
};

/** Override custom messages */
const importMessagesWithCustom = (locale: string): Promise<MessageJson> => {
  return Promise.all([
    importMessages(locale),
    importCustom(locale),
  ]).then(messages => {
    const [native, custom] = messages;
    return Object.assign(native.default, custom.default);
  }).catch(error => {
    console.error(error);
    throw error;
  });
};

const locales = [
  'en',
  'id',
  'ja',
] as const;

/** Soapbox locales map */
const messages = locales.reduce((acc, locale) => {
  acc[locale] = () => importMessagesWithCustom(locale);
  return acc;
}, {} as Record<string, () => Promise<MessageJson>>);

export default messages;
export { locales };
