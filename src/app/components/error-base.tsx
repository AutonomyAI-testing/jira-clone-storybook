import cx from "classix";

export const ErrorBase = ({
  variant,
  message,
  href,
  loading = false,
  disabled = false,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className={cx(
          "mx-auto mb-4 h-[350px] w-auto",
          (loading || disabled) && "opacity-60"
        )}
      />
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
          onClick={(e) => {
            if (disabled || loading) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          {loading ? "Loading..." : message}
        </a>
      ) : (
        <span
          className={cx(
            "max-w-[100px] text-lg",
            (loading || disabled) && "text-font-disabled"
          )}
        >
          {loading ? "Loading..." : message}
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
