export const BuildFeiPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}
    >
      {/* Background wizard image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/images/fei-wizard.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          opacity: 0.35,
        }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ zIndex: 1 }}
      >
        <h1
          className="font-primary-black text-font-success"
          style={{
            fontSize: "7rem",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textShadow:
              "0 2px 24px rgba(34,160,107,0.18), 0 1px 0 rgba(0,0,0,0.04)",
          }}
        >
          Build Fei
        </h1>
        <p
          className="font-primary-light text-font-subtle"
          style={{ fontSize: "1.35rem", marginTop: "1rem" }}
        >
          Your AI-powered coding companion ✨
        </p>
      </div>
    </div>
  );
};
