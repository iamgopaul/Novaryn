import { db } from "../db/client";
import { users, sessions, orgMembers, invites, passwordResets, orgs, projects, projectInvites, authChallenges, registrationChallenges } from "../db/schema";
import { eq, and, gt, isNull, ilike, or, desc } from "drizzle-orm";
import { jsonResponse, errorResponse } from "../middleware/errorHandler";
import { requireAuth } from "../middleware/auth";
import { getSessionUser, makeSessionCookie, clearSessionCookie } from "../middleware/session";
import { hashPassword, verifyPassword } from "../utils/password";
import { z } from "zod";

// ── Helpers ───────────────────────────────────────────────────────────────────

function randomToken(bytes = 32): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function addDays(d: Date, n: number): Date {
  return new Date(d.getTime() + n * 86_400_000);
}

function addHours(d: Date, h: number): Date {
  return new Date(d.getTime() + h * 3_600_000);
}

async function createSession(userId: string) {
  const token = randomToken(32);
  const expiresAt = addDays(new Date(), 30);
  await db.insert(sessions).values({ userId, token, expiresAt });
  return { token, expiresAt };
}

function safeUser(u: {
  id: string;
  email: string;
  name: string;
  username?: string | null;
  phone?: string | null;
  twoFactorEnabled?: boolean;
  twoFactorMethod?: "email" | "phone" | "either" | string;
}, role: string) {
  return {
    id: u.id,
    email: u.email,
    username: u.username ?? null,
    phone: u.phone ?? null,
    name: u.name,
    role,
    twoFactorEnabled: u.twoFactorEnabled ?? false,
    twoFactorMethod: (u.twoFactorMethod as "email" | "phone" | "either" | undefined) ?? "either",
  };
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

function normalizePhone(phone: string): string {
  return phone.replace(/\s+/g, "").trim();
}

function randomNumericCode(length = 6): string {
  const digits = "0123456789";
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(bytes).map((b) => digits[b % digits.length]).join("");
}

async function hashCode(code: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(code));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function maskEmail(email: string): string {
  const [name, domain] = email.split("@");
  if (!name || !domain) return email;
  if (name.length <= 2) return `${name[0] ?? "*"}*@${domain}`;
  return `${name.slice(0, 2)}***@${domain}`;
}

function isProduction(): boolean {
  return (process.env.NODE_ENV ?? "development") === "production";
}

async function sendEmailOtp(to: string, code: string, purpose: "login" | "recovery" | "register"): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.OTP_FROM_EMAIL ?? "onboarding@resend.dev";
  if (!resendApiKey) return false;

  const subject = purpose === "login"
    ? "Your Novaryn login code"
    : purpose === "recovery"
      ? "Your Novaryn recovery code"
      : "Verify your Novaryn email";
  const text = purpose === "login"
    ? `Your Novaryn login code is ${code}. It expires in 10 minutes.`
    : purpose === "recovery"
      ? `Your Novaryn recovery code is ${code}. It expires in 10 minutes.`
      : `Your Novaryn verification code is ${code}. It expires in 10 minutes.`;

  const controller = new AbortController();    const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [to],
        subject,
        text,
      }),
      signal: controller.signal,
    });
    return res.ok;
  } catch (error) {
    console.error("sendEmailOtp failed:", error);
    return false;
  } finally {
    clearTimeout(timeout);
  }
}

async function deliverOtp(
  channel: TwoFactorChannel,
  destination: string,
  code: string,
  purpose: "login" | "recovery",
): Promise<boolean> {
  return sendEmailOtp(destination, code, purpose);
}

type TwoFactorChannel = "email";

async function createChallenge(
  userId: string,
  purpose: "login" | "recovery",
  channel: TwoFactorChannel,
): Promise<{ challengeId: string; code: string; expiresAt: Date }> {
  const code = randomNumericCode(6);
  const codeHash = await hashCode(code);
  const expiresAt = addHours(new Date(), 1 / 6); // 10 minutes
  const [challenge] = await db.insert(authChallenges).values({
    userId,
    purpose,
    channel,
    codeHash,
    expiresAt,
  }).returning({ id: authChallenges.id });

  return { challengeId: challenge!.id, code, expiresAt };
}

