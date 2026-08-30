export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath =
    variant === "404" ? "/images/wizard-robot.png" : `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt={variant === "404" ? "Wizard robot 404" : "Server error"}
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
  variant: "500" | "404";
  message: string;
  href: string;
}
