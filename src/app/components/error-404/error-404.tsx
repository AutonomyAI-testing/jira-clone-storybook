export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div className="max-w-[500px] text-center">
      <img
        src="/images/error-404-custom.png"
        alt="404 Not Found"
        className="mx-auto mb-4 h-[350px] w-auto"
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
  message: string;
  href: string;
}
