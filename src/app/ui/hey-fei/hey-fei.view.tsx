/**
 * HeyFei page — black background, greeting text, and AutonomyAI-inspired avatar.
 * The avatar uses the AutonomyAI brand glyph (a sunburst / spoke wheel icon)
 * rendered inline as SVG, styled in the orange brand colour from the provided design.
 * Both elements fade in from below on load, the text staggered 120ms after the avatar.
 */
export const HeyFeiView = (): JSX.Element => {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center gap-8"
      style={{ backgroundColor: "#000000" }}
    >
      {/* AutonomyAI-inspired avatar glyph — fades in first */}
      <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
        <AutonomyAIAvatar />
      </div>

      {/* Greeting text — fades in 120ms after the avatar */}
      <h1
        className="animate-fade-in-up font-primary-black text-5xl"
        style={{ color: "#ffffff", animationDelay: "120ms" }}
      >
        Hey Fei
      </h1>
    </div>
  );
};

/**
 * Standalone avatar glyph based on the AutonomyAI On-Call Agent design reference.
 * Uses the orange sunburst glyph + wordmark style from the provided HTML design.
 */
const AutonomyAIAvatar = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Brand glyph — orange rounded-square with spoke-wheel icon */}
      <div
        className="flex items-center justify-center rounded-[12px]"
        style={{
          width: 80,
          height: 80,
          background: "linear-gradient(150deg, #f25730, #f2a27a)",
          boxShadow:
            "0 0 0 2px rgba(242,87,48,.35), 0 12px 36px rgba(242,87,48,.3)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width={40}
          height={40}
          fill="none"
          stroke="#ffffff"
          strokeWidth={2.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
          <circle cx="12" cy="12" r="3.4" />
        </svg>
      </div>

      {/* Wordmark */}
      <div
        className="flex items-center gap-2 font-primary-bold text-lg"
        style={{ color: "#ffffff" }}
      >
        <span>
          Autonomy
          <span style={{ color: "#f25730" }}>AI</span>
        </span>
        <span
          style={{
            width: 1,
            height: 18,
            backgroundColor: "rgba(255,255,255,0.25)",
            display: "inline-block",
          }}
          aria-hidden="true"
        />
        <span
          className="font-primary text-sm"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          On-Call Agent
        </span>
      </div>
    </div>
  );
};
