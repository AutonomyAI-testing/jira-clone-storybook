export const Error500 = ({
  message = "Oops! Something went wrong",
  href,
}: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ minHeight: "100vh", textAlign: "center", padding: "2rem" }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="Wizard robot mascot"
        style={{ width: "320px", height: "auto", marginBottom: "1.5rem" }}
      />
      <h1
        className="font-primary-black"
        style={{ fontSize: "6rem", lineHeight: 1, marginBottom: "0.5rem", color: "var(--Red600)" }}
      >
        500
      </h1>
      <p
        className="font-primary text-font-subtle"
        style={{ fontSize: "1.125rem", marginBottom: "1.5rem", maxWidth: "360px" }}
      >
        {message}
      </p>
      {href && (
        <a
          href={href}
          className="font-primary-bold"
          style={{
            display: "inline-block",
            padding: "0.625rem 1.5rem",
            borderRadius: "4px",
            backgroundColor: "var(--color-background-brand-bold)",
            color: "var(--color-font-inverse)",
            textDecoration: "none",
            fontSize: "0.9375rem",
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
