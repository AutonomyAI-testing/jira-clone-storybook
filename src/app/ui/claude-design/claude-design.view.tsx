import { useState } from "react";

export const ClaudeDesignView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [labelText, setLabelText] = useState("Sign in");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setIsLoading(true);
    setLabelText("Signing in…");
    setTimeout(() => {
      setIsLoading(false);
      setLabelText("Sign in");
    }, 1600);
  };

  const handleSsoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.style.borderColor = "#f25730";
    setTimeout(() => {
      btn.style.borderColor = "";
    }, 500);
  };

  // color tokens (dark design reference mapping)
  const colors = {
    ink950: "#101214",   // --DarkNeutral-100
    ink900: "#161a1d",   // --DarkNeutral0
    ink700: "#22272b",   // --DarkNeutral200
    ink600: "#282e33",   // --DarkNeutral250
    ink500: "#2c333a",   // --DarkNeutral300
    ink400: "#38414a",   // --DarkNeutral350
    ink300: "#454f59",   // --DarkNeutral400
    ink200: "#596773",   // --DarkNeutral500
    fg: "#dee4ea",        // --DarkNeutral1100
    fgMuted: "#9fadbc",   // --DarkNeutral800
    fgFaint: "#738496",   // --DarkNeutral600
    orange: "#f25730",
    orangeBright: "#ff6a40",
    orangeDeep: "#c94520",
    orangePeach: "#f9a37c",
    blue: "#579dff",     // --Blue400
    amber: "#f8a940",
    ok: "#4fb473",
    err: "#ef5c48",
    ring: "rgba(242,87,48,.22)",
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: colors.ink950,
        color: colors.fg,
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
        textRendering: "optimizeLegibility",
      }}
    >
      {/* Film grain overlay */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Claude Design heading (hidden visually but present per requirements) */}
      <h1
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          margin: -1,
          padding: 0,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        Claude Design
      </h1>

      {/* Two-column shell */}
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          minHeight: "100vh",
        }}
        className="claude-design-shell"
      >
        {/* ── LEFT: Brand panel ── */}
        <section
          aria-label="Login · brand panel"
          style={{
            position: "relative",
            overflow: "hidden",
            background: colors.ink900,
            borderRight: `1px solid ${colors.ink400}`,
            padding: "clamp(36px,4.5vw,64px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Warm glow via pseudo - done with a positioned div */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
                           radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)`,
            }}
          />

          {/* Wordmark */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              gap: 11,
              fontWeight: 800,
              fontSize: 19,
              letterSpacing: "-0.01em",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 30,
                height: 30,
                borderRadius: 8,
                flexShrink: 0,
                background: `linear-gradient(150deg, ${colors.orange}, ${colors.orangePeach})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)`,
              }}
            >
              <svg viewBox="0 0 24 24" width={16} height={16} stroke="#fff" fill="none" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span>
              Autonomy<span style={{ color: colors.orange }}>AI</span>
            </span>
            <span aria-hidden style={{ width: 1, height: 18, background: colors.ink400, margin: "0 3px" }} />
            <span style={{ fontWeight: 500, fontSize: 14, color: colors.fgMuted, letterSpacing: 0 }}>
              On-Call Agent
            </span>
          </div>

          {/* Brand mid content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              marginTop: "auto",
              marginBottom: "auto",
              padding: "48px 0",
              maxWidth: 480,
            }}
          >
            <p
              style={{
                fontFamily: "'Roboto Mono', 'SF Mono', monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: colors.orange,
                margin: "0 0 22px",
              }}
            >
              Autonomous incident response
            </p>

            <h2
              style={{
                fontWeight: 800,
                fontSize: "clamp(32px,3.6vw,48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
                color: colors.fg,
                textWrap: "balance",
              } as React.CSSProperties}
            >
              Your on-call engineer that{" "}
              <span
                style={{
                  background: `linear-gradient(95deg, ${colors.orange}, ${colors.orangePeach})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                never sleeps.
              </span>
            </h2>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: colors.fgMuted,
                margin: "22px 0 0",
                maxWidth: 420,
              }}
            >
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </p>

            {/* Pipeline status motif */}
            <div
              aria-hidden
              style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 0 }}
            >
              {[
                { color: colors.blue, glow: "rgba(159,210,237,.12)", label: "Alert received", detail: " — latency spike, checkout-svc", time: "00:00" },
                { color: colors.amber, glow: "rgba(232,161,60,.12)", label: "Triaged & root-caused", detail: " — connection pool exhausted", time: "00:02" },
                { color: colors.ok, glow: "rgba(79,180,119,.14)", label: "Fix merged", detail: " — PR #1408, verified in staging", time: "00:09" },
              ].map((row, idx, arr) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    position: "relative",
                    padding: "11px 0",
                  }}
                >
                  {/* Vertical connector line */}
                  {idx < arr.length - 1 && (
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        left: 5,
                        top: "50%",
                        width: 1,
                        height: "100%",
                        background: colors.ink400,
                        zIndex: 0,
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
                      background: row.color,
                      boxShadow: `0 0 0 4px ${row.glow}`,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 12.5,
                      letterSpacing: "0.02em",
                      color: colors.fgMuted,
                    }}
                  >
                    <b style={{ color: colors.fg, fontWeight: 600, fontFamily: "inherit" }}>{row.label}</b>
                    {row.detail}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "'Roboto Mono', monospace",
                      fontSize: 11,
                      color: colors.fgFaint,
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand footer badges */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.04em",
              color: colors.fgFaint,
            }}
          >
            <span>SOC 2 Type II</span>
            <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: colors.ink300 }} />
            <span>Runs in your infra</span>
            <span aria-hidden style={{ width: 4, height: 4, borderRadius: "50%", background: colors.ink300 }} />
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* ── RIGHT: Auth panel ── */}
        <section
          aria-label="Login · form"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(28px,5vw,64px)",
            background: colors.ink900,
          }}
        >
          <div style={{ width: "100%", maxWidth: 392 }}>
            {/* Mobile wordmark (visible only on small screens via CSS) */}
            <div
              className="claude-design-mobile-mark"
              style={{
                display: "none",
                alignItems: "center",
                gap: 11,
                fontWeight: 800,
                fontSize: 19,
                marginBottom: 30,
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 8,
                  flexShrink: 0,
                  background: `linear-gradient(150deg, ${colors.orange}, ${colors.orangePeach})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)`,
                }}
              >
                <svg viewBox="0 0 24 24" width={16} height={16} stroke="#fff" fill="none" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                  <circle cx="12" cy="12" r="3.4" />
                </svg>
              </span>
              <span>Autonomy<span style={{ color: colors.orange }}>AI</span></span>
            </div>

            {/* Auth header */}
            <div style={{ marginBottom: 30 }}>
              <p
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontWeight: 500,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: colors.fgFaint,
                  margin: "0 0 14px",
                }}
              >
                Sign in
              </p>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: 30,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  margin: 0,
                  color: colors.fg,
                }}
              >
                Welcome back
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: colors.fgMuted, margin: "9px 0 0" }}>
                Pick up where the agent left off.
              </p>
            </div>

            {/* SSO buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              <SsoButton icon={<GithubIcon />} label="Continue with GitHub" onClick={handleSsoClick} colors={colors} />
              <SsoButton icon={<GoogleIcon />} label="Continue with Google" onClick={handleSsoClick} colors={colors} />
            </div>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                margin: "0 0 22px",
                color: colors.fgFaint,
              }}
            >
              <div style={{ height: 1, flex: 1, background: colors.ink400 }} />
              <span
                style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                or
              </span>
              <div style={{ height: 1, flex: 1, background: colors.ink400 }} />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Email field */}
              <div>
                <label
                  htmlFor="cd-email"
                  style={{ display: "block", fontSize: 13, fontWeight: 500, color: colors.fgMuted, marginBottom: 7 }}
                >
                  Work email
                </label>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    id="cd-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    required
                    style={{
                      width: "100%",
                      fontFamily: "inherit",
                      fontSize: 15,
                      color: colors.fg,
                      background: colors.ink500,
                      border: `1px solid ${colors.ink400}`,
                      borderRadius: 8,
                      padding: "12px 14px",
                      outline: "none",
                      transition: "border-color .15s, box-shadow .15s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = colors.orange;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.ring}`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = colors.ink400;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <label
                    htmlFor="cd-password"
                    style={{ display: "block", fontSize: 13, fontWeight: 500, color: colors.fgMuted, marginBottom: 7 }}
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    tabIndex={0}
                    style={{ fontSize: 12.5, color: colors.orange, textDecoration: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    Forgot password?
                  </a>
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                  <input
                    id="cd-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    required
                    minLength={8}
                    style={{
                      width: "100%",
                      fontFamily: "inherit",
                      fontSize: 15,
                      color: colors.fg,
                      background: colors.ink500,
                      border: `1px solid ${colors.ink400}`,
                      borderRadius: 8,
                      padding: "12px 40px 12px 14px",
                      outline: "none",
                      transition: "border-color .15s, box-shadow .15s",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = colors.orange;
                      e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.ring}`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = colors.ink400;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: 6,
                      background: "none",
                      border: 0,
                      cursor: "pointer",
                      color: colors.fgFaint,
                      padding: 8,
                      borderRadius: 6,
                      display: "flex",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = colors.fgMuted)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = colors.fgFaint)}
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.8}>
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="3" y1="3" x2="21" y2="21" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width={17} height={17} fill="none" stroke="currentColor" strokeWidth={1.8}>
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  fontSize: 13.5,
                  color: colors.fgMuted,
                  cursor: "pointer",
                  userSelect: "none",
                  marginTop: 2,
                }}
              >
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
                />
                <span
                  aria-hidden
                  style={{
                    width: 17,
                    height: 17,
                    borderRadius: 5,
                    border: `1px solid ${rememberMe ? colors.orange : colors.ink300}`,
                    background: rememberMe ? colors.orange : colors.ink500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all .15s",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width={11} height={11} fill="none" stroke="#fff" strokeWidth={2.6} style={{ opacity: rememberMe ? 1 : 0, transition: "opacity .12s" }}>
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                </span>
                Keep me signed in
              </label>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  marginTop: 4,
                  width: "100%",
                  fontFamily: "inherit",
                  fontWeight: 600,
                  fontSize: 15,
                  background: colors.orange,
                  color: "#fff",
                  border: 0,
                  borderRadius: 8,
                  padding: "13px 16px",
                  cursor: isLoading ? "wait" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 9,
                  boxShadow: `0 0 0 1px rgba(242,87,48,.35), 0 4px 16px rgba(242,87,48,.3)`,
                  transition: "background .15s, transform .12s",
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.background = colors.orangeBright;
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = colors.orange;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {isLoading && (
                  <span
                    aria-hidden
                    style={{
                      width: 16,
                      height: 16,
                      border: "2px solid rgba(255,255,255,.4)",
                      borderRightColor: "#fff",
                      borderRadius: "50%",
                      animation: "claude-spin .65s linear infinite",
                      display: "block",
                      flexShrink: 0,
                    }}
                  />
                )}
                <span style={{ opacity: isLoading ? 0.85 : 1 }}>{labelText}</span>
              </button>
            </form>

            {/* Footnote */}
            <p style={{ marginTop: 26, textAlign: "center", fontSize: 13.5, color: colors.fgMuted }}>
              New to the On-Call Agent?{" "}
              <a
                href="#"
                style={{ color: colors.orange, textDecoration: "none", fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Request access
              </a>
            </p>

            {/* Secure footer */}
            <div
              style={{
                marginTop: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontFamily: "'Roboto Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.05em",
                color: colors.fgFaint,
              }}
            >
              <svg viewBox="0 0 24 24" width={13} height={13} fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </main>

      {/* Keyframe animation + responsive styles */}
      <style>{`
        @keyframes claude-spin { to { transform: rotate(360deg); } }
        @media (max-width: 920px) {
          .claude-design-shell {
            grid-template-columns: 1fr !important;
          }
          .claude-design-shell > section:first-child {
            display: none !important;
          }
          .claude-design-mobile-mark {
            display: flex !important;
          }
        }
        #cd-email::placeholder,
        #cd-password::placeholder {
          color: #596773;
        }
      `}</style>
    </div>
  );
};

// ── Sub-components ────────────────────────────────────────────────

interface SsoButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  colors: Record<string, string>;
}

const SsoButton = ({ icon, label, onClick, colors }: SsoButtonProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: 14,
        background: hovered ? colors.ink600 : colors.ink700,
        color: colors.fg,
        border: `1px solid ${hovered ? colors.ink300 : colors.ink400}`,
        borderRadius: 8,
        padding: "12px 16px",
        cursor: "pointer",
        transition: "border-color .18s, background .18s",
      }}
    >
      {icon}
      {label}
    </button>
  );
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" aria-hidden>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" width={17} height={17} aria-hidden>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z" />
    <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z" />
  </svg>
);
