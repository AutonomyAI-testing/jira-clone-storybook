export default function TestFeiRoute() {
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
          color: "var(--Red700)",
          fontFamily: "CircularStdBold, sans-serif",
          fontSize: "4rem",
          margin: 0,
        }}
      >
        Test Fei
      </h1>
      <img
        src="/images/wizard-mascot.png"
        alt="Wizard Robot Mascot"
        style={{
          width: "240px",
          height: "auto",
        }}
      />
    </div>
  );
}
