import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";
import { WizardRobot } from "./wizard-robot";

export const Error404Page = ({
  title = "404 - Page Not Found",
  description = "The page you're looking for doesn't exist. Let's get you back on track.",
  homeHref = "/",
  showBackButton = true,
}: Props): JSX.Element => {
  const handleBack = (): void => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      <div className="max-w-[500px] text-center">
        {/* Illustration with floating animation */}
        <div className="mb-8 flex justify-center">
          <WizardRobot className="h-[350px] w-auto animate-float-wizard" />
        </div>

        {/* Headline */}
        <h1 className="mb-4 text-3xl font-primary-bold" style={{ color: "var(--Red600)" }}>
          {title}
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg text-font-subtle">
          {description}
        </p>

        {/* Primary CTA Button */}
        <div className="mb-4">
          <Button asChild color="primary" variant="contained" size="lg">
            <Link to={homeHref}>Go Home</Link>
          </Button>
        </div>

        {/* Secondary CTA Button */}
        {showBackButton && (
          <Button
            onClick={handleBack}
            color="neutral"
            variant="subtlest"
            size="md"
          >
            ← Go Back
          </Button>
        )}
      </div>
    </div>
  );
};

interface Props {
  title?: string;
  description?: string;
  homeHref?: string;
  showBackButton?: boolean;
}
