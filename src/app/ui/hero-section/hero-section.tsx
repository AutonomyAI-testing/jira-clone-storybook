export const HeroSection = (): JSX.Element => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center py-24 px-8"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-4xl w-full text-center">
        <h1
          style={{
            fontFamily: "'Montserrat', 'CircularStdBold', sans-serif",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "1.2",
            color: "#ffffff",
            textAlign: "center",
            margin: 0,
          }}
        >
          Let&apos;s Find Your Ideal Space
        </h1>
        <p
          style={{
            fontFamily: "'Montserrat', 'CircularStdLight', sans-serif",
            fontSize: "26px",
            fontWeight: 400,
            lineHeight: "40px",
            color: "var(--Red700)",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          Discover residential and commercial properties tailored to your needs
        </p>
      </div>
    </div>
  );
};
