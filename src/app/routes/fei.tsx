export default function FeiPage() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          color: "#00ff00",
          fontSize: "6rem",
          fontFamily: "CircularStdBlack, sans-serif",
          fontWeight: 900,
          margin: 0,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        Fei
      </h1>
      <img
        src="/fei-wizard.png"
        alt="Fei the wizard robot mascot"
        style={{
          width: "320px",
          height: "auto",
        }}
      />
    </div>
  );
}
