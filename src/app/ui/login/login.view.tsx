import { useState } from "react";

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const GlyphIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 stroke-white" fill="none" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
    <circle cx="12" cy="12" r="3.4" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px] flex-none">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[17px] w-[17px] flex-none">
    <path fill="#FFC107" d="M21.8 10.2H21V10H12v4h5.65C16.85 16.45 14.65 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.95.6 4 1.55l2.85-2.85C17.15 3.05 14.7 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.67-.07-1.33-.2-1.8z" />
    <path fill="#FF3D00" d="m3.15 7.35 3.3 2.42C7.28 7.55 9.48 6 12 6c1.55 0 2.95.6 4 1.55l2.85-2.85C17.15 3.05 14.7 2 12 2 8.16 2 4.85 4.18 3.15 7.35z" />
    <path fill="#4CAF50" d="M12 22c2.6 0 4.95-1 6.7-2.6l-3.1-2.6C14.6 17.55 13.36 18 12 18c-2.64 0-4.86-1.54-5.65-3.74L3 16.95C4.74 19.78 8.12 22 12 22z" />
    <path fill="#1976D2" d="M21.8 10.2H21V10H12v4h5.65c-.38 1.12-1.1 2.07-2.05 2.8l3.1 2.6C21.27 17.9 22 15.14 22 12c0-.67-.07-1.33-.2-1.8z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="h-[17px] w-[17px]">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="h-[17px] w-[17px]">
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="h-[13px] w-[13px]">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.6} aria-hidden="true" className="h-[11px] w-[11px]">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

const Spinner = () => (
  <span
    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-r-white"
    aria-hidden="true"
  />
);

// ─── Brand Panel (left) ────────────────────────────────────────────────────────

const pipelineItems = [
  { color: "bg-[#9fd2ed]", shadow: "shadow-[0_0_0_4px_rgba(159,210,237,0.12)]", label: "Alert received", detail: "— latency spike, checkout-svc", time: "00:00" },
  { color: "bg-[#e8a13c]", shadow: "shadow-[0_0_0_4px_rgba(232,161,60,0.12)]", label: "Triaged & root-caused", detail: "— connection pool exhausted", time: "00:02" },
  { color: "bg-[#4fb477]", shadow: "shadow-[0_0_0_4px_rgba(79,180,119,0.14)]", label: "Fix merged", detail: "— PR #1408, verified in staging", time: "00:09" },
];

