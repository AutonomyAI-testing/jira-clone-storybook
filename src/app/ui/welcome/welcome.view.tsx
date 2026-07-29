export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface">
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          src="/images/welcome-mascot.png"
          alt="Wizard robot mascot"
          className="h-64 w-auto drop-shadow-md"
        />
        <h1 className="font-primary-black text-6xl text-font-danger">Welcome</h1>
        <p className="font-primary-light text-xl text-font-subtle">
          Your team's project management, simplified.
        </p>
      </div>
    </div>
  );
};
