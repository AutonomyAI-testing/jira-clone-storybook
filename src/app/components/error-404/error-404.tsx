import { ErrorBase } from "../error-base";

export const Error404 = ({
  title = "404 - Page Not Found",
  subtitle = "The page you're looking for has disappeared into the digital void. Let's get you back on track!",
  primaryButtonText = "Go Home",
  primaryButtonHref = "/projects",
  secondaryButtonText = "Go Back",
  secondaryButtonOnClick,
  message,
  href,
}: Props) => {
  // Detect which prop pattern is being used for backward compatibility
  const isLegacyPattern = message || href;

  if (isLegacyPattern) {
    return (
      <ErrorBase
        variant="404"
        message={message || "Error 404: Not Found"}
        href={href}
      />
    );
  }

  return (
    <ErrorBase
      variant="404"
      title={title}
      subtitle={subtitle}
      primaryButtonText={primaryButtonText}
      primaryButtonHref={primaryButtonHref}
      secondaryButtonText={secondaryButtonText}
      secondaryButtonOnClick={
        secondaryButtonOnClick || (() => window.history.back())
      }
    />
  );
};

interface Props {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonOnClick?: () => void;
  message?: string;
  href?: string;
}
