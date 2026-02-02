// Client-side API wrapper — forwards calls to server-side API endpoints.
export type { Player, Match } from './src/services/api'
export { getAllPlayers, addPlayer, updatePlayer, deletePlayer, initializeDatabase, getPlayerMatches, addMatch, deleteMatch } from './src/services/api'

// NOTE: Removed direct database client usage from the frontend. All DB access now goes through /api/* endpoints (server-side).

