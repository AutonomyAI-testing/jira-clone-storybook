import cx from "classix";

export const ErrorBase = ({
  variant,
  message,
  href,
  loading = false,
  disabled = false,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  // Display "Loading..." when loading, otherwise show the message
  const displayText = loading ? "Loading..." : message;

  // Prevent interaction (click/navigation) when disabled or loading
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled || loading) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Image opacity decreases during loading or disabled states
  const imageClassName = cx(
    "mx-auto mb-4 h-[350px] w-auto",
    (loading || disabled) && "opacity-60"
  );

  return (
    <div className="max-w-[500px] rounded-lg border-2 border-border-danger p-6 text-center">
      <img src={imgPath} alt="Server error" className={imageClassName} />
      {href ? (
        <a
          href={href}
          className={cx(
            "max-w-[100px] text-lg",
            disabled
              ? "cursor-not-allowed text-font"
              : "text-link hover:underline active:text-link-pressed",
            loading && "cursor-wait"
          )}
          onClick={handleLinkClick}
        >
          {displayText}
        </a>
      ) : (
        <span
          className={cx(
            "max-w-[100px] text-lg",
            (loading || disabled) && "text-font-disabled"
          )}
        >
          {displayText}
        </span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
}
