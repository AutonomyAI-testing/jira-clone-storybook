export const WelcomeView = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <img
        src="/images/welcome-mascot.png"
        alt="Welcome mascot"
        className="w-56 select-none"
        draggable={false}
      />
      <h1 className="font-primary-black text-5xl text-font">Welcome</h1>
      <p className="font-primary-light text-lg text-font-subtle">
        Your all-in-one project management tool.
      </p>
    </div>
  );
};
