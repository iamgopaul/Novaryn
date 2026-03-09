CREATE TABLE IF NOT EXISTS "registration_challenges" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "email" text NOT NULL,
  "username" text NOT NULL,
  "name" text NOT NULL,
  "password_hash" text NOT NULL,
  "code_hash" text NOT NULL,
  "expires_at" timestamp with time zone NOT NULL,
  "used_at" timestamp with time zone,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "registration_challenges_email_idx" ON "registration_challenges" ("email");
CREATE INDEX IF NOT EXISTS "registration_challenges_username_idx" ON "registration_challenges" ("username");
CREATE INDEX IF NOT EXISTS "registration_challenges_expires_at_idx" ON "registration_challenges" ("expires_at");
