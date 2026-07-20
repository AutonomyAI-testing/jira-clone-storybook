import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
  messageColor,
}: Props) => {
  return <ErrorBase variant="500" message={message} href={href} messageColor={messageColor} />;
};

interface Props {
  message: string;
  href: string;
  messageColor?: string;
}
