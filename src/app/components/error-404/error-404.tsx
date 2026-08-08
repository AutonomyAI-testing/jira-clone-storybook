import { ErrorBase } from "../error-base";

export const Error404 = ({
  message = "This page has vanished into the magical void.",
  href = "",
  tagline = "The wizard wandered off...",
}: Props): JSX.Element => {
  return (
    <div className="text-center">
      <p className="mb-1 text-8xl font-bold" style={{ color: "var(--Red600)" }}>404</p>
      <p className="mb-6 text-xl font-medium text-font-subtle">{tagline}</p>
      <ErrorBase variant="404" message={message} href={href} />
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
  tagline?: string;
}
