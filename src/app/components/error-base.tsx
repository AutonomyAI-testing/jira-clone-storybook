import { Button } from "./button";

export const ErrorBase = ({
  variant,
  message,
  href,
  title,
  description,
  buttonText,
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  // Use modern layout when title is provided (new design pattern)
  // Falls back to legacy layout for backward compatibility with old message-only API
  if (title) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="flex max-w-lg flex-col items-center gap-6 text-center rounded-lg border-2 border-font-danger p-6">
          <img
            src={imgPath}
            alt="Error occurred"
            className="h-[320px] w-auto"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-font">{title}</h1>
            {description && (
              <p className="text-lg text-font-subtle">{description}</p>
            )}
          </div>
          {href && (
            <Button
              color="primary"
              size="lg"
              onClick={() => {
                // Navigate to the provided href (typically home page or project list)
                window.location.href = href;
              }}
            >
              {buttonText ?? "Go back home"}
            </Button>
          )}
        </div>
      </div>
    );
  }

  // Legacy layout (backward compatible)
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
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message?: string;
  href?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}
