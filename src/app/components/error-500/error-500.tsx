import { ErrorBase } from "../error-base";

/**
 * Error500 - Specialized error component for 500 (Server Error) errors
 * Provides sensible defaults for the 500 error state while allowing customization
 */
export const Error500 = ({
  message = "Error 500: Server error",
  buttonText = "Try again",
  href,
}: Props) => {
  return (
    <ErrorBase
      variant="500"
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
