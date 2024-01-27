import { $ } from 'bun'
import { randomBytes } from 'crypto'

async function main() {
  const generated_token = randomBytes(48).toString('base64url')
  console.log(`[+] Your generated token is ${generated_token}`)

  if (prompt('[?] Would you like to use this token? (y/N)')?.toLowerCase() !== 'y') {
    return
  }

  const response = await $`echo ${generated_token} | npx wrangler secret put TOKEN`.text()
  console.log(`\n${response}`)
}

void main()
