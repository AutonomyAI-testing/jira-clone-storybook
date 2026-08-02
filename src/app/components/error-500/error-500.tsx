import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
  isLoading = false,
  isDisabled = false,
}: Props) => {
  return (
    <ErrorBase
      variant="500"
      message={message}
      href={href}
      isLoading={isLoading}
      isDisabled={isDisabled}
    />
  );
};

interface Props {
  message?: string;
  href?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
}
