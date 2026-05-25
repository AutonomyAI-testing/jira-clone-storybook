import { useNavigate } from "@remix-run/react";
import { ErrorBase } from "../error-base";

export const Error404 = ({
  message = "Page not found",
  href,
  buttonText = "Back to Projects",
  buttonColor = "primary",
  useButton = true,
}: Props) => {
  const navigate = useNavigate();

  // Navigate to provided href or fallback to home (/)
  const handleNavigate = () => {
    navigate(href || "/");
  };

  return (
    <ErrorBase
      variant="404"
      message={message}
      href={!useButton ? href : undefined}
      buttonText={useButton ? buttonText : undefined}
      onButtonClick={useButton ? handleNavigate : undefined}
      buttonColor={buttonColor}
    />
  );
};

interface Props {
  message?: string;
  href?: string;
  buttonText?: string;
  buttonColor?: "primary" | "neutral";
  useButton?: boolean;
}
