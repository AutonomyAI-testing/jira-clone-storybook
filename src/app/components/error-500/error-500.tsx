import { ErrorBase } from "../error-base";

export const Error500 = ({
  message = "Error 500: Server error",
  href,
}: Props) => {
  return (
    <div className="outline outline-2" style={{ outlineColor: "var(--Red500)" }}>
      <ErrorBase variant="500" message={message} href={href} />
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
