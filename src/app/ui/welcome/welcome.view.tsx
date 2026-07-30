import { Link } from "@remix-run/react";

export const WelcomeView = () => {
  return (
    <div
      className="welcome-shell"
      style={{
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        minHeight: "100vh",
        background: "var(--welcome-ink-950)",
      }}
    >
      {/* ===================== BRAND PANEL ===================== */}
      <BrandPanel />

      {/* ===================== WELCOME PANEL ===================== */}
      <WelcomePanel />
    </div>
  );
};

/* ---------------------------------------------------------- */
/* Brand panel (left)                                          */
/* ---------------------------------------------------------- */

const BrandPanel = () => (
  <section
    style={{
      position: "relative",
      overflow: "hidden",
      background: "var(--welcome-ink-900)",
      borderRight: "1px solid var(--welcome-ink-400)",
      padding: "clamp(36px, 4.5vw, 64px)",
      display: "flex",
      flexDirection: "column",
    }}
    className="welcome-brand-panel"
  >
    {/* Corner radial glow overlay */}
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
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: 11,
        fontFamily: "CircularStdBlack, sans-serif",
        fontWeight: 800,
        fontSize: 19,
        letterSpacing: "-0.01em",
        color: "var(--welcome-fg)",
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          flexShrink: 0,
          background:
            "linear-gradient(150deg, var(--welcome-orange), var(--welcome-orange-peach))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 0 0 1px rgba(242,87,48,.35), 0 6px 18px rgba(242,87,48,.25)",
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          width={16}
          height={16}
          style={{ stroke: "#fff", fill: "none", strokeWidth: 2.2 }}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
          <circle cx="12" cy="12" r="3.4" />
        </svg>
      </span>
      <span>
        Jira{" "}
        <span style={{ color: "var(--welcome-orange)" }}>Clone</span>
      </span>
    </div>

    {/* Hero content */}
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
          fontFamily: "CircularStdMedium, monospace",
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--welcome-orange)",
          margin: "0 0 22px",
        }}
      >
        Project management
      </p>
      <h1
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(32px, 3.6vw, 48px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: 0,
          color: "var(--welcome-fg)",
          textWrap: "balance",
        }}
      >
        Track issues that{" "}
        <span
          style={{
            background:
              "linear-gradient(95deg, var(--welcome-orange), var(--welcome-orange-peach))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          actually matter.
        </span>
      </h1>
      <p
        style={{
          fontSize: 18,
          lineHeight: 1.55,
          color: "var(--welcome-fg-muted)",
          margin: "22px 0 0",
          maxWidth: 420,
          fontFamily: "CircularStdMedium, sans-serif",
        }}
      >
        From backlog to done — create issues, track progress, and ship faster
        with your team.
      </p>

      {/* Pipeline status motif */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
        aria-hidden="true"
      >
        <PipelineRow
          dotColor="var(--welcome-blue-ice)"
          dotGlow="rgba(159,210,237,.12)"
          label={<><strong style={{ color: "var(--welcome-fg)", fontFamily: "CircularStdBold, sans-serif" }}>Issue created</strong> — auth-service, bug report</>}
          timestamp="09:14"
        />
        <PipelineRow
          dotColor="var(--welcome-warn)"
          dotGlow="rgba(232,161,60,.12)"
          label={<><strong style={{ color: "var(--welcome-fg)", fontFamily: "CircularStdBold, sans-serif" }}>In progress</strong> — assigned to @woody</>}
          timestamp="09:17"
        />
        <PipelineRow
          dotColor="var(--welcome-ok)"
          dotGlow="rgba(79,180,119,.14)"
          label={<><strong style={{ color: "var(--welcome-fg)", fontFamily: "CircularStdBold, sans-serif" }}>Resolved</strong> — PR merged, issue closed</>}
          timestamp="09:31"
        />
      </div>
    </div>

    {/* Footer badges */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        gap: 18,
        fontFamily: "CircularStdMedium, monospace",
        fontSize: 11,
        letterSpacing: "0.04em",
        color: "var(--welcome-fg-faint)",
      }}
    >
      <span>Open Source</span>
      <span
        aria-hidden="true"
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "var(--welcome-ink-300)",
          display: "inline-block",
        }}
      />
      <span>Remix + Prisma</span>
      <span
        aria-hidden="true"
        style={{
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "var(--welcome-ink-300)",
          display: "inline-block",
        }}
      />
      <span>TypeScript</span>
    </div>
  </section>
);

