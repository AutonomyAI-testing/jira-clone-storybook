export const Error404 = ({ message, href }: Props) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--color-elevation-surface)",
        backgroundImage: "url(/images/wizard-404.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "300px auto",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          paddingTop: "96px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          className="font-primary-black text-5xl text-font"
          style={{ marginBottom: "12px" }}
        >
          404
        </h1>
        <p
          className="text-lg text-font-subtle"
          style={{ marginBottom: "32px" }}
        >
          Oops! The page you are looking for does not exist.
        </p>
        {href && (
          <a
            href={href}
            className="text-lg text-link hover:underline active:text-link-pressed"
          >
            {message ?? "Go back to home"}
          </a>
        )}
        {!href && message && (
          <span className="text-lg text-font-subtle">{message}</span>
        )}
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
