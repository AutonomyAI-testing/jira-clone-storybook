import { useState, useRef, FormEvent } from "react";

type FormState = "idle" | "loading" | "error";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter your email and password.");
      setFormState("error");
      return;
    }
    setErrorMessage("");
    setFormState("loading");
    // Simulate network request
    setTimeout(() => {
      setFormState("idle");
    }, 1800);
  };

  return (
    <div
      className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16 xl:px-20 min-h-full"
      style={{ background: "#161a1d" }}
    >
      <div className="mx-auto w-full max-w-[400px]">
        {/* Mobile-only logo */}
        <div className="flex items-center gap-3 mb-10 lg:hidden">
          <div
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ background: "linear-gradient(135deg, #f18d13, #d97008)" }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L3 7v9h4v-5h4v5h4V7L9 2z" fill="white" />
            </svg>
          </div>
          <span className="font-primary-bold text-sm" style={{ color: "#dee4ea" }}>
            AutonomyAI
          </span>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h2
            className="font-primary-black text-3xl mb-2"
            style={{ color: "#ef5c48" }}
          >
            Welcome back
          </h2>
          <p className="font-primary-light text-sm" style={{ color: "#738496" }}>
            Sign in to your AutonomyAI workspace
          </p>
        </div>

        {/* SSO Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-primary transition-colors"
            style={{
              background: "#22272b",
              border: "1px solid rgba(168,197,226,0.1)",
              color: "#b6c2cf",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#282e33";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,197,226,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#22272b";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,197,226,0.1)";
            }}
          >
            {/* GitHub icon */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.491.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </button>
          <button
            type="button"
            className="flex-1 flex items-center justify-center gap-2.5 rounded-lg px-4 py-2.5 text-sm font-primary transition-colors"
            style={{
              background: "#22272b",
              border: "1px solid rgba(168,197,226,0.1)",
              color: "#b6c2cf",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#282e33";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,197,226,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#22272b";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,197,226,0.1)";
            }}
          >
            {/* Google icon */}
            <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px" style={{ background: "rgba(168,197,226,0.08)" }} />
          <span className="font-primary text-xs" style={{ color: "#454f59" }}>
            or continue with email
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(168,197,226,0.08)" }} />
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          {/* Error message */}
          {formState === "error" && errorMessage && (
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 mb-5 text-sm font-primary-light"
              style={{
                background: "rgba(239,92,72,0.1)",
                border: "1px solid rgba(239,92,72,0.25)",
                color: "#f87462",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#f87462" strokeWidth="1.2" />
                <path d="M7 4v3" stroke="#f87462" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="7" cy="10" r="0.75" fill="#f87462" />
              </svg>
              {errorMessage}
            </div>
          )}

          {/* Email field */}
          <div className="mb-4">
            <label
              htmlFor="login-email"
              className="block font-primary text-xs mb-1.5 uppercase tracking-wider"
              style={{ color: "#596773", letterSpacing: "0.1em" }}
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-lg px-3.5 py-2.5 text-sm font-primary-light outline-none transition-all"
              style={{
                background: "#22272b",
                border: "1px solid rgba(168,197,226,0.12)",
                color: "#dee4ea",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#f18d13";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(241,141,19,0.12)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,197,226,0.12)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Password field */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="login-password"
                className="font-primary text-xs uppercase tracking-wider"
                style={{ color: "#596773", letterSpacing: "0.1em" }}
              >
                Password
              </label>
              <button
                type="button"
                className="font-primary text-xs transition-colors"
                style={{ color: "#f18d13" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#faa53d")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#f18d13")}
              >
                Forgot password?
              </button>
            </div>
            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg px-3.5 py-2.5 text-sm font-primary-light outline-none transition-all pr-10"
                style={{
                  background: "#22272b",
                  border: "1px solid rgba(168,197,226,0.12)",
                  color: "#dee4ea",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#f18d13";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(241,141,19,0.12)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(168,197,226,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors p-0.5"
                style={{ color: "#596773" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#9fadbc")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#596773")}
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2.5 mb-6">
            <button
              type="button"
              role="checkbox"
              aria-checked={rememberMe}
              onClick={() => setRememberMe((v) => !v)}
              className="flex items-center justify-center w-4 h-4 rounded transition-all flex-shrink-0"
              style={{
                background: rememberMe ? "#f18d13" : "transparent",
                border: `1.5px solid ${rememberMe ? "#f18d13" : "rgba(168,197,226,0.25)"}`,
              }}
            >
              {rememberMe && (
                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            <span className="font-primary-light text-sm" style={{ color: "#8c9bab" }}>
              Remember me for 30 days
            </span>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={formState === "loading"}
            className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-primary text-sm transition-all"
            style={{
              background: formState === "loading" ? "#d97008" : "#f18d13",
              color: "white",
              opacity: formState === "loading" ? 0.85 : 1,
              cursor: formState === "loading" ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (formState !== "loading") {
                (e.currentTarget as HTMLButtonElement).style.background = "#faa53d";
              }
            }}
            onMouseLeave={(e) => {
              if (formState !== "loading") {
                (e.currentTarget as HTMLButtonElement).style.background = "#f18d13";
              }
            }}
          >
            {formState === "loading" ? (
              <>
                <svg
                  className="animate-spin"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="3"
                  />
                  <path
                    d="M22 12a10 10 0 00-10-10"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L2 3v4c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V3L7 1z"
                stroke="#454f59"
                strokeWidth="1.2"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="font-primary-light text-xs" style={{ color: "#454f59" }}>
              Encrypted &amp; SSO-ready
            </span>
          </div>
          <p className="font-primary-light text-xs" style={{ color: "#454f59" }}>
            Need access?{" "}
            <button
              type="button"
              className="transition-colors underline underline-offset-2"
              style={{ color: "#596773" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#9fadbc")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#596773")}
            >
              Contact your administrator
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
