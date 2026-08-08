import { ErrorBase } from "../error-base";

/**
 * Error404 component - Displays a user-friendly 404 error page.
 * Supports both modern title-based layout and legacy message-based layout.
 * When title is provided, uses the modern design with description and button.
 * When only message is provided, falls back to the legacy compact layout for backward compatibility.
 */
export const Error404 = ({
  title = "Page not found",
  description = "Oops! The wizard couldn't conjure this page. It may have been moved, deleted, or never existed.",
  buttonText = "Go back home",
  message,
  href = "/", // Default to home page navigation
}: Props) => {
  return (
    <ErrorBase
      variant="404"
      title={title}
      description={description}
      buttonText={buttonText}
      message={message}
      href={href}
    />
  );
};

interface Props {
  title?: string;
  description?: string;
  buttonText?: string;
  message?: string;
  href?: string;
}
