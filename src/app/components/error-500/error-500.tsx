import { ErrorBase } from "../error-base";

/**
 * Error500 Component
 *
 * Displays a 500 (Internal Server Error) page with an optional link to navigate away.
 * The red border provides a visual indicator of the error state.
 */
export const Error500 = ({
  message = "Error 500: Server error",
  href = "",
}: Props) => {
  return (
    <div style={{ border: "2px solid var(--Red600)" }}>
      <ErrorBase variant="500" message={message} href={href} />
    </div>
  );
};

interface Props {
  message?: string;
  href?: string | undefined;
}
