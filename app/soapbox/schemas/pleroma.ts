import { z } from 'zod';

import { coerceObject } from './utils';

const mrfSimpleSchema = coerceObject({
  accept: z.string().array().array().catch([]),
  avatar_removal: z.string().array().array().catch([]),
  banner_removal: z.string().array().array().catch([]),
  federated_timeline_removal: z.string().array().array().catch([]),
  followers_only: z.string().array().array().catch([]),
  media_nsfw: z.string().array().array().catch([]),
  media_removal: z.string().array().array().catch([]),
  reject: z.string().array().array().catch([]),
  reject_deletes: z.string().array().array().catch([]),
  report_removal: z.string().array().array().catch([]),
  handle_threads: z.boolean().catch(true),
});

type MRFSimple = z.infer<typeof mrfSimpleSchema>;

export { mrfSimpleSchema, type MRFSimple };