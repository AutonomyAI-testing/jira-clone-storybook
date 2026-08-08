import { useState } from "react";
import { Form } from "@remix-run/react";

// Eye open icon
const EyeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Eye off icon
const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

// Spinner icon
const SpinnerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 animate-spin fill-none stroke-current" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <path d="M12 2a10 10 0 0 1 10 10" opacity=".8" />
  </svg>
);

// GitHub icon
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-none" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

// Google icon
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] flex-none" aria-hidden="true">
    <path fill="#FFC107" d="M21.8 10.2H12v3.7h5.6c-.5 2.6-2.8 4.5-5.6 4.5a6.2 6.2 0 0 1 0-12.4c1.6 0 3 .6 4.1 1.6l2.8-2.8A10 10 0 1 0 12 22c5.5 0 10-4.5 10-10 0-.6-.1-1.2-.2-1.8Z" />
    <path fill="#FF3D00" d="m3.2 7.3 3.2 2.3A6.2 6.2 0 0 1 12 5.8c1.6 0 3 .6 4.1 1.6l2.8-2.8A10 10 0 0 0 3.2 7.3Z" />
    <path fill="#4CAF50" d="M12 22c2.6 0 4.9-.9 6.7-2.4l-3.1-2.6A6.2 6.2 0 0 1 6.4 14l-3.2 2.4A10 10 0 0 0 12 22Z" />
    <path fill="#1976D2" d="M21.8 10.2H12v3.7h5.6c-.3 1.3-1 2.4-2 3.1l3.1 2.5c1.8-1.7 3-4.2 3-7.3 0-.6-.1-1.2-.2-1.8Z" />
  </svg>
);

// Lock icon
const LockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

// Checkmark icon
const CheckIcon = () => (
  <svg viewBox="0 0 10 10" className="w-[10px] h-[10px] fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1.5 5l2.5 2.5 4.5-4" />
  </svg>
);

interface AuthFormProps {
  isLoading?: boolean;
}

