export const HeyFeiView = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center"
      style={{ backgroundColor: "#000000" }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          border: "3px dashed #ff0000",
          borderRadius: "1rem",
          padding: "2.5rem 3rem",
        }}
      >
        <img
          src="/fei-avatar.png"
          alt="Fei the wizard robot"
          style={{ width: 220, height: "auto", marginBottom: "2rem" }}
        />
        <h1
          className="font-primary-black"
          style={{
            color: "#ff0000",
            fontSize: "3.5rem",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Hey Fei
        </h1>
      </div>
    </div>
  );
};
