import { Link } from "@remix-run/react";

// ──────────────────────────────────────────────────────────────────────────────
// Film-grain SVG encoded as a data-URI (design reference signature texture)
// ──────────────────────────────────────────────────────────────────────────────
const GRAIN_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

// ──────────────────────────────────────────────────────────────────────────────
// Pipeline status rows (decorative motif from the reference)
// ──────────────────────────────────────────────────────────────────────────────
const PIPELINE_ROWS = [
  { color: "#9FD2ED", shadow: "rgba(159,210,237,.12)", label: "Alert received", sub: "— latency spike, checkout-svc", time: "00:00" },
  { color: "#E8A13C", shadow: "rgba(232,161,60,.12)",  label: "Triaged & root-caused", sub: "— connection pool exhausted", time: "00:02" },
  { color: "#4FB477", shadow: "rgba(79,180,119,.14)",  label: "Fix merged", sub: "— PR #1408, verified in staging", time: "00:09" },
];

// ──────────────────────────────────────────────────────────────────────────────
// WelcomeView
// ──────────────────────────────────────────────────────────────────────────────
export const WelcomeView = () => {
  return (
    <div
      className="welcome-shell"
      style={{
        // Film grain overlay — the signature brand texture at 4.5% opacity
        position: "relative",
      }}
    >
      {/* grain overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: GRAIN_BG,
        }}
      />

      {/* ══════════════════════ LEFT BRAND PANEL ══════════════════════ */}
      <section className="welcome-brand" aria-label="Brand panel">
        {/* warm off-axis glow overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
          }}
        />

        {/* Content sits above the glow */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
          {/* Wordmark */}
          <div className="welcome-wordmark">
            <span
              className="welcome-wordmark-glyph"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: "#fff", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" }}>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span className="font-primary-black text-white">
              Jira<span style={{ color: "#F25730" }}>Clone</span>
            </span>
            <span
              aria-hidden="true"
              style={{ width: 1, height: 18, background: "#3C3B39", margin: "0 3px" }}
            />
            <span
              className="font-primary"
              style={{ fontWeight: 500, fontSize: 14, color: "#B4B1AC", letterSpacing: 0 }}
            >
              Project Tracker
            </span>
          </div>

          {/* Centre brand copy */}
          <div className="welcome-brand-mid">
            <p
              className="font-primary"
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#F25730",
                margin: "0 0 22px",
              }}
            >
              Project management, simplified
            </p>

            <h1
              className="font-primary-black"
              style={{
                fontSize: "clamp(32px, 3.6vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#FFFFFF",
                textWrap: "balance",
              } as React.CSSProperties}
            >
              Your team's work,{" "}
              <span
                style={{
                  background: "linear-gradient(95deg, #F25730, #F69874)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                beautifully organised.
              </span>
            </h1>

            <p
              className="font-primary"
              style={{ fontSize: 18, lineHeight: 1.55, color: "#B4B1AC", margin: "22px 0 0", maxWidth: 420 }}
            >
              Track issues, manage sprints, and ship faster — all in one place.
              Built for dev teams who care about the details.
            </p>

            {/* Pipeline timeline motif */}
            <div className="welcome-pipeline" aria-hidden="true">
              {PIPELINE_ROWS.map((row, i) => (
                <div key={i} className="welcome-pl-row">
                  {/* vertical connector line */}
                  {i < PIPELINE_ROWS.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 5,
                        top: "calc(50% + 6px)",
                        width: 1,
                        height: "calc(100% + 2px)",
                        background: "#3C3B39",
                        zIndex: 0,
                      }}
                    />
                  )}
                  <span
                    className="welcome-pl-node"
                    style={{
                      background: row.color,
                      boxShadow: `0 0 0 4px ${row.shadow}`,
                    }}
                  />
                  <span
                    className="font-primary"
                    style={{ fontSize: 12.5, letterSpacing: "0.02em", color: "#B4B1AC" }}
                  >
                    <strong style={{ color: "#fff", fontWeight: 600 }}>{row.label}</strong>{" "}
                    <span dangerouslySetInnerHTML={{ __html: row.sub }} />
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                      fontSize: 11,
                      color: "#7C7A75",
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Brand footer */}
          <div className="welcome-brand-foot font-primary">
            <span>Open Source</span>
            <span className="welcome-brand-dot" aria-hidden="true" />
            <span>TypeScript + Remix</span>
            <span className="welcome-brand-dot" aria-hidden="true" />
            <span>Full-stack demo</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════ RIGHT CONTENT PANEL ══════════════════════ */}
      <section className="welcome-auth" aria-label="Welcome content">
        {/* Mobile-only compact wordmark */}
        <div className="welcome-mobile-mark welcome-wordmark">
          <span className="welcome-wordmark-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, stroke: "#fff", fill: "none", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" }}>
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
              <circle cx="12" cy="12" r="3.4" />
            </svg>
          </span>
          <span className="font-primary-black text-white">
            Jira<span style={{ color: "#F25730" }}>Clone</span>
          </span>
        </div>

        {/* Card */}
        <div className="welcome-card">
          {/* Head */}
          <div style={{ marginBottom: 30 }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#7C7A75",
                margin: "0 0 14px",
              }}
            >
              Project tracker
            </p>
            <h2
              className="font-primary-black"
              style={{
                fontSize: 30,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                margin: 0,
                color: "#FFFFFF",
              }}
            >
              Welcome
            </h2>
            <p
              className="font-primary"
              style={{ fontSize: 15, lineHeight: 1.5, color: "#B4B1AC", margin: "9px 0 0" }}
            >
              Explore projects, track issues, and collaborate with your team.
              Select a user to get started — no password required.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to="/login"
            className="welcome-cta font-primary-bold"
          >
            Get started
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ width: 16, height: 16, fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          {/* Secure footnote */}
          <div
            className="font-primary"
            style={{
              marginTop: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              fontSize: 11,
              letterSpacing: "0.05em",
              color: "#7C7A75",
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: 13, height: 13, fill: "none", stroke: "currentColor", strokeWidth: 1.8 }}>
              <rect x="4" y="11" width="16" height="10" rx="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" />
            </svg>
            Demo app · no real auth
          </div>
        </div>
      </section>

      {/* ══════════════════════ SCOPED STYLES ══════════════════════ */}
      <style>{`
        .welcome-shell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          height: 100vh;
          min-height: 100vh;
          align-items: stretch;
        }

        /* ---- brand panel ---- */
        .welcome-brand {
          position: relative;
          overflow: hidden;
          background: #121211;
          border-right: 1px solid #3C3B39;
          padding: clamp(36px, 4.5vw, 64px);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        /* ---- wordmark ---- */
        .welcome-wordmark {
          display: flex;
          align-items: center;
          gap: 11px;
          font-weight: 800;
          font-size: 19px;
          letter-spacing: -0.01em;
        }
        .welcome-wordmark-glyph {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          flex: none;
          background: linear-gradient(150deg, #F25730, #F69874);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
        }

        /* ---- centre brand copy ---- */
        .welcome-brand-mid {
          margin-top: auto;
          margin-bottom: auto;
          padding: 48px 0;
          max-width: 480px;
        }

        /* ---- pipeline ---- */
        .welcome-pipeline {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .welcome-pl-row {
          display: flex;
          align-items: center;
          gap: 14px;
          position: relative;
          padding: 11px 0;
        }
        .welcome-pl-node {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          flex: none;
          position: relative;
          z-index: 1;
        }

        /* ---- brand footer ---- */
        .welcome-brand-foot {
          display: flex;
          align-items: center;
          gap: 18px;
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #7C7A75;
        }
        .welcome-brand-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3C3B39;
        }

        /* ---- right / auth panel ---- */
        .welcome-auth {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 5vw, 64px);
          background: #121211;
          height: 100%;
        }
        .welcome-card {
          width: 100%;
          max-width: 392px;
        }

        /* ---- mobile wordmark (hidden on desktop) ---- */
        .welcome-mobile-mark {
          display: none;
          margin-bottom: 30px;
        }

        /* ---- CTA button ---- */
        .welcome-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          font-weight: 600;
          font-size: 15px;
          background: #F25730;
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 13px 16px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 8px 30px rgba(242,87,48,.22);
          transition: background 0.15s cubic-bezier(.2,.7,.2,1), transform 0.12s cubic-bezier(.2,.7,.2,1);
          margin-top: 24px;
        }
        .welcome-cta:hover {
          background: #FC816F;
          transform: translateY(-1px);
        }
        .welcome-cta:active {
          background: #ED5339;
          transform: translateY(0);
        }

        /* ---- responsive ---- */
        @media (max-width: 920px) {
          .welcome-shell {
            grid-template-columns: 1fr;
            height: auto;
          }
          .welcome-brand {
            display: none;
          }
          .welcome-mobile-mark {
            display: flex;
          }
          .welcome-auth {
            min-height: 100vh;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};
