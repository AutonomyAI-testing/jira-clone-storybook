export const ErrorBase = ({ variant, message, href, onRetry }: Props) => {
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
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg" style={{ color: "var(--Red700)" }}>{message}</span>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 rounded bg-background-brand-bold px-6 py-2 hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          style={{ color: "var(--Red700)" }}
        >
          Try again
        </button>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href: string;
  onRetry?: () => void;
}
