export const PlanView = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Wizard robot as background decoration */}
      <img
        src="/images/plan-fei-wizard.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-5%",
          right: "-5%",
          width: "65vmin",
          maxWidth: "600px",
          opacity: 0.18,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Plan Fei text */}
      <h1
        style={{
          color: "#DC2626",
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          margin: 0,
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          lineHeight: 1.1,
          userSelect: "none",
        }}
      >
        Plan Fei
      </h1>
    </div>
  );
};
