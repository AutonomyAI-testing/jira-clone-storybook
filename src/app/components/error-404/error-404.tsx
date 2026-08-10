export const Error404 = ({ message, href }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "24px",
        textAlign: "center",
        maxWidth: "480px",
        padding: "32px 16px",
      }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="Wizard mascot"
        style={{ width: "260px", height: "auto" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h1
          style={{
            fontSize: "72px",
            lineHeight: "1",
            margin: "0",
            fontFamily: "CircularStdBlack, sans-serif",
            color: "var(--color-font)",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontSize: "24px",
            margin: "0",
            fontFamily: "CircularStdBold, sans-serif",
            color: "var(--color-font)",
          }}
        >
          Page not found
        </h2>
      </div>
      {message && (
        <p
          style={{
            fontSize: "16px",
            margin: "0",
            fontFamily: "CircularStdMedium, sans-serif",
            color: "var(--color-font-subtle)",
            lineHeight: "1.5",
          }}
        >
          {message}
        </p>
      )}
      {href && (
        <a
          href={href}
          style={{
            display: "inline-block",
            backgroundColor: "var(--color-background-brand-bold)",
            color: "var(--color-font-inverse)",
            textDecoration: "none",
            borderRadius: "4px",
            padding: "10px 24px",
            fontFamily: "CircularStdBold, sans-serif",
            fontSize: "16px",
          }}
        >
          Go back home
        </a>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
