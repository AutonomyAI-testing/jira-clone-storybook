import { useState } from "react";

export const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordReveal = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      // TODO: show inline validation error
      return;
    }

    setIsLoading(true);
    // TODO: wire up real auth submission
    setTimeout(() => {
      setIsLoading(false);
    }, 1600);
  };

  const handleSSO = (_provider: string) => {
    // TODO: initiate OAuth redirect for the given provider
  };

  return (
    <div
      className="flex h-screen w-screen"
      style={{ backgroundColor: "#121211", color: "#FFFFFF" }}
    >
      {/* Film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          zIndex: 9999,
        }}
      />

      {/* Left Brand Panel */}
      <div
        className="relative hidden flex-col overflow-hidden border-r p-8 md:flex"
        style={{
          flex: "1.05",
          backgroundColor: "#121211",
          borderRightColor: "#3C3B39",
        }}
      >
        {/* Warm glow gradient backdrop */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
          }}
        />

        {/* Brand Wordmark */}
        <div
          className="relative z-10 flex items-center gap-3"
          style={{ fontSize: "19px", fontWeight: 800 }}
        >
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: "30px",
              height: "30px",
              background: "linear-gradient(150deg,#F25730,#F69874)",
              boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "16px",
                height: "16px",
                stroke: "#fff",
                fill: "none",
                strokeWidth: 2.2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }}
            >
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </div>
          <span>
            Autonomy<span style={{ color: "#F25730" }}>AI</span>
          </span>
          <div style={{ width: "1px", height: "18px", backgroundColor: "#3C3B39", margin: "0 3px" }} />
          <span style={{ fontWeight: 500, fontSize: "14px", color: "#B4B1AC" }}>On-Call Agent</span>
        </div>

        {/* Brand Content */}
        <div className="relative z-10 flex flex-col gap-6 py-12">
          <div>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F25730",
                margin: "0 0 22px",
              }}
            >
              Autonomous incident response
            </p>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              <span style={{ color: "#FF0000" }}>Your on-call engineer that</span>{" "}
              <span
                style={{
                  background: "linear-gradient(95deg,#F25730,#F69874)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                never sleeps.
              </span>
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.55,
                color: "#B4B1AC",
                margin: "22px 0 0",
                maxWidth: "420px",
              }}
            >
              From first alert to merged fix — the agent triages, investigates, and ships the patch
              while your team stays asleep.
            </p>
          </div>

          {/* Pipeline Timeline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                color: "#9FD2ED",
                label: "Alert received",
                detail: "— latency spike, checkout-svc",
                time: "00:00",
              },
              {
                color: "#E8A13C",
                label: "Triaged & root-caused",
                detail: "— connection pool exhausted",
                time: "00:02",
              },
              {
                color: "#4FB477",
                label: "Fix merged",
                detail: "— PR #1408, verified in staging",
                time: "00:09",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative flex items-center gap-4 py-3"
                style={{
                  borderLeft: idx !== 2 ? "1px solid #3C3B39" : "none",
                  marginLeft: "5px",
                  paddingLeft: "9px",
                }}
              >
                <div
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    boxShadow: `0 0 0 4px rgba(159, 210, 237, 0.12)`,
                    flex: "none",
                    zIndex: 1,
                    position: "relative",
                  }}
                />
                <span
                  style={{
                    fontSize: "12.5px",
                    letterSpacing: "0.02em",
                    color: "#B4B1AC",
                  }}
                >
                  <b style={{ color: "#FFFFFF", fontWeight: 600 }}>{item.label}</b>
                  {item.detail}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "11px",
                    color: "#7C7A75",
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Footer */}
        <div
          className="relative z-10 flex items-center gap-5"
          style={{
            fontSize: "11px",
            letterSpacing: "0.04em",
            color: "#7C7A75",
          }}
        >
          <span>SOC 2 Type II</span>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#4A4946" }} />
          <span>Runs in your infra</span>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#4A4946" }} />
          <span>150+ teams on-call</span>
        </div>
      </div>

      {/* Right Form Panel */}
      <div
        className="flex flex-col items-center justify-center overflow-auto p-8 md:flex"
        style={{
          flex: "0.95",
          backgroundColor: "#121211",
        }}
      >
        <div style={{ width: "100%", maxWidth: "392px" }}>
          {/* Mobile Wordmark */}
          <div
            className="mb-8 flex items-center gap-3 md:hidden"
            style={{ fontSize: "19px", fontWeight: 800 }}
          >
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: "30px",
                height: "30px",
                background: "linear-gradient(150deg,#F25730,#F69874)",
                boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: "16px",
                  height: "16px",
                  stroke: "#fff",
                  fill: "none",
                  strokeWidth: 2.2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </div>
            <span>
              Autonomy<span style={{ color: "#F25730" }}>AI</span>
            </span>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <p
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#7C7A75",
                margin: "0 0 14px",
              }}
            >
              Sign in
            </p>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Welcome back
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.5,
                color: "#B4B1AC",
                margin: "9px 0 0",
              }}
            >
              Pick up where the agent left off.
            </p>
          </div>

          {/* SSO Buttons */}
          <div className="mb-6 flex flex-col gap-3">
            <button
              onClick={() => handleSSO("GitHub")}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                backgroundColor: "#212120",
                color: "#FFFFFF",
                border: "1px solid #3C3B39",
                borderRadius: "8px",
                padding: "12px 16px",
                cursor: "pointer",
                transition: "border-color 0.18s ease-out, background 0.18s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A4946";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2A2A28";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#3C3B39";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#212120";
              }}
            >
              <svg viewBox="0 0 24 24" style={{ width: "17px", height: "17px" }} fill="currentColor">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
              </svg>
              Continue with GitHub
            </button>

            <button
              onClick={() => handleSSO("Google")}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                backgroundColor: "#212120",
                color: "#FFFFFF",
                border: "1px solid #3C3B39",
                borderRadius: "8px",
                padding: "12px 16px",
                cursor: "pointer",
                transition: "border-color 0.18s ease-out, background 0.18s ease-out",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#4A4946";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2A2A28";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#3C3B39";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#212120";
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{ width: "17px", height: "17px", viewBox: "0 0 48 48" }}
              >
                <g>
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z" />
                  <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z" />
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z" />
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z" />
                </g>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div
            className="mb-6 flex items-center gap-4"
            style={{ color: "#7C7A75" }}
          >
            <div style={{ height: "1px", flex: 1, backgroundColor: "#3C3B39" }} />
            <span
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              or
            </span>
            <div style={{ height: "1px", flex: 1, backgroundColor: "#3C3B39" }} />
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#B4B1AC",
                  marginBottom: "7px",
                }}
              >
                Work email
              </label>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  style={{
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                    backgroundColor: "#333333",
                    border: "1px solid #3C3B39",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    outline: "none",
                    transition: "border-color 0.15s ease-out, box-shadow 0.15s ease-out",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#F25730";
                    (e.currentTarget as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px rgba(242, 87, 48, 0.1)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#3C3B39";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "7px",
                }}
              >
                <label
                  htmlFor="password"
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#B4B1AC",
                  }}
                >
                  Password
                </label>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: navigate to forgot-password flow
                  }}
                  style={{
                    fontSize: "12.5px",
                    color: "#F25730",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  style={{
                    width: "100%",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                    backgroundColor: "#333333",
                    border: "1px solid #3C3B39",
                    borderRadius: "8px",
                    padding: "12px 14px",
                    outline: "none",
                    transition: "border-color 0.15s ease-out, box-shadow 0.15s ease-out",
                    boxSizing: "border-box",
                    paddingRight: "44px",
                  }}
                  onFocus={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#F25730";
                    (e.currentTarget as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px rgba(242, 87, 48, 0.1)";
                  }}
                  onBlur={(e) => {
                    (e.currentTarget as HTMLInputElement).style.borderColor = "#3C3B39";
                    (e.currentTarget as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={handlePasswordReveal}
                  style={{
                    position: "absolute",
                    right: "6px",
                    backgroundColor: "transparent",
                    border: "0",
                    cursor: "pointer",
                    color: "#7C7A75",
                    padding: "8px",
                    borderRadius: "6px",
                    display: "flex",
                    transition: "color 0.15s ease-out",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#B4B1AC";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#7C7A75";
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "17px",
                      height: "17px",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: 1.8,
                    }}
                  >
                    {!showPassword ? (
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                    ) : (
                      <>
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                        <line x1="3" y1="3" x2="21" y2="21" strokeWidth="1.8" />
                      </>
                    )}
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                fontSize: "13.5px",
                color: "#B4B1AC",
                cursor: "pointer",
                userSelect: "none",
                marginTop: "2px",
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  position: "absolute",
                  opacity: 0,
                  width: 0,
                  height: 0,
                }}
              />
              <div
                style={{
                  width: "17px",
                  height: "17px",
                  borderRadius: "5px",
                  border: `1px solid ${rememberMe ? "#F25730" : "#4A4946"}`,
                  backgroundColor: rememberMe ? "#F25730" : "#333333",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.15s ease-out",
                  flex: "none",
                }}
              >
                {rememberMe && (
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: "11px",
                      height: "11px",
                      stroke: "#fff",
                      fill: "none",
                      strokeWidth: 2.6,
                    }}
                  >
                    <path d="M5 12.5 10 17l9-10" />
                  </svg>
                )}
              </div>
              Keep me signed in
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                marginTop: "4px",
                width: "100%",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                backgroundColor: isLoading ? "#ED5339" : "#F25730",
                color: "#fff",
                border: "0",
                borderRadius: "8px",
                padding: "13px 16px",
                cursor: isLoading ? "wait" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "9px",
                boxShadow: "0 6px 18px rgba(242, 87, 48, 0.25)",
                transition: "background 0.15s ease-out, transform 0.12s ease-out",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#FC816F";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F25730";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }
              }}
              onMouseDown={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#ED5339";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                }
              }}
            >
              {isLoading && (
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(255,255,255,.4)",
                    borderRightColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.65s linear infinite",
                  }}
                />
              )}
              <span style={{ opacity: isLoading ? 0.85 : 1 }}>
                {isLoading ? "Signing in…" : "Sign in"}
              </span>
            </button>
          </form>

          {/* Footnote */}
          <p
            style={{
              marginTop: "26px",
              textAlign: "center",
              fontSize: "13.5px",
              color: "#B4B1AC",
            }}
          >
            New to the On-Call Agent?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // TODO: navigate to sign-up / request-access page
              }}
              style={{
                color: "#F25730",
                textDecoration: "none",
                fontWeight: 500,
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration = "none";
              }}
            >
              Request access
            </a>
          </p>

          {/* Secure Badge */}
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "#7C7A75",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              style={{
                width: "13px",
                height: "13px",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 1.8,
              }}
            >
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Encrypted & SSO-ready
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
