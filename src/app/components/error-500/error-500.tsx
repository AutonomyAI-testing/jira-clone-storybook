import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
  loading = false,
  disabled = false,
}: Props) => {
  return (
    <ErrorBase
      variant="500"
      message={message}
      href={href}
      loading={loading}
      disabled={disabled}
    />
  );
};

interface Props {
  message: string;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
}
