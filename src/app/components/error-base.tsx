import { Button } from "./button";

export const ErrorBase = ({
  variant,
  title,
  subtitle,
  description,
  buttonLabel,
  href,
  message,
}: Props): JSX.Element => {
  const imgPath = `/images/error-${variant}.svg`;

  // Fallback to message for backward compatibility
  const displaySubtitle = subtitle || message;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <img
        src={imgPath}
        alt="Page error illustration"
        className="mb-6 h-[350px] w-auto"
      />
      {title && (
        <h1 className="text-6xl font-primary-black text-font-brand">{title}</h1>
      )}
      {displaySubtitle && (
        <h2 className="mt-2 text-2xl font-primary-bold text-font-danger">
          {displaySubtitle}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-[500px] text-base leading-relaxed text-font-subtle">
          {description}
        </p>
      )}
      {href && buttonLabel && (
        <a href={href} className="mt-6">
          <Button variant="contained" color="primary" size="lg">
            {buttonLabel}
          </Button>
        </a>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  title?: string;
  subtitle?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
  /** @deprecated Use `subtitle` instead. Falls back to `message` if `subtitle` is not provided. */
  message?: string;
}
