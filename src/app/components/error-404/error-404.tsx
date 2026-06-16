import { Error404Page } from "../error-404-page";

export const Error404 = ({ message, href }: Props) => {
  return (
    <Error404Page
      message={message}
      homeHref={href}
      headline="These Aren't the Pages You're Looking For..."
    />
  );
};

interface Props {
  message?: string;
  href?: string;
}
