import { Link } from "@remix-run/react";
import { HiOutlineViewBoards } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsListNested } from "react-icons/bs";
import { Button } from "@app/components/button";

const features = [
  {
    icon: HiOutlineViewBoards,
    title: "Kanban Boards",
    description: "Visualise work in progress with drag-and-drop columns.",
  },
  {
    icon: BsListNested,
    title: "Issue Tracking",
    description: "Create, assign and prioritise issues across every project.",
  },
  {
    icon: BiSearch,
    title: "Powerful Filters",
    description: "Search and filter issues by priority, status, or assignee.",
  },
];

export const WelcomeView = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Jira Clone logo"
          className="h-10 w-auto"
        />

        {/* Mascot hero */}
        <img
          src="/images/mascot.png"
          alt="Wizard mascot"
          className="w-64 select-none drop-shadow-lg sm:w-72"
          draggable={false}
        />

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <h1 className="font-primary-black text-4xl text-font sm:text-5xl">
            Welcome to Jira Clone
          </h1>
          <p className="max-w-sm font-primary-light text-lg text-font-subtle">
            A fully featured project management tool — track issues, manage
            boards, and ship faster with your team.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Link to="/login">
            <Button
              variant="contained"
              color="primary"
              size="md"
              className="px-8"
              aria-label="Get started"
            >
              Get Started
            </Button>
          </Link>
          <Link
            to="/projects"
            className="font-primary text-sm text-font-subtle underline-offset-4 hover:text-font hover:underline"
          >
            Already have an account? Browse projects →
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-2 rounded-lg bg-elevation-overlay px-5 py-4 text-center shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-brand-subtlest text-font-brand">
                <Icon size={22} />
              </span>
              <p className="font-primary-bold text-sm text-font">{title}</p>
              <p className="font-primary-light text-xs text-font-subtle">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
