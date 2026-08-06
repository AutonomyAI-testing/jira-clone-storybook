export const Error404 = ({ message = "It seems that you have lost! Go to the main page", href }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "480px",
        padding: "32px 16px",
        gap: "0",
      }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="404 wizard robot"
        style={{ width: "260px", height: "auto", marginBottom: "24px" }}
      />
      <h1
        className="font-primary-black"
        style={{
          fontSize: "72px",
          lineHeight: "1",
          marginBottom: "8px",
          color: "var(--color-font)",
        }}
      >
        404
      </h1>
      <h2
        className="font-primary-bold"
        style={{
          fontSize: "24px",
          lineHeight: "1.3",
          marginBottom: "12px",
          color: "var(--color-font)",
        }}
      >
        Page not found
      </h2>
      {message && (
        <p
          className="font-primary"
          style={{
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "28px",
            color: "var(--color-font-subtle)",
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
            fontSize: "16px",
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
