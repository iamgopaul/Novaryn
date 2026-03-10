# Novaryn Control Tower (Service)

Backend service for Novaryn feature flags, experiments, auth, audit, and SDK evaluation.

## Local development

Install dependencies:

```bash
bun install
```

Run service:

```bash
bun run dev
```

Default URL:

```text
http://localhost:3000
```

## Environment variables

Required:

- `DATABASE_URL`
- `ADMIN_API_KEY`
- `RESEND_API_KEY`
- `OTP_FROM_EMAIL`

Recommended for website integration:

- `CORS_ORIGINS=http://localhost:5173`
- `COOKIE_SAMESITE=None` (cross-site cookies)
- `COOKIE_SECURE=true` (set in HTTPS environments)
- `COOKIE_DOMAIN` (optional)

Notes:

- Runtime API traffic should use pooled `DATABASE_URL`.
- Migrations/scripts should use direct/non-pooled URL (`DATABASE_URL_UNPOOLED`).
