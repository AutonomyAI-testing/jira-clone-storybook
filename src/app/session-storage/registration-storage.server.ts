import { createCookieSessionStorage } from "@remix-run/node";
import { SESSION_SECRET } from "./shared";

const _30minutesInSeconds = 60 * 30;
const VERIFICATION_CODE_SESSION_KEY = "verificationCode";

const registrationStorage = createCookieSessionStorage({
  cookie: {
    name: "registration_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: _30minutesInSeconds,
    httpOnly: true,
  },
});

// The verification code has to survive between the request that sends it and
// the request that checks it, so it is kept in its own short-lived session
// rather than in the user session (which holds the logged in user).
export const getRegistrationSession = async (request: Request) => {
  const session = await registrationStorage.getSession(request.headers.get("Cookie"));

  return {
    getVerificationCode: (): string | null => {
      const code = session.get(VERIFICATION_CODE_SESSION_KEY) as string | undefined;
      return typeof code === "string" ? code : null;
    },
    setVerificationCode: (code: string) => {
      session.set(VERIFICATION_CODE_SESSION_KEY, code);
    },
    clearVerificationCode: () => {
      session.unset(VERIFICATION_CODE_SESSION_KEY);
    },
    commit: () => registrationStorage.commitSession(session),
  };
};
