export const Error404 = ({
  message = "The page you're looking for has vanished into the void.",
  href,
}: Props) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ maxWidth: 500 }}
    >
      <img
        src="/images/error-404-wizard.png"
        alt="Wizard mascot"
        style={{ width: 320, height: "auto", marginBottom: "1.5rem" }}
      />
      <h1
        className="font-primary-black text-5xl"
        style={{ marginBottom: "0.5rem", lineHeight: 1.1 }}
      >
        404
      </h1>
      <h2
        className="font-primary-bold text-2xl"
        style={{ marginBottom: "0.75rem" }}
      >
        Page not found
      </h2>
      <p
        className="font-primary-light text-lg text-font-subtle"
        style={{ marginBottom: "1.5rem", maxWidth: 380 }}
      >
        {message}
      </p>
      {href && (
        <a
          href={href}
          className="font-primary-bold text-font-inverse bg-background-brand-bold rounded"
          style={{
            textDecoration: "none",
            padding: "0.5rem 2rem",
            display: "inline-block",
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