// ── Validation schemas ────────────────────────────────────────────────────────

const RegisterSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
  name: z.string().min(1).max(100),
  password: z.string().min(8),
});

const RegisterConfirmSchema = z.object({
  challengeId: z.string().uuid(),
  code: z.string().length(6),
});

const LoginSchema = z.object({
  identifier: z.string().min(1),
  password: z.string().min(1),
});

const InviteSchema = z.object({
  email: z.string().email(),
  role: z.enum(["admin", "member"]).default("member"),
  orgId: z.string().uuid(),
});

const AcceptInviteSchema = z.object({
  token: z.string(),
  username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
  name: z.string().min(1).max(100),
  password: z.string().min(8),
});

const ResetRequestSchema = z.object({
  identifier: z.string().min(1), // email | username | phone
});

const ResetConfirmSchema = z.object({
  token: z.string().optional(),
  challengeId: z.string().uuid().optional(),
  code: z.string().length(6).optional(),
  password: z.string().min(8),
});

const UpdateProfileSchema = z.object({
  username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/).optional(),
  phone: z.string().min(7).max(20).optional(),
  twoFactorEnabled: z.boolean().optional(),
  twoFactorMethod: z.enum(["email", "phone", "either"]).optional(),
  name: z.string().min(1).max(100).optional(),
  currentPassword: z.string().optional(),
  newPassword: z.string().min(8).optional(),
});

const TwoFactorSendSchema = z.object({
  challengeId: z.string().uuid(),
  channel: z.literal("email"),
});

const TwoFactorVerifySchema = z.object({
  challengeId: z.string().uuid(),
  code: z.string().length(6),
});

const UpdateMemberSchema = z.object({
  role: z.enum(["admin", "member"]),
});

const SearchUsersSchema = z.object({ q: z.string().min(1).max(32) });

const SendProjectInviteSchema = z.object({
  projectId: z.string().uuid(),
  username: z.string().min(3).max(32).regex(/^[a-zA-Z0-9_]+$/),
});

// ── Main handler ──────────────────────────────────────────────────────────────

