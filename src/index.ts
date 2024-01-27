import { get_config } from '@/config'

async function main(request: Request, environment: Record<string, unknown>) {
  const url = new URL(request.url)
  const config = get_config(environment)

  if (url.searchParams.get('token') !== config.TOKEN) {
    return new Response('Unauthorized!', { status: 401 })
  }

  return fetch(config.ANISETTE_ENDPOINT, {
    headers: { Authorization: `Bearer ${config.HF_TOKEN}` }
  })
}

export default {
  fetch: main
}
