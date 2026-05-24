import { Button } from "./button";

/**
 * ErrorBase - Reusable error page component for displaying error states (404, 500, etc.)
 * Renders an error image, message, and optional call-to-action button.
 * The variant determines which error image and styling to display.
 */
export const ErrorBase = ({ variant, message, href, buttonText }: Props) => {
  const imgPath = `/images/error-${variant}.svg`;

  return (
    <div className="flex max-w-[500px] flex-col items-center text-center">
      <img
        src={imgPath}
        alt="Server error"
        className="mx-auto mb-6 h-[350px] w-auto"
      />
      <p className="mb-6 text-lg text-font">{message}</p>
      {/* Conditionally render a CTA button if href is provided */}
      {href && (
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            window.location.href = href;
          }}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

interface Props {
  variant: "500" | "404";
  message: string;
  href?: string;
  buttonText?: string;
}
