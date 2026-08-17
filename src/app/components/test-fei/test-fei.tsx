export const TestFei = () => {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <span
        style={{
          color: "var(--Red700)",
          fontFamily: "var(--font-sans, sans-serif)",
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          WebkitTextStroke: "2px white",
          paintOrder: "stroke fill",
        }}
      >
        Test Fei
      </span>
    </div>
  );
};
