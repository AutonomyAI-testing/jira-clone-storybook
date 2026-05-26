import { ErrorBase } from "../error-base";

/**
 * Error404 component with backward compatibility for legacy message/href API.
 *
 * Modern API: Use heading, title, description, buttonLabel, buttonHref
 * Legacy API: Use message and href (triggers legacy mode when both provided without title/description)
 *
 * The component automatically detects which API is being used and adapts the rendering accordingly.
 */
export const Error404 = ({
  heading = "404",
  title = "Oops! Page not found",
  description = "The page you're looking for has vanished into thin air. Even our wizard robot couldn't find it.",
  buttonLabel = "Go to Dashboard",
  buttonHref = "/",
  message,
  href,
}: Props) => {
  // Detect legacy mode: when message and href are provided but title and description are not,
  // use the legacy rendering format (simpler, text-only link instead of button)
  const useLegacyMode = message && href && !title && !description;

  return (
    <ErrorBase
      variant="404"
      heading={useLegacyMode ? undefined : heading}
      title={useLegacyMode ? message : title}
      description={useLegacyMode ? undefined : description}
      buttonLabel={useLegacyMode ? undefined : buttonLabel}
      buttonHref={useLegacyMode ? undefined : buttonHref}
      message={message}
      href={useLegacyMode ? href : undefined}
    />
  );
};

interface Props {
  heading?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  message?: string;
  href?: string;
}
