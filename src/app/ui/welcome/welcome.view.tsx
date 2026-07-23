import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6">
      {/* Mascot illustration */}
      <div className="mb-8 flex items-center justify-center">
        <img
          src="/images/mascot-wizard.png"
          alt="Wizard mascot"
          className="h-72 w-auto select-none"
          draggable={false}
        />
      </div>

      {/* Headline */}
      <h1 className="mb-4 text-center font-primary-black text-5xl text-font-danger">
        Welcome to Jira Clone
      </h1>

      {/* Subtitle */}
      <p className="mb-10 max-w-md text-center font-primary-light text-lg text-font-subtle">
        A simplified project management tool to organize your team's work,
        track issues, and collaborate in real-time.
      </p>

      {/* Feature highlights */}
      <div className="mb-10 flex flex-wrap justify-center gap-4">
        <FeatureChip icon="📋" label="Kanban boards" />
        <FeatureChip icon="🔄" label="Real-time updates" />
        <FeatureChip icon="👥" label="Team collaboration" />
        <FeatureChip icon="🎯" label="Priority tracking" />
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link to="/login">
          <Button size="lg" color="primary" variant="contained">
            Get started
          </Button>
        </Link>
        <Link to="/projects">
          <Button size="lg" color="primary" variant="subtlest">
            View projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

interface FeatureChipProps {
  icon: string;
  label: string;
}

const FeatureChip = ({ icon, label }: FeatureChipProps) => (
  <div className="flex items-center gap-2 rounded bg-background-brand-subtlest px-4 py-2">
    <span className="text-lg" aria-hidden="true">
      {icon}
    </span>
    <span className="font-primary text-sm text-font-brand">{label}</span>
  </div>
);
