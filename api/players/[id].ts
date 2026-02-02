import { client } from '../lib/db'

export default async function handler(req: any, res: any) {
  try {
    const id = Number(req.query.id || req.params?.id)
    if (!id) return res.status(400).json({ ok: false, error: 'Invalid id' })

    if (req.method === 'PUT') {
      const { name, games, points, statusTrend } = req.body
      const result = await client.execute({ sql: 'UPDATE players SET name = ?, games = ?, points = ?, statusTrend = ? WHERE id = ? RETURNING *', args: [name, games, points, statusTrend, id] })
      return res.status(200).json({ ok: true, player: result.rows[0] })
    }

    if (req.method === 'DELETE') {
      await client.execute({ sql: 'DELETE FROM players WHERE id = ?', args: [id] })
      return res.status(204).end()
    }

    return res.setHeader('Allow', 'PUT, DELETE').status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
