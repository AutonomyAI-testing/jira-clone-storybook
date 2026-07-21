import { useState, type CSSProperties } from "react";
import { Link, useNavigate } from "@remix-run/react";
import { Button } from "@app/components/button";

const PIPELINE_STEPS = [
  {
    accent:
      "bg-background-info-bold shadow-[0_0_0_4px_var(--color-background-info)]",
    title: "Alert received",
    detail: "latency spike, checkout-svc",
    time: "00:00",
  },
  {
    accent:
      "bg-[var(--pipeline-amber,#F5A524)] shadow-[0_0_0_4px_rgba(245,165,36,0.18)]",
    title: "Triaged & root-caused",
    detail: "connection pool exhausted",
    time: "00:02",
  },
  {
    accent:
      "bg-background-success-bold shadow-[0_0_0_4px_var(--color-background-success)]",
    title: "Fix merged",
    detail: "PR #1408, verified in staging",
    time: "00:09",
  },
] as const;

const FOOTER_ITEMS = [
  "SOC 2 Type II",
  "Runs in your infra",
  "150+ teams on-call",
] as const;

const Wordmark = ({ className = "" }: { className?: string }) => (
  <div
    className={`flex items-center gap-2.5 font-primary-black text-[19px] tracking-tight text-font ${className}`}
  >
    <span
      className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg bg-background-warning-bold shadow-sm"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 stroke-font-inverse"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    </span>
    <span>
      Autonomy<span className="text-font-warning">AI</span>
    </span>
    <span
      className="mx-0.5 hidden h-[18px] w-px bg-border sm:inline-block"
      aria-hidden="true"
    />
    <span className="hidden font-primary text-sm text-font-subtle sm:inline">
      On-Call Agent
    </span>
  </div>
);

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] shrink-0 fill-current text-font"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/** Matches the design's yellow rocket mark on the Google SSO button */
const GoogleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] shrink-0"
    aria-hidden="true"
  >
    <path
      fill="#fbbc05"
      d="M12 2l3.2 6.9 7.3.6-5.5 4.8 1.7 7.1L12 17.8 5.3 21.4l1.7-7.1L1.5 9.5l7.3-.6z"
    />
  </svg>
);

const fieldClassName =
  "w-full rounded-lg border border-border bg-elevation-surface-raised px-3.5 py-2.5 font-primary text-sm text-font outline-none transition placeholder:text-font-subtlest focus:border-border-brand focus:shadow-[0_0_0_3px_var(--color-background-brand-subtlest)]";

const ssoButtonClassName =
  "flex w-full items-center justify-center gap-2.5 rounded-lg border border-border bg-elevation-surface-raised px-3.5 py-2.5 font-primary text-sm text-font transition hover:bg-elevation-surface-raised-hovered hover:border-border-bold";

