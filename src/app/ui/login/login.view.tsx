import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, userMock1 } from "@domain/user";

/* ------------------------------------------------------------------ */
/*  Sub-components                                                      */
/* ------------------------------------------------------------------ */

/** Small inline SVG icon helpers — keeps the file self-contained */
const IconJiraLogo = () => (
  <svg
    viewBox="0 0 32 32"
    width="24"
    height="24"
    fill="none"
    aria-hidden="true"
  >
    <rect width="32" height="32" rx="6" fill="var(--color-background-brand-bold)" />
    <path
      d="M16 7v10M16 7l-5 5M16 7l5 5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17a6 6 0 0 0 12 0"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const IconGoogle = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const IconEye = ({ slashed = false }: { slashed?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    {slashed && <line x1="3" y1="3" x2="21" y2="21" />}
  </svg>
);

const IconCheck = () => (
  <svg
    viewBox="0 0 24 24"
    width="11"
    height="11"
    fill="none"
    stroke="white"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const IconLock = () => (
  <svg
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Pipeline timeline items (brand panel decoration)                   */
/* ------------------------------------------------------------------ */
const pipelineRows = [
  {
    status: "blue" as const,
    label: "Sprint created",
    detail: "Q3 backlog refined, 14 issues estimated",
    time: "09:00",
  },
  {
    status: "amber" as const,
    label: "Blocked issue flagged",
    detail: "API rate-limit on checkout-svc dependency",
    time: "09:47",
  },
  {
    status: "green" as const,
    label: "Issue resolved & closed",
    detail: "PR #412 merged, sprint velocity +18 %",
    time: "11:03",
  },
];

const nodeColor = {
  blue: "bg-background-accent-blue-bolder",
  amber: "bg-background-warning-bold",
  green: "bg-background-success-bold",
};

/* ------------------------------------------------------------------ */
/*  Main component                                                      */
/* ------------------------------------------------------------------ */

export const LoginView = ({ users }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User>(userMock1);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* When the Remix form submits we set loading state briefly */
  const handleSubmitClick = () => {
    setIsSubmitting(true);
  };

  return (
    <div className="grid min-h-screen" style={{ gridTemplateColumns: "1.05fr 0.95fr" }}>
      {/* =========================================================== */}
      {/* LEFT — Brand panel                                           */}
      {/* =========================================================== */}
      <section
        className="relative hidden overflow-hidden border-r border-border bg-elevation-surface-sunken p-12 md:flex md:flex-col"
        aria-label="Brand panel"
      >
        {/* Subtle radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(60% 55% at 15% 8%, rgba(0,82,204,0.12), transparent 60%)," +
              "radial-gradient(50% 50% at 90% 95%, rgba(0,82,204,0.06), transparent 62%)",
          }}
        />

        {/* Wordmark */}
        <div className="relative z-10 flex items-center gap-3">
          <IconJiraLogo />
          <span className="font-primary-black text-lg text-font">
            Jira<span className="text-font-brand">Clone</span>
          </span>
          <span className="mx-1 h-5 w-px bg-border-bold" aria-hidden="true" />
          <span className="font-primary text-sm text-font-subtle">Project Tracker</span>
        </div>

        {/* Hero block */}
        <div className="relative z-10 my-auto max-w-lg py-12">
          <p className="mb-5 font-primary text-xs uppercase tracking-widest text-font-brand">
            Agile project management
          </p>

          <h1 className="font-primary-black text-4xl leading-tight text-font lg:text-5xl">
            Organize your work,{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, var(--color-background-brand-bold), var(--color-font-accent-blue))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              deliver faster.
            </span>
          </h1>

          <p className="mt-5 font-primary-light text-lg leading-relaxed text-font-subtle">
            Plan sprints, track issues, and ship features — all in one place.
            Built for teams that move fast and care about quality.
          </p>

          {/* Pipeline / timeline decoration */}
          <div className="mt-10 flex flex-col" aria-hidden="true">
            {pipelineRows.map((row, i) => (
              <div key={i} className="relative flex items-center gap-4 py-3">
                {/* Connector line */}
                {i < pipelineRows.length - 1 && (
                  <span
                    className="absolute left-[5px] top-8 h-full w-px bg-border"
                    aria-hidden="true"
                  />
                )}
                {/* Status dot */}
                <span
                  className={`relative z-10 h-[11px] w-[11px] flex-none rounded-full ${nodeColor[row.status]}`}
                />
                {/* Label */}
                <span className="font-primary text-sm text-font-subtle">
                  <span className="font-primary-bold text-font">{row.label}</span>
                  {" — "}
                  {row.detail}
                </span>
                {/* Time */}
                <span className="ml-auto font-primary-light text-xs text-font-subtlest">
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer badges */}
        <div className="relative z-10 flex items-center gap-4 font-primary-light text-xs tracking-wider text-font-subtlest">
          <span>Open source</span>
          <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
          <span>Built with Remix</span>
          <span className="h-1 w-1 rounded-full bg-border-bold" aria-hidden="true" />
          <span>Tailwind CSS</span>
        </div>
      </section>

      {/* =========================================================== */}
      {/* RIGHT — Auth panel                                           */}
      {/* =========================================================== */}
      <section
        className="flex items-center justify-center bg-elevation-surface p-8 md:p-16"
        aria-label="Sign in form"
      >
        <div className="w-full max-w-sm">
          {/* Mobile-only wordmark */}
          <div className="mb-8 flex items-center gap-2 md:hidden">
            <IconJiraLogo />
            <span className="font-primary-black text-lg text-font">
              Jira<span className="text-font-brand">Clone</span>
            </span>
          </div>

          {/* Auth heading */}
          <div className="mb-7">
            <p className="mb-3 font-primary text-xs uppercase tracking-widest text-font-subtlest">
              Sign in
            </p>
            <h2 className="font-primary-black text-3xl leading-tight text-font-danger">
              Welcome back
            </h2>
            <p className="mt-2 font-primary-light text-base text-font-subtle">
              Pick up where you left off.
            </p>
          </div>

          {/* SSO Buttons */}
          <div className="mb-5 flex flex-col gap-2.5">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-border bg-elevation-surface-sunken px-4 py-3 font-primary text-sm text-font transition-colors hover:border-border-bold hover:bg-elevation-surface-hovered"
              aria-label="Continue with GitHub"
            >
              <IconGitHub />
              Continue with GitHub
            </button>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg border border-border bg-elevation-surface-sunken px-4 py-3 font-primary text-sm text-font transition-colors hover:border-border-bold hover:bg-elevation-surface-hovered"
              aria-label="Continue with Google"
            >
              <IconGoogle />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="mb-5 flex items-center gap-3 text-font-subtlest">
            <span className="h-px flex-1 bg-border" />
            <span className="font-primary-light text-xs uppercase tracking-wider">or</span>
            <span className="h-px flex-1 bg-border" />
          </div>

          {/* Login form — submits to the existing Remix action */}
          <Form method="post">
            {/* Hidden user field — pass the first mock user */}
            <input type="hidden" name="user" value={selectedUser.id} />

            {/* Email field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-1.5 block font-primary text-xs font-medium text-font-subtle"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border-input bg-background-input px-3.5 py-3 font-primary text-sm text-font placeholder:text-font-subtlest transition-colors focus:border-border-focused focus:outline-none focus:ring-2 focus:ring-border-focused/30 hover:bg-background-input-hovered"
              />
            </div>

            {/* Password field */}
            <div className="mb-4">
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-primary text-xs font-medium text-font-subtle"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="font-primary text-xs text-font-brand hover:underline"
                  tabIndex={0}
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative flex items-center">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  className="w-full rounded-lg border border-border-input bg-background-input py-3 pl-3.5 pr-10 font-primary text-sm text-font placeholder:text-font-subtlest transition-colors focus:border-border-focused focus:outline-none focus:ring-2 focus:ring-border-focused/30 hover:bg-background-input-hovered"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 flex rounded p-1.5 text-font-subtlest transition-colors hover:text-font-subtle focus-visible:outline"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <IconEye slashed={showPassword} />
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="mb-5 flex cursor-pointer select-none items-center gap-2 font-primary text-sm text-font-subtle">
              <input
                type="checkbox"
                className="absolute opacity-0"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span
                className={`flex h-[17px] w-[17px] flex-none items-center justify-center rounded border transition-all ${
                  rememberMe
                    ? "border-background-brand-bold bg-background-brand-bold"
                    : "border-border-bold bg-background-input"
                }`}
                aria-hidden="true"
              >
                {rememberMe && <IconCheck />}
              </span>
              Keep me signed in
            </label>

            {/* Submit button */}
            <button
              type="submit"
              name="_action"
              value="setUser"
              onClick={handleSubmitClick}
              disabled={isSubmitting}
              className="mb-1 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-background-brand-bold px-4 py-3 font-primary text-sm font-semibold text-font-inverse shadow-blue transition-all hover:-translate-y-px hover:bg-background-brand-bold-hovered active:translate-y-0 active:bg-background-brand-bold-pressed disabled:cursor-wait disabled:opacity-70"
              aria-label="Sign in"
            >
              {isSubmitting && (
                <span
                  className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-r-white"
                  aria-hidden="true"
                />
              )}
              <span>{isSubmitting ? "Signing in…" : "Sign in"}</span>
            </button>
          </Form>

          {/* Footnote */}
          <p className="mt-6 text-center font-primary-light text-sm text-font-subtle">
            New to Jira Clone?{" "}
            <a href="#" className="font-primary text-font-brand hover:underline">
              Request access
            </a>
          </p>

          {/* Security badge */}
          <div className="mt-6 flex items-center justify-center gap-2 font-primary-light text-xs tracking-wider text-font-subtlest">
            <IconLock />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};

interface Props {
  users: User[];
}
