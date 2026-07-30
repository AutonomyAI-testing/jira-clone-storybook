export const Error404 = ({
  message = "It seems that you have lost!",
  href,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="404 wizard mascot"
        style={{ width: "320px", height: "auto", marginBottom: "1.5rem" }}
      />
      <h1 className="font-primary-black text-5xl" style={{ marginBottom: "0.5rem" }}>
        404
      </h1>
      <h2
        className="font-primary-bold text-2xl"
        style={{ marginBottom: "0.75rem" }}
      >
        Page not found
      </h2>
      {href ? (
        <a
          href={href}
          className="font-primary-bold text-lg"
          style={{
            display: "inline-block",
            marginBottom: "1.25rem",
            padding: "0.5rem 2rem",
            borderRadius: "4px",
            backgroundColor: "var(--color-background-brand-bold)",
            color: "var(--color-font-inverse)",
            textDecoration: "none",
          }}
        >
          {message}
        </a>
      ) : (
        <span
          className="font-primary-light text-lg"
          style={{ marginBottom: "1.25rem", color: "var(--color-font-subtle)" }}
        >
          {message}
        </span>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
