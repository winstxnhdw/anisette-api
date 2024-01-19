import { get_config } from '@/config'
import type { Environment } from '@/types'

async function main(_: Request, environment: Environment): Promise<Response> {
  const config = get_config(environment)

  return fetch(config.ANISETTE_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${config.HF_TOKEN}`
    }
  })
}

export default {
  fetch: main
}
