export const Error404 = ({ message, href }: Props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-elevation-surface)",
        overflow: "hidden",
        backgroundImage: "url(/images/error-404-wizard.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "300px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "96px",
        }}
      >
        <h1
          className="font-primary-black text-5xl text-font"
          style={{ marginBottom: "12px" }}
        >
          404
        </h1>
        <p className="text-lg text-font-subtle" style={{ marginBottom: "32px" }}>
          Oops! We couldn't find what you were looking for.
        </p>
        {href ? (
          <a
            href={href}
            className="text-lg text-link hover:underline active:text-link-pressed"
          >
            {message ?? "Go back to safety"}
          </a>
        ) : message ? (
          <span className="text-lg text-font">{message}</span>
        ) : null}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
