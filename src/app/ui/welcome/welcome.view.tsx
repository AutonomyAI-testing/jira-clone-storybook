export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white dark:bg-gray-950">
      <img
        src="/images/welcome-mascot.png"
        alt="Welcome mascot"
        className="w-64 select-none drop-shadow-lg"
        draggable={false}
      />
      <h1 className="font-primary-black text-6xl" style={{ color: "var(--Red600)" }}>
        Welcome
      </h1>
    </div>
  );
};
