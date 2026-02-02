achana na project yangu

## Server-side secrets and database access 🔒

- **Do not** store secrets in client-side env vars (VITE_*). Any database credentials must be set as server environment variables (e.g., in the Vercel dashboard).
- Required server env vars (set these in Vercel Project > Settings > Environment Variables):
  - `TURSO_CONNECTION_URL` (e.g. `libsql://<your-db>.turso.io`)
  - `TURSO_AUTH_TOKEN` (server-side secret)

### Deployment checklist ✅
1. Add the two environment variables above in your Vercel project (set on Production and Preview as needed).
2. Confirm `vercel.json` exists and the build command is `npm run build` and Output Directory is `dist` (this repo already includes `vercel.json`).
3. Re-deploy the project on Vercel.
4. (Optional) Initialize DB schema once by sending a POST to `/api/init` (e.g. `curl -X POST https://your-app.vercel.app/api/init`).

### Security measures added
- All database access now happens server-side in `/api/*` endpoints (see `api/` folder). The frontend talks to these endpoints via `fetch()`; no DB credentials are present in client bundles.
- A quick health endpoint exists at `/api/health` which returns `{ dbConfigured: true }` when server env vars are set (it does NOT return secrets).
- A prebuild check (`scripts/check-no-vite.js`) is added and is run automatically before `npm run build` to fail the build if any `VITE_` usages are present, preventing accidental client-side secret exposure.

If you want, I can also:
- Add a GitHub Action to run the `verify:secrets` check on PRs and CI. 🔧
- Help you set the Vercel env vars if you grant access or provide confirmation that they are set. 💡

### Important: rotate tokens if they were committed 🔁
If any secret (like `TURSO_AUTH_TOKEN`) was ever committed to the repo or included in a deployed bundle, **rotate the secret immediately** (revoke and create a new token). If the secret was committed to the Git history, consider removing it from history (e.g., using `git filter-repo` or GitHub's ``Remove sensitive data`` guide) and force-pushing to your repo. After rotation, update the new value in the Vercel dashboard.

