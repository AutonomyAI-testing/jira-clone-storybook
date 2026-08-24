import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Building Fei" }];
};

export default function BuildingFeiRoute() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative star elements to match the wizard hat theme */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {[
          { top: "8%", left: "12%", size: 6, opacity: 0.7 },
          { top: "15%", left: "78%", size: 10, opacity: 0.5 },
          { top: "25%", left: "5%", size: 4, opacity: 0.8 },
          { top: "35%", left: "90%", size: 8, opacity: 0.6 },
          { top: "60%", left: "3%", size: 5, opacity: 0.7 },
          { top: "70%", left: "85%", size: 7, opacity: 0.5 },
          { top: "80%", left: "20%", size: 4, opacity: 0.6 },
          { top: "88%", left: "60%", size: 9, opacity: 0.4 },
          { top: "5%", left: "45%", size: 6, opacity: 0.6 },
          { top: "50%", left: "95%", size: 5, opacity: 0.7 },
        ].map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              backgroundColor: "#f5d76e",
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(245, 215, 110, 0.4)`,
            }}
          />
        ))}
        {/* Moon crescent decorative shapes */}
        {[
          { top: "18%", left: "25%", size: 18, opacity: 0.3 },
          { top: "65%", left: "72%", size: 14, opacity: 0.25 },
          { top: "40%", left: "88%", size: 22, opacity: 0.2 },
        ].map((moon, i) => (
          <div
            key={`moon-${i}`}
            style={{
              position: "absolute",
              top: moon.top,
              left: moon.left,
              width: moon.size,
              height: moon.size,
              borderRadius: "50%",
              boxShadow: `${moon.size / 3}px -${moon.size / 5}px 0 0 #f5d76e`,
              opacity: moon.opacity,
              transform: "rotate(-30deg)",
            }}
          />
        ))}
      </div>

      {/* Wizard illustration */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <img
          src="/fei-wizard.png"
          alt="Fei the wizard robot"
          style={{
            width: 260,
            height: "auto",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
            animation: "float 3s ease-in-out infinite",
          }}
        />

        {/* "Building Fei" text in red */}
        <h1
          style={{
            color: "#ef4444",
            fontSize: "3.5rem",
            fontFamily: "Circular Std, sans-serif",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textAlign: "center",
            textShadow: "0 4px 24px rgba(239, 68, 68, 0.5), 0 0 60px rgba(239, 68, 68, 0.2)",
            margin: 0,
          }}
        >
          Building Fei
        </h1>

        {/* Animated progress bar */}
        <div
          style={{
            width: 280,
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 6,
              borderRadius: 99,
              backgroundColor: "rgba(255,255,255,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "40%",
                borderRadius: 99,
                background: "linear-gradient(90deg, #ef4444, #f97316, #ef4444)",
                backgroundSize: "200% 100%",
                animation: "progress-shimmer 1.8s ease-in-out infinite",
                boxShadow: "0 0 12px rgba(239,68,68,0.6)",
              }}
            />
          </div>
        </div>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "1rem",
            fontFamily: "Circular Std, sans-serif",
            fontWeight: 400,
            textAlign: "center",
            margin: 0,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          The magic is happening ✨
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes progress-shimmer {
          0% { background-position: 200% 0; width: 30%; }
          50% { background-position: 0% 0; width: 70%; }
          100% { background-position: 200% 0; width: 30%; }
        }
      `}</style>
    </div>
  );
}
