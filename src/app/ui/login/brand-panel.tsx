export const BrandPanel = () => {
  return (
    <section className="brand-panel relative hidden overflow-hidden md:flex md:flex-col border-r border-[#3C3B39] bg-[#121211]" style={{ padding: "clamp(36px,4.5vw,64px)" }}>
      {/* warm off-axis glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%),
            radial-gradient(50% 50% at 92% 100%, rgba(100,55,35,.35), transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Wordmark */}
      <div className="relative z-10 flex items-center gap-3 mb-auto">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F25730]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
            <circle cx="12" cy="12" r="3.4" />
          </svg>
        </span>
        <span className="text-[17px] font-semibold tracking-tight text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
          Autonomy<span style={{ color: "#F25730" }}>AI</span>
        </span>
        <span className="w-px h-4 bg-[#3C3B39]" aria-hidden="true" />
        <span className="text-xs text-[#7a7774]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>On-Call Agent</span>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center" style={{ padding: "clamp(40px,5vw,80px) 0" }}>
        <p className="mb-4 text-[11px] font-medium tracking-[.18em] uppercase text-[#F25730]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Autonomous incident response
        </p>
        <h1
          className="mb-5 font-bold text-white leading-tight"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            letterSpacing: "-0.02em",
          }}
        >
          Your on-call engineer that{" "}
          <span
            style={{
              background: "linear-gradient(95deg, #F25730 0%, #F69874 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            never sleeps.
          </span>
        </h1>
        <p className="mb-10 text-[#7a7774] leading-relaxed" style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(14px, 1.1vw, 17px)", maxWidth: "440px" }}>
          From first alert to merged fix — the agent triages, investigates, and ships the patch while your team stays asleep.
        </p>

        {/* Pipeline timeline */}
        <div
          className="rounded-xl border border-[#2a2927] overflow-hidden"
          style={{ background: "#1a1918" }}
          aria-hidden="true"
        >
          <div className="px-5 py-3 border-b border-[#2a2927]">
            <span className="text-[10px] font-medium tracking-widest uppercase text-[#5a5754]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Incident timeline
            </span>
          </div>
          <div className="px-5 py-4 flex flex-col gap-4">
            {/* Row 1 — Alert */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9FD2ED] flex-none" />
                <span className="w-px flex-1 mt-1 bg-[#2a2927] min-h-[24px]" />
              </div>
              <div className="flex-1 flex justify-between items-start gap-2">
                <span className="text-[13px] text-[#b0acaa]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  <strong className="text-white font-medium">Alert received</strong> — latency spike, checkout-svc
                </span>
                <span className="text-[11px] text-[#5a5754] whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>00:00</span>
              </div>
            </div>
            {/* Row 2 — Triage */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8A13C] flex-none" />
                <span className="w-px flex-1 mt-1 bg-[#2a2927] min-h-[24px]" />
              </div>
              <div className="flex-1 flex justify-between items-start gap-2">
                <span className="text-[13px] text-[#b0acaa]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  <strong className="text-white font-medium">Triaged &amp; root-caused</strong> — connection pool exhausted
                </span>
                <span className="text-[11px] text-[#5a5754] whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>00:02</span>
              </div>
            </div>
            {/* Row 3 — Fix */}
            <div className="flex items-start gap-3">
              <div className="mt-1 flex flex-col items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4FB477] flex-none" />
              </div>
              <div className="flex-1 flex justify-between items-start gap-2">
                <span className="text-[13px] text-[#b0acaa]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  <strong className="text-white font-medium">Fix merged</strong> — PR #1408, verified in staging
                </span>
                <span className="text-[11px] text-[#5a5754] whitespace-nowrap" style={{ fontFamily: "'JetBrains Mono', monospace" }}>00:09</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand footer */}
      <div className="relative z-10 flex items-center gap-3 text-[12px] text-[#5a5754]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <span>SOC 2 Type II</span>
        <span className="w-1 h-1 rounded-full bg-[#3C3B39]" aria-hidden="true" />
        <span>Runs in your infra</span>
        <span className="w-1 h-1 rounded-full bg-[#3C3B39]" aria-hidden="true" />
        <span>150+ teams on-call</span>
      </div>
    </section>
  );
};
