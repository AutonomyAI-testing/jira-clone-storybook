export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <img
        src="/images/welcome-mascot.png"
        alt="Wizard robot mascot"
        className="h-[300px] w-auto"
      />
      <h1 className="font-primary-black text-6xl text-icon-accent-red">Welcome</h1>
    </div>
  );
};
