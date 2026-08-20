export default function BuildFeiPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(3rem, 10vw, 7rem)",
          fontWeight: 900,
          color: "#22c55e",
          textShadow:
            "0 2px 16px rgba(0,0,0,0.18), 0 0px 2px rgba(0,0,0,0.10)",
          letterSpacing: "-0.02em",
          zIndex: 10,
          position: "relative",
          userSelect: "none",
          fontFamily: "CircularStdBlack, sans-serif",
          margin: "5vh 0 0 0",
          lineHeight: 1.1,
        }}
      >
        Build Fei
      </h1>
      <div
        style={{
          flex: 1,
          width: "100%",
          backgroundImage: "url('/fei-wizard.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
          backgroundSize: "contain",
          minHeight: "60vh",
        }}
      />
    </div>
  );
}
