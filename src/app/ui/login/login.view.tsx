import { useState } from "react";
import { Form, useTransition } from "@remix-run/react";
import { userMock1 } from "@domain/user";

interface Props {
  isLoading?: boolean;
}

const GlyphIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" width="17" height="17">
    <path
      fill="#FFC107"
      d="M21.8 10.2H21V10H12v4h5.65C16.7 16.45 14.57 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.96.6 4.01 1.57l2.83-2.83C17.15 3.05 14.72 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.67-.07-1.32-.2-1.8z"
    />
    <path
      fill="#FF3D00"
      d="m3.15 7.35 3.3 2.4C7.35 7.55 9.52 6 12 6c1.55 0 2.96.6 4.01 1.57l2.83-2.83C17.15 3.05 14.72 2 12 2 8.15 2 4.85 4.17 3.15 7.35z"
    />
    <path
      fill="#4CAF50"
      d="M12 22c2.6 0 4.96-1 6.71-2.6l-3.1-2.6C14.59 17.57 13.35 18 12 18c-2.56 0-4.73-1.56-5.65-3.79l-3.3 2.5C4.82 19.84 8.16 22 12 22z"
    />
    <path
      fill="#1976D2"
      d="M21.8 10.2H21V10H12v4h5.65c-.44 1.1-1.2 2.04-2.15 2.7l3.1 2.6C20 17.2 22 14.82 22 12c0-.67-.07-1.32-.2-1.8z"
    />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

export const LoginView = ({ isLoading: isLoadingProp }: Props) => {
  const transition = useTransition();
  const isSubmitting =
    isLoadingProp ||
    transition.state === "submitting" ||
    transition.state === "loading";
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const Wordmark = () => (
    <div className="lp-wordmark">
      <span className="lp-wordmark-glyph">
        <GlyphIcon />
      </span>
      <span>
        Jira <span className="lp-wordmark-accent">Clone</span>
      </span>
    </div>
  );

  return (
    <div className="login-page">
      {/* ========== LEFT BRAND PANEL ========== */}
      <section className="lp-brand" aria-hidden="true">
        <Wordmark />

        <div className="lp-brand-mid">
          <p className="lp-eyebrow">Project management, simplified</p>
          <h1>
            Your team&rsquo;s work,{" "}
            <span className="lp-grad">always clear.</span>
          </h1>
          <p className="lp-brand-desc">
            Plan sprints, track issues, and ship features faster &mdash; all in
            one place built for developers.
          </p>

          <div className="lp-pipeline">
            <div className="lp-pl-row">
              <span className="lp-pl-node lp-n-blue" />
              <span className="lp-pl-label">
                <b>Issue created</b> &mdash; new feature request, checkout-flow
              </span>
              <span className="lp-pl-time">00:00</span>
            </div>
            <div className="lp-pl-row">
              <span className="lp-pl-node lp-n-amber" />
              <span className="lp-pl-label">
                <b>In progress</b> &mdash; assigned &amp; sprint added
              </span>
              <span className="lp-pl-time">00:05</span>
            </div>
            <div className="lp-pl-row">
              <span className="lp-pl-node lp-n-green" />
              <span className="lp-pl-label">
                <b>Done</b> &mdash; PR merged, issue resolved
              </span>
              <span className="lp-pl-time">02:40</span>
            </div>
          </div>
        </div>

        <div className="lp-brand-foot">
          <span>Open Source</span>
          <span className="lp-brand-foot-dot" aria-hidden="true" />
          <span>Free Forever</span>
          <span className="lp-brand-foot-dot" aria-hidden="true" />
          <span>Community Driven</span>
        </div>
      </section>

      {/* ========== RIGHT AUTH PANEL ========== */}
      <section className="lp-auth">
        <div className="lp-card">
          {/* Mobile wordmark - visible only on small screens */}
          <div className="lp-mobile-mark">
            <Wordmark />
          </div>

          <div className="lp-auth-head">
            <p className="lp-auth-eyebrow">Sign in</p>
            <h2>Welcome back</h2>
            <p>Pick up where you left off.</p>
          </div>

          {/* SSO buttons (placeholder — no backend) */}
          <div className="lp-sso">
            <button type="button" className="lp-sso-btn">
              <GitHubIcon />
              Continue with GitHub
            </button>
            <button type="button" className="lp-sso-btn">
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          <div className="lp-divider">
            <span>or</span>
          </div>

          {/* Main login form — posts hidden fields to existing setUser action */}
          <Form method="post" className="lp-form">
            <input type="hidden" name="_action" value="setUser" />
            <input type="hidden" name="user" value={userMock1.id} />

            <div className="lp-field">
              <label htmlFor="lp-email">Work email</label>
              <div className="lp-input-wrap">
                <input
                  id="lp-email"
                  className="lp-input"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="lp-field">
              <div className="lp-lbl-row">
                <label htmlFor="lp-password">Password</label>
                <a href="#" className="lp-forgot" tabIndex={0}>
                  Forgot password?
                </a>
              </div>
              <div className="lp-input-wrap">
                <input
                  id="lp-password"
                  className="lp-input lp-input-pw"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="lp-reveal"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <label className="lp-remember">
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span className="lp-checkbox-box" aria-hidden="true">
                <CheckIcon />
              </span>
              Keep me signed in
            </label>

            <button
              type="submit"
              className={`lp-submit${isSubmitting ? " lp-loading" : ""}`}
              disabled={isSubmitting}
            >
              <span className="lp-spinner" aria-hidden="true" />
              <span className="lp-label">
                {isSubmitting ? "Signing in…" : "Sign in"}
              </span>
            </button>
          </Form>

          <p className="lp-footnote">
            New here?{" "}
            <a href="#">Request access</a>
          </p>

          <div className="lp-secure">
            <LockIcon />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};
