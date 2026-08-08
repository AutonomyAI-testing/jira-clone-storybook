import { ErrorBase } from "../error-base";

/**
 * Error404 component displays a 404 Not Found error page.
 *
 * Supports both rich error page layout with title/subtitle/description
 * and backward-compatible simple message-based display.
 */
export const Error404 = ({
  title = "404",
  subtitle = "Page Not Found",
  description = "The page you are looking for doesn't exist or has been moved. Please check the URL or navigate back to the home page.",
  buttonLabel = "Go to Dashboard",
  href = "/",
  message,
}: Props): JSX.Element => {
  return (
    <ErrorBase
      variant="404"
      title={title}
      subtitle={subtitle}
      description={description}
      buttonLabel={buttonLabel}
      href={href}
      message={message}
    />
  );
};

interface Props {
  /** Main heading text (typically "404" or "Error 404") */
  title?: string;

  /** Subheading text (typically "Page Not Found") */
  subtitle?: string;

  /** Description or error message text */
  description?: string;

  /** Button label text for href navigation */
  buttonLabel?: string;

  /** Optional link/navigation target */
  href?: string;

  /**
   * @deprecated Use `subtitle` instead. Falls back to `message` if `subtitle` is not provided.
   * Used for backward compatibility with Error500 wrapper patterns.
   */
  message?: string;
}