const BrandPanel = () => (
  <section
    className="relative hidden flex-col overflow-hidden border-r border-border bg-elevation-surface-raised px-[clamp(36px,4.5vw,64px)] py-[clamp(36px,4.5vw,64px)] lg:flex"
    style={{
      backgroundImage:
        "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.35), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.08), transparent 62%)",
    }}
    aria-label="Branding panel"
  >
    {/* Wordmark */}
    <div className="relative z-10 flex items-center gap-[11px]">
      <span
        className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg"
        style={{
          background: "linear-gradient(150deg, #f97316, #fb923c)",
          boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
        }}
      >
        <GlyphIcon />
      </span>
      <span className="font-primary-black text-[19px] leading-none tracking-tight text-font">
        Autonomy<span className="text-[#f97316]">AI</span>
      </span>
      <span className="mx-[3px] h-[18px] w-px bg-border" aria-hidden="true" />
      <span className="font-primary-light text-sm text-font-subtle">On-Call Agent</span>
    </div>

    {/* Mid content */}
    <div className="relative z-10 my-auto max-w-[480px] py-12">
      <p className="mb-[22px] font-primary text-xs uppercase tracking-[.16em] text-[#f97316]">
        Autonomous incident response
      </p>
      <h1 className="font-primary-black text-[clamp(32px,3.6vw,48px)] leading-[1.05] tracking-tight text-font" style={{ textWrap: "balance" } as React.CSSProperties}>
        Your on-call engineer that{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(95deg, #f97316, #fb923c)" }}
        >
          never sleeps.
        </span>
      </h1>
      <p className="mt-[22px] max-w-[420px] font-primary-light text-lg leading-[1.55] text-font-subtle">
        From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
      </p>

      {/* Pipeline */}
      <div className="mt-10" aria-hidden="true">
        {pipelineItems.map((item, i) => (
          <div key={i} className="relative flex items-center gap-[14px] py-[11px]">
            {/* vertical connector line */}
            {i < pipelineItems.length - 1 && (
              <span
                className="absolute left-[5px] top-[22px] h-full w-px bg-border"
                aria-hidden="true"
              />
            )}
            <span className={`relative z-10 h-[11px] w-[11px] flex-none rounded-full ${item.color} ${item.shadow}`} />
            <span className="font-primary text-[12.5px] tracking-[.02em] text-font-subtle">
              <b className="font-primary-bold text-font">{item.label}</b> {item.detail}
            </span>
            <span className="ml-auto font-primary-light text-[11px] text-font-subtlest">{item.time}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="relative z-10 flex items-center gap-[18px] font-primary-light text-[11px] tracking-[.04em] text-font-subtlest">
      <span>SOC 2 Type II</span>
      <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
      <span>Runs in your infra</span>
      <span className="h-1 w-1 rounded-full bg-border" aria-hidden="true" />
      <span>150+ teams on-call</span>
    </div>
  </section>
);

// ─── Main LoginView ────────────────────────────────────────────────────────────

export const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 8) {
      setFormError("Password must be at least 8 characters.");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1600));
    setIsLoading(false);
  };

  return (
    <div className="grid min-h-screen" style={{ gridTemplateColumns: "1.05fr 0.95fr" }}>
      {/* Left: brand (hidden on ≤920px via inline media query handled by BrandPanel itself) */}
      <BrandPanel />

      {/* Right: auth form */}
      <section className="flex items-center justify-center bg-elevation-surface px-[clamp(28px,5vw,64px)] py-[clamp(28px,5vw,64px)]">
        <div className="w-full max-w-[392px]">
          {/* Mobile-only wordmark */}
          <div className="mb-[30px] flex items-center gap-[11px] lg:hidden">
            <span
              className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-lg"
              style={{
                background: "linear-gradient(150deg, #f97316, #fb923c)",
                boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
              }}
            >
              <GlyphIcon />
            </span>
            <span className="font-primary-black text-[19px] leading-none tracking-tight text-font">
              Autonomy<span className="text-[#f97316]">AI</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-[30px]">
            <p className="mb-[14px] font-primary text-xs uppercase tracking-[.16em] text-font-subtlest">
              Sign in
            </p>
            <h2 className="font-primary-black text-3xl leading-[1.1] tracking-tight text-red-500">
              Welcome back
            </h2>
            <p className="mt-[9px] font-primary-light text-[15px] leading-[1.5] text-font-subtle">
              Pick up where the agent left off.
            </p>
          </div>

          {/* SSO buttons */}
          <div className="mb-[22px] flex flex-col gap-[10px]">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-lg border border-border bg-elevation-surface-raised px-4 py-3 font-primary-bold text-sm text-font transition-colors hover:border-border-bold hover:bg-elevation-surface-raised"
              onClick={() => {}}
            >
              <GitHubIcon />
              Continue with GitHub
            </button>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-center gap-[10px] rounded-lg border border-border bg-elevation-surface-raised px-4 py-3 font-primary-bold text-sm text-font transition-colors hover:border-border-bold hover:bg-elevation-surface-raised"
              onClick={() => {}}
            >
              <GoogleIcon />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="mb-[22px] flex items-center gap-[14px] text-font-subtlest before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
            <span className="font-primary text-[11px] uppercase tracking-[.14em]">or</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-[7px] block font-primary text-[13px] text-font-subtle"
              >
                Work email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-background-input px-[14px] py-3 font-primary text-[15px] text-font outline-none placeholder:text-font-subtlest focus:border-[#f97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.2)] transition-[border-color,box-shadow]"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-[7px] flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-primary text-[13px] text-font-subtle"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="font-primary text-[12.5px] text-[#f97316] no-underline hover:underline"
                  tabIndex={0}
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background-input px-[14px] py-3 pr-12 font-primary text-[15px] text-font outline-none placeholder:text-font-subtlest focus:border-[#f97316] focus:shadow-[0_0_0_3px_rgba(249,115,22,0.2)] transition-[border-color,box-shadow]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-[6px] flex cursor-pointer rounded-md border-0 bg-transparent p-2 text-font-subtlest transition-colors hover:text-font-subtle"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <label className="flex cursor-pointer select-none items-center gap-[9px] font-primary text-[13.5px] text-font-subtle">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="sr-only"
                id="remember"
              />
              <span
                className={`flex h-[17px] w-[17px] flex-none items-center justify-center rounded-[5px] border transition-all ${
                  rememberMe
                    ? "border-[#f97316] bg-[#f97316]"
                    : "border-border bg-background-input"
                }`}
                aria-hidden="true"
              >
                <span className={rememberMe ? "opacity-100" : "opacity-0"}>
                  <CheckIcon />
                </span>
              </span>
              Keep me signed in
            </label>

            {/* Error */}
            {formError && (
              <div className="rounded-lg bg-background-danger px-3 py-2 font-primary text-xs text-font-danger">
                {formError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-1 flex w-full cursor-pointer items-center justify-center gap-[9px] rounded-lg border-0 bg-[#f97316] px-4 py-[13px] font-primary-bold text-[15px] text-white transition-[background,transform] hover:-translate-y-px hover:bg-[#ea6d0e] active:translate-y-0 active:bg-[#dc6308] disabled:cursor-wait disabled:bg-[#dc6308]"
              style={{ boxShadow: "0 4px 14px rgba(249,115,22,.35)" }}
            >
              {isLoading && <Spinner />}
              <span>{isLoading ? "Signing in…" : "Sign in"}</span>
            </button>
          </form>

          {/* Footer */}
          <p className="mt-[26px] text-center font-primary-light text-[13.5px] text-font-subtle">
            New to the On-Call Agent?{" "}
            <a
              href="#"
              className="font-primary text-[#f97316] no-underline hover:underline"
            >
              Request access
            </a>
          </p>

          {/* Security badge */}
          <div className="mt-7 flex items-center justify-center gap-2 font-primary text-[11px] tracking-[.05em] text-font-subtlest">
            <LockIcon />
            Encrypted &amp; SSO-ready
          </div>
        </div>
      </section>
    </div>
  );
};
