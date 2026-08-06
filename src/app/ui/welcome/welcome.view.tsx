export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <img
        src="/images/welcome-mascot.png"
        alt="Welcome mascot"
        width={280}
        height={280}
        className="select-none"
      />
      <h1 className="mt-6 font-primary-black text-5xl text-font">Welcome</h1>
      <p className="mt-3 font-primary-light text-lg text-font-subtle">
        Your project management companion
      </p>
    </div>
  );
};
