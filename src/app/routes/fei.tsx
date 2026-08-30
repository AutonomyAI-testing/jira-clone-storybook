type FeiPageState = "default" | "loading" | "disabled";

interface FeiPageProps {
  state?: FeiPageState;
}

export default function FeiPage({ state = "default" }: FeiPageProps) {
  const isLoading = state === "loading";
  const isDisabled = state === "disabled";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        cursor: isDisabled ? "not-allowed" : "default",
      }}
    >
      {/* Wizard robot illustration */}
      <div style={{ position: "relative", display: "inline-flex" }}>
        <img
          src="/fei-wizard.png"
          alt="Wizard robot"
          style={{
            width: "420px",
            maxWidth: "80vw",
            userSelect: "none",
            pointerEvents: "none",
            opacity: isDisabled ? 0.35 : isLoading ? 0.55 : 1,
            filter: isDisabled ? "grayscale(100%)" : "none",
            transition: "opacity 0.2s, filter 0.2s",
          }}
        />

        {/* Loading spinner overlay */}
        {isLoading && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                border: "5px solid rgba(0,128,0,0.15)",
                borderTopColor: "green",
                borderRadius: "50%",
                animation: "fei-spin 0.8s linear infinite",
              }}
            />
          </div>
        )}
      </div>

      {/* "Fei" text */}
      <span
        style={{
          color: isDisabled ? "#9ca3af" : "green",
          fontSize: "4rem",
          fontWeight: "bold",
          fontFamily: "CircularStdBlack, sans-serif",
          letterSpacing: "0.05em",
          marginTop: "16px",
          opacity: isDisabled ? 0.45 : 1,
          animation: isLoading ? "fei-pulse 1.2s ease-in-out infinite" : "none",
          transition: "color 0.2s, opacity 0.2s",
        }}
      >
        Fei
      </span>

      {/* Keyframe animations injected inline */}
      <style>{`
        @keyframes fei-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fei-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </div>
  );
}
