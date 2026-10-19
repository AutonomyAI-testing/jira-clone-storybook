import { textAreOnlySpaces } from "@utils/text-are-only-spaces";

export const REGISTER_STEPS = ["Account", "About you", "Workspace", "Review"] as const;

export type RegisterStep = 1 | 2 | 3 | 4;

export const TOTAL_REGISTER_STEPS = REGISTER_STEPS.length;

export type RegisterField =
  | "email"
  | "password"
  | "confirmPassword"
  | "firstName"
  | "lastName"
  | "role"
  | "company"
  | "workspace"
  | "teamSize"
  | "terms";

export type RegisterValues = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  workspace: string;
  teamSize: string;
  terms: boolean;
};

export type RegisterErrors = Partial<Record<RegisterField, string>>;

export const initialRegisterValues: RegisterValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  role: "",
  company: "",
  workspace: "",
  teamSize: "",
  terms: false,
};

export const REGISTER_STEP_FIELDS: Record<RegisterStep, RegisterField[]> = {
  1: ["email", "password", "confirmPassword"],
  2: ["firstName", "lastName", "role", "company"],
  3: ["workspace", "teamSize"],
  4: ["terms"],
};

// Which step owns a field. The action answers with field-keyed errors, so the
// view needs this to jump the user back to the step that can fix them.
export const REGISTER_FIELD_STEP: Record<RegisterField, RegisterStep> = {
  email: 1,
  password: 1,
  confirmPassword: 1,
  firstName: 2,
  lastName: 2,
  role: 2,
  company: 2,
  workspace: 3,
  teamSize: 3,
  terms: 4,
};

export const REGISTER_STEP_COPY: Record<RegisterStep, { title: string; subtitle: string }> = {
  1: {
    title: "Create your account",
    subtitle: "Start with the email you will sign in with.",
  },
  2: {
    title: "Tell us about you",
    subtitle: "This is what your team sees on the work you share.",
  },
  3: {
    title: "Set up your workspace",
    subtitle: "Your team joins this space.",
  },
  4: {
    title: "Review and confirm",
    subtitle: "Check everything looks right before we create your account.",
  },
};

export const MIN_PASSWORD_LENGTH = 8;
export const WORKSPACE_MAX_LENGTH = 40;
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// The single source of truth for what a valid registration looks like: the view
// gates each step with it, and the action re-runs all four steps on submit.
export const validateRegisterStep = (
  step: RegisterStep,
  values: RegisterValues
): RegisterErrors => {
  const errors: RegisterErrors = {};

  if (step === 1) {
    const email = values.email.trim();

    if (!email) {
      errors.email = "Email is required";
    } else if (!EMAIL_PATTERN.test(email)) {
      errors.email = "Enter a valid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < MIN_PASSWORD_LENGTH) {
      errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters`;
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm your password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  if (step === 2) {
    if (!values.firstName.trim() || textAreOnlySpaces(values.firstName)) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName.trim() || textAreOnlySpaces(values.lastName)) {
      errors.lastName = "Last name is required";
    }

    if (!values.role) {
      errors.role = "Select a role";
    }
  }

  if (step === 3) {
    const workspace = values.workspace.trim();

    if (!workspace || textAreOnlySpaces(values.workspace)) {
      errors.workspace = "Workspace name is required";
    } else if (workspace.length > WORKSPACE_MAX_LENGTH) {
      errors.workspace = `Keep it under ${WORKSPACE_MAX_LENGTH} characters`;
    }

    if (!values.teamSize) {
      errors.teamSize = "Pick a team size";
    }
  }

  if (step === 4 && !values.terms) {
    errors.terms = "Accept the terms to continue";
  }

  return errors;
};

export const validateRegisterForm = (values: RegisterValues): RegisterErrors => {
  return REGISTER_STEPS.reduce<RegisterErrors>(
    (errors, _label, index) => ({
      ...errors,
      ...validateRegisterStep((index + 1) as RegisterStep, values),
    }),
    {}
  );
};

export const getFirstErrorStep = (errors: RegisterErrors): RegisterStep => {
  const steps = (Object.keys(errors) as RegisterField[])
    .map((field) => REGISTER_FIELD_STEP[field])
    .sort((a, b) => a - b);

  return steps[0] ?? 1;
};

export const getFirstErrorField = (errors: RegisterErrors): RegisterField | undefined => {
  const step = getFirstErrorStep(errors);

  return REGISTER_STEP_FIELDS[step].find((field) => errors[field]);
};
