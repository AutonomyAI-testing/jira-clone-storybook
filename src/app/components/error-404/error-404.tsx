import { Button } from "@app/components/button";

// Color constant for the large 404 heading - uses custom CSS variable for brand-aligned blue
const HEADING_COLOR = "var(--Blue700)";

export const Error404 = ({
  message = "Go back home",
  href = "/",
}: Props): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-8">
      <div className="w-full max-w-md text-center">
        {/* Wizard Robot SVG - h-96 sets a fixed height; w-auto maintains aspect ratio */}
        <img
          src="/images/error-wizard-robot.svg"
          alt="Wizard Robot"
          className="mx-auto mb-8 h-96 w-auto"
        />

        {/* 404 Text - uses CSS variable for custom blue color since Tailwind has no standard blue in config */}
        <h1
          className="mb-4 text-7xl font-primary-black"
          style={{ color: HEADING_COLOR }}
        >
          404
        </h1>

        {/* Subheading */}
        <h2
          className="mb-4 text-2xl font-primary-bold"
          style={{ color: "var(--Red600)" }}
        >
          Oops! Page Not Found
        </h2>

        {/* Message */}
        <p className="mb-8 text-base text-font-subtle">
          This wizard couldn't find what you were looking for. The page may
          have been moved or doesn't exist.
        </p>

        {/* Button with nested anchor: Button provides styling/interactivity, anchor provides navigation */}
        <Button color="primary" variant="contained" size="lg">
          <a href={href} className="flex items-center justify-center">
            {message}
          </a>
        </Button>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
