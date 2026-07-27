export const Error404 = ({
  message = "Looks like this page got lost in the magic!",
  href,
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center" style={{ maxWidth: 520 }}>
      <img
        src="/images/error-404-wizard.png"
        alt="Wizard mascot"
        style={{ height: 320, width: "auto", marginBottom: 24 }}
      />
      <h1 className="font-primary-black text-5xl" style={{ marginBottom: 8 }}>
        404
      </h1>
      <h2
        className="font-primary-bold text-2xl"
        style={{ marginBottom: 16, color: "var(--color-font)" }}
      >
        Page Not Found
      </h2>
      <p
        className="font-primary-light text-lg"
        style={{ marginBottom: 32, color: "var(--color-font-subtle)" }}
      >
        {message}
      </p>
      {href && (
        <a
          href={href}
          className="font-primary-bold text-lg"
          style={{
            backgroundColor: "var(--color-background-brand-bold)",
            color: "var(--color-font-inverse)",
            padding: "10px 32px",
            borderRadius: 4,
            textDecoration: "none",
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
