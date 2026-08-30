export const ClaudeDesignView = () => {
  return (
    <div className="claude-design-page">
      <style>{`
        .claude-design-page {
          --ink-950: #0b0f14;
          --ink-900: #111827;
          --ink-700: #1e293b;
          --ink-600: #253044;
          --ink-500: #2d3a4a;
          --ink-400: #3f5068;
          --ink-300: #5a6e88;
          --ink-200: #8099b4;
          --fg: #e2e8f0;
          --fg-muted: #94a3b8;
          --fg-faint: #64748b;
          --aai-orange: #f97316;
          --aai-orange-peach: #fdba74;
          --aai-orange-bright: #fb923c;
          --aai-orange-deep: #c2410c;
          --aai-blue: #60a5fa;
          --warn: #facc15;
          --ok: #4ade80;
          --err: #f87171;
          --ring: rgba(249,115,22,.35);
          --glow-orange: 0 0 18px rgba(249,115,22,.18);
          --ease-out: cubic-bezier(.16,1,.3,1);
          --font-sans: system-ui, -apple-system, sans-serif;
          --font-display: system-ui, -apple-system, sans-serif;
          --font-mono: ui-monospace, 'Cascadia Code', monospace;

          box-sizing: border-box;
          position: relative;
          min-height: 100vh;
          background: var(--ink-950);
          color: var(--fg);
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .claude-design-page *, .claude-design-page *::before, .claude-design-page *::after {
          box-sizing: border-box;
        }

        /* film grain overlay */
        .claude-design-page::before {
          content: "";
          position: fixed;
          inset: 0;
          z-index: 9;
          pointer-events: none;
          opacity: .045;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* ---- SHELL ---- */
        .cdp-shell {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          min-height: 100vh;
        }
        @media (max-width: 920px) {
          .cdp-shell { grid-template-columns: 1fr; }
          .cdp-brand { display: none; }
        }

        /* ---- BRAND PANEL ---- */
        .cdp-brand {
          position: relative;
          overflow: hidden;
          background: var(--ink-900);
          border-right: 1px solid var(--ink-400);
          padding: clamp(36px,4.5vw,64px);
          display: flex;
          flex-direction: column;
        }
        .cdp-brand::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
            radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%);
        }
        .cdp-brand > * { position: relative; z-index: 1; }

        .cdp-wordmark {
          display: flex;
          align-items: center;
          gap: 11px;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 19px;
          letter-spacing: -.01em;
          text-decoration: none;
          color: var(--fg);
        }
        .cdp-glyph {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          flex: none;
          background: linear-gradient(150deg, var(--aai-orange), var(--aai-orange-peach));
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25);
        }
        .cdp-glyph svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
        .cdp-ai { color: var(--aai-orange); }
        .cdp-div-bar { width: 1px; height: 18px; background: var(--ink-400); margin: 0 3px; }
        .cdp-product { font-weight: 500; font-size: 14px; color: var(--fg-muted); letter-spacing: 0; }

        .cdp-brand-mid { margin-top: auto; margin-bottom: auto; padding: 48px 0; max-width: 480px; }
        .cdp-eyebrow { font-family: var(--font-mono); font-weight: 500; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: var(--aai-orange); margin: 0 0 22px; }
        .cdp-brand-h1 { font-family: var(--font-display); font-weight: 800; font-size: clamp(32px,3.6vw,48px); line-height: 1.05; letter-spacing: -.02em; margin: 0; color: var(--fg); }
        .cdp-grad { background: linear-gradient(95deg, var(--aai-orange), var(--aai-orange-peach)); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .cdp-lede { font-size: 18px; line-height: 1.55; color: var(--fg-muted); margin: 22px 0 0; max-width: 420px; }

        /* pipeline */
        .cdp-pipeline { margin-top: 40px; display: flex; flex-direction: column; gap: 0; }
        .cdp-pl-row { display: flex; align-items: center; gap: 14px; position: relative; padding: 11px 0; }
        .cdp-pl-row .cdp-node { width: 11px; height: 11px; border-radius: 50%; flex: none; position: relative; z-index: 1; }
        .cdp-pl-row:not(:last-child)::before { content: ""; position: absolute; left: 5px; top: 22px; bottom: -1px; width: 1px; background: var(--ink-400); }
        .cdp-pl-row .cdp-lab { font-family: var(--font-mono); font-size: 12.5px; letter-spacing: .02em; color: var(--fg-muted); }
        .cdp-pl-row .cdp-lab b { color: var(--fg); font-weight: 600; font-family: var(--font-sans); }
        .cdp-pl-row .cdp-t { margin-left: auto; font-family: var(--font-mono); font-size: 11px; color: var(--fg-faint); }
        .cdp-n-blue { background: var(--aai-blue); box-shadow: 0 0 0 4px rgba(159,210,237,.12); }
        .cdp-n-amber { background: var(--warn); box-shadow: 0 0 0 4px rgba(232,161,60,.12); }
        .cdp-n-ok { background: var(--ok); box-shadow: 0 0 0 4px rgba(79,180,119,.14); }

        .cdp-brand-foot { display: flex; align-items: center; gap: 18px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .04em; color: var(--fg-faint); }
        .cdp-brand-foot .cdp-dot-sm { width: 4px; height: 4px; border-radius: 50%; background: var(--ink-300); }

        /* ---- AUTH PANEL ---- */
        .cdp-auth { display: flex; align-items: center; justify-content: center; padding: clamp(28px,5vw,64px); background: var(--ink-900); }
        .cdp-card { width: 100%; max-width: 392px; }

        .cdp-auth-head { margin-bottom: 30px; }
        .cdp-auth-ey { font-family: var(--font-mono); font-weight: 500; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: var(--fg-faint); margin: 0 0 14px; }
        .cdp-auth-h2 { font-family: var(--font-display); font-weight: 700; font-size: 30px; line-height: 1.1; letter-spacing: -.02em; margin: 0; color: var(--fg); }
        .cdp-auth-p { font-size: 15px; line-height: 1.5; color: var(--fg-muted); margin: 9px 0 0; }

        .cdp-sso { display: flex; flex-direction: column; gap: 10px; margin-bottom: 22px; }
        .cdp-sso-btn {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          font-family: var(--font-sans); font-weight: 600; font-size: 14px;
          background: var(--ink-700); color: var(--fg);
          border: 1px solid var(--ink-400); border-radius: 8px; padding: 12px 16px; cursor: pointer;
        }
        .cdp-sso-btn svg { width: 17px; height: 17px; flex: none; }

        .cdp-divider { display: flex; align-items: center; gap: 14px; margin: 0 0 22px; color: var(--fg-faint); }
        .cdp-divider::before, .cdp-divider::after { content: ""; height: 1px; flex: 1; background: var(--ink-400); }
        .cdp-divider span { font-family: var(--font-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; }

        .cdp-form { display: flex; flex-direction: column; gap: 16px; }
        .cdp-field label { display: block; font-size: 13px; font-weight: 500; color: var(--fg-muted); margin-bottom: 7px; }
        .cdp-input-wrap { position: relative; display: flex; align-items: center; }
        .cdp-input {
          width: 100%; font-family: var(--font-sans); font-size: 15px; color: var(--fg);
          background: var(--ink-500); border: 1px solid var(--ink-400); border-radius: 8px;
          padding: 12px 14px; outline: none;
        }
        .cdp-input::placeholder { color: var(--fg-faint); }

        .cdp-lbl-row { display: flex; align-items: center; justify-content: space-between; }
        .cdp-lbl-row a { font-size: 12.5px; color: var(--aai-orange); text-decoration: none; }

        .cdp-submit {
          margin-top: 4px; width: 100%; font-family: var(--font-sans); font-weight: 600; font-size: 15px;
          background: var(--aai-orange); color: #fff; border: 0; border-radius: 8px; padding: 13px 16px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 9px;
          box-shadow: var(--glow-orange);
        }

        .cdp-footnote { margin-top: 26px; text-align: center; font-size: 13.5px; color: var(--fg-muted); }
        .cdp-footnote a { color: var(--aai-orange); text-decoration: none; font-weight: 500; }

        .cdp-secure { margin-top: 28px; display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-mono); font-size: 11px; letter-spacing: .05em; color: var(--fg-faint); }
        .cdp-secure svg { width: 13px; height: 13px; fill: none; stroke: currentColor; stroke-width: 1.8; }

        /* ---- RED OVERLAY TEXT ---- */
        .cdp-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .cdp-overlay-text {
          color: #ef4444;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 900;
          font-family: system-ui, -apple-system, sans-serif;
          letter-spacing: -.03em;
          text-shadow: 0 2px 24px rgba(0,0,0,.8), 0 0 60px rgba(239,68,68,.35);
          text-align: center;
          line-height: 1;
        }
      `}</style>

      {/* Red "Claude design" overlay — on top of everything */}
      <div className="cdp-overlay" aria-label="Claude design">
        <span className="cdp-overlay-text">Claude design</span>
      </div>

      {/* Background: full Claude design */}
      <main className="cdp-shell">
        {/* BRAND PANEL */}
        <section className="cdp-brand">
          <div className="cdp-wordmark">
            <span className="cdp-glyph" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
                <circle cx="12" cy="12" r="3.4" />
              </svg>
            </span>
            <span>
              Autonomy<span className="cdp-ai">AI</span>
            </span>
            <span className="cdp-div-bar" aria-hidden="true" />
            <span className="cdp-product">On-Call Agent</span>
          </div>

          <div className="cdp-brand-mid">
            <p className="cdp-eyebrow">Autonomous incident response</p>
            <h1 className="cdp-brand-h1">
              Your on-call engineer that{" "}
              <span className="cdp-grad">never sleeps.</span>
            </h1>
            <p className="cdp-lede">
              From first alert to merged fix — the agent triages, investigates,
              and ships the patch while your team stays asleep.
            </p>

            <div className="cdp-pipeline" aria-hidden="true">
              <div className="cdp-pl-row">
                <span className="cdp-node cdp-n-blue" />
                <span className="cdp-lab">
                  <b>Alert received</b> — latency spike, checkout-svc
                </span>
                <span className="cdp-t">00:00</span>
              </div>
              <div className="cdp-pl-row">
                <span className="cdp-node cdp-n-amber" />
                <span className="cdp-lab">
                  <b>Triaged &amp; root-caused</b> — connection pool exhausted
                </span>
                <span className="cdp-t">00:02</span>
              </div>
              <div className="cdp-pl-row">
                <span className="cdp-node cdp-n-ok" />
                <span className="cdp-lab">
                  <b>Fix merged</b> — PR #1408, verified in staging
                </span>
                <span className="cdp-t">00:09</span>
              </div>
            </div>
          </div>

          <div className="cdp-brand-foot">
            <span>SOC 2 Type II</span>
            <span className="cdp-dot-sm" aria-hidden="true" />
            <span>Runs in your infra</span>
            <span className="cdp-dot-sm" aria-hidden="true" />
            <span>150+ teams on-call</span>
          </div>
        </section>

        {/* AUTH PANEL */}
        <section className="cdp-auth">
          <div className="cdp-card">
            <div className="cdp-auth-head">
              <p className="cdp-auth-ey">Sign in</p>
              <h2 className="cdp-auth-h2">Welcome back</h2>
              <p className="cdp-auth-p">Pick up where the agent left off.</p>
            </div>

            <div className="cdp-sso">
              <button type="button" className="cdp-sso-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
                </svg>
                Continue with GitHub
              </button>
              <button type="button" className="cdp-sso-btn">
                <svg viewBox="0 0 48 48" aria-hidden="true" width="17" height="17">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"/>
                  <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"/>
                  <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44Z"/>
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.6l6.2 5.2C39.9 36.3 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5Z"/>
                </svg>
                Continue with Google
              </button>
            </div>

            <div className="cdp-divider">
              <span>or</span>
            </div>

            <form className="cdp-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cdp-field">
                <label htmlFor="cdp-email">Work email</label>
                <div className="cdp-input-wrap">
                  <input
                    id="cdp-email"
                    className="cdp-input"
                    type="email"
                    placeholder="you@company.com"
                    readOnly
                    tabIndex={-1}
                  />
                </div>
              </div>

              <div className="cdp-field">
                <div className="cdp-lbl-row">
                  <label htmlFor="cdp-password">Password</label>
                  <a href="#" tabIndex={-1}>Forgot password?</a>
                </div>
                <div className="cdp-input-wrap">
                  <input
                    id="cdp-password"
                    className="cdp-input"
                    type="password"
                    placeholder="••••••••••••"
                    readOnly
                    tabIndex={-1}
                  />
                </div>
              </div>

              <button type="submit" className="cdp-submit" tabIndex={-1}>
                <span>Sign in</span>
              </button>
            </form>

            <p className="cdp-footnote">
              New to the On-Call Agent?{" "}
              <a href="#" tabIndex={-1}>Request access</a>
            </p>

            <div className="cdp-secure">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V8a4 4 0 0 1 8 0v3" />
              </svg>
              Encrypted &amp; SSO-ready
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
