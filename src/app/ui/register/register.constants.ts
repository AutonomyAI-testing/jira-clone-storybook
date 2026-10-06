import {
  AVATAR_COLORS,
  MIN_INTERESTS,
  RegisterErrors,
  UserRegistration,
  getPasswordIssues,
  isValidEmail,
} from "@domain/user";

export type StepKey = "account" | "profile" | "focus" | "notifications" | "review";

export type RegisterStep = {
  key: StepKey;
  title: string;
  description: string;
};

export const REGISTER_STEPS: RegisterStep[] = [
  { key: "account", title: "Account", description: "Email and password" },
  { key: "profile", title: "Profile", description: "How you appear" },
  { key: "focus", title: "Focus areas", description: "What you work on" },
  {
    key: "notifications",
    title: "Notifications",
    description: "What we send you",
  },
  { key: "review", title: "Review", description: "Confirm and finish" },
];

export const DEFAULT_REGISTRATION: UserRegistration = {
  name: "",
  email: "",
  password: "",
  jobTitle: "",
  color: AVATAR_COLORS[0],
  interests: [],
  notifyIssueActivity: true,
  notifyMentions: true,
  notifyWeeklyDigest: false,
  acceptedTerms: false,
};

// The step that owns each rejected field, so a submit the server turns down
// can send the user back to the field that caused it.
const ERROR_STEP: Record<keyof RegisterErrors, StepKey> = {
  name: "account",
  email: "account",
  password: "account",
  interests: "focus",
  terms: "review",
};

export const getStepIndexForErrors = (errors: RegisterErrors): number => {
  const indexes = (Object.keys(errors) as (keyof RegisterErrors)[])
    .map((field) => REGISTER_STEPS.findIndex((s) => s.key === ERROR_STEP[field]))
    .filter((index) => index >= 0);

  return indexes.length > 0 ? Math.min(...indexes) : 0;
};

// The same rules the action applies, run before leaving a step so the user is
// told about a problem without a round trip. Whether an email is already taken
// is the one thing only the server can answer.
export const validateStep = (stepIndex: number, form: UserRegistration): RegisterErrors => {
  const step = REGISTER_STEPS[stepIndex];
  const errors: RegisterErrors = {};

  if (!step) return errors;

  if (step.key === "account") {
    const name = form.name.trim();
    const email = form.email.trim();

    if (!name) errors.name = "Enter your full name";

    if (!email) errors.email = "Enter your email address";
    else if (!isValidEmail(email)) errors.email = "That doesn't look like an email address";

    if (!form.password) errors.password = "Choose a password";
    else {
      const issues = getPasswordIssues(form.password);
      if (issues.length > 0) errors.password = `Your password still needs ${issues.join(", ")}`;
    }
  }

  if (step.key === "focus" && form.interests.length < MIN_INTERESTS) {
    errors.interests = `Pick at least ${MIN_INTERESTS} focus areas`;
  }

  return errors;
};

export type RegisterStepProps = {
  form: UserRegistration;
  errors: RegisterErrors;
  onChange: (patch: Partial<UserRegistration>) => void;
};

export type RegisterSummaryProps = RegisterStepProps & {
  onGoToStep: (stepIndex: number) => void;
};
