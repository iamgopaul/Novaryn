import { randomBytes, scrypt as nodeScrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(nodeScrypt) as (pw: string, salt: string, len: number, opts: object) => Promise<Buffer>;

const SCRYPT_N = 16;  // Absolute minimum for serverless (insecure but functional)
const SCRYPT_R = 1;
const SCRYPT_P = 1;
const KEYLEN = 64;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const derived = await scrypt(password, salt, KEYLEN, {
    N: SCRYPT_N,
    r: SCRYPT_R,
    p: SCRYPT_P,
    maxmem: 128 * 1024 * 1024,
  });
  return `scrypt$${SCRYPT_N}$${SCRYPT_R}$${SCRYPT_P}$${salt}$${derived.toString("hex")}`;
}

export async function verifyPassword(password: string, hashed: string): Promise<boolean> {
  if (!hashed.startsWith("scrypt$")) {
    const bunRuntime = (globalThis as { Bun?: { password?: { verify: (plain: string, hash: string) => Promise<boolean> } } }).Bun;
    if (bunRuntime?.password?.verify) {
      return bunRuntime.password.verify(password, hashed);
    }
    return false;
  }
  const [, n, r, p, salt, storedHex] = hashed.split("$");
  if (!n || !r || !p || !salt || !storedHex) return false;

  const derived = await scrypt(password, salt, storedHex.length / 2, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
    maxmem: 128 * 1024 * 1024,
  });

  const stored = Buffer.from(storedHex, "hex");
  if (stored.length !== derived.length) return false;
  return timingSafeEqual(stored, derived);
}
