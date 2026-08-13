export const HeyFeiView = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8"
      style={{ backgroundColor: "#000" }}
    >
      <div className="animate-fade-in flex flex-col items-center gap-6">
        <img
          src="/images/wizard-avatar.png"
          alt="Wizard robot mascot"
          className="w-[240px] drop-shadow-2xl"
          draggable={false}
        />
        <h1
          className="font-primary-black text-6xl tracking-tight"
          style={{ color: "#ff0000" }}
        >
          Hey Fei
        </h1>
      </div>
    </div>
  );
};
