import { Button } from "../button";

export const Error404 = ({
  message = "Oops! This page got lost in the magic.",
  href = "/",
}: Props): JSX.Element => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center px-4 py-8"
      style={{ backgroundColor: "#f5f0e8" }}
    >
      {/* Wizard Robot Illustration */}
      <div className="mb-8 flex justify-center">
        <img
          src="/images/error-404-wizard.svg"
          alt="Wizard robot - 404 Not Found"
          className="h-[300px] w-auto object-contain"
        />
      </div>

      {/* Error Code */}
      <div className="mb-2 text-center">
        <h1 className="font-primary-black text-6xl text-font">404</h1>
      </div>

      {/* Main Heading */}
      <div className="mb-4 text-center">
        <h2 className="font-primary-bold text-2xl text-font">
          Page Not Found
        </h2>
      </div>

      {/* Description */}
      <div className="mb-8 max-w-[500px] text-center">
        <p className="font-primary text-font-subtle">{message}</p>
        <p className="mt-2 font-primary-light text-sm text-font-subtlest">
          Looks like a wizard cast a spell and made this page disappear.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={href}
          className="flex cursor-pointer items-center justify-center gap-2 rounded px-6 py-2 text-lg font-primary text-font-inverse hover:opacity-90 active:opacity-75"
          style={{ backgroundColor: "var(--color-background-brand-bold)" }}
        >
          Go Home
        </a>
        <Button
          onClick={handleGoBack}
          color="neutral"
          variant="subtlest"
          size="lg"
          className="px-6"
        >
          Go Back
        </Button>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
