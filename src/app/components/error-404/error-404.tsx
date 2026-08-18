export const Error404 = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Wizard robot as background element */}
      <img
        src="/images/fei-wizard.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain opacity-30 pointer-events-none select-none"
        style={{ objectPosition: "center" }}
      />
      {/* "Find Fei" text in red */}
      <span
        className="relative z-10 font-primary-black"
        style={{ color: "#ef4444", fontSize: "4rem", letterSpacing: "-0.02em" }}
      >
        Find Fei
      </span>
    </div>
  );
};
