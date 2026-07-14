import { ErrorBase } from "../error-base/error-base";

export const Error500 = ({ message, href }: Props) => {
  return (
    <ErrorBase
      errorCode="500"
      title="Something went wrong"
      description={
        message ??
        "We're experiencing an issue on our end. Please try again in a moment."
      }
      primaryAction={{ label: "Try again", href: href ?? "/" }}
      secondaryAction={{ label: "Go to Homepage", href: "/" }}
      imageUrl="/images/error-500.svg"
    />
  );
};

interface Props {
  message?: string;
  href?: string;
}
