export const BuildFeiView = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0d1b2e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Wizard mascot background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/fei-wizard.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "clamp(280px, 50vmin, 480px) auto",
          opacity: 0.28,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* "Build Fei" text */}
      <h1
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-primary-black)",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          userSelect: "none",
        }}
      >
        Build Fei
      </h1>
    </div>
  );
};
