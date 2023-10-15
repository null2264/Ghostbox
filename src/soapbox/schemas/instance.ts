import z from 'zod';

import { accountSchema } from './account';
import { mrfSimpleSchema } from './pleroma';
import { coerceObject, mimeSchema } from './utils';

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
});

const pleromaSchema = coerceObject({
  metadata: coerceObject({
    account_activation_required: z.boolean().catch(false),
    birthday_min_age: z.number().catch(0),
    birthday_required: z.boolean().catch(false),
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

const urlsSchema = coerceObject({
  streaming_api: z.string().url().optional().catch(undefined),
});

const usageSchema = coerceObject({
  users: coerceObject({
    active_month: z.number().catch(0),
  }),
});

const instanceSchema = coerceObject({
  approval_required: z.boolean().catch(false),
  configuration: configurationSchema,
  contact_account: accountSchema.optional().catch(undefined),
  description: z.string().catch(''),
  description_limit: z.number().catch(1500),
  email: z.string().email().catch(''),
  feature_quote: z.boolean().catch(false),
  fedibird_capabilities: z.array(z.string()).catch([]),
  languages: z.string().array().catch([]),
  pleroma: pleromaSchema,
  registrations: z.boolean().catch(false),
  rules: z.any(),
  short_description: z.string().catch(''),
  stats: statsSchema,
  thumbnail: z.string().catch(''),
  title: z.string().catch(''),
  urls: urlsSchema,
  usage: usageSchema,
  version: z.string().catch(''),
});

type Instance = z.infer<typeof instanceSchema>;

export { instanceSchema, Instance };