import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";
import { TaskIcon } from "@app/components/icons";

export const WelcomeView = () => {
  return (
    <div className="welcome-shell">
      {/* ==================== BRAND PANEL ==================== */}
      <section className="welcome-brand" aria-label="Welcome brand panel">
        {/* Wordmark */}
        <div className="welcome-wordmark">
          <span className="welcome-wordmark-glyph" aria-hidden="true">
            <TaskIcon size={18} />
          </span>
          <span className="welcome-wordmark-name">
            Jira <span className="welcome-wordmark-accent">Clone</span>
          </span>
          <span className="welcome-wordmark-div" aria-hidden="true" />
          <span className="welcome-wordmark-product">Project Management</span>
        </div>

        {/* Hero */}
        <div className="welcome-brand-mid">
          <p className="welcome-eyebrow">Agile project management</p>
          <h1 className="welcome-hero-heading">
            Ship features, crush bugs,{" "}
            <span className="welcome-hero-grad">stay organized.</span>
          </h1>
          <p className="welcome-lede">
            Track every issue from backlog to done. Organize sprints, assign
            work, and keep your team in sync — all in one place.
          </p>

          {/* Pipeline motif */}
          <div className="welcome-pipeline" aria-hidden="true">
            <div className="welcome-pl-row">
              <span className="welcome-node welcome-node-blue" />
              <span className="welcome-pl-label">
                <strong>Issue created</strong> — feat/dark-mode, auth-service
              </span>
              <span className="welcome-pl-time">Just now</span>
            </div>
            <div className="welcome-pl-row">
              <span className="welcome-node welcome-node-amber" />
              <span className="welcome-pl-label">
                <strong>In progress</strong> — assigned to Woody
              </span>
              <span className="welcome-pl-time">2 min ago</span>
            </div>
            <div className="welcome-pl-row">
              <span className="welcome-node welcome-node-green" />
              <span className="welcome-pl-label">
                <strong>Done</strong> — PR merged, sprint velocity +3
              </span>
              <span className="welcome-pl-time">9 min ago</span>
            </div>
          </div>
        </div>

        {/* Footer badges */}
        <div className="welcome-brand-foot">
          <span>Open source</span>
          <span className="welcome-foot-dot" aria-hidden="true" />
          <span>Remix + React</span>
          <span className="welcome-foot-dot" aria-hidden="true" />
          <span>5 themes</span>
        </div>
      </section>

      {/* ==================== ACTION PANEL ==================== */}
      <section className="welcome-action" aria-label="Welcome action panel">
        <div className="welcome-card">
          {/* Mobile wordmark — only visible on small screens */}
          <div className="welcome-wordmark welcome-wordmark-mobile">
            <span className="welcome-wordmark-glyph" aria-hidden="true">
              <TaskIcon size={18} />
            </span>
            <span className="welcome-wordmark-name">
              Jira <span className="welcome-wordmark-accent">Clone</span>
            </span>
          </div>

          {/* Heading */}
          <div className="welcome-action-head">
            <p className="welcome-action-eyebrow">Get started</p>
            <h2 className="welcome-action-heading">Welcome aboard</h2>
            <p className="welcome-action-sub">
              Choose your user profile and jump straight into your projects.
              No passwords needed — just pick a persona and explore.
            </p>
          </div>

          {/* CTA */}
          <Link to="/login" className="welcome-cta-link">
            <Button color="primary" variant="contained" size="lg" className="welcome-cta-btn">
              Get Started
            </Button>
          </Link>

          {/* Footnote */}
          <p className="welcome-footnote">
            A Jira-inspired side project built with{" "}
            <a
              href="https://remix.run"
              target="_blank"
              rel="noopener noreferrer"
              className="welcome-footnote-link"
            >
              Remix
            </a>{" "}
            &amp;{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="welcome-footnote-link"
            >
              Tailwind
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
};
