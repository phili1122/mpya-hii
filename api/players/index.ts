import { client } from '../lib/db'

export default async function handler(req: any, res: any) {
  try {
    if (req.method === 'GET') {
      const result = await client.execute('SELECT * FROM players ORDER BY id DESC')
      return res.status(200).json({ ok: true, players: result.rows })
    }

    if (req.method === 'POST') {
      const { name, games, points, statusTrend } = req.body
      if (!name) return res.status(400).json({ ok: false, error: 'Missing name' })
      const result = await client.execute({ sql: 'INSERT INTO players (name, games, points, statusTrend) VALUES (?, ?, ?, ?) RETURNING *', args: [name, games || 0, points || 0, statusTrend || 'stable'] })
      return res.status(201).json({ ok: true, player: result.rows[0] })
    }

    return res.setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
