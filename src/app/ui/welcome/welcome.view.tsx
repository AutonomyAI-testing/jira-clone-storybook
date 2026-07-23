import { Link } from "@remix-run/react";
import { MdDashboard } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { BiPalette } from "react-icons/bi";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Button } from "@app/components/button";

const features = [
  {
    icon: <MdDashboard size={28} />,
    title: "Kanban Boards",
    description:
      "Visualise your workflow with drag-and-drop boards. Move issues across statuses in seconds.",
  },
  {
    icon: <HiUsers size={28} />,
    title: "Team Collaboration",
    description:
      "Assign issues, leave comments, and track who's working on what — all in one place.",
  },
  {
    icon: <BiPalette size={28} />,
    title: "Multiple Themes",
    description:
      "Switch between Light, Dark, Lava, Lime, and Barbie themes to make it your own.",
  },
];

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col bg-elevation-surface">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-border px-8 py-4">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Jira Clone logo" className="h-7 w-7" />
          <span className="font-primary-bold text-lg text-font">
            Jira Clone
          </span>
        </div>
        <Link to="/login">
          <Button variant="text" color="primary" size="md">
            Login
          </Button>
        </Link>
      </header>

      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-16 md:text-left">
          {/* Mascot */}
          <div className="shrink-0">
            <img
              src="/images/wizard-robot.png"
              alt="Jira Clone wizard mascot"
              className="h-56 w-56 drop-shadow-lg md:h-72 md:w-72"
            />
          </div>

          {/* Text + CTA */}
          <div className="flex flex-col items-center gap-5 md:items-start">
            <h1 className="font-primary-black text-4xl leading-tight text-font md:text-6xl">
              Manage projects
              <br />
              <span className="text-font-brand">with magic.</span>
            </h1>
            <p className="max-w-md font-primary-light text-lg text-font-subtle">
              A Jira-inspired task manager built with Remix, React, and
              Tailwind. Plan sprints, track issues, and collaborate — all in
              your browser.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/login">
                <Button color="primary" variant="contained" size="lg">
                  Get Started →
                </Button>
              </Link>
              <a
                href="https://github.com/daniserrano7/jira-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="neutral" variant="subtlest" size="lg">
                  <FiGithub size={18} />
                  GitHub
                </Button>
              </a>
              <a
                href="https://jira-clone.fly.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="neutral" variant="subtlest" size="lg">
                  <FiExternalLink size={18} />
                  Live Demo
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid w-full max-w-4xl gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-elevation-surface-raised p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background-brand-subtlest text-icon-brand">
                {feature.icon}
              </span>
              <h3 className="font-primary-bold text-font">{feature.title}</h3>
              <p className="font-primary-light text-sm text-font-subtle">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-5 text-center">
        <p className="font-primary-light text-sm text-font-subtlest">
          Built with ❤️ using Remix · React · Tailwind · TypeScript
        </p>
      </footer>
    </div>
  );
};
