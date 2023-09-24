// @preval
/**
 * Build config: configuration set at build time.
 * @module soapbox/build-config
 */

// eslint-disable-next-line import/extensions
import trim from 'lodash/trim.js';
// eslint-disable-next-line import/extensions
import trimEnd from 'lodash/trimEnd.js';

const {
  NODE_ENV,
  GHOSTBOX_BACKEND_URL,
  FE_SUBDIRECTORY,
  FE_INSTANCE_SOURCE_DIR,
  GHOSTBOX_SENTRY_DSN,
} = import.meta.env;

const sanitizeURL = (url: string | undefined = '') => {
  try {
    return trimEnd(new URL(url).toString(), '/');
  } catch {
    return '';
  }
};

const sanitizeBasename = (path: string | undefined = '') => {
  return `/${trim(path, '/')}`;
};

const env = {
  NODE_ENV: NODE_ENV || 'development',
  BACKEND_URL: sanitizeURL(GHOSTBOX_BACKEND_URL),
  FE_SUBDIRECTORY: sanitizeBasename(FE_SUBDIRECTORY),
  FE_INSTANCE_SOURCE_DIR: FE_INSTANCE_SOURCE_DIR || 'instance',
  SENTRY_DSN: GHOSTBOX_SENTRY_DSN,
};

export type BuildConfig = typeof env;

export default () => ({
  data: env,
});
