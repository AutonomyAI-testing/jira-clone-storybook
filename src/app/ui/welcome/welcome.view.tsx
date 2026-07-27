import { Link } from "@remix-run/react";
import { MdOutlineViewKanban } from "react-icons/md";
import { BsChatDots, BsPeople, BsLightningCharge } from "react-icons/bs";
import { Button } from "@app/components/button";

const features = [
  {
    icon: <MdOutlineViewKanban size={20} />,
    title: "Kanban board",
    description: "Drag-and-drop issues across workflow columns in real time.",
  },
  {
    icon: <BsPeople size={20} />,
    title: "Team collaboration",
    description: "Assign team members, track capacity, and share projects.",
  },
  {
    icon: <BsChatDots size={20} />,
    title: "Comments & activity",
    description: "Discuss issues with your team directly inside each card.",
  },
  {
    icon: <BsLightningCharge size={20} />,
    title: "Live updates",
    description:
      "Changes broadcast instantly to all open sessions — no refresh needed.",
  },
];

export const WelcomeView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-elevation-surface">
      {/* Hero Section */}
      <main className="mx-auto flex w-full max-w-[900px] flex-1 flex-col items-center px-6 pb-16 pt-16 md:flex-row md:items-center md:gap-12 md:pt-24">
        {/* Left: Text Content */}
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          {/* Eyebrow */}
          <span className="mb-4 inline-flex items-center gap-1.5 rounded bg-background-brand-subtlest px-3 py-1 font-primary text-xs text-font-brand">
            <img
              src="/images/logo.png"
              width={14}
              height={14}
              alt="Jira Clone logo"
            />
            Jira Clone
          </span>

          {/* Headline */}
          <h1 className="font-primary-black text-4xl text-font">
            <span className="text-font-danger">Your team's work,</span>{" "}
            <span className="text-font-brand">organised.</span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-4 font-primary-light text-base text-font-subtle">
            A lightweight project management tool inspired by Jira. Create
            projects, assign issues, track priorities, and collaborate — all in
            one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/login">
              <Button size="lg" color="primary" variant="contained">
                Get started
              </Button>
            </Link>
            <a
              href="https://github.com/daniserrano7/jira-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" color="neutral" variant="subtlest">
                View on GitHub
              </Button>
            </a>
          </div>

          {/* Feature Grid */}
          <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-3 rounded border border-border bg-elevation-surface-raised p-4 shadow-xs"
              >
                <span className="mt-0.5 flex-shrink-0 text-icon-brand">
                  {feature.icon}
                </span>
                <div>
                  <p className="font-primary-bold text-sm text-font">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 font-primary-light text-sm text-font-subtle">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mascot Illustration */}
        <div className="mt-12 flex flex-shrink-0 justify-center md:mt-0">
          <img
            src="/images/wizard-mascot.png"
            alt="Wizard robot mascot"
            className="h-auto w-[280px] drop-shadow-lg md:w-[320px]"
            draggable={false}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-5 text-center font-primary-light text-sm text-font-subtlest">
        Built with Remix, React, Tailwind &amp; TypeScript ·{" "}
        <a
          href="https://github.com/daniserrano7/jira-clone"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link hover:underline"
        >
          Open source
        </a>
      </footer>
    </div>
  );
};
