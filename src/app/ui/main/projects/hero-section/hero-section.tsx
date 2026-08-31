export const HeroSection = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        padding: "80px 32px",
        textAlign: "center",
        minHeight: "280px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "64px",
          fontWeight: 700,
          color: "#ff0000",
          lineHeight: "1.2",
          textAlign: "center",
          margin: 0,
        }}
      >
        Let&apos;s Find Your Ideal Space
      </h1>
      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "26px",
          fontWeight: 400,
          color: "#ff0000",
          lineHeight: "40px",
          textAlign: "center",
          marginTop: "24px",
          marginBottom: 0,
        }}
      >
        Discover residential and commercial properties tailored to your needs
      </p>
    </div>
  );
};
