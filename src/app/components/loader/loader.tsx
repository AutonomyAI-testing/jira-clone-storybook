import cx from "classix";

type LoaderSize = "sm" | "md" | "lg" | "xl";
type LoaderColor = "brand" | "neutral" | "danger" | "success" | "warning" | "info" | "inverse";

type Props = {
  size?: LoaderSize;
  color?: LoaderColor;
  label?: string;
  className?: string;
};

const sizeMap: Record<LoaderSize, string> = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-[3px]",
  xl: "w-12 h-12 border-4",
};

const colorMap: Record<LoaderColor, { track: string; spinner: string }> = {
  brand: {
    track: "border-border-brand",
    spinner: "border-t-transparent border-r-transparent",
  },
  neutral: {
    track: "border-border",
    spinner: "border-t-transparent border-r-transparent",
  },
  danger: {
    track: "border-border-danger",
    spinner: "border-t-transparent border-r-transparent",
  },
  success: {
    track: "border-border-success",
    spinner: "border-t-transparent border-r-transparent",
  },
  warning: {
    track: "border-border-warning",
    spinner: "border-t-transparent border-r-transparent",
  },
  info: {
    track: "border-border-info",
    spinner: "border-t-transparent border-r-transparent",
  },
  inverse: {
    track: "border-border-inverse",
    spinner: "border-t-transparent border-r-transparent",
  },
};

export const Loader = ({
  size = "md",
  color = "brand",
  label,
  className,
}: Props) => {
  const { track, spinner } = colorMap[color];

  return (
    <div
      role="status"
      aria-label={label ?? "Loading"}
      className={cx("flex flex-col items-center justify-center gap-2", className)}
    >
      <span
        className={cx(
          "inline-block rounded-full animate-spin",
          sizeMap[size],
          track,
          spinner,
        )}
        aria-hidden="true"
      />
      {label && (
        <span className="text-sm text-font-subtle">{label}</span>
      )}
    </div>
  );
};
