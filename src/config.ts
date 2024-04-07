import { object, string } from 'zod'

export const get_config = (environment: Record<string, unknown>) =>
  object({
    ANISETTE_ENDPOINT: string().url(),
    TOKEN: string(),
    HF_TOKEN: string().regex(/^hf_[a-zA-Z]+$/, {
      message: 'Token must be in the format of "hf_xxxxxxxxxxxx".',
    }),
  }).parse(environment)
