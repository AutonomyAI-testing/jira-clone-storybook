import { RegistrationValues } from "./registration";

const DUPLICATE_EMAIL = "taken@example.com";

export type SubmitResult =
  | { success: true }
  | { success: false; fieldErrors?: { email?: string }; generalError?: string };

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockRegistrationApi = {
  submit: async (values: RegistrationValues): Promise<SubmitResult> => {
    await wait(1200);

    if (values.account.email.toLowerCase() === DUPLICATE_EMAIL) {
      return {
        success: false,
        fieldErrors: { email: "This email is already registered" },
      };
    }

    // Deterministic-ish simulated failure to demonstrate the retry path.
    if (values.account.email.toLowerCase().includes("fail")) {
      return {
        success: false,
        generalError: "Something went wrong on our end. Please try again.",
      };
    }

    return { success: true };
  },

  uploadFile: async (
    onProgress: (progress: number) => void
  ): Promise<void> => {
    const steps = [20, 45, 70, 90, 100];
    for (const progress of steps) {
      await wait(150);
      onProgress(progress);
    }
  },
};
