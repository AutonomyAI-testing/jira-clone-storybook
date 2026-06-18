import { WizardRobotMascot } from "./wizard-robot-mascot";
import { Button } from "../button";

interface Error404PageProps {
  /** Redirect URL for the "Go Home" button */
  homeUrl?: string;
}

/**
 * Error404Page - Full-screen 404 error page with wizard robot mascot
 * Displays a friendly error message with a prominent call-to-action button
 */
export const Error404Page = ({
  homeUrl = "/",
}: Error404PageProps): JSX.Element => {
  return (
    <div className="flex w-full flex-col items-center px-4 py-8" style={{'backgroundColor': '#fdf8f0'}}>
      {/* Centered content container */}
      <div className="flex w-full flex-col items-center">
        {/* Mascot illustration */}
        <div className="mb-8 w-full max-w-sm">
          <WizardRobotMascot />
        </div>

        {/* Error code display */}
        <div
          className="mb-2 text-center font-primary-bold text-[120px] leading-none"
          style={{ color: "var(--Red700)" }}
        >
          404
        </div>

        {/* Main headline */}
        <h1 className="mb-2 text-center text-3xl font-bold" style={{ color: "var(--Red700)" }}>
          Lost in the void
        </h1>

        {/* Subheading explanation */}
        <p className="mb-8 max-w-md text-center text-lg text-font-subtle">
          Looks like this page took a wrong turn. Our wizard bot is on the case!
        </p>

        {/* CTA Button */}
        <Button
          color="primary"
          variant="contained"
          size="lg"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.href = homeUrl;
            }
          }}
          className="px-8 py-3"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};
