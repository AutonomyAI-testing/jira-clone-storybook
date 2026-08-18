export const ClaudeFeiPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* Film grain overlay texture from the design */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background: full-screen version of the On-Call Agent design */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        {/* Left brand panel */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#1a1310",
            borderRight: "1px solid #3a3028",
            padding: "48px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Warm glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
                radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)`,
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Wordmark */}
            <div style={{ display: "flex", alignItems: "center", gap: 11, fontWeight: 800, fontSize: 19, letterSpacing: "-0.01em" }}>
              <div style={{
                width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                background: "linear-gradient(150deg,#f25730,#f8a07a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="#fff" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                  <circle cx="12" cy="12" r="3.4"/>
                </svg>
              </div>
              <span style={{ color: "#e8ddd9" }}>Autonomy<span style={{ color: "#f25730" }}>AI</span></span>
              <span style={{ width: 1, height: 18, background: "#3a3028", margin: "0 3px" }} />
              <span style={{ fontWeight: 500, fontSize: 14, color: "#9a8880", letterSpacing: 0 }}>On-Call Agent</span>
            </div>

            {/* Brand mid section */}
            <div style={{ marginTop: "auto", paddingTop: 64, maxWidth: 480 }}>
              <p style={{ fontFamily: "monospace", fontWeight: 500, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#f25730", margin: "0 0 22px" }}>
                Autonomous incident response
              </p>
              <h1 style={{ fontWeight: 800, fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0, color: "#e8ddd9" }}>
                Your on-call engineer that{" "}
                <span style={{ background: "linear-gradient(95deg,#f25730,#f8a07a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  never sleeps.
                </span>
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: "#9a8880", margin: "22px 0 0", maxWidth: 420 }}>
                From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
              </p>

              {/* Pipeline status motif */}
              <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { color: "#9fd2ed", shadow: "rgba(159,210,237,.12)", label: "Alert received", detail: "— latency spike, checkout-svc", t: "00:00" },
                  { color: "#e8a13c", shadow: "rgba(232,161,60,.12)", label: "Triaged & root-caused", detail: "— connection pool exhausted", t: "00:02" },
                  { color: "#4fb477", shadow: "rgba(79,180,119,.14)", label: "Fix merged", detail: "— PR #1408, verified in staging", t: "00:09" },
                ].map((row, i, arr) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", padding: "11px 0" }}>
                    {i < arr.length - 1 && (
                      <div style={{ position: "absolute", left: 5, top: 22, bottom: -1, width: 1, background: "#3a3028" }} />
                    )}
                    <div style={{ width: 11, height: 11, borderRadius: "50%", flexShrink: 0, position: "relative", zIndex: 1, background: row.color, boxShadow: `0 0 0 4px ${row.shadow}` }} />
                    <span style={{ fontFamily: "monospace", fontSize: 12.5, letterSpacing: "0.02em", color: "#9a8880" }}>
                      <b style={{ color: "#e8ddd9", fontWeight: 600 }}>{row.label}</b>{row.detail}
                    </span>
                    <span style={{ marginLeft: "auto", fontFamily: "monospace", fontSize: 11, color: "#5a4e48" }}>{row.t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand footer */}
            <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "monospace", fontSize: 11, letterSpacing: "0.04em", color: "#5a4e48", marginTop: 40 }}>
              <span>SOC 2 Type II</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#3a3028" }} />
              <span>Runs in your infra</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#3a3028" }} />
              <span>150+ teams on-call</span>
            </div>
          </div>
        </div>

        {/* Right auth panel */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 64, backgroundColor: "#1a1310" }}>
          <div style={{ width: "100%", maxWidth: 392 }}>
            {/* Auth head */}
            <div style={{ marginBottom: 30 }}>
              <p style={{ fontFamily: "monospace", fontWeight: 500, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#5a4e48", margin: "0 0 14px" }}>Sign in</p>
              <h2 style={{ fontWeight: 700, fontSize: 30, lineHeight: 1.1, letterSpacing: "-0.02em", margin: 0, color: "#e8ddd9" }}>Welcome back</h2>
              <p style={{ fontSize: 15, lineHeight: 1.5, color: "#9a8880", margin: "9px 0 0" }}>Pick up where the agent left off.</p>
            </div>

            {/* SSO buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {["Continue with GitHub", "Continue with Google"].map((label) => (
                <div key={label} style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  fontWeight: 600, fontSize: 14,
                  background: "#2a2018", color: "#e8ddd9",
                  border: "1px solid #3a3028", borderRadius: 8, padding: "12px 16px",
                }}>
                  {label}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "0 0 22px", color: "#5a4e48" }}>
              <div style={{ height: 1, flex: 1, background: "#3a3028" }} />
              <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>or</span>
              <div style={{ height: 1, flex: 1, background: "#3a3028" }} />
            </div>

            {/* Form fields */}
            {["Work email", "Password"].map((label) => (
              <div key={label} style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#9a8880", marginBottom: 7 }}>{label}</div>
                <div style={{
                  width: "100%", background: "#2a2018", border: "1px solid #3a3028", borderRadius: 8, padding: "12px 14px",
                  fontSize: 15, color: "#5a4e48",
                }}>
                  {label === "Work email" ? "you@company.com" : "••••••••••••"}
                </div>
              </div>
            ))}

            {/* Submit */}
            <div style={{
              marginTop: 4, width: "100%", fontWeight: 600, fontSize: 15,
              background: "#f25730", color: "#fff", borderRadius: 8, padding: "13px 16px",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(242,87,48,.35)",
            }}>
              Sign in
            </div>
          </div>
        </div>
      </div>

      {/* Foreground: "Claude Fei" text — centered, bold, vivid blue */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(64px, 12vw, 140px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            color: "#ef4444",
            textShadow: "0 0 80px rgba(239, 68, 68, 0.5), 0 0 160px rgba(239, 68, 68, 0.2)",
            userSelect: "none",
          }}
        >
          Claude Fei
        </h1>
      </div>
    </div>
  );
};
