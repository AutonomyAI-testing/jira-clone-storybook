import { Button } from "../button";

// Message shown in the error page
const ERROR_MESSAGE = "Take Me Home";

export const Error404 = ({ cta_href = "/" }: Props): JSX.Element => {
  return (
    <div className="bg-color-elevation-surface flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center">
      {/* Mascot Illustration */}
      <img
        src="/images/error-404-mascot.jpg"
        alt="Wizard robot mascot"
        className="mb-8 h-auto max-w-xs"
        style={{ maxHeight: "320px" }}
      />

      {/* 404 Heading */}
      <h1 className="mb-2 font-primary-black text-[7rem] leading-none text-font">
        404
      </h1>

      {/* Subheading — uses red (--Red700) to highlight the error and draw attention */}
      <h2
        className="mb-4 font-primary-bold text-2xl"
        style={{ color: "var(--Red700)" }}
      >
        Oops! This page has vanished into the void.
      </h2>

      {/* Body Text */}
      <p className="mb-8 max-w-md text-lg text-font-subtle">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>

      {/* CTA Button */}
      <a href={cta_href}>
        <Button color="primary" variant="contained" size="lg">
          {ERROR_MESSAGE}
        </Button>
      </a>
    </div>
  );
};

interface Props {
  cta_href?: string;
}
