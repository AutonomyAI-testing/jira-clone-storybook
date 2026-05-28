import { ErrorBase } from "../error-base";

/**
 * Error500 component displays a server error page with an optional link back to safety.
 * Default message and href are provided for standalone usage without explicit props.
 */
export const Error500 = ({
  message = "Something went wrong on our end. Please try again later.",
  href = "/",
}: Props) => {
  return <ErrorBase variant="500" message={message} href={href} />;
};

interface Props {
  message?: string;
  href?: string;
}
