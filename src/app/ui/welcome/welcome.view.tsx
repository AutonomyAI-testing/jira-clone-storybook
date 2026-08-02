import { useState } from "react";
import { useNavigate } from "@remix-run/react";

// ─── Design-token colours (dark palette from AutonomyAI design reference) ──────
const C = {
  ink950: "#0B0B0A",
  ink900: "#121211",
  ink800: "#1A1A18",
  ink700: "#212120",
  ink600: "#2A2A28",
  ink500: "#333333",
  ink400: "#3C3B39",
  ink300: "#4A4946",
  orange: "#F25730",
  orangeBright: "#FC816F",
  orangeDeep: "#ED5339",
  orangePeach: "#F69874",
  blue: "#9FD2ED",
  fg: "#FFFFFF",
  fgMuted: "#B4B1AC",
  fgFaint: "#7C7A75",
  ok: "#4FB477",
  warn: "#E8A13C",
  ring: "rgba(242,87,48,.55)",
} as const;

// ─── Sub-components ────────────────────────────────────────────────────────────

const GlyphLogo = () => (
  <span
    style={{
      width: 30,
      height: 30,
      borderRadius: 8,
      flexShrink: 0,
      background: `linear-gradient(150deg,${C.orange},${C.orangePeach})`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)`,
    }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      stroke="#fff"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  </span>
);

const Wordmark = ({ showProduct = true }: { showProduct?: boolean }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 11,
      fontFamily: "CircularStdBlack, sans-serif",
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-0.01em",
      color: C.fg,
    }}
  >
    <GlyphLogo />
    <span>
      Autonomy<span style={{ color: C.orange }}>AI</span>
    </span>
    {showProduct && (
      <>
        <span
          aria-hidden="true"
          style={{
            width: 1,
            height: 18,
            background: C.ink400,
            margin: "0 3px",
            display: "inline-block",
          }}
        />
        <span
          style={{
            fontFamily: "CircularStdMedium, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            color: C.fgMuted,
            letterSpacing: 0,
          }}
        >
          On-Call Agent
        </span>
      </>
    )}
  </div>
);

interface PipelineRowProps {
  nodeColor: string;
  nodeGlow: string;
  label: string;
  boldPart: string;
  time: string;
  isLast?: boolean;
}

const PipelineRow = ({
  nodeColor,
  nodeGlow,
  label,
  boldPart,
  time,
  isLast = false,
}: PipelineRowProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      position: "relative",
      padding: "11px 0",
    }}
  >
    {!isLast && (
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 5,
          top: "50%",
          width: 1,
          height: "100%",
          background: C.ink400,
        }}
      />
    )}
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: "50%",
        flexShrink: 0,
        position: "relative",
        zIndex: 1,
        background: nodeColor,
        boxShadow: nodeGlow,
      }}
    />
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 12.5,
        letterSpacing: "0.02em",
        color: C.fgMuted,
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      <b style={{ color: C.fg, fontWeight: 600, fontFamily: "inherit" }}>
        {boldPart}
      </b>{" "}
      — {label}
    </span>
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 11,
        color: C.fgFaint,
        flexShrink: 0,
      }}
    >
      {time}
    </span>
  </div>
);

// ─── Main component ────────────────────────────────────────────────────────────

export const WelcomeView = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 1400);
  };

  // Film grain SVG data URL
  const filmGrain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.ink950,
        color: C.fg,
        fontFamily: "CircularStdMedium, sans-serif",
        WebkitFontSmoothing: "antialiased",
        position: "relative",
      }}
    >
      {/* Film grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: filmGrain,
        }}
      />

      {/* Two-column shell */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(0px, 52%, 660px) 1fr",
          minHeight: "100vh",
        }}
        className="welcome-shell"
      >
        {/* ══════════════ BRAND PANEL ══════════════ */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background: C.ink900,
            borderRight: `1px solid ${C.ink400}`,
            padding: "clamp(36px, 4.5vw, 64px)",
            display: "flex",
            flexDirection: "column",
          }}
          className="welcome-brand"
        >
          {/* Warm corner glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `
                radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
                radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)
              `,
            }}
          />

          {/* All brand content sits above the glow */}
          <div style={{ position: "relative", zIndex: 1, display: "contents" }}>
            <Wordmark />

            {/* Hero */}
            <div
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                paddingTop: 48,
                paddingBottom: 48,
                maxWidth: 480,
              }}
            >
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: C.orange,
                  margin: "0 0 22px",
                }}
              >
                Autonomous incident response
              </p>

              <h1
                style={{
                  fontFamily: "CircularStdBlack, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 3.6vw, 48px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: C.fg,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                Your on-call engineer that{" "}
                <span
                  style={{
                    background: `linear-gradient(95deg,${C.orange},${C.orangePeach})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  never sleeps.
                </span>
              </h1>

              <p
                style={{
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: C.fgMuted,
                  margin: "22px 0 0",
                  maxWidth: 420,
                }}
              >
                From first alert to merged fix — the agent triages, investigates,
                and ships the patch while your team stays asleep.
              </p>

              {/* Pipeline status motif */}
              <div
                aria-hidden="true"
                style={{ marginTop: 40, display: "flex", flexDirection: "column" }}
              >
                <PipelineRow
                  nodeColor={C.blue}
                  nodeGlow={`0 0 0 4px rgba(159,210,237,.12)`}
                  boldPart="Alert received"
                  label="latency spike, checkout-svc"
                  time="00:00"
                />
                <PipelineRow
                  nodeColor={C.warn}
                  nodeGlow={`0 0 0 4px rgba(232,161,60,.12)`}
                  boldPart="Triaged & root-caused"
                  label="connection pool exhausted"
                  time="00:02"
                />
                <PipelineRow
                  nodeColor={C.ok}
                  nodeGlow={`0 0 0 4px rgba(79,180,119,.14)`}
                  boldPart="Fix merged"
                  label="PR #1408, verified in staging"
                  time="00:09"
                  isLast
                />
              </div>
            </div>

            {/* Footer trust badges */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                fontFamily: "monospace",
                fontSize: 11,
                letterSpacing: "0.04em",
                color: C.fgFaint,
              }}
            >
              <span>SOC 2 Type II</span>
              <span
                aria-hidden="true"
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: C.ink300,
                  display: "inline-block",
                }}
              />
              <span>Runs in your infra</span>
              <span
                aria-hidden="true"
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: C.ink300,
                  display: "inline-block",
                }}
              />
              <span>150+ teams on-call</span>
            </div>
          </div>
        </section>

        {/* ══════════════ AUTH PANEL ══════════════ */}
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(28px, 5vw, 64px)",
            background: C.ink900,
          }}
        >
          <div style={{ width: "100%", maxWidth: 392 }}>
            {/* Mobile-only wordmark (hidden on desktop via CSS) */}
            <div className="welcome-mobile-mark" style={{ marginBottom: 30, display: "none" }}>
              <Wordmark showProduct={false} />
            </div>

            {/* Header */}
            <div style={{ marginBottom: 30 }}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: C.fgFaint,
                  margin: "0 0 14px",
                }}
              >
                Sign in
              </p>
              <h2
                style={{
                  fontFamily: "CircularStdBlack, sans-serif",
                  fontWeight: 700,
                  fontSize: 30,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: "#EF5C48",
                }}
              >
                Welcome back
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.5,
                  color: C.fgMuted,
                  margin: "9px 0 0",
                }}
              >
                Pick up where the agent left off.
              </p>
            </div>

            {/* SSO buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {/* GitHub */}
              <SsoButton label="Continue with GitHub" icon={<GithubIcon />} />
              {/* Google */}
              <SsoButton label="Continue with Google" icon={<GoogleIcon />} />
            </div>

            {/* Divider */}
            <OrDivider />

            {/* Email / Password form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <FormField label="Work email">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = C.orange;
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${C.ring}`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = C.ink400;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </FormField>

              <FormField
                label="Password"
                right={
                  <a
                    href="#"
                    style={{
                      fontSize: 12.5,
                      color: C.orange,
                      textDecoration: "none",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </a>
                }
              >
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ ...inputStyle, paddingRight: 46 }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = C.orange;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${C.ring}`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = C.ink400;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((v) => !v)}
                    style={{
                      position: "absolute",
                      right: 6,
                      background: "none",
                      border: 0,
                      cursor: "pointer",
                      color: C.fgFaint,
                      padding: 8,
                      borderRadius: 6,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                </div>
              </FormField>

              {/* Remember me */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 13.5,
                  color: C.fgMuted,
                  cursor: "pointer",
                  userSelect: "none",
                  marginTop: 2,
                }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                />
                <span
                  aria-hidden="true"
                  style={{
                    width: 17,
                    height: 17,
                    borderRadius: 5,
                    border: `1px solid ${remember ? C.orange : C.ink300}`,
                    background: remember ? C.orange : C.ink500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s ease",
                    flexShrink: 0,
                  }}
                >
                  {remember && (
                    <svg
                      viewBox="0 0 24 24"
                      width={11}
                      height={11}
                      fill="none"
                      stroke="#fff"
                      strokeWidth={2.6}
                    >
                      <path d="M5 12.5 10 17l9-10" />
                    </svg>
                  )}
                </span>
                Keep me signed in
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  marginTop: 4,
                  width: "100%",
                  fontFamily: "CircularStdBold, sans-serif",
                  fontWeight: 600,
                  fontSize: 15,
                  background: isLoading ? C.orangeDeep : C.orange,
                  color: "#fff",
                  border: 0,
                  borderRadius: 8,
                  padding: "13px 16px",
                  cursor: isLoading ? "wait" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  boxShadow: `0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22)`,
                  transition: "background 0.15s ease, transform 0.12s ease",
                }}
              >
                {isLoading && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(255,255,255,.4)",
                      borderRightColor: "#fff",
                      borderRadius: "50%",
                      animation: "welcomeSpinAnim 0.65s linear infinite",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                )}
                <span style={{ opacity: isLoading ? 0.85 : 1 }}>
                  {isLoading ? "Signing in…" : "Sign in"}
                </span>
              </button>
            </form>

            <p
              style={{
                marginTop: 26,
                textAlign: "center",
                fontSize: 13.5,
                color: C.fgMuted,
              }}
            >
              New to the On-Call Agent?{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{ color: C.orange, textDecoration: "none", fontWeight: 500 }}
              >
                Request access
              </a>
            </p>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontFamily: "monospace",
                fontSize: 11,
                letterSpacing: "0.05em",
                color: C.fgFaint,
              }}
            >
              <LockIcon />
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </div>

      {/* Inline styles for responsive + spinner animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes welcomeSpinAnim { to { transform: rotate(360deg); } }
            @media (max-width: 920px) {
              .welcome-shell { grid-template-columns: 1fr !important; }
              .welcome-brand { display: none !important; }
              .welcome-mobile-mark { display: flex !important; }
            }
          `,
        }}
      />
    </div>
  );
};

// ─── Shared input style ────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "CircularStdMedium, sans-serif",
  fontSize: 15,
  color: "#FFFFFF",
  background: "#333333",
  border: "1px solid #3C3B39",
  borderRadius: 8,
  padding: "12px 14px",
  outline: "none",
  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
};

// ─── Small helper components ───────────────────────────────────────────────────

const FormField = ({
  label,
  right,
  children,
}: {
  label: string;
  right?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: right ? "space-between" : "flex-start",
        marginBottom: 7,
      }}
    >
      <label
        style={{
          fontSize: 13,
          fontWeight: 500,
          color: "#B4B1AC",
        }}
      >
        {label}
      </label>
      {right}
    </div>
    {children}
  </div>
);

const SsoButton = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontFamily: "CircularStdBold, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        background: hovered ? "#2A2A28" : "#212120",
        color: "#FFFFFF",
        border: `1px solid ${hovered ? "#4A4946" : "#3C3B39"}`,
        borderRadius: 8,
        padding: "12px 16px",
        cursor: "pointer",
        transition: "border-color 0.18s ease, background 0.18s ease",
      }}
    >
      {icon}
      {label}
    </button>
  );
};

const OrDivider = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      margin: "0 0 22px",
      color: "#7C7A75",
    }}
  >
    <span style={{ height: 1, flex: 1, background: "#3C3B39", display: "block" }} />
    <span
      style={{
        fontFamily: "monospace",
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
      }}
    >
      or
    </span>
    <span style={{ height: 1, flex: 1, background: "#3C3B39", display: "block" }} />
  </div>
);

// ─── Icons ─────────────────────────────────────────────────────────────────────

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} aria-hidden="true">
    <path
      fill="#FFC107"
      d="M21.8 10.2H21V10H12v4h5.65C16.85 16.45 14.68 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.55 0 2.95.6 4 1.55l2.85-2.85C17.15 3.05 14.72 2 12 2 6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10c0-.67-.07-1.17-.2-1.8Z"
    />
    <path
      fill="#FF3D00"
      d="M3.15 7.35 6.45 9.75C7.35 7.55 9.47 6 12 6c1.55 0 2.95.6 4 1.55l2.85-2.85C17.15 3.05 14.72 2 12 2 8.15 2 4.85 4.15 3.15 7.35Z"
    />
    <path
      fill="#4CAF50"
      d="M12 22c2.6 0 4.95-1 6.7-2.6l-3.1-2.6C14.6 17.55 13.38 18 12 18c-2.68 0-4.85-1.55-5.65-3.75L3.05 16.5C4.75 19.8 8.1 22 12 22Z"
    />
    <path
      fill="#1976D2"
      d="M21.8 10.2H21V10H12v4h5.65c-.4 1.1-1.1 2.05-2.05 2.8l3.1 2.6C20 17.15 22 15.27 22 12c0-.67-.07-1.17-.2-1.8Z"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={17}
    height={17}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={17}
    height={17}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

const LockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={13}
    height={13}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
);
