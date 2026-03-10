# Novaryn

Feature flags + experiments platform with a React frontend and API backend.

## Local development

Install dependencies:

```bash
bun install
bun --cwd frontend install
```

Run app + API:

```bash
bun run dev
```

## Vercel hosting (frontend + API)

This repo includes:

- `vercel.json` for SPA rewrites and API routing
- `api/[...path].ts` as the Vercel serverless API entrypoint

Required environment variables in Vercel project settings:

- `DATABASE_URL`
- `ADMIN_API_KEY`
- `RESEND_API_KEY`
- `OTP_FROM_EMAIL`

Optional:

- `NODE_ENV=production`

## Recommended split deployment (Vercel frontend + always-on API)

To avoid serverless runtime timeout issues for auth/database operations:

- Deploy frontend on Vercel
- Deploy API on Railway/Render/Fly (always-on process)

Frontend env vars:

- `VITE_API_BASE_URL=https://<your-api-domain>`

API env vars:

- `CORS_ORIGINS=https://<your-frontend-domain>`
- `COOKIE_SAMESITE=None`
- `COOKIE_SECURE=true`
- `COOKIE_DOMAIN` (optional; set only if you need a shared parent-domain cookie)

Notes:

- Runtime API traffic should use pooled `DATABASE_URL`
- Migrations/scripts should use direct/non-pooled URL (`DATABASE_URL_UNPOOLED`)
