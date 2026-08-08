export const LoginBrandPanel = () => {
  return (
    <div
      className="relative hidden lg:flex flex-col justify-between overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #161a1d 0%, #1d2125 50%, #0f1215 100%)",
      }}
    >
      {/* Radial glow effect */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 30% 60%, rgba(241,141,19,0.13) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-10 xl:p-14">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-auto">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-lg"
            style={{ background: "linear-gradient(135deg, #f18d13, #d97008)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 2L3 7v9h4v-5h4v5h4V7L9 2z"
                fill="white"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <span className="font-primary-bold text-[15px]" style={{ color: "#dee4ea" }}>
              AutonomyAI
            </span>
            <span
              className="block font-primary text-[11px] tracking-widest uppercase"
              style={{ color: "#596773", letterSpacing: "0.12em" }}
            >
              On-Call Agent
            </span>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mt-16 mb-10">
          <h1
            className="font-primary-black text-4xl xl:text-5xl leading-tight mb-5"
            style={{ color: "#dee4ea" }}
          >
            Your on-call engineer{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #f18d13, #faa53d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              that never sleeps.
            </span>
          </h1>
          <p className="font-primary-light text-base leading-relaxed max-w-[360px]" style={{ color: "#738496" }}>
            Detect, triage, and resolve production incidents autonomously —
            before your team even gets paged.
          </p>
        </div>

        {/* Incident pipeline */}
        <div
          className="rounded-xl p-5 mb-10 border"
          style={{
            background: "rgba(29,33,37,0.8)",
            borderColor: "rgba(168,197,226,0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p
            className="font-primary text-[11px] uppercase tracking-widest mb-4"
            style={{ color: "#596773", letterSpacing: "0.14em" }}
          >
            Live incident flow
          </p>
          <div className="flex items-center gap-2">
            {/* Step 1 */}
            <div className="flex-1 rounded-lg p-3" style={{ background: "rgba(241,141,19,0.08)", border: "1px solid rgba(241,141,19,0.2)" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#f18d13" }} />
                <span className="font-primary text-[11px] uppercase tracking-wide" style={{ color: "#f18d13" }}>
                  Alert
                </span>
              </div>
              <p className="font-primary-light text-xs" style={{ color: "#9fadbc" }}>
                Detected
              </p>
            </div>

            {/* Arrow */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#454f59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Step 2 */}
            <div className="flex-1 rounded-lg p-3" style={{ background: "rgba(88,163,255,0.06)", border: "1px solid rgba(88,163,255,0.15)" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#579dff" }} />
                <span className="font-primary text-[11px] uppercase tracking-wide" style={{ color: "#579dff" }}>
                  Triage
                </span>
              </div>
              <p className="font-primary-light text-xs" style={{ color: "#9fadbc" }}>
                &amp; fix
              </p>
            </div>

            {/* Arrow */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#454f59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Step 3 */}
            <div className="flex-1 rounded-lg p-3" style={{ background: "rgba(43,187,127,0.06)", border: "1px solid rgba(43,187,127,0.15)" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#2abb7f" }} />
                <span className="font-primary text-[11px] uppercase tracking-wide" style={{ color: "#2abb7f" }}>
                  Resolved
                </span>
              </div>
              <p className="font-primary-light text-xs" style={{ color: "#9fadbc" }}>
                In minutes
              </p>
            </div>
          </div>
        </div>

        {/* Security footer */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1L2 3v4c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V3L7 1z"
                stroke="#596773"
                strokeWidth="1.2"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M4.5 7l1.5 1.5L9 5.5"
                stroke="#596773"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-primary-light text-xs" style={{ color: "#596773" }}>
              Encrypted &amp; SOC 2 compliant
            </span>
          </div>
          <span style={{ color: "#282e33" }}>·</span>
          <div className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="#596773" strokeWidth="1.2" />
              <path d="M7 4v3l2 1.5" stroke="#596773" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-primary-light text-xs" style={{ color: "#596773" }}>
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
