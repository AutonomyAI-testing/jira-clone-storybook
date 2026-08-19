export const PlanFeiView = () => {
  return (
    <div
      className="flex h-full min-h-screen w-full items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      {/* film grain overlay — signature dark brand texture from design */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <h1
        className="font-primary-black relative z-10 select-none"
        style={{
          fontSize: "clamp(3rem, 10vw, 8rem)",
          color: "var(--Green700)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textAlign: "center",
        }}
      >
        plan fei
      </h1>
    </div>
  );
};
