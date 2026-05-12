export const ErrorBase = ({ variant, message, href }: Props) => {
  // Construct the image path dynamically based on error variant (500 or 404)
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] rounded border-2 border-border-danger p-6 text-center">
      <img
        src={imgPath}
        alt="Server error"
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
  /** Error type: 500 for server errors, 404 for not found */
  variant: "500" | "404";
  /** Error message text displayed to the user */
  message: string;
  /** Optional URL to link from the message; when provided, message becomes a link */
  href: string;
}
