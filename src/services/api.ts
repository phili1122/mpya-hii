export interface Player {
  id?: number
  name: string
  games: number
  points: number
  statusTrend: string
}

export interface Match {
  id?: number
  player_id: number
  date: string
  game: string
  points: number
  prize: string
}

async function handleJSON(response: Response) {
  const data = await response.json().catch(() => null)
  if (!response.ok) throw new Error(data?.error || response.statusText)
  return data
}

export async function getAllPlayers(): Promise<Player[]> {
  const res = await fetch('/api/players')
  const data = await handleJSON(res)
  return data.players || []
}

export async function addPlayer(player: Omit<Player, 'id'>): Promise<Player | null> {
  const res = await fetch('/api/players', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  })
  const data = await handleJSON(res)
  return data.player || null
}

export async function updatePlayer(id: number, player: Omit<Player, 'id'>): Promise<Player | null> {
  const res = await fetch(`/api/players/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(player),
  })
  const data = await handleJSON(res)
  return data.player || null
}

export async function deletePlayer(id: number): Promise<boolean> {
  const res = await fetch(`/api/players/${id}`, { method: 'DELETE' })
  if (res.status === 204) return true
  const data = await handleJSON(res)
  return data.ok === true
}

export async function initializeDatabase(): Promise<void> {
  const res = await fetch('/api/init', { method: 'POST' })
  await handleJSON(res)
}

export async function getPlayerMatches(playerId: number): Promise<Match[]> {
  const res = await fetch(`/api/players/${playerId}/matches`)
  const data = await handleJSON(res)
  return data.matches || []
}

export async function addMatch(match: Omit<Match, 'id'>): Promise<Match | null> {
  const res = await fetch('/api/matches', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(match),
  })
  const data = await handleJSON(res)
  return data.match || null
}

export async function deleteMatch(id: number): Promise<boolean> {
  const res = await fetch(`/api/matches/${id}`, { method: 'DELETE' })
  if (res.status === 204) return true
  const data = await handleJSON(res)
  return data.ok === true
}