export const WelcomeView = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const goToLogin = () => navigate("/login");

  return (
    <main
      className="dark relative grid min-h-screen bg-elevation-surface text-font lg:grid-cols-[1.05fr_0.95fr]"
      style={
        {
          /* Design-scoped tokens: AutonomyAI orange + cold ink surfaces */
          "--color-font-warning": "#F25730",
          "--color-background-warning": "rgba(242, 87, 48, 0.16)",
          "--color-background-warning-bold": "#F25730",
          "--color-background-warning-bold-hovered": "#E04A24",
          "--color-background-warning-bold-pressed": "#C9401D",
          "--color-elevation-surface": "#141210",
          "--color-elevation-surface-sunken": "#0B0A09",
          "--color-elevation-surface-raised": "#1C1A17",
          "--color-elevation-surface-raised-hovered": "#24201C",
          "--color-border": "rgba(255, 255, 255, 0.08)",
          "--color-border-bold": "rgba(255, 255, 255, 0.14)",
          "--color-font": "#F4F0EA",
          "--color-font-subtle": "#A39E96",
          "--color-font-subtlest": "#6F6A63",
          "--color-font-inverse": "#FFFFFF",
        } as CSSProperties
      }
    >
      {/* Film-grain texture matching the design signature */}
      <div
        className="pointer-events-none absolute inset-0 z-50 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />

      {/* Left brand panel */}
      <section className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-sunken px-9 py-10 lg:flex xl:px-16 xl:py-16">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(255,244,230,0.12), transparent 60%), radial-gradient(55% 50% at 90% 100%, rgba(242,87,48,0.18), transparent 62%)",
          }}
        />
        <div className="relative z-[1] flex h-full flex-col">
          <Wordmark />

          <div className="my-auto max-w-[480px] py-12">
            <p className="mb-5 font-primary text-xs font-medium uppercase tracking-[0.16em] text-font-warning">
              Autonomous incident response
            </p>
            <h1 className="font-primary-black text-[clamp(2rem,3.6vw,3rem)] leading-[1.05] tracking-tight text-font">
              Your on-call engineer that{" "}
              <span className="bg-gradient-to-r from-background-warning-bold to-background-danger-bold bg-clip-text text-transparent">
                never sleeps.
              </span>
            </h1>
            <p className="mt-5 max-w-[420px] font-primary-light text-lg leading-relaxed text-font-subtle">
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </p>

            <div className="mt-10 flex flex-col" aria-hidden="true">
              {PIPELINE_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex items-center gap-3.5 py-2.5"
                >
                  {index < PIPELINE_STEPS.length - 1 && (
                    <span className="absolute bottom-0 left-[5px] top-6 w-px bg-border" />
                  )}
                  <span
                    className={`relative z-[1] h-[11px] w-[11px] flex-none rounded-full ${step.accent}`}
                  />
                  <span className="font-primary-light text-xs tracking-wide text-font-subtle">
                    <b className="font-primary-bold text-font">{step.title}</b>
                    {" — "}
                    {step.detail}
                  </span>
                  <span className="ml-auto font-primary-light text-[11px] text-font-subtlest">
                    {step.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-primary-light text-[11px] tracking-wide text-font-subtlest">
            {FOOTER_ITEMS.map((item, index) => (
              <span key={item} className="flex items-center gap-4">
                {index > 0 && (
                  <span
                    className="h-1 w-1 rounded-full bg-border-bold"
                    aria-hidden="true"
                  />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Right sign-in panel */}
      <section className="relative z-[1] flex items-center justify-center bg-elevation-surface px-7 py-10 sm:px-12 lg:px-16">
        <div className="w-full max-w-[392px]">
          <Wordmark className="mb-8 lg:hidden" />

          <div className="mb-8">
            <p className="mb-3.5 font-primary text-xs font-medium uppercase tracking-[0.16em] text-font-subtlest">
              Sign in
            </p>
            <h2 className="font-primary-bold text-3xl leading-tight tracking-tight text-font">
              Welcome back
            </h2>
            <p className="mt-2 font-primary-light text-[15px] leading-relaxed text-font-subtle">
              Pick up where the agent left off.
            </p>
          </div>

          <div className="mb-5 flex flex-col gap-2.5">
            <button
              type="button"
              className={ssoButtonClassName}
              onClick={goToLogin}
              aria-label="Continue with GitHub"
            >
              <GitHubIcon />
              Continue with GitHub
            </button>
            <button
              type="button"
              className={ssoButtonClassName}
              onClick={goToLogin}
              aria-label="Continue with Google"
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          <div
            className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-font-subtlest"
            aria-hidden="true"
          >
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <form
            className="flex flex-col gap-3.5"
            onSubmit={(event) => {
              event.preventDefault();
              goToLogin();
            }}
          >
            <label className="flex flex-col gap-1.5">
              <span className="font-primary text-xs text-font-subtle">
                Work email
              </span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                className={fieldClassName}
              />
            </label>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="welcome-password"
                  className="font-primary text-xs text-font-subtle"
                >
                  Password
                </label>
                <button
                  type="button"
                  className="font-primary text-xs text-font-warning hover:underline"
                  onClick={goToLogin}
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="welcome-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  placeholder="••••••••••••"
                  className={`${fieldClassName} pr-11`}
                />
                <button
                  type="button"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-base leading-none text-font-subtle hover:text-font"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-2.5 py-0.5 font-primary-light text-sm text-font-subtle">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-border accent-[var(--color-background-warning-bold)]"
                checked={keepSignedIn}
                onChange={(event) => setKeepSignedIn(event.target.checked)}
              />
              Keep me signed in
            </label>

            <Button
              type="submit"
              color="warning"
              variant="contained"
              size="lg"
              className="mt-1 w-full justify-center py-3 shadow-sm"
              aria-label="Sign in"
            >
              Sign in
            </Button>
          </form>

          <p className="mt-7 text-center font-primary-light text-sm text-font-subtle">
            New to the On-Call Agent?{" "}
            <Link
              to="/login"
              className="font-primary text-font-warning hover:underline"
            >
              Request access
            </Link>
          </p>

          <div className="mt-7 flex items-center justify-center gap-2 font-primary-light text-[11px] tracking-wide text-font-subtlest">
            <span aria-hidden="true">🔒</span>
            Encrypted & SSO-ready
          </div>
        </div>
      </section>
    </main>
  );
};
