export type RegisterStep = "account" | "details" | "verify" | "finish";

export const CODE_LENGTH = 6;
export const MIN_PASSWORD_LENGTH = 8;

// The value the terms checkbox submits, shared so the view and the action
// agree on what "accepted" looks like.
export const TERMS_VALUE = "accepted";

export const ROLES = ["Product manager", "Designer", "Engineer", "Founder / owner", "Other"];

export const TEAM_SIZES = ["Just me", "2–10", "11–50", "50+"];

export type RegisterFields = {
  email: string;
  password: string;
  terms: boolean;
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  teamSize: string;
  code: string;
};

export type RegisterErrors = Partial<
  Record<
    "email" | "password" | "terms" | "firstName" | "lastName" | "company" | "role" | "code",
    string
  >
>;

export const initialRegisterFields: RegisterFields = {
  email: "",
  password: "",
  terms: false,
  firstName: "",
  lastName: "",
  company: "",
  role: ROLES[0],
  teamSize: TEAM_SIZES[1],
  code: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ACCOUNT_KEYS: Array<keyof RegisterErrors> = ["email", "password", "terms"];
const DETAILS_KEYS: Array<keyof RegisterErrors> = ["firstName", "lastName", "company", "role"];

export const isValidEmail = (email: string): boolean => EMAIL_PATTERN.test(email);

// These rules run in the browser to advance a step and again in the route
// action before the user is created, so the client can never decide on its own
// that a registration is valid.
export const validateAccount = (fields: RegisterFields): RegisterErrors => {
  const errors: RegisterErrors = {};

  if (!isValidEmail(fields.email)) {
    errors.email = "That doesn't look like an email — try name@company.com";
  }

  if (fields.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = "Too short — use 8 or more characters";
  } else if (!/\d/.test(fields.password) || !/[^A-Za-z0-9]/.test(fields.password)) {
    errors.password = "Add at least one number and one symbol";
  }

  if (!fields.terms) {
    errors.terms = "Accept the terms to continue";
  }

  return errors;
};

export const validateDetails = (fields: RegisterFields): RegisterErrors => {
  const errors: RegisterErrors = {};

  if (!fields.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!fields.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!fields.company.trim()) {
    errors.company = "Company is required";
  }

  if (!fields.role) {
    errors.role = "Pick your role";
  }

  return errors;
};

export const validateCode = (fields: RegisterFields): RegisterErrors => {
  if (fields.code.length !== CODE_LENGTH) {
    return { code: `Enter the ${CODE_LENGTH}-digit code we sent you` };
  }

  return {};
};

export const validateRegistration = (fields: RegisterFields): RegisterErrors => ({
  ...validateAccount(fields),
  ...validateDetails(fields),
  ...validateCode(fields),
});

/** 0 (empty) to 4 (strong), for the meter under the password field. */
export const passwordStrength = (password: string): number => {
  if (!password) return 0;

  let strength = password.length >= MIN_PASSWORD_LENGTH ? 2 : 1;

  if (/\d/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;

  return Math.min(strength, 4);
};

/** The step a set of server errors has to be shown on. */
export const firstStepWithError = (errors: RegisterErrors): RegisterStep => {
  if (ACCOUNT_KEYS.some((key) => key in errors)) return "account";
  if (DETAILS_KEYS.some((key) => key in errors)) return "details";

  return "verify";
};
