export const ErrorBase = ({ variant, message, href }: Props) => {
  // Dynamically load error illustration based on variant (404 or 500)
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt={variant === "404" ? "404 error - page not found" : "500 error - internal server error"}
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      {/* Render as link if href provided, otherwise as plain text */}
      {href ? (
        <a
          href={href}
          className="max-w-[100px] text-lg hover:underline"
          style={{ color: "var(--Red700)" }}
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
