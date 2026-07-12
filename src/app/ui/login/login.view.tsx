import { useState, useRef } from "react";
import { Form, useNavigation } from "@remix-run/react";

export const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const validateAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let valid = true;
    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid work email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (!valid) e.preventDefault();
  };

  return (
    <div className="login-shell login-grain">
      {/* ===================== BRAND PANEL ===================== */}
      <section className="login-brand">
        <Wordmark />

        <div className="login-brand-mid">
          <p className="login-eyebrow">Autonomous incident response</p>
          <h1 className="login-brand-h1">
            Your on-call engineer that{" "}
            <span className="login-brand-h1-grad">never sleeps.</span>
          </h1>
          <p className="login-lede">
            From first alert to merged fix — the agent triages, investigates,
            and ships the patch while your team stays asleep.
          </p>

          {/* Pipeline visualization */}
          <div className="login-pipeline" aria-hidden="true">
            <div className="login-pl-row">
              <span className="login-pl-node login-node-blue" />
              <span className="login-pl-lab">
                <b>Alert received</b> — latency spike, checkout-svc
              </span>
              <span className="login-pl-time">00:00</span>
            </div>
            <div className="login-pl-row">
              <span className="login-pl-node login-node-amber" />
              <span className="login-pl-lab">
                <b>Triaged &amp; root-caused</b> — connection pool exhausted
              </span>
              <span className="login-pl-time">00:02</span>
            </div>
            <div className="login-pl-row">
              <span className="login-pl-node login-node-ok" />
              <span className="login-pl-lab">
                <b>Fix merged</b> — PR #1408, verified in staging
              </span>
              <span className="login-pl-time">00:09</span>
            </div>
          </div>
        </div>

        <div className="login-brand-foot">
          <span>SOC 2 Type II</span>
          <span className="login-brand-foot-dot" aria-hidden="true" />
          <span>Runs in your infra</span>
          <span className="login-brand-foot-dot" aria-hidden="true" />
          <span>150+ teams on-call</span>
        </div>
      </section>

      {/* ===================== AUTH PANEL ===================== */}
      <section className="login-auth">
        <div className="login-card">
          {/* Mobile-only wordmark */}
          <div className="login-mobile-mark">
            <Wordmark />
          </div>

          {/* Auth header */}
          <div className="login-auth-head">
            <p className="login-auth-eyebrow">Sign in</p>
            <h2 className="login-auth-h2" style={{ color: "red" }}>Welcome back</h2>
            <p className="login-auth-sub">Pick up where the agent left off.</p>
          </div>

          {/* SSO buttons */}
          <div className="login-sso">
            <button
              type="button"
              className="login-sso-btn"
              aria-label="Continue with GitHub"
              onClick={(e) => {
                const btn = e.currentTarget;
                btn.style.borderColor = "var(--aai-orange)";
                setTimeout(() => (btn.style.borderColor = ""), 500);
              }}
            >
              <GithubIcon />
              Continue with GitHub
            </button>
            <button
              type="button"
              className="login-sso-btn"
              aria-label="Continue with Google"
              onClick={(e) => {
                const btn = e.currentTarget;
                btn.style.borderColor = "var(--aai-orange)";
                setTimeout(() => (btn.style.borderColor = ""), 500);
              }}
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="login-divider">
            <span>or</span>
          </div>

          {/* Login form */}
          <Form
            method="post"
            className="login-form"
            noValidate
            onSubmit={validateAndSubmit}
          >
            {/* Email field */}
            <div className="login-field">
              <label htmlFor="email">Work email</label>
              <div className="login-input-wrap">
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  className={`login-input${emailError ? " error" : ""}`}
                  onChange={() => emailError && setEmailError("")}
                />
              </div>
              {emailError && (
                <p className="login-field-error" role="alert">
                  {emailError}
                </p>
              )}
            </div>

            {/* Password field */}
            <div className="login-field">
              <div className="login-lbl-row">
                <label htmlFor="password">Password</label>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" tabIndex={0}>
                  Forgot password?
                </a>
              </div>
              <div className="login-input-wrap">
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  required
                  minLength={8}
                  className={`login-input has-reveal${passwordError ? " error" : ""}`}
                  onChange={() => passwordError && setPasswordError("")}
                />
                <button
                  type="button"
                  className="login-reveal"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {passwordError && (
                <p className="login-field-error" role="alert">
                  {passwordError}
                </p>
              )}
            </div>

            {/* Remember me */}
            <label className="login-remember">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={remember}
                onChange={() => setRemember((v) => !v)}
              />
              <span className="login-checkbox-box" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.5 10 17l9-10" />
                </svg>
              </span>
              Keep me signed in
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="login-submit"
              disabled={isLoading}
              name="_action"
              value="login"
            >
              {isLoading && (
                <span
                  className="login-spinner"
                  aria-hidden="true"
                />
              )}
              <span>{isLoading ? "Signing in…" : "Sign in"}</span>
            </button>
          </Form>

          <p className="login-footnote">
            New to the On-Call Agent?{" "}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Request access</a>
          </p>

          <div className="login-secure">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};

/* ---- Shared sub-components ---- */

const Wordmark = () => (
  <div className="login-wordmark">
    <span className="login-wordmark-glyph" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
        <circle cx="12" cy="12" r="3.4" />
      </svg>
    </span>
    <span>
      Autonomy<span className="login-wordmark-ai">AI</span>
    </span>
    <span className="login-wordmark-div" aria-hidden="true" />
    <span className="login-wordmark-product">On-Call Agent</span>
  </div>
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

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" style={{ width: 17, height: 17 }}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z" />
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z" />
  </svg>
);
