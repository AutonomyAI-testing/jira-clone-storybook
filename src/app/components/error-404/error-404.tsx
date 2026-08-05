export const Error404 = ({ message, href }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "16px",
        padding: "32px",
      }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="404 wizard mascot"
        style={{ width: "260px", height: "auto" }}
      />
      <h1
        className="font-primary-black"
        style={{ fontSize: "72px", lineHeight: 1, margin: 0, color: "var(--color-font)" }}
      >
        404
      </h1>
      <h2
        className="font-primary-bold"
        style={{ fontSize: "24px", lineHeight: 1.3, margin: 0, color: "var(--color-font)" }}
      >
        Page not found
      </h2>
      {message && (
        <p
          className="font-primary"
          style={{
            fontSize: "16px",
            margin: 0,
            color: "var(--color-font-subtle)",
            maxWidth: "400px",
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
            marginTop: "8px",
            padding: "10px 24px",
            backgroundColor: "var(--color-background-brand-bold)",
            color: "var(--color-font-inverse)",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontFamily: "inherit",
          }}
          className="font-primary-bold"
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