export const AuthForm = ({ isLoading: initialLoading = false }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [rememberMe, setRememberMe] = useState(false);
  const [ssoHighlight, setSsoHighlight] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1600);
  };

  const handleSso = (provider: string) => {
    setSsoHighlight(provider);
    setTimeout(() => setSsoHighlight(null), 500);
  };

  const inputClass =
    "w-full text-[15px] text-white placeholder-[#4a4846] rounded-lg px-3.5 py-3 outline-none transition-all duration-150 border focus:border-[#F25730] focus:shadow-[0_0_0_3px_rgba(242,87,48,.2)]";
  const inputStyle = {
    background: "#333333",
    borderColor: "#3C3B39",
    fontFamily: "Poppins, sans-serif",
  };

  return (
    <section className="auth-panel relative flex items-center justify-center bg-[#0B0B0A] px-6 py-10 md:py-16">
      <div className="w-full max-w-[392px]">
        {/* Mobile-only wordmark */}
        <div className="flex items-center gap-2 mb-8 md:hidden">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#F25730]" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span className="text-[16px] font-semibold text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
            Autonomy<span style={{ color: "#F25730" }}>AI</span>
          </span>
        </div>

        {/* Auth header */}
        <div className="mb-7">
          <p className="mb-1 text-[11px] font-medium tracking-[.16em] uppercase text-[#F25730]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Sign in
          </p>
          <h2 className="mb-2 font-bold leading-tight" style={{ fontFamily: "Poppins, sans-serif", fontSize: "30px", letterSpacing: "-0.02em", color: "var(--Red500)" }}>
            Welcome back
          </h2>
          <p className="text-[14px] text-[#7a7774]" style={{ fontFamily: "Poppins, sans-serif" }}>
            Pick up where the agent left off.
          </p>
        </div>

        {/* SSO buttons */}
        <div className="flex flex-col gap-2.5 mb-5">
          <button
            type="button"
            onClick={() => handleSso("github")}
            className="flex items-center justify-center gap-2.5 w-full text-[14px] font-medium text-white rounded-lg px-4 py-3 border transition-all duration-150"
            style={{
              fontFamily: "Poppins, sans-serif",
              background: "#212120",
              borderColor: ssoHighlight === "github" ? "#F25730" : "#3C3B39",
            }}
          >
            <GitHubIcon />
            Continue with GitHub
          </button>
          <button
            type="button"
            onClick={() => handleSso("google")}
            className="flex items-center justify-center gap-2.5 w-full text-[14px] font-medium text-white rounded-lg px-4 py-3 border transition-all duration-150"
            style={{
              fontFamily: "Poppins, sans-serif",
              background: "#212120",
              borderColor: ssoHighlight === "google" ? "#F25730" : "#3C3B39",
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3.5 mb-5 text-[#4a4846]">
          <span className="flex-1 h-px bg-[#3C3B39]" />
          <span className="text-[11px] tracking-[.14em] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>or</span>
          <span className="flex-1 h-px bg-[#3C3B39]" />
        </div>

        {/* Form */}
        <Form method="post" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email field */}
          <div className="field">
            <label htmlFor="email" className="block mb-[7px] text-[13px] font-medium text-[#9a9693]" style={{ fontFamily: "Poppins, sans-serif" }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
              className={inputClass}
              style={inputStyle}
            />
          </div>

          {/* Password field */}
          <div className="field">
            <div className="flex justify-between items-center mb-[7px]">
              <label htmlFor="password" className="text-[13px] font-medium text-[#9a9693]" style={{ fontFamily: "Poppins, sans-serif" }}>
                Password
              </label>
              <a href="#" className="text-[12px] transition-colors hover:text-[#F25730]" style={{ color: "#7a7774", fontFamily: "Poppins, sans-serif" }}>
                Forgot password?
              </a>
            </div>
            <div className="relative flex items-center">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                placeholder="••••••••"
                autoComplete="current-password"
                className={inputClass}
                style={{ ...inputStyle, paddingRight: "44px" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-1.5 p-2 rounded-md text-[#4a4846] hover:text-[#9a9693] transition-colors duration-150"
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label className="flex items-center gap-2.5 cursor-pointer select-none" style={{ fontFamily: "Poppins, sans-serif" }}>
            <button
              type="button"
              role="checkbox"
              aria-checked={rememberMe}
              onClick={() => setRememberMe((v) => !v)}
              className="flex-none flex items-center justify-center w-4 h-4 rounded border transition-all duration-150"
              style={{
                background: rememberMe ? "#F25730" : "#333333",
                borderColor: rememberMe ? "#F25730" : "#3C3B39",
                color: "white",
              }}
            >
              {rememberMe && <CheckIcon />}
            </button>
            <span className="text-[13px] text-[#9a9693]">Stay signed in</span>
            <input type="hidden" name="rememberMe" value={rememberMe ? "true" : "false"} />
          </label>

          {/* Submit button */}
          <button
            id="submit"
            type="submit"
            disabled={isLoading}
            className="mt-1 flex items-center justify-center gap-2 w-full font-semibold text-white rounded-lg px-4 py-3 transition-all duration-150 disabled:opacity-75 disabled:cursor-not-allowed"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
              background: isLoading ? "#c4451e" : "#F25730",
              boxShadow: isLoading ? "none" : "0 0 20px rgba(242,87,48,.35)",
            }}
          >
            {isLoading && <SpinnerIcon />}
            <span className="label">{isLoading ? "Signing in…" : "Sign in"}</span>
          </button>
        </Form>

        {/* Footer */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-[13px] text-[#5a5754]" style={{ fontFamily: "Poppins, sans-serif" }}>
            New to the On-Call Agent?{" "}
            <a href="#" className="text-[#9a9693] underline-offset-2 underline hover:text-[#F25730] transition-colors duration-150">
              Request access
            </a>
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-[#5a5754]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <LockIcon />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </div>
    </section>
  );
};
