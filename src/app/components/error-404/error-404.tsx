export const Error404 = ({
  message = "Error 404: Not Found",
  href,
}: Props) => {
  return (
    <div
      className="w-full bg-elevation-surface"
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/error-404-wizard.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "320px auto",
      }}
    >
      <div
        className="flex flex-col items-center text-center"
        style={{ paddingTop: "96px" }}
      >
        <h1
          className="font-primary-black text-5xl"
          style={{ color: "var(--color-font)", marginBottom: "12px" }}
        >
          404
        </h1>
        <p
          className="text-lg font-primary-light text-font-subtle"
          style={{ marginBottom: "32px" }}
        >
          Oops! The page you're looking for doesn't exist.
        </p>
        {href && (
          <a
            href={href}
            className="text-lg text-link hover:underline active:text-link-pressed"
          >
            {message}
          </a>
        )}
        {!href && message !== "Error 404: Not Found" && (
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
