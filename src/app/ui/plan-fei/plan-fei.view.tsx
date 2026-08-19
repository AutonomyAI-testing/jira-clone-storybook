export function PlanFeiView() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      <img
        src="/fei-wizard.png"
        alt="Fei the wizard robot"
        style={{ width: 280, height: "auto", marginBottom: "2rem" }}
      />
      <h1
        className="font-primary-black"
        style={{
          color: "var(--Red700)",
          fontSize: "5rem",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "lowercase",
        }}
      >
        plan fei
      </h1>
    </div>
  );
}
