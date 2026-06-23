import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
  onRetry,
}: Props) => {
  return (
    <ErrorBase variant="500" message={message} href={href} onRetry={onRetry} />
  );
};

interface Props {
  message: string;
  href: string;
  onRetry?: () => void;
}
