import { TopicId } from "@domain/topic";

export type UserRegistration = {
  name: string;
  email: string;
  password: string;
  jobTitle: string;
  color: string;
  interests: TopicId[];
  notifyIssueActivity: boolean;
  notifyMentions: boolean;
  notifyWeeklyDigest: boolean;
  acceptedTerms: boolean;
};

// One message per field the registration wizard can reject. The keys double as
// the way back to the step that owns the offending field.
export type RegisterErrors = {
  name?: string;
  email?: string;
  password?: string;
  interests?: string;
  terms?: string;
};

// The avatar colours offered in the profile step. They are the lightest step of
// the ramps in app.css — the same family getRandomPastelColor produces — so a
// new account's avatar sits next to the seeded ones.
export const AVATAR_COLORS = [
  "#cce0ff", // Blue200
  "#baf3db", // Green200
  "#fdd0ec", // Magenta200
  "#ffe2bd", // Orange200
  "#c1f0f5", // Teal200
  "#f8e6a0", // Yellow200
];

export const MIN_INTERESTS = 3;

export type PasswordRule = {
  id: "length" | "number" | "symbol" | "uppercase";
  label: string;
  test: (password: string) => boolean;
};

export const PASSWORD_RULES: PasswordRule[] = [
  {
    id: "length",
    label: "8+ characters",
    test: (password) => password.length >= 8,
  },
  { id: "number", label: "1 number", test: (password) => /\d/.test(password) },
  {
    id: "symbol",
    label: "1 symbol",
    test: (password) => /[^A-Za-z0-9]/.test(password),
  },
  {
    id: "uppercase",
    label: "1 uppercase letter",
    test: (password) => /[A-Z]/.test(password),
  },
];

// Uppercase only feeds the strength meter: a long passphrase should not be
// rejected over its case.
export const getPasswordIssues = (password: string): string[] =>
  PASSWORD_RULES.filter((rule) => rule.id !== "uppercase")
    .filter((rule) => !rule.test(password))
    .map((rule) => rule.label);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email: string): boolean => EMAIL_PATTERN.test(email);
