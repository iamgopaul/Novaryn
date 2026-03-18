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
- `DEVBOARD_URL=https://<your-devboard-service-domain>` (required in production when proxying DevBoard through Control Tower)

Notes:

- Runtime API traffic should use pooled `DATABASE_URL`.
- Migrations/scripts should use direct/non-pooled URL (`DATABASE_URL_UNPOOLED`).

## Shared SSO contract (for Hub, Services, Tools)

- `GET /auth/session` returns canonical session state for the current cookie/token:
	- `{ authenticated, user, needsSetup }`
- `GET /auth/me` remains available and now returns the same payload.
- Future services/tools can reuse `src/middleware/sso.ts` with:
	- `HUB_AUTH_SESSION_URL` (default: `http://localhost:3000/auth/session`)
	- `HUB_AUTH_TIMEOUT_MS` (default: `5000`)
