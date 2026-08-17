export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div className="max-w-[500px] text-center">
      <img
        src="/error-404-wizard.png"
        alt="404 - Page not found"
        style={{ width: 280, margin: "0 auto 16px", display: "block" }}
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
