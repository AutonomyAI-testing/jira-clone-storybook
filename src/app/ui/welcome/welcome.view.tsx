export const WelcomeView = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <img
        src="/images/welcome-robot.png"
        alt="Welcome wizard robot mascot"
        className="h-[320px] w-auto"
      />
      <h1
        className="font-primary-black text-5xl text-font-danger"
        style={{ letterSpacing: "-0.02em" }}
      >
        Welcome
      </h1>
      <p className="font-primary-light text-lg text-font-subtle">
        Your tasks, organized.
      </p>
    </div>
  );
};
