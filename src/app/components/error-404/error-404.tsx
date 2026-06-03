import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

// Default redirect destination when user clicks the CTA button
const DEFAULT_REDIRECT_HREF = "/projects";

export const Error404 = ({ href = DEFAULT_REDIRECT_HREF }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex max-w-[480px] flex-col items-center gap-6 text-center">
        {/* Illustration: Wizard robot SVG showing a lost robot character */}
        <img
          src="/images/error-404.svg"
          alt="Wizard robot illustration"
          className="h-[280px] w-auto"
        />
        {/* Large error code */}
        <h1 className="font-primary-black text-[80px] leading-none text-font-danger">
          404
        </h1>
        {/* Main heading */}
        <h2 className="font-primary-black text-3xl text-font-danger">
          Page Not Found
        </h2>
        {/* Supporting text explaining the error and using wizard theme */}
        <p className="font-primary-light text-lg text-font-subtle">
          Oops! Looks like this wizard-bot lost the map. The page you're looking
          for doesn't exist or has been moved.
        </p>
        {/* CTA */}
        <Link to={href}>
          <Button color="primary" variant="contained" size="lg">
            Go to Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export interface Props {
  href?: string;
}
