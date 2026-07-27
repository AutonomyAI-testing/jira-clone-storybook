import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-6 py-12 text-center">
      {/* Mascot */}
      <img
        src="/images/mascot.png"
        alt="Wizard robot mascot"
        className="mb-8 h-56 w-auto select-none"
        draggable={false}
      />

      {/* Heading */}
      <h1 className="font-primary-black text-5xl text-icon-accent-red">
        Welcome to Jira Clone
      </h1>

      {/* Subheading */}
      <p className="mt-4 max-w-lg font-primary-light text-lg text-font-subtle">
        A pragmatic project management tool for teams. Organize work into
        issues, track progress across columns, collaborate with your team in
        real time.
      </p>

      {/* CTA buttons */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link to="/login">
          <Button size="lg" color="primary" variant="contained" className="min-w-[160px]">
            Get started
          </Button>
        </Link>
        <Link to="/projects">
          <Button size="lg" color="neutral" variant="subtlest" className="min-w-[160px]">
            View projects
          </Button>
        </Link>
      </div>

      {/* Feature chips */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {FEATURES.map(({ label, emoji }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded bg-elevation-surface-raised px-4 py-2 shadow-xs"
          >
            <span className="text-xl" aria-hidden>{emoji}</span>
            <span className="font-primary text-sm text-font-subtle">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const FEATURES = [
  { emoji: "🗂️", label: "Kanban boards" },
  { emoji: "🏷️", label: "Priority labels" },
  { emoji: "💬", label: "Team comments" },
  { emoji: "⚡", label: "Real-time updates" },
  { emoji: "🎨", label: "Multiple themes" },
  { emoji: "🔒", label: "Role-based access" },
];
