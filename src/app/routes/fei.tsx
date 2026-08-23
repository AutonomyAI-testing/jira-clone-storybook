import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiPage() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      <h1
        style={{
          color: "#00FF00",
          fontSize: "clamp(4rem, 15vw, 10rem)",
          fontWeight: "900",
          letterSpacing: "0.05em",
          margin: 0,
          lineHeight: 1,
          textShadow: "0 0 40px rgba(0,255,0,0.4)",
          fontFamily: "sans-serif",
        }}
      >
        Fei
      </h1>
      <img
        src="/images/fei-wizard.png"
        alt="Fei the Wizard Robot"
        style={{
          width: "clamp(200px, 40vw, 400px)",
          height: "auto",
          filter: "drop-shadow(0 0 24px rgba(0,255,0,0.25))",
        }}
      />
    </div>
  );
}
