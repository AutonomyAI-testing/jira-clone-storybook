export const Error404 = ({
  message = "Looks like this page wandered off into the void.",
  href,
}: Props) => {
  return (
    <div className="max-w-[500px] text-center mx-auto" style={{ padding: "2rem 1rem" }}>
      <img
        src="/images/error-404-wizard.png"
        alt="404 wizard mascot"
        style={{ width: "320px", height: "auto", margin: "0 auto 1.5rem" }}
        className="mx-auto"
      />
      <p
        className="font-primary-black text-5xl"
        style={{ marginBottom: "0.5rem", color: "var(--color-font)" }}
      >
        404
      </p>
      <p
        className="font-primary-bold text-2xl"
        style={{ marginBottom: "0.75rem", color: "var(--color-font)" }}
      >
        Page Not Found
      </p>
      <p
        className="font-primary-light text-lg text-font-subtle"
        style={{ marginBottom: "1.5rem" }}
      >
        {message}
      </p>
      {href && (
        <a
          href={href}
          className="inline-flex bg-background-brand-bold text-font-inverse font-primary-bold rounded py-2 px-8 hover:bg-background-brand-bold-hovered"
          style={{ textDecoration: "none" }}
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
