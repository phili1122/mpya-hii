import { createClient } from '@libsql/client'

const url = process.env.TURSO_CONNECTION_URL
const authToken = process.env.TURSO_AUTH_TOKEN

if (!url || !authToken) {
  throw new Error('TURSO_CONNECTION_URL and TURSO_AUTH_TOKEN must be set in server environment')
}

export const client = createClient({ url, authToken })

export async function execute(sql: string | { sql: string; args?: unknown[] }) {
  if (typeof sql === 'string') {
    return await client.execute(sql)
  }
  return await client.execute(sql)
}
