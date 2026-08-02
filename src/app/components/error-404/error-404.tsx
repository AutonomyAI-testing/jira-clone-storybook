export const Error404 = ({ message = "Page not found", href }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "480px",
        padding: "2rem",
      }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="Wizard mascot"
        style={{ width: "320px", height: "auto", marginBottom: "1.5rem" }}
      />
      <p
        className="font-primary-black"
        style={{ fontSize: "4rem", lineHeight: 1, margin: "0 0 0.5rem", color: "var(--Red600)" }}
      >
        404
      </p>
      <p
        className="font-primary-bold"
        style={{ fontSize: "1.5rem", margin: "0 0 1.5rem", color: "var(--color-font)" }}
      >
        {message}
      </p>
      {href && (
        <a
          href={href}
          style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            borderRadius: "4px",
            backgroundColor: "var(--color-background-brand-bold)",
            color: "var(--color-font-inverse)",
            textDecoration: "none",
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
