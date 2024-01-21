import { spawn } from 'bun'
import { randomBytes } from 'crypto'

async function main() {
  const generated_token = randomBytes(48).toString('base64url')
  console.log(`[+] Your generated token is ${generated_token}`)
  const save = prompt('[?] Would you like to use this token? (y/N)')?.toLowerCase()

  if (save !== 'y') {
    return
  }

  const process = spawn(['npx', 'wrangler', 'secret', 'put', 'TOKEN'], {
    stdin: new TextEncoder().encode(generated_token)
  })

  const response = await new Response(process.stdout).text()
  console.log(`\n${response}`)
}

void main()
