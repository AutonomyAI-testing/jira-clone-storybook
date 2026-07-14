import { ErrorBase } from "../error-base/error-base";

export const Error404 = ({ message, href }: Props) => {
  return (
    <ErrorBase
      errorCode="404"
      title="Page not found"
      description={
        message ??
        "The page you're looking for doesn't exist or may have been moved."
      }
      titleColor="#E5533C"
      primaryAction={{ label: "Go to Homepage", href: href ?? "/" }}
      secondaryAction={{ label: "Go back", href: "javascript:history.back()" }}
      imageUrl="/images/error-404.svg"
    />
  );
};

interface Props {
  message?: string;
  href?: string;
}
