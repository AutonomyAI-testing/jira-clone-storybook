export function BlanFeiPage() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-elevation-surface">
      <img
        src="/images/wizard-blan-fei.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-90"
      />
      <h1
        className="relative z-10 font-primary-black text-9xl leading-none tracking-wide text-font-danger"
        style={{
          textShadow:
            "-4px -4px 0 #fff, 4px -4px 0 #fff, -4px 4px 0 #fff, 4px 4px 0 #fff, 0 -4px 0 #fff, 0 4px 0 #fff, -4px 0 0 #fff, 4px 0 0 #fff, 0 14px 32px rgba(0,0,0,0.5)",
        }}
      >
        Blan Fei
      </h1>
    </div>
  );
}
