export function ClaudeFeiView() {
  const grainDataUri =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#101214",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Film grain overlay — signature brand texture from Login.html */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: grainDataUri,
        }}
      />

      {/* Warm radial gradient glow — from Login.html brand panel ::after */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(60% 55% at 18% 8%, rgba(94,84,82,.45), transparent 60%), radial-gradient(50% 50% at 92% 100%, rgba(242,87,48,.10), transparent 62%)",
        }}
      />

      {/* "Claude Fei" text */}
      <h1
        className="font-primary-black"
        style={{
          position: "relative",
          zIndex: 1,
          color: "var(--Red600)",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          margin: 0,
          textAlign: "center",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        Claude Fei
      </h1>
    </div>
  );
}
