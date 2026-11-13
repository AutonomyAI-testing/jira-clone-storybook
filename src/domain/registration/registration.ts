export const registrationStepIds = [
  "account",
  "details",
  "documents",
  "review",
] as const;
export type RegistrationStepId = (typeof registrationStepIds)[number];

export const registrationStepDict: Record<RegistrationStepId, string> = {
  account: "Account",
  details: "Your details",
  documents: "Documents",
  review: "Review & submit",
};

export const registrationSteps: RegistrationStepId[] = [...registrationStepIds];

export interface AccountValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface DetailsValues {
  fullName: string;
  phone: string;
  country: string;
  dateOfBirth: string;
}

export type UploadStatus = "pending" | "uploading" | "done" | "error";

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  progress: number;
  status: UploadStatus;
  error?: string;
}

export interface RegistrationValues {
  account: AccountValues;
  details: DetailsValues;
  documents: UploadedFile[];
  acceptedTerms: boolean;
}

export const defaultAccountValues: AccountValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const defaultDetailsValues: DetailsValues = {
  fullName: "",
  phone: "",
  country: "",
  dateOfBirth: "",
};

export const defaultRegistrationValues: RegistrationValues = {
  account: defaultAccountValues,
  details: defaultDetailsValues,
  documents: [],
  acceptedTerms: false,
};

export const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
] as const;
export const ALLOWED_FILE_TYPES_LABEL = "PDF, PNG or JPG";

export const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Spain",
  "France",
  "Germany",
  "Mexico",
  "Argentina",
  "Australia",
  "Japan",
] as const;

export interface RegistrationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  phone?: string;
  country?: string;
  dateOfBirth?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

export const passwordRequirements: { label: string; test: (value: string) => boolean }[] = [
  { label: "At least 8 characters", test: (value) => value.length >= MIN_PASSWORD_LENGTH },
  { label: "One uppercase letter", test: (value) => /[A-Z]/.test(value) },
  { label: "One number", test: (value) => /[0-9]/.test(value) },
];

export const validateAccountStep = (values: AccountValues): RegistrationErrors => {
  const errors: RegistrationErrors = {};

  if (!values.email) {
    errors.email = "Enter your email address";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Enter a valid email address, like name@example.com";
  }

  const passwordIsValid = passwordRequirements.every((req) => req.test(values.password));
  if (!values.password) {
    errors.password = "Create a password";
  } else if (!passwordIsValid) {
    errors.password = "Password doesn't meet the requirements below";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm your password";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords don't match";
  }

  return errors;
};

export const validateDetailsStep = (values: DetailsValues): RegistrationErrors => {
  const errors: RegistrationErrors = {};

  if (!values.fullName || values.fullName.trim().length === 0) {
    errors.fullName = "Enter your full name";
  }
  if (!values.phone || values.phone.trim().length === 0) {
    errors.phone = "Enter a phone number";
  }
  if (!values.country) {
    errors.country = "Select your country";
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Enter your date of birth";
  }

  return errors;
};

export const isStepValid = (
  stepId: RegistrationStepId,
  values: RegistrationValues
): boolean => {
  if (stepId === "account") {
    return Object.keys(validateAccountStep(values.account)).length === 0;
  }
  if (stepId === "details") {
    return Object.keys(validateDetailsStep(values.details)).length === 0;
  }
  if (stepId === "review") {
    return values.acceptedTerms;
  }
  return true;
};

export const isAllowedFileType = (file: File): boolean =>
  (ALLOWED_FILE_TYPES as readonly string[]).includes(file.type);

export const isAllowedFileSize = (file: File): boolean =>
  file.size <= MAX_FILE_SIZE_BYTES;

export const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};
