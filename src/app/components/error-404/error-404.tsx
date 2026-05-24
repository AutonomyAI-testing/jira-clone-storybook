import { ErrorBase } from "../error-base";

/**
 * Error404 - Specialized error component for 404 (Not Found) errors
 * Provides sensible defaults for the 404 error state while allowing customization
 */
export const Error404 = ({
  message = "It seems that you have lost! The page you're looking for doesn't exist.",
  buttonText = "Go to Projects",
  href,
}: Props) => {
  return (
    <ErrorBase
      variant="404"
      message={message}
      buttonText={buttonText}
      href={href}
    />
  );
};

interface Props {
  message?: string;
  buttonText?: string;
  href?: string;
}
