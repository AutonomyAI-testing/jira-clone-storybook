import { useNavigate } from "@remix-run/react";
import { Button } from "@app/components/button";
import { WizardRobot } from "./WizardRobot";

export const Error404View = (): JSX.Element => {
  const navigate = useNavigate();

  // Handler for the "Take Me Home" button - navigates user back to the root route
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      {/* 
        Inject animations for the error page elements.
        Each element has a staggered entrance animation to create a polished, 
        welcoming effect that reduces the severity of the error experience.
      */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in-up {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .error-404-container {
          animation: fade-in 0.3s ease-out forwards;
        }

        .error-404-illustration {
          animation: scale-in-up 0.5s ease-out forwards;
        }

        .error-404-headline {
          animation: slide-up-in 0.4s ease-out 0.15s forwards;
          opacity: 0;
        }

        .error-404-message {
          animation: fade-in 0.4s ease-out 0.3s forwards;
          opacity: 0;
        }

        .error-404-button {
          animation: slide-up-in 0.4s ease-out 0.45s forwards;
          opacity: 0;
        }
      `}</style>

      <div
        className="error-404-container flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-elevation-surface px-4 py-8"
        style={{ backgroundColor: "var(--color-elevation-surface)" }}
      >
        {/* Wizard robot illustration with staggered entrance animation */}
        <div className="error-404-illustration">
          <WizardRobot width={500} height={415} />
        </div>

        {/* Large error code in blue to establish visual hierarchy and convey severity */}
        <h1
          className="error-404-headline font-primary-black text-8xl font-black leading-none"
          style={{ color: "var(--Blue700)" }}
        >
          404
        </h1>

        {/* Sub-headline in red to draw attention to the error condition */}
        <h2
          className="error-404-message text-center font-primary text-xl font-semibold"
          style={{ color: "var(--Red600)" }}
        >
          You've wandered into uncharted territory
        </h2>

        {/* Supporting body text with subtle color to provide context */}
        <p
          className="error-404-message max-w-md text-center font-primary text-base leading-relaxed"
          style={{ color: "var(--color-font-subtle)" }}
        >
          The page you're looking for has vanished into the digital void — even
          our wizard-bot couldn't find it.
        </p>

        {/* Primary CTA button to help users recover from the error state */}
        <div className="error-404-button mt-2">
          <Button
            onClick={handleGoHome}
            color="primary"
            variant="contained"
            size="md"
            className="px-8"
          >
            Take Me Home
          </Button>
        </div>
      </div>
    </>
  );
};
