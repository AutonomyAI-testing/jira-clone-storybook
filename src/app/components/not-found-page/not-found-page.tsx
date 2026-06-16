import { WizardRobot } from "@app/components/wizard-robot";
import cx from "classix";

/**
 * NotFoundPage - A whimsical 404 error page component
 *
 * Displays a friendly error page when users navigate to non-existent routes.
 * Features a WizardRobot illustration, large 404 text, and a call-to-action
 * button to return to the dashboard.
 */
export const NotFoundPage = (): JSX.Element => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-8 p-6"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Wizard Robot Illustration */}
      <div className="w-full max-w-sm">
        <WizardRobot />
      </div>

      {/* Content Section */}
      <div className="text-center">
        {/* 404 Number */}
        <div
          className="text-[120px] font-black leading-none mb-2"
          style={{ color: "var(--Blue700)" }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          className="text-3xl font-bold mb-4"
          style={{ color: "var(--Red700)" }}
        >
          Lost in the Wizarding Web
        </h1>

        {/* Description */}
        <p
          className="text-lg mb-8 max-w-md"
          style={{ color: "var(--Neutral800)" }}
        >
          The page you're looking for has vanished into thin air. Let's get you
          back on track!
        </p>

        {/* Button - Using a link styled as a button */}
        <a
          href="/"
          className={cx(
            "inline-flex cursor-pointer items-center justify-center gap-2 rounded p-2 text-font disabled:cursor-not-allowed disabled:opacity-60",
            "bg-background-brand-bold text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed",
            "gap-3 px-8 py-2 text-lg"
          )}
        >
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};
