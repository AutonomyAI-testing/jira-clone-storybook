export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath =
    variant === "404"
      ? `/images/error-404-wizard.jpg`
      : `/images/error-500-robot.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt={variant === "404" ? "Wizard robot - page not found" : "Server error"}
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg hover:underline"
          style={{ color: "#ef4444" }}
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font-danger">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
}
