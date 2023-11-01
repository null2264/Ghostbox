import z from 'zod';

import { AKKOMA, PLEROMA, parseVersion } from 'soapbox/utils/features';

import { accountSchema } from './account';
import { mrfSimpleSchema } from './pleroma';
import { coerceObject, mimeSchema } from './utils';

const fixVersion = (version: string) => {
  // Handle Mastodon release candidates
  if (new RegExp(/[0-9.]+rc[0-9]+/g).test(version)) {
    version = version.split('rc').join('-rc');
  }

  // Set Takahē version to a Pleroma-like string
  if (version.startsWith('takahe/')) {
    version = `0.0.0 (compatible; Takahe ${version.slice(7)})`;
  }

  return version;
};

const getAttachmentLimit = (software: string | null) => (software === PLEROMA || software === AKKOMA) ? Infinity : 4;

const urlsSchema = coerceObject({
  streaming_api: z.string().url().optional().catch(undefined),
});

const configurationSchema = coerceObject({
  chats: coerceObject({
    max_characters: z.number().catch(5000),
    max_media_attachments: z.number().catch(1),
  }),
  groups: coerceObject({
    max_characters_description: z.number().catch(160),
    max_characters_name: z.number().catch(50),
  }),
  media_attachments: coerceObject({
    image_matrix_limit: z.number().optional().catch(undefined),
    image_size_limit: z.number().optional().catch(undefined),
    supported_mime_types: mimeSchema.array().optional().catch(undefined),
    video_duration_limit: z.number().optional().catch(undefined),
    video_frame_rate_limit: z.number().optional().catch(undefined),
    video_matrix_limit: z.number().optional().catch(undefined),
    video_size_limit: z.number().optional().catch(undefined),
  }),
  polls: coerceObject({
    max_characters_per_option: z.number().catch(25),
    max_expiration: z.number().catch(2629746),
    max_options: z.number().catch(4),
    min_expiration: z.number().catch(300),
  }),
  statuses: coerceObject({
    max_characters: z.number().catch(500),
    max_media_attachments: z.number().catch(4),
  }),
  translation: coerceObject({
    enabled: z.boolean().catch(false),
  }),
  urls: urlsSchema,
});

const pleromaSchema = coerceObject({
  metadata: coerceObject({
    account_activation_required: z.boolean().catch(false),
    birthday_min_age: z.number().catch(0),
    birthday_required: z.boolean().catch(false),
    description_limit: z.number().catch(1500),
    features: z.string().array().catch([]),
    federation: coerceObject({
      enabled: z.boolean().catch(true), // Assume true unless explicitly false
      mrf_policies: z.string().array().optional().catch(undefined),
      mrf_simple: mrfSimpleSchema,
    }),
    fields_limits: z.any(),
    migration_cooldown_period: z.number().optional().catch(undefined),
    translation: coerceObject({
      allow_remote: z.boolean().catch(true),
      allow_unauthenticated: z.boolean().catch(false),
      source_languages: z.string().array().optional().catch(undefined),
      target_languages: z.string().array().optional().catch(undefined),
    }),
  }),
  oauth_consumer_strategies: z.string().array().catch([]),
  stats: coerceObject({
    mau: z.number().optional().catch(undefined),
  }),
  vapid_public_key: z.string().catch(''),
});

const statsSchema = coerceObject({
  domain_count: z.number().catch(0),
  status_count: z.number().catch(0),
  user_count: z.number().catch(0),
});

const usageSchema = coerceObject({
  users: coerceObject({
    active_month: z.number().catch(0),
  }),
});

const pollLimitsSchema = coerceObject({
  max_expiration: z.number().catch(31536000),
  max_option_chars: z.number().catch(200),
  max_options: z.number().catch(20),
  min_expiration: z.number().catch(0),
});

/** Internal only, for normalizing */
const naiveInstanceSchema = coerceObject({
  approval_required: z.boolean().catch(false),
  configuration: configurationSchema,
  contact_account: accountSchema.optional().catch(undefined),
  description: z.string().catch(''),
  description_limit: z.number().catch(1500),
  email: z.string().email().catch(''),
  feature_quote: z.boolean().catch(false),
  fedibird_capabilities: z.array(z.string()).catch([]),
  languages: z.string().array().catch([]),
  max_toot_chars: z.number().catch(5000),
  pleroma: pleromaSchema,
  poll_limits: pollLimitsSchema.optional().catch(undefined),
  registrations: z.boolean().catch(false),
  rules: z.any(),
  short_description: z.string().catch(''),
  stats: statsSchema,
  thumbnail: z.string().catch(''),
  title: z.string().catch(''),
  urls: urlsSchema,
  uri: z.string().url().catch(''),
  usage: usageSchema,
  version: z.string().catch(''),
});

const contactSchema = coerceObject({
  email: z.string().email().nullable().catch(null),
  account: accountSchema.optional().catch(undefined),
});

const thumbnailSchema = coerceObject({
  url: z.string().url().catch(''),
  blurhash: z.string().catch(''),
});

const registrationsSchema = coerceObject({
  enabled: z.boolean().catch(false),
  approval_required: z.boolean().catch(false),
  message: z.string().nullable().catch(null),
  url: z.string().nullable().catch(null),
});

const instanceSchema = z.preprocess((data: any) => {
  if (data.domain) return data;

  const {
    approval_required,
    configuration,
    contact_account,
    description,
    description_limit,
    email,
    pleroma,
    registrations,
    short_description,
    thumbnail,
    urls,
    ...instance
  } = naiveInstanceSchema.parse(data);

  const { software } = parseVersion(instance.version);

  return {
    ...instance,
    configuration: {
      ...configuration,
      polls: {
        ...configuration.polls,
        max_expiration: configuration.polls.max_expiration ?? instance.poll_limits?.max_expiration ?? 2629746,
        max_characters_per_option: configuration.polls.max_characters_per_option ?? instance.poll_limits?.max_option_chars ?? 200,
        max_options: configuration.polls.max_options ?? instance.poll_limits?.max_options ?? 4,
        min_expiration: configuration.polls.min_expiration ?? instance.poll_limits?.min_expiration ?? 60,
      },
      statuses: {
        ...configuration.statuses,
        max_characters: configuration.statuses.max_characters ?? instance.max_toot_chars ?? 500,
        max_media_attachments: configuration.statuses.max_media_attachments ?? getAttachmentLimit(software),
      },
      urls,
    },
    contact: {
      account: contact_account,
      email: email,
    },
    description: short_description || description,
    domain: instance.uri.split('://')[1],
    pleroma: {
      ...pleroma,
      metadata: {
        ...pleroma.metadata,
        description_limit: description_limit,
      },
    },
    registrations: {
      approval_required,
      enabled: registrations,
    },
    thumbnail: {
      url: thumbnail,
    },
  };
}, coerceObject({
  configuration: configurationSchema,
  contact: contactSchema,
  description: z.string().catch(''),
  domain: z.string().catch(''),
  feature_quote: z.boolean().catch(false),
  languages: z.string().array().catch([]),
  pleroma: pleromaSchema,
  registrations: registrationsSchema,
  rules: z.any(),
  source_url: z.string().catch(''),
  stats: statsSchema,
  thumbnail: thumbnailSchema,
  title: z.string().catch(''),
  usage: usageSchema,
  version: z.string().catch('0.0.0'),
}).transform((instance) => {
  const version = fixVersion(instance.version);

  return {
    ...instance,
    version,
  };
}));

type Instance = z.infer<typeof instanceSchema>;

export { instanceSchema, Instance };