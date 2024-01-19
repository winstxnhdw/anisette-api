import { get_config } from '@/config'

async function main(_: Request, environment: Record<string, unknown>): Promise<Response> {
  const config = get_config(environment)

  return fetch(config.ANISETTE_ENDPOINT, {
    headers: { Authorization: `Bearer ${config.HF_TOKEN}` }
  })
}

export default {
  fetch: main
}
