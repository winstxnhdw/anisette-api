import { randomBytes } from 'crypto'

function main() {
  console.log(randomBytes(48).toString('base64url'))
}

main()
