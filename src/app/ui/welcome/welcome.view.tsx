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
        <p
          className="font-primary-light text-center"
          style={{ fontSize: "1.125rem", color: "var(--Neutral700)", maxWidth: "360px" }}
        >
          Your all-in-one workspace for tracking projects, managing tasks, and collaborating with your team.
        </p>
      </div>
    </div>
  );
};
