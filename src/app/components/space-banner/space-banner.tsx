export const SpaceBanner = () => {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      style={{
        backgroundColor: "var(--Red700)",
        minHeight: "100vh",
      }}
    >
      <h1
        className="font-primary-black"
        style={{
          fontSize: "clamp(4rem, 12vw, 10rem)",
          lineHeight: 1,
          margin: 0,
          color: "var(--Green400)",
        }}
      >
        Space
      </h1>
    </div>
  );
};
