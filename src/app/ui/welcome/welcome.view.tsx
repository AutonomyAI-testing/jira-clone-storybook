export const WelcomeView = () => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center gap-8"
      style={{ backgroundColor: "var(--color-elevation-surface)" }}
    >
      <img
        src="/images/welcome-mascot.png"
        alt="Welcome mascot"
        className="w-64 select-none"
        draggable={false}
      />
      <h1
        className="font-primary-black"
        style={{ fontSize: "3.5rem", color: "red" }}
      >
        Welcome
      </h1>
    </div>
  );
};
