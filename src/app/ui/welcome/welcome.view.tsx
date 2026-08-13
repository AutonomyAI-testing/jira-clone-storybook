export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/images/wizard-robot.png"
          alt="Wizard robot mascot"
          style={{ width: "240px", height: "auto" }}
        />
        <h1
          className="font-primary-black"
          style={{ fontSize: "3rem", color: "var(--Neutral1000)" }}
        >
          Welcome
        </h1>
      </div>
    </div>
  );
};
