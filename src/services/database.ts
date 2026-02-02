// This module previously contained client-side DB access using @libsql/client.
// That was removed for security: all DB access now happens on the server via `/api/*` endpoints.
// If you accidentally import this module, use the new `src/services/api.ts` helpers instead.

export * from './api'

