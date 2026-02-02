import { client } from '../lib/db'

export default async function handler(req: any, res: any) {
  try {
    if (req.method === 'POST') {
      const { player_id, date, game, points, prize } = req.body
      if (!player_id) return res.status(400).json({ ok: false, error: 'Missing player_id' })
      const result = await client.execute({ sql: 'INSERT INTO matches (player_id, date, game, points, prize) VALUES (?, ?, ?, ?, ?) RETURNING *', args: [player_id, date, game, points || 0, prize || ''] })
      return res.status(201).json({ ok: true, match: result.rows[0] })
    }

    return res.setHeader('Allow', 'POST').status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
