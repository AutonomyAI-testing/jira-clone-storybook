import { WizardRobot } from "@app/components/wizard-robot";
import { Button } from "@app/components/button";
import { Link } from "@remix-run/react";

export default function NotFound404Route(): JSX.Element {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center" style={{ background: "#e8dcc8" }}>
      <div className="flex flex-col items-center justify-center gap-8 px-4 py-12 text-center sm:gap-10">
        {/* Wizard Robot Illustration */}
        <div className="w-full max-w-sm">
          <WizardRobot width="100%" height="100%" />
        </div>

        {/* 404 Heading */}
        <div className="space-y-4">
          <h1
            className="text-9xl font-primary-black leading-none"
            style={{ color: "var(--Blue700)" }}
          >
            404
          </h1>

          {/* Tagline */}
          <h2
            className="text-2xl font-primary-bold"
            style={{ color: "var(--Red700)" }}
          >
            Oops! This page got lost in the spell.
          </h2>

          {/* Sub-copy */}
          <p
            className="mx-auto max-w-md text-lg"
            style={{ color: "var(--Neutral700)" }}
          >
            Looks like our wizard bot conjured up a page that doesn't exist. Let's get
            you back on track.
          </p>
        </div>

        {/* CTA Button */}
        <Link to="/">
          <Button color="primary" variant="contained" size="lg">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
