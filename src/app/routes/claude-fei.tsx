import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Claude Fei" }];
};

export default function ClaudeFeiRoute() {
  return (
    <div className="cf-page">
      {/* ── scoped styles ─────────────────────────────────────────────── */}
      <style>{`
        /* reset / scoping */
        .cf-page {
          margin: 0;
          padding: 0;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background: #0d0d0f;
          color: #f0ede8;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        /* film-grain overlay */
        .cf-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 9998;
          pointer-events: none;
          opacity: .045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ── layout ─────────────────────────────── */
        .cf-shell {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          min-height: 100vh;
        }

        /* ── brand panel ────────────────────────── */
        .cf-brand {
          position: relative;
          overflow: hidden;
          background: #141416;
          border-right: 1px solid #2e2c2a;
          padding: clamp(36px, 4.5vw, 64px);
          display: flex;
          flex-direction: column;
        }
        .cf-brand::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
            radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
        }
        .cf-brand > * { position: relative; z-index: 1; }

        /* wordmark */
        .cf-wordmark {
          display: flex;
          align-items: center;
          gap: 11px;
          font-weight: 800;
          font-size: 19px;
          letter-spacing: -.01em;
          font-family: system-ui, sans-serif;
        }
        .cf-glyph {
          width: 30px; height: 30px; border-radius: 8px; flex: none;
          background: linear-gradient(150deg, #f25730, #f8a07a);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
        }
        .cf-glyph svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
        .cf-ai { color: #f25730; }
        .cf-wdiv { width: 1px; height: 18px; background: #2e2c2a; margin: 0 3px; }
        .cf-product { font-weight: 500; font-size: 14px; color: #8a867f; letter-spacing: 0; }

        /* brand mid */
        .cf-brand-mid { margin-top: auto; margin-bottom: auto; padding: 48px 0; max-width: 480px; }
        .cf-eyebrow {
          font-family: ui-monospace, monospace;
          font-weight: 500; font-size: 12px; letter-spacing: .16em; text-transform: uppercase;
          color: #f25730; margin: 0 0 22px;
        }
        .cf-brand-h1 {
          font-weight: 800;
          font-size: clamp(32px, 3.6vw, 48px);
          line-height: 1.05;
          letter-spacing: -.02em;
          margin: 0; color: #f0ede8; text-wrap: balance;
        }
        .cf-grad {
          background: linear-gradient(95deg, #f25730, #f8a07a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .cf-lede { font-size: 18px; line-height: 1.55; color: #8a867f; margin: 22px 0 0; max-width: 420px; }

        /* pipeline */
        .cf-pipeline { margin-top: 40px; display: flex; flex-direction: column; gap: 0; }
        .cf-pl-row {
          display: flex; align-items: center; gap: 14px;
          position: relative; padding: 11px 0;
        }
        .cf-pl-row .node { width: 11px; height: 11px; border-radius: 50%; flex: none; position: relative; z-index: 1; }
        .cf-pl-row:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 5px; top: 22px;
          width: 1px; height: calc(100% - 0px);
          background: #2e2c2a;
        }
        .cf-pl-row .lab { font-family: ui-monospace, monospace; font-size: 12.5px; letter-spacing: .02em; color: #8a867f; }
        .cf-pl-row .lab b { color: #f0ede8; font-weight: 600; font-family: system-ui, sans-serif; }
        .cf-pl-row .t { margin-left: auto; font-family: ui-monospace, monospace; font-size: 11px; color: #4a4743; }
        .n-blue  { background: #9fd2ed; box-shadow: 0 0 0 4px rgba(159,210,237,.12); }
        .n-amber { background: #e8a13c; box-shadow: 0 0 0 4px rgba(232,161,60,.12); }
        .n-ok    { background: #4fb477; box-shadow: 0 0 0 4px rgba(79,180,119,.14); }

        /* brand footer */
        .cf-brand-foot {
          display: flex; align-items: center; gap: 18px;
          font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: .04em; color: #4a4743;
        }
        .cf-brand-foot .dot { width: 4px; height: 4px; border-radius: 50%; background: #2e2c2a; }

        /* mobile: single column, hide brand panel */
        @media (max-width: 920px) {
          .cf-shell { grid-template-columns: 1fr; }
          .cf-brand  { display: none; }
        }

        /* ── auth panel ─────────────────────────── */
        .cf-auth {
          display: flex; align-items: center; justify-content: center;
          padding: clamp(28px, 5vw, 64px);
          background: #141416;
        }
        .cf-card { width: 100%; max-width: 392px; }

        .cf-auth-head { margin-bottom: 30px; }
        .cf-auth-head .ey {
          font-family: ui-monospace, monospace; font-weight: 500; font-size: 12px;
          letter-spacing: .16em; text-transform: uppercase; color: #4a4743; margin: 0 0 14px;
        }
        .cf-auth-head h2 {
          font-weight: 700; font-size: 30px; line-height: 1.1; letter-spacing: -.02em;
          margin: 0; color: #f0ede8;
        }
        .cf-auth-head p { font-size: 15px; line-height: 1.5; color: #8a867f; margin: 9px 0 0; }

        /* SSO buttons — decorative */
        .cf-sso { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
        .cf-sso-btn {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          font-weight: 600; font-size: 14px;
          background: #1e1c1a; color: #f0ede8;
          border: 1px solid #2e2c2a; border-radius: 8px; padding: 12px 16px;
          cursor: default; /* non-interactive */
          font-family: system-ui, sans-serif;
        }
        .cf-sso-btn svg { width: 17px; height: 17px; flex: none; }

        /* divider */
        .cf-divider { display: flex; align-items: center; gap: 14px; margin: 0 0 22px; color: #4a4743; }
        .cf-divider::before, .cf-divider::after { content: ""; height: 1px; flex: 1; background: #2e2c2a; }
        .cf-divider span { font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }

        /* form fields — decorative */
        .cf-form { display: flex; flex-direction: column; gap: 16px; }
        .cf-field label { display: block; font-size: 13px; font-weight: 500; color: #8a867f; margin-bottom: 7px; }
        .cf-input-wrap { position: relative; display: flex; align-items: center; }
        .cf-input {
          width: 100%; font-size: 15px; color: #f0ede8;
          background: #1a1815; border: 1px solid #2e2c2a; border-radius: 8px;
          padding: 12px 14px; outline: none;
          font-family: system-ui, sans-serif;
          cursor: default; /* non-interactive */
        }
        .cf-reveal {
          position: absolute; right: 6px; background: none; border: 0;
          color: #4a4743; padding: 8px; border-radius: 6px; display: flex; cursor: default;
        }
        .cf-reveal svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.8; }

        .cf-lbl-row { display: flex; align-items: center; justify-content: space-between; }
        .cf-lbl-row a { font-size: 12.5px; color: #f25730; text-decoration: none; cursor: default; }

        .cf-remember {
          display: flex; align-items: center; gap: 9px; font-size: 13.5px;
          color: #8a867f; cursor: default; user-select: none; margin-top: 2px;
        }
        .cf-remember .box {
          width: 17px; height: 17px; border-radius: 5px; border: 1px solid #2e2c2a;
          background: #1a1815; display: flex; align-items: center; justify-content: center;
        }
        .cf-remember .box svg { width: 11px; height: 11px; stroke: #fff; fill: none; stroke-width: 2.6; opacity: 0; }

        .cf-submit {
          margin-top: 4px; width: 100%; font-weight: 600; font-size: 15px;
          background: #f25730; color: #fff; border: 0; border-radius: 8px; padding: 13px 16px;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          box-shadow: 0 0 0 1px rgba(242,87,48,.4), 0 6px 20px rgba(242,87,48,.28);
          font-family: system-ui, sans-serif;
          cursor: default; /* non-interactive */
        }

        .cf-footnote { margin-top: 26px; text-align: center; font-size: 13.5px; color: #8a867f; }
        .cf-footnote a { color: #f25730; text-decoration: none; cursor: default; }

        .cf-secure {
          margin-top: 28px; display: flex; align-items: center; justify-content: center;
          gap: 8px; font-family: ui-monospace, monospace; font-size: 11px; letter-spacing: .05em; color: #4a4743;
        }
        .cf-secure svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.8; }

        /* mobile wordmark above form */
        .cf-auth .cf-mobile-mark { display: none; }
        @media (max-width: 920px) { .cf-auth .cf-mobile-mark { display: flex; margin-bottom: 30px; } }

        /* ── "Claude Fei" overlay ────────────────── */
        .cf-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none; /* let clicks pass through to background */
          /* force the overlay to be truly viewport-centered, not parent-relative */
          transform: none;
          margin: 0;
          padding: 0;
        }
        .cf-headline {
          font-size: clamp(56px, 10vw, 120px);
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #ef4444;
          text-shadow:
            0 0 60px rgba(239,68,68,0.6),
            0 0 20px rgba(239,68,68,0.4),
            0 2px 8px rgba(0,0,0,0.7);
          font-family: system-ui, -apple-system, sans-serif;
          text-align: center;
          white-space: nowrap;
          pointer-events: none;
          user-select: none;
          /* no wrapping, no margin, no padding that could offset centering */
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* ── background: login design ─────────────────────────────────── */}
      <main className="cf-shell" aria-hidden="true">
        {/* Brand panel */}
        <section className="cf-brand">
          <div className="cf-wordmark">
            <span className="cf-glyph">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                <circle cx="12" cy="12" r="3.4"/>
              </svg>
            </span>
            <span>Autonomy<span className="cf-ai">AI</span></span>
            <span className="cf-wdiv" aria-hidden="true"></span>
            <span className="cf-product">On-Call Agent</span>
          </div>

          <div className="cf-brand-mid">
            <p className="cf-eyebrow">Autonomous incident response</p>
            <h1 className="cf-brand-h1">
              Your on-call engineer that{" "}
              <span className="cf-grad">never sleeps.</span>
            </h1>
            <p className="cf-lede">
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </p>

            <div className="cf-pipeline">
              <div className="cf-pl-row">
                <span className="node n-blue"></span>
                <span className="lab">
                  <b>Alert received</b> — latency spike, checkout-svc
                </span>
                <span className="t">00:00</span>
              </div>
              <div className="cf-pl-row">
                <span className="node n-amber"></span>
                <span className="lab">
                  <b>Triaged &amp; root-caused</b> — connection pool exhausted
                </span>
                <span className="t">00:02</span>
              </div>
              <div className="cf-pl-row">
                <span className="node n-ok"></span>
                <span className="lab">
                  <b>Fix merged</b> — PR #1408, verified in staging
                </span>
                <span className="t">00:09</span>
              </div>
            </div>
          </div>

          <div className="cf-brand-foot">
            <span>SOC 2 Type II</span>
            <span className="dot" aria-hidden="true"></span>
            <span>Runs in your infra</span>
            <span className="dot" aria-hidden="true"></span>
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* Auth panel */}
        <section className="cf-auth">
          <div className="cf-card">
            {/* mobile wordmark */}
            <div className="cf-wordmark cf-mobile-mark">
              <span className="cf-glyph">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>
                  <circle cx="12" cy="12" r="3.4"/>
                </svg>
              </span>
              <span>Autonomy<span className="cf-ai">AI</span></span>
            </div>

            <div className="cf-auth-head">
              <p className="ey">Sign in</p>
              <h2>Welcome back</h2>
              <p>Pick up where the agent left off.</p>
            </div>

            {/* SSO buttons — decorative */}
            <div className="cf-sso">
              <div className="cf-sso-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/>
                </svg>
                Continue with GitHub
              </div>
              <div className="cf-sso-btn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"/>
                  <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z"/>
                </svg>
                Continue with Google
              </div>
            </div>

            <div className="cf-divider"><span>or</span></div>

            {/* Form — decorative */}
            <div className="cf-form">
              <div className="cf-field">
                <label>Work email</label>
                <div className="cf-input-wrap">
                  <div className="cf-input" style={{ color: "#4a4743" }}>
                    you@company.com
                  </div>
                </div>
              </div>

              <div className="cf-field">
                <div className="cf-lbl-row">
                  <label>Password</label>
                  <span className="cf-lbl-row" style={{ fontSize: "12.5px", color: "#f25730" }}>
                    Forgot password?
                  </span>
                </div>
                <div className="cf-input-wrap">
                  <div className="cf-input" style={{ color: "#4a4743" }}>
                    ••••••••••••
                  </div>
                  <span className="cf-reveal">
                    <svg viewBox="0 0 24 24">
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="cf-remember">
                <span className="box">
                  <svg viewBox="0 0 24 24"><path d="M5 12.5 10 17l9-10"/></svg>
                </span>
                Keep me signed in
              </div>

              <div className="cf-submit">
                <span>Sign in</span>
              </div>
            </div>

            <p className="cf-footnote">
              New to the On-Call Agent?{" "}
              <span style={{ color: "#f25730", fontWeight: 500 }}>Request access</span>
            </p>

            <div className="cf-secure">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2"/>
                <path d="M8 11V8a4 4 0 0 1 8 0v3"/>
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </main>

      {/* ── "Claude Fei" text overlay ─────────────────────────────────── */}
      <div className="cf-overlay" role="banner">
        <h1 className="cf-headline">Claude Fei</h1>
      </div>
    </div>
  );
}
