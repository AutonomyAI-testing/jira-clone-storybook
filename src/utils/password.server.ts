import { randomBytes, scryptSync } from "node:crypto";

const KEY_LENGTH = 64;

// Server-only: the hash must never reach the client, and `randomBytes` is not
// available in the browser bundle.
export const hashPassword = (password: string): string => {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, KEY_LENGTH).toString("hex");

  return `${salt}:${hash}`;
};
