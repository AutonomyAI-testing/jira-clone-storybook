import { Button } from "../button";

export const Error404Page = (): JSX.Element => {
  const handleNavigate = () => {
    // Safely navigate to dashboard only in browser environment
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm">
        {/* Illustration */}
        <img
          src="/images/error-404-wizard.svg"
          alt="Wizard robot character looking confused"
          className="mx-auto h-auto w-full max-w-xs sm:max-w-sm"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center">
        {/* 404 Heading */}
        <h1
          className="text-7xl font-primary-black leading-none"
          style={{ color: "var(--color-font)" }}
        >
          404
        </h1>

        {/* Page Title */}
        <h2 className="text-2xl font-primary-bold sm:text-3xl" style={{ color: "red" }}>
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p
          className="max-w-md text-lg font-primary-light leading-relaxed"
          style={{ color: "var(--color-font-subtle)" }}
        >
          Looks like this page wandered into the void. Our wizard is investigating, but in the
          meantime, let's get you back to safety.
        </p>

        {/* CTA Button */}
        <Button color="primary" size="lg" onClick={handleNavigate}>
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};