interface PipelineRowProps {
  dotColor: string;
  dotGlow: string;
  label: React.ReactNode;
  timestamp: string;
}

const PipelineRow = ({ dotColor, dotGlow, label, timestamp }: PipelineRowProps) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      position: "relative",
      padding: "11px 0",
      borderLeft: `1px solid var(--welcome-ink-400)`,
      marginLeft: 5,
      paddingLeft: 18,
    }}
  >
    <span
      style={{
        width: 11,
        height: 11,
        borderRadius: "50%",
        flexShrink: 0,
        background: dotColor,
        boxShadow: `0 0 0 4px ${dotGlow}`,
        position: "absolute",
        left: -6,
        zIndex: 1,
      }}
    />
    <span
      style={{
        fontFamily: "CircularStdMedium, monospace",
        fontSize: 12.5,
        letterSpacing: "0.02em",
        color: "var(--welcome-fg-muted)",
      }}
    >
      {label}
    </span>
    <span
      style={{
        marginLeft: "auto",
        fontFamily: "CircularStdMedium, monospace",
        fontSize: 11,
        color: "var(--welcome-fg-faint)",
      }}
    >
      {timestamp}
    </span>
  </div>
);

/* ---------------------------------------------------------- */
/* Welcome panel (right)                                       */
/* ---------------------------------------------------------- */

const WelcomePanel = () => (
  <section
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(28px, 5vw, 64px)",
      background: "var(--welcome-ink-900)",
    }}
  >
    {/* Mobile-only wordmark */}
    <div
      className="welcome-mobile-mark"
      style={{ display: "none", marginBottom: 30 }}
    >
      <span
        style={{
          fontFamily: "CircularStdBlack, sans-serif",
          fontSize: 19,
          color: "var(--welcome-fg)",
        }}
      >
        Jira{" "}
        <span style={{ color: "var(--welcome-orange)" }}>Clone</span>
      </span>
    </div>

    <div style={{ width: "100%", maxWidth: 392 }}>
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontFamily: "CircularStdMedium, monospace",
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--welcome-fg-faint)",
            margin: "0 0 14px",
          }}
        >
          Jira Clone
        </p>
        <h2
          style={{
            fontFamily: "CircularStdBlack, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 4vw, 52px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            margin: "0 0 12px",
            color: "#ff0000",
          }}
        >
          Welcome
        </h2>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--welcome-fg-muted)",
            margin: 0,
            fontFamily: "CircularStdMedium, sans-serif",
          }}
        >
          A full-featured project tracker built with Remix, Prisma, and
          TypeScript. Jump in and start tracking.
        </p>
      </div>

      {/* Get Started CTA */}
      <Link
        to="/login"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          width: "100%",
          fontFamily: "CircularStdBold, sans-serif",
          fontWeight: 600,
          fontSize: 15,
          background: "var(--welcome-orange)",
          color: "#fff",
          border: 0,
          borderRadius: 8,
          padding: "14px 16px",
          cursor: "pointer",
          boxShadow: "var(--welcome-glow-orange)",
          textDecoration: "none",
          transition: "background 0.15s ease, transform 0.12s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background =
            "var(--welcome-orange-bright)";
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background =
            "var(--welcome-orange)";
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "translateY(0)";
        }}
      >
        <span>Get Started</span>
        <svg
          viewBox="0 0 24 24"
          width={17}
          height={17}
          style={{ stroke: "currentColor", fill: "none", strokeWidth: 2 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>

      {/* Secure / trust line */}
      <div
        style={{
          marginTop: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          fontFamily: "CircularStdMedium, monospace",
          fontSize: 11,
          letterSpacing: "0.05em",
          color: "var(--welcome-fg-faint)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width={13}
          height={13}
          style={{ fill: "none", stroke: "currentColor", strokeWidth: 1.8 }}
          aria-hidden="true"
        >
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
        Open source &amp; self-hostable
      </div>
    </div>
  </section>
);
