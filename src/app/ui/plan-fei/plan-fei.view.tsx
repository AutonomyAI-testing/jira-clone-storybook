export const PlanFeiView = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-elevation-surface">
      {/* Wizard robot background watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <img
          src="/images/plan-fei-wizard.png"
          alt=""
          className="h-auto max-h-[80vh] w-auto max-w-[80vw] opacity-30 select-none"
          aria-hidden="true"
        />
      </div>

      {/* "Plan Fei" text overlaid on top */}
      <h1 className="relative z-10 font-primary-black text-7xl text-font-success">
        Plan Fei
      </h1>
    </div>
  );
};
