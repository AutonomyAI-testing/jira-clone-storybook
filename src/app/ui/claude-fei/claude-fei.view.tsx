export const ClaudeFeiView = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
        background: "var(--DarkNeutral100)",
        color: "var(--DarkNeutral900)",
        fontFamily: "sans-serif",
        WebkitFontSmoothing: "antialiased",
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ================ LEFT BRAND PANEL ================ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--DarkNeutral200)",
          borderRight: "1px solid var(--DarkNeutral350)",
          padding: "clamp(36px, 4.5vw, 64px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Warm glow overlay */}
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

        {/* Wordmark */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "11px",
              fontWeight: 800,
              fontSize: "19px",
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "8px",
                flexShrink: 0,
                background:
                  "linear-gradient(150deg, #f25730, #f07a5a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="#fff"
                fill="none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span style={{ color: "var(--DarkNeutral1100)" }}>
              Autonomy<span style={{ color: "#f25730" }}>AI</span>
            </span>
            <span
              aria-hidden="true"
              style={{
                width: "1px",
                height: "18px",
                background: "var(--DarkNeutral350)",
                margin: "0 3px",
              }}
            />
            <span
              style={{
                fontWeight: 500,
                fontSize: "14px",
                color: "var(--DarkNeutral800)",
                letterSpacing: 0,
              }}
            >
              On-Call Agent
            </span>
          </div>
        </div>

        {/* Brand mid — tagline */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: "auto",
            marginBottom: "auto",
            padding: "48px 0",
            maxWidth: "480px",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#f25730",
              margin: "0 0 22px",
            }}
          >
            Autonomous incident response
          </p>
          <h1
            style={{
              fontWeight: 800,
              fontSize: "clamp(32px, 3.6vw, 48px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: 0,
              color: "var(--DarkNeutral1100)",
              textWrap: "balance",
            }}
          >
            Your on-call engineer that{" "}
            <span
              style={{
                background:
                  "linear-gradient(95deg, #f25730, #f07a5a)",
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
              fontSize: "18px",
              lineHeight: 1.55,
              color: "var(--DarkNeutral800)",
              margin: "22px 0 0",
              maxWidth: "420px",
            }}
          >
            From first alert to merged fix — the agent triages, investigates,
            and ships the patch while your team stays asleep.
          </p>

          {/* Pipeline status rows */}
          <div
            aria-hidden="true"
            style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {[
              {
                color: "#9fd2ed",
                glow: "rgba(159,210,237,.12)",
                label: "Alert received",
                detail: " — latency spike, checkout-svc",
                time: "00:00",
              },
              {
                color: "#e8a13c",
                glow: "rgba(232,161,60,.12)",
                label: "Triaged & root-caused",
                detail: " — connection pool exhausted",
                time: "00:02",
              },
              {
                color: "#4fb477",
                glow: "rgba(79,180,119,.14)",
                label: "Fix merged",
                detail: " — PR #1408, verified in staging",
                time: "00:09",
              },
            ].map(({ color, glow, label, detail, time }, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  position: "relative",
                  padding: "11px 0",
                }}
              >
                {/* connector line */}
                {i < 2 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "5px",
                      top: "22px",
                      bottom: "-1px",
                      width: "1px",
                      background: "var(--DarkNeutral350)",
                    }}
                  />
                )}
                <span
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "50%",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    background: color,
                    boxShadow: `0 0 0 4px ${glow}`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12.5px",
                    letterSpacing: "0.02em",
                    color: "var(--DarkNeutral800)",
                  }}
                >
                  <strong
                    style={{
                      color: "var(--DarkNeutral1100)",
                      fontWeight: 600,
                      fontFamily: "sans-serif",
                    }}
                  >
                    {label}
                  </strong>
                  {detail}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "var(--DarkNeutral600)",
                  }}
                >
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand footer */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.04em",
            color: "var(--DarkNeutral600)",
          }}
        >
          {["SOC 2 Type II", "Runs in your infra", "150+ teams on-call"].map(
            (item, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "var(--DarkNeutral400)",
                      marginRight: "-10px",
                    }}
                  />
                )}
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* ================ RIGHT PANEL (auth-style) ================ */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(28px, 5vw, 64px)",
          background: "var(--DarkNeutral200)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "392px" }}>
          {/* Main heading */}
          <div style={{ marginBottom: "30px" }}>
            <p
              style={{
                fontFamily: "monospace",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--DarkNeutral600)",
                margin: "0 0 14px",
              }}
            >
              Current user
            </p>
            <h2
              style={{
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: "0 0 12px",
                color: "var(--Green400)",
              }}
            >
              Welcome to the app
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.5,
                color: "var(--DarkNeutral800)",
                margin: 0,
              }}
            >
              You are viewing a page built from the provided design.
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              margin: "0 0 28px",
              color: "var(--DarkNeutral600)",
            }}
          >
            <div style={{ height: "1px", flex: 1, background: "var(--DarkNeutral350)" }} />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              signed in as
            </span>
            <div style={{ height: "1px", flex: 1, background: "var(--DarkNeutral350)" }} />
          </div>

          {/* ──── "Claude Fei" in red ──── */}
          <div
            style={{
              borderRadius: "8px",
              background: "var(--DarkNeutral300)",
              border: "1px solid var(--DarkNeutral350)",
              padding: "20px 24px",
              textAlign: "center",
            }}
          >
            <p
              className="text-font-danger"
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Claude Fei
            </p>
            <p
              style={{
                marginTop: "8px",
                fontSize: "13px",
                color: "var(--DarkNeutral700)",
                fontFamily: "monospace",
                letterSpacing: "0.04em",
              }}
            >
              AI-powered engineer
            </p>
          </div>

          {/* Secure badge */}
          <div
            style={{
              marginTop: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "0.05em",
              color: "var(--DarkNeutral600)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
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
