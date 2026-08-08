import { ErrorBase } from "../error-base";

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <ErrorBase
      variant="404"
      message={message}
      href={href}
      messageClassName="text-font-danger"
    />
  );
};

interface Props {
  message: string;
  href: string;
}
