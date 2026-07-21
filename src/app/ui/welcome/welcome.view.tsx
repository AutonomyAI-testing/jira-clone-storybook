import { Link } from "@remix-run/react";
import { MdChecklist, MdPeople, MdDragIndicator, MdSync } from "react-icons/md";
import { Button } from "@app/components/button";

const features = [
  {
    icon: <MdChecklist size={24} />,
    title: "Issue Tracking",
    description:
      "Create, assign, and prioritize issues to keep your team aligned on what matters most.",
  },
  {
    icon: <MdDragIndicator size={24} />,
    title: "Drag & Drop Board",
    description:
      "Move issues through workflow states — TODO, IN PROGRESS, DONE — with a simple drag.",
  },
  {
    icon: <MdPeople size={24} />,
    title: "Team Collaboration",
    description:
      "Add team members to projects, assign work, and leave comments for seamless collaboration.",
  },
  {
    icon: <MdSync size={24} />,
    title: "Real-time Updates",
    description:
      "See your teammates' changes reflected live without ever needing to refresh the page.",
  },
];

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex min-h-full flex-col bg-elevation-surface">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center px-8 pb-16 pt-12 text-center">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 md:text-left">
          {/* Mascot */}
          <div className="flex-shrink-0 animate-fade-slide-up">
            <img
              src="/images/welcome-mascot.png"
              alt="Jira Clone mascot"
              className="h-[280px] w-[280px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Hero text */}
          <div className="flex max-w-[500px] flex-col gap-6 animate-fade-slide-up-delay-1">
            <div className="flex flex-col gap-3">
              <h1 className="font-primary-black text-5xl leading-tight text-font-danger">
                Project management,{" "}
                <span className="text-font-danger">simplified.</span>
              </h1>
              <p className="font-primary-light text-lg leading-relaxed text-font-subtle">
                A lightweight, pragmatic Jira clone for distributed teams.
                Organize work, track progress, and collaborate in real time —
                without the enterprise bloat.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/projects">
                <Button color="primary" variant="contained" size="lg">
                  Go to Projects
                </Button>
              </Link>
              <Link to="/login">
                <Button color="neutral" variant="subtlest" size="lg">
                  Switch User
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-primary-black text-2xl text-font">
                  10+
                </span>
                <span className="font-primary-light text-sm text-font-subtle">
                  Team members
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-primary-black text-2xl text-font">
                  4
                </span>
                <span className="font-primary-light text-sm text-font-subtle">
                  Sample projects
                </span>
              </div>
              <div className="h-10 w-px bg-border" />
              <div className="flex flex-col">
                <span className="font-primary-black text-2xl text-font">
                  Live
                </span>
                <span className="font-primary-light text-sm text-font-subtle">
                  Real-time sync
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-elevation-surface-sunken px-8 py-12">
        <div className="mx-auto max-w-[960px]">
          <h2 className="mb-8 text-center font-primary-black text-2xl text-font">
            Everything your team needs
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 rounded bg-elevation-surface-raised p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded bg-background-brand-subtlest text-icon-brand">
                  {feature.icon}
                </div>
                <h3 className="font-primary-bold text-sm text-font">
                  {feature.title}
                </h3>
                <p className="font-primary-light text-sm leading-relaxed text-font-subtle">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-12 text-center">
        <div className="mx-auto max-w-[560px] flex flex-col items-center gap-4">
          <h2 className="font-primary-black text-3xl text-font">
            Ready to get started?
          </h2>
          <p className="font-primary-light text-base text-font-subtle">
            Jump straight into your projects or explore the board with pre-loaded sample data.
          </p>
          <Link to="/projects" className="mt-2">
            <Button color="primary" variant="contained" size="lg">
              View Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
