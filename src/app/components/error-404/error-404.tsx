import { Button } from "@app/components/button";

export const Error404 = (
  { message = "Oops! Page Not Found", href = "/" }: Props,
): JSX.Element => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex max-w-[600px] flex-col items-center text-center">
        {/* Illustration */}
        <img
          src="/images/error-404.svg"
          alt="404 - Page not found"
          className="mb-8 h-[350px] w-auto"
        />

        {/* Large 404 Number */}
        <div className="mb-6 font-primary-black text-[120px] text-font-brand">
          404
        </div>

        {/* Heading */}
        <h1 className="mb-4 font-primary-black text-2xl" style={{ color: "#ef4444" }}>
          {message}
        </h1>

        {/* Subtitle */}
        <p className="mb-8 font-primary-light text-font-subtle">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* CTA Button */}
        <Button
          color="primary"
          variant="contained"
          onClick={() => (window.location.href = href)}
        >
          Go back home
        </Button>
      </div>
    </div>
  );
};

interface Props {
  message?: string;
  href?: string;
}
