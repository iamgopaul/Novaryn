import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("DATABASE_URL is not set");
}

const sql = postgres(url);

await sql.unsafe("alter table users add column if not exists username text");
await sql.unsafe("create unique index if not exists users_username_unique on users (username)");
await sql.unsafe("alter table users add column if not exists phone text");
await sql.unsafe("create unique index if not exists users_phone_unique on users (phone)");
await sql.unsafe("alter table users add column if not exists two_factor_enabled boolean not null default false");
await sql.unsafe("alter table users add column if not exists two_factor_method text not null default 'either'");

await sql.unsafe(`
  create table if not exists project_invites (
    id uuid primary key default gen_random_uuid(),
    project_id uuid not null references projects(id) on delete cascade,
    from_user_id uuid not null references users(id) on delete cascade,
    to_user_id uuid not null references users(id) on delete cascade,
    status text not null default 'pending',
    created_at timestamptz not null default now(),
    responded_at timestamptz
  )
`);

await sql.unsafe(`
  create table if not exists auth_challenges (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references users(id) on delete cascade,
    purpose text not null,
    channel text not null,
    code_hash text not null,
    expires_at timestamptz not null,
    used_at timestamptz,
    created_at timestamptz not null default now()
  )
`);
await sql.unsafe("create index if not exists auth_challenges_user_id_idx on auth_challenges (user_id)");
await sql.unsafe("create index if not exists auth_challenges_expires_at_idx on auth_challenges (expires_at)");

await sql.unsafe(`
  create table if not exists registration_challenges (
    id uuid primary key default gen_random_uuid(),
    email text not null,
    username text not null,
    name text not null,
    password_hash text not null,
    code_hash text not null,
    expires_at timestamptz not null,
    used_at timestamptz,
    created_at timestamptz not null default now()
  )
`);
await sql.unsafe("create index if not exists registration_challenges_email_idx on registration_challenges (email)");
await sql.unsafe("create index if not exists registration_challenges_username_idx on registration_challenges (username)");
await sql.unsafe("create index if not exists registration_challenges_expires_at_idx on registration_challenges (expires_at)");

const cols = await sql.unsafe("select column_name from information_schema.columns where table_schema='public' and table_name='users' order by ordinal_position");
console.log("users columns:", cols.map((c: any) => c.column_name).join(", "));

await sql.end();
console.log("Auth schema patch complete");
