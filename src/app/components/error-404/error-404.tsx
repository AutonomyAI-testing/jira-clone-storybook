import { ErrorBase } from "../error-base";

/**
 * Error404 component displays a 404 error page with an optional link back to safety.
 * Default message and href are provided for standalone usage without explicit props.
 */
export const Error404 = ({
  message = "Oops! This page has vanished into the void.",
  href = "/",
}: Props) => {
  return <ErrorBase variant="404" message={message} href={href} />;
};

interface Props {
  message?: string;
  href?: string;
}
