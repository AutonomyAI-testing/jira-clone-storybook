export const WelcomeView = ({ heading = "Welcome", subtitle }: Props) => {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--DarkNeutral-100)" }}
    >
      {/* Film-grain overlay — signature brand texture from the reference design */}
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

      {/* Warm radial glow — replicates the off-axis corner lift from the reference */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: [
            "radial-gradient(60% 55% at 18% 8%, rgba(94, 84, 82, 0.35), transparent 60%)",
            "radial-gradient(50% 50% at 92% 100%, rgba(242, 87, 48, 0.08), transparent 62%)",
            "radial-gradient(70% 50% at 50% 50%, rgba(0, 85, 204, 0.06), transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Eyebrow label */}
        <p
          className="mb-5 font-primary-bold text-xs uppercase tracking-widest"
          style={{ color: "var(--Orange400)", letterSpacing: "0.16em" }}
        >
          Jira Clone
        </p>

        {/* Primary heading */}
        <h1
          className="font-primary-black"
          style={{
            fontSize: "clamp(52px, 8vw, 96px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "var(--DarkNeutral1100)",
            textWrap: "balance",
          }}
        >
          <span
            style={{
              color: "var(--Red500)",
            }}
          >
            {heading}
          </span>
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p
            className="mt-6 font-primary-light"
            style={{
              fontSize: "18px",
              lineHeight: 1.55,
              color: "var(--DarkNeutral800)",
              maxWidth: "480px",
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Decorative divider line */}
        <div
          aria-hidden="true"
          className="mt-10"
          style={{
            width: "40px",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--DarkNeutral400), transparent)",
          }}
        />
      </div>

      {/* Bottom footer strip */}
      <div
        className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4"
        style={{
          fontFamily: "monospace",
          fontSize: "11px",
          letterSpacing: "0.04em",
          color: "var(--DarkNeutral500)",
        }}
      >
        <span>Task Manager</span>
        <span
          aria-hidden="true"
          style={{
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "var(--DarkNeutral400)",
            display: "inline-block",
          }}
        />
        <span>Built with Remix</span>
        <span
          aria-hidden="true"
          style={{
            width: "3px",
            height: "3px",
            borderRadius: "50%",
            background: "var(--DarkNeutral400)",
            display: "inline-block",
          }}
        />
        <span>Open Source</span>
      </div>
    </div>
  );
};

interface Props {
  /** Main heading text. Defaults to "Welcome". */
  heading?: string;
  /** Optional subtitle / descriptor line below the heading. */
  subtitle?: string;
}
