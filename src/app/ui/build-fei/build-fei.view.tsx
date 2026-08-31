export const BuildFeiView = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-elevation-surface">
      {/* Full-screen wizard robot background */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <img
          src="/images/fei-wizard.png"
          alt="Fei the wizard robot"
          className="h-full w-full object-contain opacity-20 dark:opacity-30"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h1
          className="select-none font-primary-black text-[8rem] leading-none tracking-tight"
          style={{ color: "#ef4444" }}
        >
          Build Fei
        </h1>
        <p className="font-primary-light text-xl text-font-subtle">
          Your AI-powered build companion
        </p>
      </div>
    </div>
  );
};
