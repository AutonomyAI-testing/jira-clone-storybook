export function BuildFei() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background wizard illustration */}
      <img
        src="/fei-wizard.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-65%)",
          right: "2%",
          height: "82vh",
          maxHeight: "680px",
          opacity: 0.5,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* "Build Fei" heading */}
      <h1
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "clamp(3rem, 9vw, 7.5rem)",
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: "#0066ff",
          margin: 0,
          lineHeight: 1,
          textAlign: "left",
          fontFamily: "CircularStdBlack, CircularStdBold, sans-serif",
          alignSelf: "center",
          marginRight: "auto",
          paddingLeft: "8vw",
        }}
      >
        Build Fei
      </h1>
    </div>
  );
}
