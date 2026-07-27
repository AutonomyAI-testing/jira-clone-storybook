import { Button } from "./button/button";

export const ErrorBase = ({
  variant,
  message,
  href,
  buttonText,
  onButtonClick,
  buttonColor = "primary",
}: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  // Render prominent button CTA when both button text and click handler are provided
  const hasButtonCTA = buttonText && onButtonClick;
  // Fallback to link href if button not configured
  const hasLinkFallback = href && !hasButtonCTA;

  return (
    <div className="max-w-[500px] text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-4 h-[350px] w-auto"
      />
      <p className="mb-6 text-lg text-font">{message}</p>
      {hasButtonCTA ? (
        <Button
          onClick={onButtonClick}
          color={buttonColor}
          variant="contained"
          size="lg"
        >
          {buttonText}
        </Button>
      ) : hasLinkFallback ? (
        <a
          href={href}
          className="max-w-[100px] text-lg text-link hover:underline active:text-link-pressed"
        >
          {message}
        </a>
      ) : (
        <span className="max-w-[100px] text-lg text-font">{message}</span>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonColor?: "primary" | "neutral";
}
