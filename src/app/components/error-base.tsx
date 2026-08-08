/**
 * Error component that displays an error message with an SVG illustration.
 * Uses CSS variables for text color to ensure consistent error styling across error codes.
 */
export const ErrorBase = ({ variant, message, href }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

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
          style={{ color: "var(--Red500)" }}
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg" style={{ color: "var(--Red500)" }}>{message}</span>
      )}
    </div>
  );
};

interface Props {
  /** Error code variant to display (determines which SVG to show) */
  variant: "500" | "404";
  /** Error message text to display */
  message: string;
  /** Optional link URL - if provided, the message becomes a link */
  href: string;
}
