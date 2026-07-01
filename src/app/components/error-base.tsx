export const ErrorBase = ({ variant, message, href, messageClassName }: Props) => {
  const imgPath = variant === "404" ? `/images/error-404-wizard.jpg` : `/images/error-${variant}.svg`;

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
          className={`max-w-[100px] text-lg hover:underline ${messageClassName ? messageClassName : "text-link active:text-link-pressed"}`}
        >
          {message}
        </a>
      ) : (
        <span className={`max-w-[100px] text-lg text-font ${messageClassName ?? ""}`}>{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  messageClassName?: string;
}
