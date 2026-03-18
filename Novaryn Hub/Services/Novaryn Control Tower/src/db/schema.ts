import { pgTable, text, uuid, integer, jsonb, timestamp, boolean, unique } from "drizzle-orm/pg-core";

const tsz = { withTimezone: true } as const;

export const orgs = pgTable("orgs", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  orgId: uuid("org_id").references(() => orgs.id).notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const environments = pgTable("environments", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  name: text("name").notNull(), // dev / staging / prod
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const flags = pgTable("flags", {
  id: uuid("id").primaryKey().defaultRandom(),
  envId: uuid("env_id").references(() => environments.id).notNull(),
  key: text("key").notNull(),
  type: text("type").notNull().default("boolean"), // boolean | string | number | json
  defaultValueJson: jsonb("default_value_json").notNull(),
  enabled: boolean("enabled").notNull().default(false),
  version: integer("version").notNull().default(1),
  updatedAt: timestamp("updated_at", tsz).defaultNow().notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const flagRules = pgTable("flag_rules", {
  id: uuid("id").primaryKey().defaultRandom(),
  flagId: uuid("flag_id").references(() => flags.id).notNull(),
  priority: integer("priority").notNull(), // lower = higher priority
  ruleJson: jsonb("rule_json").notNull(),  // { type: "allowlist"|"segment"|"rollout", ... }
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const experiments = pgTable("experiments", {
  id: uuid("id").primaryKey().defaultRandom(),
  envId: uuid("env_id").references(() => environments.id).notNull(),
  key: text("key").notNull(),
  variantsJson: jsonb("variants_json").notNull(), // [{ key: "A", weight: 50 }, ...]
  status: text("status").notNull().default("draft"), // draft | running | paused | completed
  version: integer("version").notNull().default(1),
  updatedAt: timestamp("updated_at", tsz).defaultNow().notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const auditLog = pgTable("audit_log", {
  id: uuid("id").primaryKey().defaultRandom(),
  actor: text("actor").notNull(),
  action: text("action").notNull(),
  resource: text("resource").notNull(),
  beforeJson: jsonb("before_json"),
  afterJson: jsonb("after_json"),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const sdkKeys = pgTable("sdk_keys", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id).notNull(),
  name: text("name").notNull(),
  keyHash: text("key_hash").notNull(),
  keyPlain: text("key_plain"),           // stored for peek mode (self-hosted, you own the DB)
  prefix: text("prefix").notNull(),      // first 12 chars for display e.g. "ct_live_ab12"
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const exposures = pgTable("exposures", {
  id: uuid("id").primaryKey().defaultRandom(),
  experimentKey: text("experiment_key").notNull(),
  userId: text("user_id").notNull(),
  variant: text("variant").notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

// ── Auth ─────────────────────────────────────────────────────────────────────

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  username: text("username").unique(),
  phone: text("phone").unique(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  avatarUrl: text("avatar_url"),
  twoFactorEnabled: boolean("two_factor_enabled").notNull().default(false),
  twoFactorMethod: text("two_factor_method").notNull().default("either"), // email | phone | either
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", tsz).defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at", tsz).notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const orgMembers = pgTable("org_members", {
  id: uuid("id").primaryKey().defaultRandom(),
  orgId: uuid("org_id").references(() => orgs.id, { onDelete: "cascade" }).notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  role: text("role").notNull().default("member"), // owner | admin | member
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
}, (t) => [unique().on(t.orgId, t.userId)]);

export const invites = pgTable("invites", {
  id: uuid("id").primaryKey().defaultRandom(),
  orgId: uuid("org_id").references(() => orgs.id, { onDelete: "cascade" }).notNull(),
  email: text("email").notNull(),
  role: text("role").notNull().default("member"),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at", tsz).notNull(),
  acceptedAt: timestamp("accepted_at", tsz),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const passwordResets = pgTable("password_resets", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at", tsz).notNull(),
  usedAt: timestamp("used_at", tsz),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const projectInvites = pgTable("project_invites", {
  id: uuid("id").primaryKey().defaultRandom(),
  projectId: uuid("project_id").references(() => projects.id, { onDelete: "cascade" }).notNull(),
  fromUserId: uuid("from_user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  toUserId: uuid("to_user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  status: text("status").notNull().default("pending"), // pending | accepted | declined
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
  respondedAt: timestamp("responded_at", tsz),
});

export const authChallenges = pgTable("auth_challenges", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  purpose: text("purpose").notNull(), // login | recovery
  channel: text("channel").notNull(), // email | phone
  codeHash: text("code_hash").notNull(),
  expiresAt: timestamp("expires_at", tsz).notNull(),
  usedAt: timestamp("used_at", tsz),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const registrationChallenges = pgTable("registration_challenges", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull(),
  username: text("username").notNull(),
  name: text("name").notNull(),
  passwordHash: text("password_hash").notNull(),
  codeHash: text("code_hash").notNull(),
  expiresAt: timestamp("expires_at", tsz).notNull(),
  usedAt: timestamp("used_at", tsz),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});

export const toolRuns = pgTable("tool_runs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  toolKey: text("tool_key").notNull(),
  inputText: text("input_text").notNull(),
  outputText: text("output_text").notNull(),
  createdAt: timestamp("created_at", tsz).defaultNow().notNull(),
});
