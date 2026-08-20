export const SpaceView = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000814 0%, #001233 40%, #0a1628 100%)" }}
    >
      {/* Stars layer */}
      <Stars />

      {/* Shooting star */}
      <ShootingStar />

      {/* Moon */}
      <div
        className="absolute"
        style={{ top: "8%", right: "12%", width: 64, height: 64 }}
      >
        <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="moonGrad" cx="35%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#fff9e6" />
              <stop offset="100%" stopColor="#fde68a" />
            </radialGradient>
          </defs>
          <circle cx="32" cy="32" r="28" fill="url(#moonGrad)" opacity="0.95" />
          {/* crescent shadow */}
          <circle cx="42" cy="26" r="22" fill="#001233" opacity="0.55" />
        </svg>
      </div>

      {/* "Space" heading — bold, white, large, matching Figma */}
      <h1
        className="relative z-10 font-primary-black"
        style={{
          fontSize: "clamp(5rem, 12vw, 10rem)",
          color: "#ff0000",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textShadow: "0 0 60px rgba(255,80,80,0.45), 0 0 120px rgba(200,0,0,0.25)",
          userSelect: "none",
        }}
      >
        Space
      </h1>
    </div>
  );
};

/* ─── Stars ─────────────────────────────────────────── */
const STARS: { x: number; y: number; r: number; opacity: number; delay: number }[] = [
  { x: 5, y: 8, r: 1.5, opacity: 0.9, delay: 0 },
  { x: 12, y: 3, r: 1, opacity: 0.7, delay: 0.8 },
  { x: 18, y: 12, r: 1.2, opacity: 0.85, delay: 1.5 },
  { x: 25, y: 5, r: 0.8, opacity: 0.6, delay: 2.1 },
  { x: 33, y: 9, r: 1.4, opacity: 0.8, delay: 0.4 },
  { x: 40, y: 4, r: 1, opacity: 0.75, delay: 1.2 },
  { x: 48, y: 14, r: 1.6, opacity: 0.9, delay: 0.7 },
  { x: 55, y: 7, r: 0.9, opacity: 0.65, delay: 1.9 },
  { x: 62, y: 11, r: 1.3, opacity: 0.8, delay: 0.3 },
  { x: 70, y: 5, r: 1.1, opacity: 0.7, delay: 2.5 },
  { x: 77, y: 15, r: 1.5, opacity: 0.85, delay: 1.1 },
  { x: 83, y: 8, r: 0.8, opacity: 0.6, delay: 0.6 },
  { x: 88, y: 18, r: 1.2, opacity: 0.75, delay: 1.8 },
  { x: 93, y: 10, r: 1.4, opacity: 0.9, delay: 0.2 },
  { x: 97, y: 5, r: 1, opacity: 0.7, delay: 1.4 },
  { x: 8, y: 22, r: 0.8, opacity: 0.55, delay: 2.2 },
  { x: 20, y: 28, r: 1.1, opacity: 0.8, delay: 0.9 },
  { x: 30, y: 20, r: 0.7, opacity: 0.5, delay: 1.7 },
  { x: 45, y: 25, r: 1.3, opacity: 0.85, delay: 0.5 },
  { x: 60, y: 22, r: 0.9, opacity: 0.65, delay: 2.0 },
  { x: 73, y: 26, r: 1.4, opacity: 0.8, delay: 1.3 },
  { x: 85, y: 24, r: 1, opacity: 0.7, delay: 0.1 },
  { x: 3, y: 35, r: 1.2, opacity: 0.75, delay: 2.4 },
  { x: 15, y: 40, r: 0.9, opacity: 0.6, delay: 1.0 },
  { x: 28, y: 36, r: 1.5, opacity: 0.9, delay: 0.8 },
  { x: 52, y: 38, r: 0.8, opacity: 0.55, delay: 1.6 },
  { x: 67, y: 35, r: 1.1, opacity: 0.75, delay: 2.3 },
  { x: 80, y: 42, r: 1.3, opacity: 0.85, delay: 0.4 },
  { x: 92, y: 37, r: 0.7, opacity: 0.5, delay: 1.9 },
  { x: 10, y: 55, r: 1.4, opacity: 0.8, delay: 0.6 },
  { x: 22, y: 60, r: 1, opacity: 0.65, delay: 2.1 },
  { x: 38, y: 52, r: 1.2, opacity: 0.8, delay: 1.2 },
  { x: 56, y: 58, r: 0.8, opacity: 0.6, delay: 0.3 },
  { x: 71, y: 55, r: 1.5, opacity: 0.9, delay: 1.7 },
  { x: 86, y: 62, r: 1.1, opacity: 0.7, delay: 0.9 },
  { x: 95, y: 56, r: 0.9, opacity: 0.65, delay: 2.0 },
  { x: 4, y: 72, r: 1.3, opacity: 0.75, delay: 1.4 },
  { x: 17, y: 75, r: 0.8, opacity: 0.55, delay: 0.5 },
  { x: 35, y: 70, r: 1.6, opacity: 0.9, delay: 1.8 },
  { x: 50, y: 78, r: 1, opacity: 0.65, delay: 2.6 },
  { x: 65, y: 72, r: 1.2, opacity: 0.8, delay: 0.7 },
  { x: 78, y: 80, r: 0.9, opacity: 0.6, delay: 1.5 },
  { x: 90, y: 74, r: 1.4, opacity: 0.85, delay: 0.2 },
  { x: 7, y: 88, r: 1.1, opacity: 0.7, delay: 1.1 },
  { x: 25, y: 90, r: 0.8, opacity: 0.5, delay: 2.3 },
  { x: 42, y: 85, r: 1.3, opacity: 0.8, delay: 0.8 },
  { x: 60, y: 92, r: 1, opacity: 0.65, delay: 1.6 },
  { x: 75, y: 88, r: 1.5, opacity: 0.9, delay: 0.1 },
  { x: 88, y: 93, r: 0.9, opacity: 0.6, delay: 2.2 },
];

function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {STARS.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.r * 2,
            height: s.r * 2,
            backgroundColor: "#ffffff",
            opacity: s.opacity,
            animation: `twinkle ${2.5 + s.delay}s ease-in-out infinite alternate`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%   { opacity: var(--tw-opacity, 0.5); transform: scale(1); }
          100% { opacity: 0.15; transform: scale(0.6); }
        }
      `}</style>
    </div>
  );
}

/* ─── Shooting Star ──────────────────────────────────── */
function ShootingStar() {
  return (
    <div
      className="absolute"
      style={{
        top: "18%",
        left: "15%",
        width: 120,
        height: 2,
        background: "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)",
        borderRadius: 9999,
        transform: "rotate(-30deg)",
        animation: "shoot 6s ease-in-out infinite",
        animationDelay: "2s",
      }}
    />
  );
}
