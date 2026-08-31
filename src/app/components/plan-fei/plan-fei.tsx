export const PlanFei = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-start bg-elevation-surface"
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/images/plan-fei-bg.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1
        className="font-primary-black"
        style={{
          fontSize: "5rem",
          lineHeight: 1.1,
          color: "var(--Red700)",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        Plan Fei
      </h1>
    </div>
  );
};
