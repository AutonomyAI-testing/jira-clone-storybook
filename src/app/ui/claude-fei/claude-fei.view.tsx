const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const ClaudeFeiView = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#100f0e",
        overflow: "hidden",
      }}
    >
      {/* warm off-axis glow from the reference design */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%)," +
            "radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
        }}
      />
      {/* signature film grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: GRAIN,
        }}
      />
      <h1
        style={{
          position: "relative",
          zIndex: 1,
          margin: 0,
          color: "#e5484d",
          fontSize: "clamp(48px, 8vw, 120px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        Claude Fei
      </h1>
    </div>
  );
};