export async function handleAuth(req: Request, segments: string[]): Promise<Response> {
  const method = req.method;
  const sub = segments[0] ?? "";

  // ── POST /auth/register/request ──────────────────────────────────────────
  if (((sub === "register" && segments[1] === "request") || sub === "register-request") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = RegisterSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const normalizedUsername = normalizeUsername(parsed.data.username);

    const existing = await db.select().from(users).where(eq(users.email, parsed.data.email)).limit(1);
    if (existing.length > 0) return errorResponse("Email already in use", 409);

    const existingUsername = await db.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
    if (existingUsername.length > 0) return errorResponse("Username already taken", 409);

    const passwordHash = await hashPassword(parsed.data.password);
    const code = randomNumericCode(6);
    const codeHash = await hashCode(code);
    const expiresAt = addHours(new Date(), 1 / 6);

    const [challenge] = await db.insert(registrationChallenges).values({
      email: parsed.data.email,
      username: normalizedUsername,
      name: parsed.data.name,
      passwordHash,
      codeHash,
      expiresAt,
    }).returning({ id: registrationChallenges.id });

    const delivered = await sendEmailOtp(parsed.data.email, code, "register");
    const destination = maskEmail(parsed.data.email);
    if (!delivered) console.log(`[register:email] ${parsed.data.email} code=${code}`);
    const includeDevCode = !isProduction() || !delivered;

    return jsonResponse({
      ok: true,
      challengeId: challenge!.id,
      destination,
      ...(includeDevCode ? { devCode: code } : {}),
    }, 201);
  }

  // ── POST /auth/register/confirm ──────────────────────────────────────────
  if (((sub === "register" && segments[1] === "confirm") || sub === "register-confirm") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = RegisterConfirmSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [challenge] = await db.select().from(registrationChallenges)
      .where(and(
        eq(registrationChallenges.id, parsed.data.challengeId),
        gt(registrationChallenges.expiresAt, new Date()),
        isNull(registrationChallenges.usedAt),
      ))
      .limit(1);
    if (!challenge) return errorResponse("Verification challenge not found or expired", 404);

    const codeHash = await hashCode(parsed.data.code);
    if (codeHash !== challenge.codeHash) return errorResponse("Invalid verification code", 401);

    const [emailExists] = await db.select({ id: users.id }).from(users).where(eq(users.email, challenge.email)).limit(1);
    if (emailExists) return errorResponse("Email already in use", 409);
    const [usernameExists] = await db.select({ id: users.id }).from(users).where(eq(users.username, challenge.username)).limit(1);
    if (usernameExists) return errorResponse("Username already taken", 409);

    const [user] = await db.insert(users).values({
      email: challenge.email,
      username: challenge.username,
      name: challenge.name,
      passwordHash: challenge.passwordHash,
    }).returning();

    await db.update(registrationChallenges)
      .set({ usedAt: new Date() })
      .where(eq(registrationChallenges.id, challenge.id));

    // Create a personal org/workspace for this user (strict isolation by default)
    const [personalOrg] = await db.insert(orgs).values({ name: `${challenge.name}'s Workspace` }).returning();
    await db.insert(orgMembers).values({ orgId: personalOrg!.id, userId: user!.id, role: "owner" });

    const { token, expiresAt } = await createSession(user!.id);
    return new Response(JSON.stringify(safeUser(user!, "owner")), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt),
      },
    });
  }

  // ── POST /auth/register (legacy) ─────────────────────────────────────────
  if (sub === "register" && method === "POST") {
    return errorResponse("Use /auth/register/request then /auth/register/confirm", 400);
  }

  // ── POST /auth/login ─────────────────────────────────────────────────────
  if (sub === "login" && method === "POST") {
    console.log("[login] Starting login flow");
    const body = await req.json().catch(() => null);
    console.log("[login] Body parsed");
    const parsed = LoginSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const identifier = parsed.data.identifier.trim();
    const normalized = normalizeUsername(identifier);

    console.log("[login] Querying user:", identifier);
    const [user] = await db
      .select()
      .from(users)
      .where(or(ilike(users.email, identifier), eq(users.username, normalized)))
      .limit(1);
    console.log("[login] User query complete:", user ? "found" : "not found");
    if (!user) return errorResponse("Invalid username/email or password", 401);

    const valid = await verifyPassword(parsed.data.password, user.passwordHash);
    if (!valid) return errorResponse("Invalid username/email or password", 401);

    // Get role from org membership
    const [membership] = await db.select({ role: orgMembers.role })
      .from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    const role = membership?.role ?? "member";

    if (user.twoFactorEnabled) {
      if (!user.email) return errorResponse("No 2FA email configured", 400);
      const channels: TwoFactorChannel[] = ["email"];
      const selectedChannel: TwoFactorChannel = "email";

      const challenge = await createChallenge(user.id, "login", selectedChannel);
      const delivered = await deliverOtp(
        selectedChannel,
        user.email,
        challenge.code,
        "login",
      );
      const destination = maskEmail(user.email);
      if (!delivered) console.log(`[2fa:${selectedChannel}] ${user.email} code=${challenge.code}`);
      const includeDevCode = !isProduction() || !delivered;

      return jsonResponse({
        requiresTwoFactor: true,
        challengeId: challenge.challengeId,
        channels,
        sentChannel: selectedChannel,
        destination,
        ...(includeDevCode ? { devCode: challenge.code } : {}),
      });
    }

    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, role)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt),
      },
    });
  }

  // ── POST /auth/2fa/send ────────────────────────────────────────────────
  if (((sub === "2fa" && segments[1] === "send") || sub === "2fa-send") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = TwoFactorSendSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [challenge] = await db.select().from(authChallenges)
      .where(and(eq(authChallenges.id, parsed.data.challengeId), isNull(authChallenges.usedAt), gt(authChallenges.expiresAt, new Date())))
      .limit(1);
    if (!challenge) return errorResponse("2FA challenge not found or expired", 404);

    const [user] = await db.select().from(users).where(eq(users.id, challenge.userId)).limit(1);
    if (!user) return errorResponse("User not found", 404);

    if (!user.email) return errorResponse("Email not set", 400);

    const code = randomNumericCode(6);
    const codeHash = await hashCode(code);
    const expiresAt = addHours(new Date(), 1 / 6);

    await db.update(authChallenges)
      .set({ channel: parsed.data.channel, codeHash, expiresAt })
      .where(eq(authChallenges.id, challenge.id));

    const delivered = await deliverOtp(
      parsed.data.channel,
      user.email,
      code,
      "login",
    );
    const destination = maskEmail(user.email);
    if (!delivered) console.log(`[2fa:${parsed.data.channel}] ${user.email} code=${code}`);
    const includeDevCode = !isProduction() || !delivered;
    return jsonResponse({
      ok: true,
      challengeId: challenge.id,
      sentChannel: parsed.data.channel,
      destination,
      ...(includeDevCode ? { devCode: code } : {}),
    });
  }

  // ── POST /auth/2fa/verify ───────────────────────────────────────────────
  if (((sub === "2fa" && segments[1] === "verify") || sub === "2fa-verify") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = TwoFactorVerifySchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [challenge] = await db.select().from(authChallenges)
      .where(and(eq(authChallenges.id, parsed.data.challengeId), isNull(authChallenges.usedAt), gt(authChallenges.expiresAt, new Date())))
      .limit(1);
    if (!challenge || challenge.purpose !== "login") return errorResponse("2FA challenge not found or expired", 404);

    const codeHash = await hashCode(parsed.data.code);
    if (codeHash !== challenge.codeHash) return errorResponse("Invalid verification code", 401);

    const [user] = await db.select().from(users).where(eq(users.id, challenge.userId)).limit(1);
    if (!user) return errorResponse("User not found", 404);

    const [membership] = await db.select({ role: orgMembers.role })
      .from(orgMembers).where(eq(orgMembers.userId, user.id)).limit(1);
    const role = membership?.role ?? "member";

    await db.update(authChallenges).set({ usedAt: new Date() }).where(eq(authChallenges.id, challenge.id));

    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, role)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt),
      },
    });
  }

  // ── POST /auth/logout ────────────────────────────────────────────────────
  if (sub === "logout" && method === "POST") {
    // Delete session from DB
    const cookie = req.headers.get("cookie") ?? "";
    const match = cookie.match(/(?:^|;\s*)sid=([^;]+)/);
    if (match?.[1]) {
      const token = decodeURIComponent(match[1]);
      await db.delete(sessions).where(eq(sessions.token, token));
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": clearSessionCookie(),
      },
    });
  }

  // ── GET /auth/me ─────────────────────────────────────────────────────────
  if (sub === "me" && method === "GET") {
    const user = await getSessionUser(req);
    if (!user) {
      // Check if any users exist (for first-time setup detection)
      const anyUser = await db.select({ id: users.id }).from(users).limit(1);
      return new Response(
        JSON.stringify({ user: null, needsSetup: anyUser.length === 0 }),
        { status: 200, headers: { "Content-Type": "application/json" } },
      );
    }
    return jsonResponse({ user, needsSetup: false });
  }

  // ── POST /auth/invite ────────────────────────────────────────────────────
  if (sub === "invite" && method === "POST") {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response) return auth;
    const { user } = auth;

    const body = await req.json().catch(() => null);
    const parsed = InviteSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [membership] = await db
      .select({ orgId: orgMembers.orgId })
      .from(orgMembers)
      .where(and(eq(orgMembers.orgId, parsed.data.orgId), eq(orgMembers.userId, user.id)))
      .limit(1);
    if (!membership) return errorResponse("Org not found", 404);

    const token = randomToken(24);
    const expiresAt = addDays(new Date(), 7);

    const [invite] = await db.insert(invites).values({
      orgId: parsed.data.orgId,
      email: parsed.data.email,
      role: parsed.data.role,
      token,
      expiresAt,
    }).returning();

    return jsonResponse({ invite, inviteUrl: `/invite/${token}` }, 201);
  }

  // ── GET /auth/invite/:token ──────────────────────────────────────────────
  if (sub === "invite" && segments[1] && method === "GET") {
    const token = segments[1];
    const [invite] = await db.select().from(invites)
      .where(and(eq(invites.token, token), gt(invites.expiresAt, new Date()), isNull(invites.acceptedAt)))
      .limit(1);

    if (!invite) return errorResponse("Invite not found or expired", 404);

    const [org] = await db.select({ name: orgs.name }).from(orgs).where(eq(orgs.id, invite.orgId)).limit(1);
    return jsonResponse({ email: invite.email, role: invite.role, orgName: org?.name ?? "" });
  }

  // ── POST /auth/invite/accept ─────────────────────────────────────────────
  if (((sub === "invite" && segments[1] === "accept") || sub === "invite-accept") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = AcceptInviteSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [invite] = await db.select().from(invites)
      .where(and(eq(invites.token, parsed.data.token), gt(invites.expiresAt, new Date()), isNull(invites.acceptedAt)))
      .limit(1);
    if (!invite) return errorResponse("Invite not found or already used", 404);

    const normalizedUsername = normalizeUsername(parsed.data.username);

    // Create or find user
    let [user] = await db.select().from(users).where(eq(users.email, invite.email)).limit(1);
    if (!user) {
      const existingUsername = await db.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
      if (existingUsername.length > 0) return errorResponse("Username already taken", 409);

      const passwordHash = await hashPassword(parsed.data.password);
      const [created] = await db.insert(users).values({
        email: invite.email,
        username: normalizedUsername,
        name: parsed.data.name,
        passwordHash,
      }).returning();
      user = created!;

      // Also create a personal workspace for newly created invited users.
      const [personalOrg] = await db.insert(orgs).values({ name: `${parsed.data.name}'s Workspace` }).returning();
      await db.insert(orgMembers).values({ orgId: personalOrg!.id, userId: user.id, role: "owner" });
    } else if (!user.username) {
      const existingUsername = await db.select({ id: users.id }).from(users).where(eq(users.username, normalizedUsername)).limit(1);
      if (existingUsername.length > 0) return errorResponse("Username already taken", 409);
      await db.update(users).set({ username: normalizedUsername, updatedAt: new Date() }).where(eq(users.id, user.id));
      user = { ...user, username: normalizedUsername };
    }

    // Add to org with invited role
    await db.insert(orgMembers)
      .values({ orgId: invite.orgId, userId: user.id, role: invite.role })
      .onConflictDoNothing();

    // Mark invite accepted
    await db.update(invites).set({ acceptedAt: new Date() }).where(eq(invites.id, invite.id));

    const { token, expiresAt } = await createSession(user.id);
    return new Response(JSON.stringify(safeUser(user, invite.role)), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": makeSessionCookie(token, expiresAt),
      },
    });
  }

  // ── POST /auth/reset-password ────────────────────────────────────────────
  if (sub === "reset-password" && method === "POST" && !segments[1]) {
    const body = await req.json().catch(() => null);
    const parsed = ResetRequestSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const identifier = parsed.data.identifier.trim();
    const normalizedUsername = normalizeUsername(identifier);
    const normalizedPhone = normalizePhone(identifier);

    const [user] = await db.select().from(users)
      .where(or(
        ilike(users.email, identifier),
        eq(users.username, normalizedUsername),
        eq(users.phone, normalizedPhone),
      ))
      .limit(1);
    // Don't reveal if user exists
    if (!user) return jsonResponse({ ok: true });

    if (!user.email) return errorResponse("Email not set for recovery", 400);
    const channel: TwoFactorChannel = "email";

    const challenge = await createChallenge(user.id, "recovery", channel);
    const delivered = await deliverOtp(
      channel,
      user.email,
      challenge.code,
      "recovery",
    );
    const destination = maskEmail(user.email);

    if (!delivered) console.log(`[recovery:${channel}] ${user.email} code=${challenge.code}`);
    const includeDevCode = !isProduction() || !delivered;
    return jsonResponse({
      ok: true,
      recoveryChallengeId: challenge.challengeId,
      channel,
      destination,
      ...(includeDevCode ? { devCode: challenge.code } : {}),
    });
  }

  // ── POST /auth/reset-password/confirm ────────────────────────────────────
  if (((sub === "reset-password" && segments[1] === "confirm") || sub === "reset-password-confirm") && method === "POST") {
    const body = await req.json().catch(() => null);
    const parsed = ResetConfirmSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    if (parsed.data.challengeId && parsed.data.code) {
      const [challenge] = await db.select().from(authChallenges)
        .where(and(
          eq(authChallenges.id, parsed.data.challengeId),
          gt(authChallenges.expiresAt, new Date()),
          isNull(authChallenges.usedAt),
        ))
        .limit(1);
      if (!challenge || challenge.purpose !== "recovery") return errorResponse("Recovery code invalid or expired", 404);

      const codeHash = await hashCode(parsed.data.code);
      if (codeHash !== challenge.codeHash) return errorResponse("Recovery code invalid", 401);

      const passwordHash = await hashPassword(parsed.data.password);
      await db.update(users).set({ passwordHash, updatedAt: new Date() }).where(eq(users.id, challenge.userId));
      await db.update(authChallenges).set({ usedAt: new Date() }).where(eq(authChallenges.id, challenge.id));
      await db.delete(sessions).where(eq(sessions.userId, challenge.userId));
      return jsonResponse({ ok: true });
    }

    if (!parsed.data.token) return errorResponse("token or challengeId+code required", 400);

    const [reset] = await db.select().from(passwordResets)
      .where(and(
        eq(passwordResets.token, parsed.data.token),
        gt(passwordResets.expiresAt, new Date()),
        isNull(passwordResets.usedAt),
      ))
      .limit(1);
    if (!reset) return errorResponse("Reset token invalid or expired", 404);

    const passwordHash = await hashPassword(parsed.data.password);
    await db.update(users).set({ passwordHash, updatedAt: new Date() }).where(eq(users.id, reset.userId));
    await db.update(passwordResets).set({ usedAt: new Date() }).where(eq(passwordResets.id, reset.id));

    // Invalidate all sessions
    await db.delete(sessions).where(eq(sessions.userId, reset.userId));
    return jsonResponse({ ok: true });
  }

  // ── GET /auth/users/search?q=<username|name> ─────────────────────────────
  if (sub === "users" && segments[1] === "search" && method === "GET") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response) return auth;

    const q = new URL(req.url).searchParams.get("q") ?? "";
    const parsed = SearchUsersSchema.safeParse({ q });
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const term = `%${parsed.data.q.toLowerCase()}%`;
    const rows = await db
      .select({ id: users.id, username: users.username, name: users.name })
      .from(users)
      .where(or(ilike(users.username, term), ilike(users.name, term)))
      .limit(20);

    const filtered = rows
      .filter((u: typeof rows[number]) => !!u.username && u.id !== auth.user.id)
      .map((u: typeof rows[number]) => ({ id: u.id, username: u.username!, name: u.name }));

    return jsonResponse(filtered);
  }

  // ── POST /auth/project-invites ───────────────────────────────────────────
  if (sub === "project-invites" && method === "POST" && !segments[1]) {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response) return auth;

    const body = await req.json().catch(() => null);
    const parsed = SendProjectInviteSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const targetUsername = normalizeUsername(parsed.data.username);
    const [targetUser] = await db.select({ id: users.id }).from(users).where(eq(users.username, targetUsername)).limit(1);
    if (!targetUser) return errorResponse("User not found", 404);
    if (targetUser.id === auth.user.id) return errorResponse("You cannot invite yourself", 400);

    const [project] = await db
      .select({ id: projects.id, orgId: projects.orgId, name: projects.name })
      .from(projects)
      .innerJoin(orgMembers, eq(orgMembers.orgId, projects.orgId))
      .where(and(eq(projects.id, parsed.data.projectId), eq(orgMembers.userId, auth.user.id)))
      .limit(1);
    if (!project) return errorResponse("Project not found", 404);

    const [existingMembership] = await db
      .select({ id: orgMembers.id })
      .from(orgMembers)
      .where(and(eq(orgMembers.orgId, project.orgId), eq(orgMembers.userId, targetUser.id)))
      .limit(1);
    if (existingMembership) return errorResponse("User already has access", 409);

    const [existingInvite] = await db
      .select({ id: projectInvites.id })
      .from(projectInvites)
      .where(and(
        eq(projectInvites.projectId, project.id),
        eq(projectInvites.fromUserId, auth.user.id),
        eq(projectInvites.toUserId, targetUser.id),
        eq(projectInvites.status, "pending"),
      ))
      .limit(1);
    if (existingInvite) return errorResponse("Invite already sent", 409);

    const [invite] = await db.insert(projectInvites).values({
      projectId: project.id,
      fromUserId: auth.user.id,
      toUserId: targetUser.id,
      status: "pending",
    }).returning();

    return jsonResponse(invite, 201);
  }

  // ── GET /auth/project-invites/received ───────────────────────────────────
  if (sub === "project-invites" && segments[1] === "received" && method === "GET") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response) return auth;

    const rows = await db
      .select({
        id: projectInvites.id,
        status: projectInvites.status,
        createdAt: projectInvites.createdAt,
        projectId: projects.id,
        projectName: projects.name,
        fromUserId: users.id,
        fromUsername: users.username,
        fromName: users.name,
      })
      .from(projectInvites)
      .innerJoin(projects, eq(projectInvites.projectId, projects.id))
      .innerJoin(users, eq(projectInvites.fromUserId, users.id))
      .where(and(eq(projectInvites.toUserId, auth.user.id), eq(projectInvites.status, "pending")))
      .orderBy(desc(projectInvites.createdAt));

    return jsonResponse(rows);
  }

  // ── POST /auth/project-invites/:id/accept|decline ───────────────────────
  if (sub === "project-invites" && segments[1] && segments[2] && method === "POST") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response) return auth;

    const inviteId = segments[1];
    const action = segments[2];
    if (action !== "accept" && action !== "decline") return errorResponse("Not found", 404);

    const [invite] = await db
      .select({
        id: projectInvites.id,
        status: projectInvites.status,
        toUserId: projectInvites.toUserId,
        projectId: projects.id,
        orgId: projects.orgId,
      })
      .from(projectInvites)
      .innerJoin(projects, eq(projectInvites.projectId, projects.id))
      .where(and(eq(projectInvites.id, inviteId), eq(projectInvites.toUserId, auth.user.id)))
      .limit(1);
    if (!invite) return errorResponse("Invite not found", 404);
    if (invite.status !== "pending") return errorResponse("Invite already handled", 409);

    if (action === "accept") {
      await db.insert(orgMembers)
        .values({ orgId: invite.orgId, userId: auth.user.id, role: "member" })
        .onConflictDoNothing();
    }

    await db.update(projectInvites)
      .set({ status: action === "accept" ? "accepted" : "declined", respondedAt: new Date() })
      .where(eq(projectInvites.id, invite.id));

    return jsonResponse({ ok: true });
  }

  // ── GET /auth/team ───────────────────────────────────────────────────────
  if (sub === "team" && method === "GET") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response) return auth;
    const { user } = auth;

    const [myMembership] = await db
      .select({ orgId: orgMembers.orgId })
      .from(orgMembers)
      .where(eq(orgMembers.userId, user.id))
      .limit(1);
    if (!myMembership) return jsonResponse([]);

    const members = await db
      .select({ id: users.id, email: users.email, name: users.name, role: orgMembers.role, createdAt: users.createdAt })
      .from(orgMembers)
      .innerJoin(users, eq(orgMembers.userId, users.id))
      .where(eq(orgMembers.orgId, myMembership.orgId));

    return jsonResponse(members);
  }

  // ── PATCH /auth/team/:userId ─────────────────────────────────────────────
  if (sub === "team" && segments[1] && method === "PATCH") {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response) return auth;
    const { user } = auth;

    const targetId = segments[1];
    const body = await req.json().catch(() => null);
    const parsed = UpdateMemberSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [myMembership] = await db
      .select({ orgId: orgMembers.orgId })
      .from(orgMembers)
      .where(eq(orgMembers.userId, user.id))
      .limit(1);
    if (!myMembership) return errorResponse("Forbidden", 403);

    // Can't change owner role
    const [target] = await db.select({ role: orgMembers.role })
      .from(orgMembers)
      .where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId)))
      .limit(1);
    if (target?.role === "owner") return errorResponse("Cannot change owner role", 403);
    if (!target) return errorResponse("Member not found", 404);

    await db.update(orgMembers)
      .set({ role: parsed.data.role })
      .where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId)));
    return jsonResponse({ ok: true });
  }

  // ── DELETE /auth/team/:userId ────────────────────────────────────────────
  if (sub === "team" && segments[1] && method === "DELETE") {
    const auth = await requireAuth(req, "admin");
    if (auth instanceof Response) return auth;
    const { user } = auth;

    const targetId = segments[1];

    const [myMembership] = await db
      .select({ orgId: orgMembers.orgId })
      .from(orgMembers)
      .where(eq(orgMembers.userId, user.id))
      .limit(1);
    if (!myMembership) return errorResponse("Forbidden", 403);

    const [target] = await db.select({ role: orgMembers.role })
      .from(orgMembers)
      .where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId)))
      .limit(1);
    if (target?.role === "owner") return errorResponse("Cannot remove owner", 403);
    if (!target) return errorResponse("Member not found", 404);

    await db.delete(orgMembers)
      .where(and(eq(orgMembers.userId, targetId), eq(orgMembers.orgId, myMembership.orgId)));
    await db.delete(users).where(eq(users.id, targetId));
    return jsonResponse({ ok: true });
  }

  // ── PATCH /auth/profile ──────────────────────────────────────────────────
  if (sub === "profile" && method === "PATCH") {
    const auth = await requireAuth(req, "member");
    if (auth instanceof Response) return auth;

    const body = await req.json().catch(() => null);
    const parsed = UpdateProfileSchema.safeParse(body);
    if (!parsed.success) return errorResponse(parsed.error.issues[0]?.message ?? "Invalid input");

    const [user] = await db.select().from(users).where(eq(users.id, auth.user.id)).limit(1);
    if (!user) return errorResponse("User not found", 404);

    const updates: Partial<typeof user> = {};

    if (parsed.data.username) {
      const normalizedUsername = normalizeUsername(parsed.data.username);
      const [existingUsername] = await db.select({ id: users.id })
        .from(users)
        .where(eq(users.username, normalizedUsername))
        .limit(1);
      if (existingUsername && existingUsername.id !== auth.user.id) return errorResponse("Username already taken", 409);
      updates.username = normalizedUsername;
    }

    if (parsed.data.phone !== undefined) {
      const normalizedPhone = normalizePhone(parsed.data.phone);
      const [existingPhone] = await db.select({ id: users.id })
        .from(users)
        .where(eq(users.phone, normalizedPhone))
        .limit(1);
      if (existingPhone && existingPhone.id !== auth.user.id) return errorResponse("Phone number already in use", 409);
      updates.phone = normalizedPhone;
    }

    if (parsed.data.name) updates.name = parsed.data.name;

    if (parsed.data.twoFactorMethod) updates.twoFactorMethod = parsed.data.twoFactorMethod;
    if (parsed.data.twoFactorEnabled !== undefined) {
      const finalPhone = (updates.phone ?? user.phone) as string | null;
      const finalMethod = (updates.twoFactorMethod ?? user.twoFactorMethod) as "email" | "phone" | "either";
      if (parsed.data.twoFactorEnabled && finalMethod === "phone" && !finalPhone) {
        return errorResponse("Add a phone number before enabling phone-only 2FA", 400);
      }
      updates.twoFactorEnabled = parsed.data.twoFactorEnabled;
    }

    if (parsed.data.newPassword) {
      if (!parsed.data.currentPassword) return errorResponse("Current password required");
      const valid = await verifyPassword(parsed.data.currentPassword, user.passwordHash);
      if (!valid) return errorResponse("Current password incorrect", 401);
      updates.passwordHash = await hashPassword(parsed.data.newPassword);
    }

    updates.updatedAt = new Date();
    await db.update(users).set(updates).where(eq(users.id, user.id));
    return jsonResponse({ ok: true });
  }

  return errorResponse("Not found", 404);
}
