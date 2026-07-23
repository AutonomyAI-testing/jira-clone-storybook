export const ErrorBase = ({ variant, message, href, messageColor }: Props) => {
  const imgPath = variant === "404" ? `/images/error-404.png` : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
          style={messageColor ? { color: messageColor } : undefined}
        >
          {message}
        </a>
      ) : (
        <span
          className="max-w-[100px] text-lg text-font"
          style={messageColor ? { color: messageColor } : undefined}
        >
          {message}
        </span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  messageColor?: string;
}
