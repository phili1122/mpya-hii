import { client } from '../lib/db'

export default async function handler(req: any, res: any) {
  try {
    const id = Number(req.query.id || req.params?.id)
    if (!id) return res.status(400).json({ ok: false, error: 'Invalid id' })

    if (req.method === 'DELETE') {
      await client.execute({ sql: 'DELETE FROM matches WHERE id = ?', args: [id] })
      return res.status(204).end()
    }

    return res.setHeader('Allow', 'DELETE').status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
