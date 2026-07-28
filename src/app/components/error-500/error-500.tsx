export const Error500 = ({
  message = "Something went wrong on our end. Please try again later.",
  href,
}: Props) => {
  return (
    <div
      className="flex flex-col items-center text-center"
      style={{ maxWidth: 500 }}
    >
      <img
        src="/images/error-500.svg"
        alt="Server error illustration"
        style={{ width: 320, height: "auto", marginBottom: "1.5rem" }}
      />
      <h1
        className="font-primary-black text-5xl"
        style={{ marginBottom: "0.5rem", lineHeight: 1.1, color: "var(--Red600)" }}
      >
        500
      </h1>
      <h2
        className="font-primary-bold text-2xl"
        style={{ marginBottom: "0.75rem" }}
      >
        Internal server error
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
