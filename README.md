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
