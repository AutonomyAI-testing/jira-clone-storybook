import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      <div className="flex flex-col items-center text-center">
        {/* App logo */}
        <div className="mb-6 flex items-center gap-2">
          <img src="/images/logo.png" width={36} height={36} alt="Jira Clone logo" />
          <span className="font-primary text-xl text-font">Jira Clone</span>
        </div>

        {/* Mascot */}
        <img
          src="/images/wizard-mascot.png"
          alt="Wizard robot mascot"
          className="mb-6 h-[300px] w-auto select-none"
        />

        {/* Headline */}
        <h1 className="font-primary-black text-5xl text-font-danger">
          Welcome!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 max-w-[420px] font-primary-light text-lg text-font-subtle">
          Your collaborative hub for tracking issues, managing projects, and
          shipping great software together.
        </p>

        {/* CTA */}
        <Link to="/projects" className="mt-8">
          <Button color="primary" size="lg" aria-label="Go to your projects">
            Go to your projects
          </Button>
        </Link>
      </div>
    </div>
  );
};
