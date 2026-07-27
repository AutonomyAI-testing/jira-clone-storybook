export const WelcomeBrandPanel = () => {
  return (
    <section className="welcome-brand" aria-label="Brand panel">
      {/* Wordmark */}
      <div className="w-wordmark">
        <span className="w-glyph" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
            <circle cx="12" cy="12" r="3.4" />
          </svg>
        </span>
        <span className="w-brand-name">
          Jira<span className="w-ai">Clone</span>
        </span>
        <span className="w-divider" aria-hidden="true" />
        <span className="w-product">Project Manager</span>
      </div>

      {/* Hero content */}
      <div className="w-brand-mid">
        <p className="w-eyebrow">Modern project management</p>
        <h1 className="w-h1">
          Your team's productivity tool that{" "}
          <span className="w-grad">never sleeps.</span>
        </h1>
        <p className="w-lede">
          From first ticket to shipped feature — track issues, manage sprints,
          and collaborate with your team in real-time.
        </p>

        {/* Pipeline / status motif */}
        <div className="w-pipeline" aria-hidden="true">
          <div className="w-pl-row">
            <span className="w-node w-n-blue" />
            <span className="w-lab">
              <b>Issue created</b> — latency spike, checkout-svc
            </span>
            <span className="w-t">00:00</span>
          </div>
          <div className="w-pl-row">
            <span className="w-node w-n-amber" />
            <span className="w-lab">
              <b>In progress</b> — assigned to engineering team
            </span>
            <span className="w-t">00:02</span>
          </div>
          <div className="w-pl-row">
            <span className="w-node w-n-ok" />
            <span className="w-lab">
              <b>Done</b> — PR #1408, verified &amp; closed
            </span>
            <span className="w-t">00:09</span>
          </div>
        </div>
      </div>

      {/* Footer trust badges */}
      <div className="w-brand-foot">
        <span>Open source</span>
        <span className="w-dot" aria-hidden="true" />
        <span>Remix + React</span>
        <span className="w-dot" aria-hidden="true" />
        <span>TypeScript</span>
      </div>
    </section>
  );
};
