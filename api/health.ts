export default async function handler(req: any, res: any) {
  try {
    // Only expose non-sensitive information: whether required server env vars are set
    const dbConfigured = Boolean(process.env.TURSO_CONNECTION_URL && process.env.TURSO_AUTH_TOKEN)
    return res.status(200).json({ ok: true, dbConfigured })
  } catch (err: any) {
    console.error(err)
    return res.status(500).json({ ok: false, error: err.message })
  }
}
