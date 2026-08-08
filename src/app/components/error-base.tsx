export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;
  // Use CSS variable for red text color to ensure visual consistency across error states
  const messageColor = { color: "var(--Red500)" };

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
          className="max-w-[100px] text-lg hover:underline"
          style={messageColor}
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg" style={messageColor}>{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href?: string;
}
