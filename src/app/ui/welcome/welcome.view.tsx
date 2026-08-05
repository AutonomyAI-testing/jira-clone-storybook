import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import "./welcome.css";

/* ------------------------------------------------------------------ */
/*  SVG icon helpers                                                     */
/* ------------------------------------------------------------------ */
const GlyphIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" width="17" height="17">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"/>
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z"/>
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Sub-components                                                       */
/* ------------------------------------------------------------------ */

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="welcome-wordmark">
      <span className="welcome-wordmark-glyph">
        <GlyphIcon />
      </span>
      <span>
        Autonomy<span className="welcome-wordmark-ai">AI</span>
      </span>
      {!compact && (
        <>
          <span className="welcome-wordmark-div" aria-hidden="true" />
          <span className="welcome-wordmark-product">On-Call Agent</span>
        </>
      )}
    </div>
  );
}

function BrandPanel() {
  return (
    <section className="welcome-brand" aria-label="Brand panel">
      <Wordmark />

      <div className="welcome-brand-mid">
        <p className="welcome-eyebrow">Autonomous incident response</p>
        <h1 className="welcome-brand-h1">
          Your on-call engineer that{" "}
          <span className="welcome-grad">never sleeps.</span>
        </h1>
        <p className="welcome-brand-lede">
          From first alert to merged fix — the agent triages, investigates, and
          ships the patch while your team stays asleep.
        </p>

        <div className="welcome-pipeline" aria-hidden="true">
          <div className="welcome-pl-row">
            <span className="welcome-node welcome-node-blue" />
            <span className="welcome-pl-lab">
              <strong>Alert received</strong> — latency spike, checkout-svc
            </span>
            <span className="welcome-pl-time">00:00</span>
          </div>
          <div className="welcome-pl-row">
            <span className="welcome-node welcome-node-amber" />
            <span className="welcome-pl-lab">
              <strong>Triaged &amp; root-caused</strong> — connection pool exhausted
            </span>
            <span className="welcome-pl-time">00:02</span>
          </div>
          <div className="welcome-pl-row">
            <span className="welcome-node welcome-node-ok" />
            <span className="welcome-pl-lab">
              <strong>Fix merged</strong> — PR #1408, verified in staging
            </span>
            <span className="welcome-pl-time">00:09</span>
          </div>
        </div>
      </div>

      <div className="welcome-brand-foot">
        <span>SOC 2 Type II</span>
        <span className="welcome-brand-foot-dot" aria-hidden="true" />
        <span>Runs in your infra</span>
        <span className="welcome-brand-foot-dot" aria-hidden="true" />
        <span>150+ teams on-call</span>
      </div>
    </section>
  );
}

function AuthPanel({
  initialLoading = false,
  disabled = false,
}: {
  initialLoading?: boolean;
  disabled?: boolean;
}) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(initialLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // When the whole panel is disabled, interactions are frozen.
  const isDisabled = disabled;
  const isLoading = loading && !isDisabled;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled || isLoading) return;
    if (!email || !password) return;
    setLoading(true);
    // Navigate to the existing login/user-selection page after a brief delay
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <section
      className={`welcome-auth${isDisabled ? " welcome-auth--disabled" : ""}`}
      aria-label="Sign in form"
    >
      <div className="welcome-card">
        {/* Mobile-only compact wordmark */}
        <div className="welcome-mobile-mark">
          <Wordmark compact />
        </div>

        <div className="welcome-auth-head">
          <p className="welcome-auth-eyebrow">Sign in</p>
          <h2 className="welcome-auth-h2">Welcome back</h2>
          <p className="welcome-auth-sub">Pick up where the agent left off.</p>
        </div>

        {/* SSO buttons */}
        <div className="welcome-sso">
          <button
            type="button"
            className="welcome-sso-btn"
            disabled={isDisabled}
            onClick={() => !isDisabled && navigate("/login")}
          >
            <GitHubIcon />
            Continue with GitHub
          </button>
          <button
            type="button"
            className="welcome-sso-btn"
            disabled={isDisabled}
            onClick={() => !isDisabled && navigate("/login")}
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        <div className="welcome-divider">
          <span>or</span>
        </div>

        {/* Email / password form */}
        <form className="welcome-form" onSubmit={handleSubmit} noValidate>
          <div className="welcome-field">
            <label htmlFor="welcome-email">Work email</label>
            <div className="welcome-input-wrap">
              <input
                id="welcome-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                required
                className="welcome-input"
                value={email}
                onChange={(e) => !isDisabled && setEmail(e.target.value)}
                disabled={isDisabled}
              />
            </div>
          </div>

          <div className="welcome-field">
            <div className="welcome-lbl-row">
              <label htmlFor="welcome-password">Password</label>
              <a
                href="#"
                className={`welcome-forgot-link${isDisabled ? " welcome-forgot-link--disabled" : ""}`}
                tabIndex={isDisabled ? -1 : 0}
                aria-disabled={isDisabled}
                onClick={(e) => isDisabled && e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>
            <div className="welcome-input-wrap">
              <input
                id="welcome-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••••••"
                required
                minLength={8}
                className="welcome-input welcome-input-pw"
                value={password}
                onChange={(e) => !isDisabled && setPassword(e.target.value)}
                disabled={isDisabled}
              />
              <button
                type="button"
                className="welcome-reveal"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => !isDisabled && setShowPassword((v) => !v)}
                disabled={isDisabled}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <label
            className={`welcome-remember${
              remember ? " welcome-remember-checked" : ""
            }${isDisabled ? " welcome-remember--disabled" : ""}`}
          >
            <input
              type="checkbox"
              id="welcome-remember"
              checked={remember}
              onChange={(e) => !isDisabled && setRemember(e.target.checked)}
              disabled={isDisabled}
            />
            <span className="welcome-remember-box" aria-hidden="true">
              {remember && <CheckIcon />}
            </span>
            Keep me signed in
          </label>

          <button
            type="submit"
            className="welcome-submit"
            disabled={isLoading || isDisabled}
            data-loading={isLoading ? "" : undefined}
          >
            {isLoading && <span className="welcome-spinner" aria-hidden="true" />}
            <span>{isLoading ? "Signing in…" : "Sign in"}</span>
          </button>
        </form>

        <p className="welcome-footnote">
          New to the On-Call Agent?{" "}
          <a
            href="#"
            aria-disabled={isDisabled}
            onClick={(e) => isDisabled && e.preventDefault()}
          >
            Request access
          </a>
        </p>

        <div className="welcome-secure">
          <LockIcon />
          Encrypted &amp; SSO-ready
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                          */
/* ------------------------------------------------------------------ */

export interface WelcomeViewProps {
  /** Pre-set the auth panel into its loading/submitting state (for Storybook) */
  initialLoading?: boolean;
  /** Disable the entire auth panel — all inputs, buttons, and links are inert */
  disabled?: boolean;
}

export const WelcomeView = ({
  initialLoading = false,
  disabled = false,
}: WelcomeViewProps) => {
  return (
    <div className="welcome-page">
      <main className="welcome-shell">
        <BrandPanel />
        <AuthPanel initialLoading={initialLoading} disabled={disabled} />
      </main>
    </div>
  );
};
