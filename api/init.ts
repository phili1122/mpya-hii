import { client } from './lib/db'

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') return res.setHeader('Allow', 'POST').status(405).end('Method Not Allowed')

    await client.execute(`
      CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        games INTEGER NOT NULL DEFAULT 0,
        points INTEGER NOT NULL DEFAULT 0,
        statusTrend TEXT NOT NULL DEFAULT 'stable',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await client.execute(`
      CREATE TABLE IF NOT EXISTS matches (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        player_id INTEGER NOT NULL,
        date TEXT NOT NULL,
        game TEXT NOT NULL,
        points INTEGER NOT NULL DEFAULT 0,
        prize TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (player_id) REFERENCES players(id)
      )
    `)

    return res.status(200).json({ ok: true })
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
