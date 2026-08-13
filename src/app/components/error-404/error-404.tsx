export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: 500,
      }}
    >
      <img
        src="/error-404-wizard.png"
        alt="404 wizard robot"
        style={{ width: 280, marginBottom: 24 }}
      />
      {href ? (
        <a
          href={href}
          className="text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
