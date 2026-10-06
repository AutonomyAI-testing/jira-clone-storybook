import { randomBytes, scryptSync } from "node:crypto";

// Node's own scrypt, so no new dependency is needed to avoid storing
// passwords in plain text. The salt is stored next to the derived key.
const KEY_LENGTH = 64;
const SCHEME = "scrypt";

export const hashPassword = (password: string): string => {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = scryptSync(password, salt, KEY_LENGTH).toString("hex");

  return `${SCHEME}:${salt}:${derivedKey}`;
};
