import { ErrorBase } from "../error-base";

interface Props {
  message?: string;
  href?: string;
}

export const Error500 = ({
  message = "Error 500: Server error",
  href = "/",
}: Props) => {
  return <ErrorBase variant="500" message={message} href={href} />;
};
