import { useState, useRef } from "react";
import { useNavigate } from "@remix-run/react";

export const WelcomeAuthPanel = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsLoading(true);
    // Simulate async auth then navigate to user-picker login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1400);
  };

  const handleSSOClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = "#F25730";
    setTimeout(() => {
      btn.style.borderColor = "";
    }, 500);
    // Navigate to login picker as a demo SSO flow
    setTimeout(() => navigate("/login"), 600);
  };

  return (
    <section className="welcome-auth" aria-label="Sign in form">
      <div className="w-card">
        {/* Mobile-only wordmark */}
        <div className="w-mobile-mark w-wordmark">
          <span className="w-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span className="w-brand-name">
            Jira<span className="w-ai">Clone</span>
          </span>
        </div>

        {/* Auth header */}
        <div className="w-auth-head">
          <p className="w-auth-ey">Sign in</p>
          <h2 className="w-auth-h2">Welcome back</h2>
          <p className="w-auth-sub">Pick up where you left off.</p>
        </div>

        {/* SSO buttons */}
        <div className="w-sso">
          <button
            type="button"
            className="w-sso-btn"
            onClick={handleSSOClick}
            aria-label="Continue with GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
            </svg>
            Continue with GitHub
          </button>
          <button
            type="button"
            className="w-sso-btn"
            onClick={handleSSOClick}
            aria-label="Continue with Google"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="17"
              height="17"
            >
              <path
                fill="#FFC107"
                d="M21.8 10.2H21V10H12v4h5.65C16.9 16.45 14.65 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.96.6 4.02 1.58L18.44 5.16A9.97 9.97 0 0 0 12 3c-4.97 0-9.09 3.63-9.87 8.39"
              />
              <path
                fill="#FF3D00"
                d="M3.15 7.35 6.44 9.75C7.35 7.55 9.5 6 12 6c1.55 0 2.96.6 4.02 1.58L18.44 5.16A9.97 9.97 0 0 0 12 3C8.15 3 4.83 4.69 3.15 7.35Z"
              />
              <path
                fill="#4CAF50"
                d="M12 21c2.6 0 4.95-1 6.7-2.6l-3.09-2.6C14.59 17.55 13.35 18 12 18c-2.64 0-4.88-1.55-5.65-3.8L3.23 16.7C4.95 19.8 8.19 21 12 21Z"
              />
              <path
                fill="#1976D2"
                d="M21.8 10.2H21V10H12v4h5.65c-.38 1.1-1.09 2.05-2.03 2.78l3.09 2.6C20 17.17 22 14.78 22 12c0-.65-.08-1.28-.2-1.8Z"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="w-divider">
          <span>or</span>
        </div>

        {/* Login form */}
        <form
          ref={formRef}
          className="w-form"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Email field */}
          <div className="w-field">
            <label htmlFor="w-email">Work email</label>
            <div className="w-input-wrap">
              <input
                id="w-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
                className={`w-input${errors.email ? " w-input-error" : ""}`}
                aria-describedby={errors.email ? "w-email-error" : undefined}
                aria-invalid={!!errors.email}
              />
            </div>
            {errors.email && (
              <p
                id="w-email-error"
                role="alert"
                style={{
                  margin: "6px 0 0",
                  fontSize: "12px",
                  color: "var(--w-err, #E5533C)",
                  fontFamily: "CircularStdMedium, sans-serif",
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Password field */}
          <div className="w-field">
            <div className="w-lbl-row">
              <label htmlFor="w-password">Password</label>
              <a href="#" className="w-forgot-link" tabIndex={0}>
                Forgot password?
              </a>
            </div>
            <div className="w-input-wrap">
              <input
                id="w-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password)
                    setErrors((p) => ({ ...p, password: undefined }));
                }}
                className={`w-input w-input-with-reveal${
                  errors.password ? " w-input-error" : ""
                }`}
                aria-describedby={
                  errors.password ? "w-password-error" : undefined
                }
                aria-invalid={!!errors.password}
              />
              <button
                type="button"
                className="w-reveal-btn"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="3" y1="3" x2="21" y2="21" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24">
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p
                id="w-password-error"
                role="alert"
                style={{
                  margin: "6px 0 0",
                  fontSize: "12px",
                  color: "var(--w-err, #E5533C)",
                  fontFamily: "CircularStdMedium, sans-serif",
                }}
              >
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember me */}
          <label
            className={`w-remember${rememberMe ? " w-checked" : ""}`}
            onClick={() => setRememberMe((v) => !v)}
          >
            <span className="w-check-box" aria-hidden="true">
              {rememberMe && (
                <svg viewBox="0 0 24 24">
                  <path d="M5 12.5 10 17l9-10" />
                </svg>
              )}
            </span>
            Keep me signed in
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-submit-btn"
            disabled={isLoading}
            aria-label={isLoading ? "Signing in…" : "Sign in"}
          >
            {isLoading && (
              <span className="w-spinner" aria-hidden="true" />
            )}
            <span>{isLoading ? "Signing in…" : "Sign in"}</span>
          </button>
        </form>

        {/* Footnote */}
        <p className="w-footnote">
          New here?{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); navigate("/login"); }}>
            Browse as a demo user
          </a>
        </p>

        {/* Security badge */}
        <div className="w-secure">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Encrypted &amp; SSO-ready
        </div>
      </div>
    </section>
  );
};
