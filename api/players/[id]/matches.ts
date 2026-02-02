import { client } from '../../lib/db'

export default async function handler(req: any, res: any) {
  try {
    const id = Number(req.query.id || req.params?.id)
    if (!id) return res.status(400).json({ ok: false, error: 'Invalid id' })

    if (req.method === 'GET') {
      const result = await client.execute({ sql: 'SELECT * FROM matches WHERE player_id = ? ORDER BY date DESC', args: [id] })
      return res.status(200).json({ ok: true, matches: result.rows })
    }

    return res.setHeader('Allow', 'GET').status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
