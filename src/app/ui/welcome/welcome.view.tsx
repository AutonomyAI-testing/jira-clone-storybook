import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="welcome-shell">
      {/* ========== LEFT: BRAND PANEL ========== */}
      <section className="welcome-brand">
        {/* Wordmark */}
        <div className="welcome-wordmark">
          <span className="welcome-glyph" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
              <path d="M13 17h8M17 13v8" />
            </svg>
          </span>
          <span className="welcome-wordmark-name">
            Jira <span className="welcome-wordmark-accent">Clone</span>
          </span>
          <span className="welcome-wordmark-divider" aria-hidden="true" />
          <span className="welcome-wordmark-product">Project Manager</span>
        </div>

        {/* Hero content */}
        <div className="welcome-brand-mid">
          <p className="welcome-eyebrow">Project management, reimagined</p>
          <h1 className="welcome-headline">
            Where great{" "}
            <span className="welcome-headline-grad">teams ship faster.</span>
          </h1>
          <p className="welcome-lede">
            Create projects, assign priorities, track issues, and collaborate
            — all in one place. Your team's workflow, always in view.
          </p>

          {/* Pipeline / workflow motif */}
          <div className="welcome-pipeline" aria-hidden="true">
            <div className="welcome-pl-row">
              <span className="welcome-node welcome-node-blue" />
              <span className="welcome-pl-lab">
                <strong>Project created</strong> — "Design System v2"
              </span>
              <span className="welcome-pl-time">Day 1</span>
            </div>
            <div className="welcome-pl-row">
              <span className="welcome-node welcome-node-amber" />
              <span className="welcome-pl-lab">
                <strong>Issues triaged</strong> — 14 tasks assigned
              </span>
              <span className="welcome-pl-time">Day 3</span>
            </div>
            <div className="welcome-pl-row">
              <span className="welcome-node welcome-node-ok" />
              <span className="welcome-pl-lab">
                <strong>Sprint closed</strong> — 12 of 14 delivered
              </span>
              <span className="welcome-pl-time">Day 14</span>
            </div>
          </div>
        </div>

        {/* Footer badges */}
        <div className="welcome-brand-foot">
          <span>Open source</span>
          <span className="welcome-foot-dot" aria-hidden="true" />
          <span>Built with Remix</span>
          <span className="welcome-foot-dot" aria-hidden="true" />
          <span>TypeScript</span>
        </div>
      </section>

      {/* ========== RIGHT: CTA PANEL ========== */}
      <section className="welcome-auth">
        <div className="welcome-card">
          {/* Mobile-only wordmark */}
          <div className="welcome-mobile-mark welcome-wordmark">
            <span className="welcome-glyph" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <rect x="3" y="3" width="8" height="8" rx="1" />
                <rect x="13" y="3" width="8" height="8" rx="1" />
                <rect x="3" y="13" width="8" height="8" rx="1" />
                <path d="M13 17h8M17 13v8" />
              </svg>
            </span>
            <span className="welcome-wordmark-name">
              Jira <span className="welcome-wordmark-accent">Clone</span>
            </span>
          </div>

          {/* Auth header */}
          <div className="welcome-auth-head">
            <p className="welcome-auth-eyebrow">Get started</p>
            <h2 className="welcome-auth-heading">Welcome</h2>
            <p className="welcome-auth-subtitle">
              Select your user and jump right into your projects.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="welcome-features">
            <div className="welcome-feature">
              <span className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </span>
              <div>
                <p className="welcome-feature-title">Track issues</p>
                <p className="welcome-feature-desc">Create, assign, and prioritize tasks effortlessly</p>
              </div>
            </div>
            <div className="welcome-feature">
              <span className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </span>
              <div>
                <p className="welcome-feature-title">Board view</p>
                <p className="welcome-feature-desc">Visualize your workflow with Kanban-style boards</p>
              </div>
            </div>
            <div className="welcome-feature">
              <span className="welcome-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div>
                <p className="welcome-feature-title">Team collaboration</p>
                <p className="welcome-feature-desc">Work together with comments, assignments, and mentions</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link to="/login" className="welcome-cta-link">
            <Button className="welcome-cta-btn" aria-label="Continue to login">
              Continue to projects →
            </Button>
          </Link>

          <p className="welcome-footnote">
            A Jira-inspired demo app.{" "}
            <a
              href="https://github.com/danserrano/jira-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="welcome-footnote-link"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </section>

      {/* Scoped styles */}
      <style>{`
        .welcome-shell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          min-height: 100vh;
        }
        @media (max-width: 920px) {
          .welcome-shell { grid-template-columns: 1fr; }
          .welcome-brand { display: none; }
          .welcome-mobile-mark { display: flex !important; }
        }

        /* ---- Brand panel ---- */
        .welcome-brand {
          position: relative;
          overflow: hidden;
          background: var(--color-elevation-surface-sunken);
          border-right: 1px solid var(--color-border);
          padding: clamp(36px, 4.5vw, 64px);
          display: flex;
          flex-direction: column;
        }
        .welcome-brand::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(60% 55% at 18% 8%, rgba(94, 84, 82, 0.3), transparent 60%),
            radial-gradient(50% 50% at 92% 100%, rgba(0, 82, 204, 0.12), transparent 62%);
        }
        .welcome-brand > * { position: relative; z-index: 1; }

        /* ---- Wordmark ---- */
        .welcome-wordmark {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 19px;
          letter-spacing: -0.01em;
        }
        .welcome-glyph {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          flex: none;
          background: var(--color-background-brand-bold);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 1px rgba(0, 82, 204, 0.35), 0 6px 18px rgba(0, 82, 204, 0.25);
        }
        .welcome-wordmark-name { color: var(--color-font); }
        .welcome-wordmark-accent { color: var(--color-font-brand); }
        .welcome-wordmark-divider {
          width: 1px;
          height: 18px;
          background: var(--color-border);
          margin: 0 2px;
        }
        .welcome-wordmark-product {
          font-weight: 500;
          font-size: 13px;
          color: var(--color-font-subtle);
          letter-spacing: 0;
        }

        /* ---- Brand mid ---- */
        .welcome-brand-mid {
          margin-top: auto;
          margin-bottom: auto;
          padding: 48px 0;
          max-width: 480px;
        }
        .welcome-eyebrow {
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-font-brand);
          margin: 0 0 22px;
        }
        .welcome-headline {
          font-weight: 800;
          font-size: clamp(32px, 3.6vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0;
          color: var(--color-font);
        }
        .welcome-headline-grad {
          background: linear-gradient(95deg, var(--color-font-brand), var(--color-border-info));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .welcome-lede {
          font-size: 17px;
          line-height: 1.6;
          color: var(--color-font-subtle);
          margin: 20px 0 0;
          max-width: 420px;
        }

        /* ---- Pipeline motif ---- */
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
        .welcome-pl-row:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 22px;
          bottom: -11px;
          width: 1px;
          background: var(--color-border);
        }
        .welcome-node {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          flex: none;
          position: relative;
          z-index: 1;
        }
        .welcome-pl-lab {
          font-size: 13px;
          letter-spacing: 0.01em;
          color: var(--color-font-subtle);
        }
        .welcome-pl-lab strong {
          color: var(--color-font);
          font-weight: 600;
        }
        .welcome-pl-time {
          margin-left: auto;
          font-size: 11px;
          color: var(--color-font-subtlest);
          white-space: nowrap;
        }
        .welcome-node-blue {
          background: var(--color-border-info);
          box-shadow: 0 0 0 4px rgba(159, 210, 237, 0.15);
        }
        .welcome-node-amber {
          background: var(--color-border-warning);
          box-shadow: 0 0 0 4px rgba(232, 161, 60, 0.15);
        }
        .welcome-node-ok {
          background: var(--color-border-success);
          box-shadow: 0 0 0 4px rgba(79, 180, 119, 0.15);
        }

        /* ---- Brand footer ---- */
        .welcome-brand-foot {
          display: flex;
          align-items: center;
          gap: 18px;
          font-size: 11px;
          letter-spacing: 0.04em;
          color: var(--color-font-subtlest);
        }
        .welcome-foot-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-border-bold);
          flex: none;
        }

        /* ---- Auth panel ---- */
        .welcome-auth {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(28px, 5vw, 64px);
          background: var(--color-elevation-surface);
        }
        .welcome-card {
          width: 100%;
          max-width: 392px;
        }

        /* Mobile wordmark — hidden by default */
        .welcome-mobile-mark { display: none; margin-bottom: 30px; }

        /* ---- Auth head ---- */
        .welcome-auth-head { margin-bottom: 28px; }
        .welcome-auth-eyebrow {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-font-subtlest);
          margin: 0 0 12px;
        }
        .welcome-auth-heading {
          font-weight: 700;
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0;
          color: var(--color-font-danger);
        }
        .welcome-auth-subtitle {
          font-size: 15px;
          line-height: 1.5;
          color: var(--color-font-subtle);
          margin: 8px 0 0;
        }

        /* ---- Feature list ---- */
        .welcome-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
          padding: 20px;
          background: var(--color-elevation-surface-sunken);
          border: 1px solid var(--color-border);
          border-radius: 10px;
        }
        .welcome-feature {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .welcome-feature-icon {
          flex: none;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--color-background-brand-subtlest);
          color: var(--color-font-brand);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .welcome-feature-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-font);
          margin: 0 0 2px;
        }
        .welcome-feature-desc {
          font-size: 13px;
          color: var(--color-font-subtle);
          margin: 0;
        }

        /* ---- CTA ---- */
        .welcome-cta-link { display: block; text-decoration: none; }
        .welcome-cta-btn { width: 100%; justify-content: center; }

        /* ---- Footnote ---- */
        .welcome-footnote {
          margin-top: 24px;
          text-align: center;
          font-size: 13px;
          color: var(--color-font-subtle);
        }
        .welcome-footnote-link {
          color: var(--color-font-brand);
          text-decoration: none;
          font-weight: 500;
        }
        .welcome-footnote-link:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
};
