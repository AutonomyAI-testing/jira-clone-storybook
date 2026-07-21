import { Link } from "@remix-run/react";
import cx from "classix";
import {
  HiOutlineViewBoards,
  HiOutlineRefresh,
  HiOutlineColorSwatch,
  HiOutlineChatAlt,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiRemix,
  SiTailwindcss,
  SiPrisma,
  SiSqlite,
} from "react-icons/si";
import { MdDragIndicator } from "react-icons/md";

const FEATURES = [
  {
    icon: HiOutlineViewBoards,
    title: "Kanban Board",
    description:
      "Visualize your workflow with a beautiful drag-and-drop board. Move issues between TODO, IN PROGRESS, and DONE columns.",
    color: "text-font-brand",
    bg: "bg-background-brand-subtlest",
  },
  {
    icon: HiOutlineRefresh,
    title: "Real-time Updates",
    description:
      "Changes sync instantly across all open tabs using Server-Sent Events. Collaborate without ever needing to refresh.",
    color: "text-font-success",
    bg: "bg-background-success",
  },
  {
    icon: HiOutlineColorSwatch,
    title: "Multi-theme Support",
    description:
      "Switch between 5 carefully crafted themes — light, dark, lava, lime, and barbie. Your preferences are remembered.",
    color: "text-font-warning",
    bg: "bg-background-warning",
  },
  {
    icon: MdDragIndicator,
    title: "Issue Management",
    description:
      "Create, edit, and delete issues with priorities, assignees, and descriptions. Full CRUD with server-side validation.",
    color: "text-font-danger",
    bg: "bg-background-danger",
  },
  {
    icon: HiOutlineChatAlt,
    title: "Team Collaboration",
    description:
      "Comment on issues, assign team members to projects, and view activity threads — built for teams of any size.",
    color: "text-font-info",
    bg: "bg-background-info",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Accessibility First",
    description:
      "Built with Radix UI for accessible-by-default components. Keyboard shortcuts, ARIA labels, and screen reader support throughout.",
    color: "text-font-brand",
    bg: "bg-background-brand-subtlest",
  },
];

const TECH_STACK = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiRemix, name: "Remix", color: "var(--color-font)" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiPrisma, name: "Prisma", color: "var(--color-font-brand)" },
  { icon: SiSqlite, name: "SQLite", color: "#003B57" },
];

export const WelcomeView = ({ isLoggedIn }: Props): JSX.Element => {
  return (
    <div className="flex min-h-full flex-col bg-elevation-surface">
      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-6 py-3 bg-elevation-surface-raised shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" width={24} height={24} alt="Jira Clone logo" />
          <span className="font-primary-bold text-font">Jira Clone</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/daniserrano7/jira-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded px-3 py-1.5 text-sm text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
            aria-label="View source on GitHub"
          >
            <FiGithub size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          {isLoggedIn ? (
            <Link
              to="/projects"
              className="flex items-center gap-1.5 rounded bg-background-brand-bold px-4 py-1.5 text-sm font-primary-bold text-font-inverse hover:bg-background-brand-bold-hovered"
            >
              Go to Projects <FiArrowRight size={14} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 rounded bg-background-brand-bold px-4 py-1.5 text-sm font-primary-bold text-font-inverse hover:bg-background-brand-bold-hovered"
            >
              Get Started <FiArrowRight size={14} />
            </Link>
          )}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="flex flex-col items-center justify-center gap-8 px-6 py-20 text-center">
        <img
          src="/images/wizard-mascot.png"
          alt="Wizard mascot"
          className="h-52 w-auto drop-shadow-lg"
        />
        <div className="max-w-2xl">
          <h1 className="font-primary-black text-5xl leading-tight text-font sm:text-6xl">
            <span className="text-font-danger">Project Management</span>{" "}
            <span className="text-font-brand">Magic</span>
          </h1>
          <p className="mt-4 font-primary-light text-xl text-font-subtle">
            Keep your team in sync. Collaborate in real-time. Ship faster.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {isLoggedIn ? (
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded bg-background-brand-bold px-8 py-3 font-primary-bold text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
            >
              Go to Projects <FiArrowRight size={20} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded bg-background-brand-bold px-8 py-3 font-primary-bold text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
            >
              Get Started <FiArrowRight size={20} />
            </Link>
          )}
          <a
            href="https://github.com/daniserrano7/jira-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded border border-border px-8 py-3 font-primary text-lg text-font hover:bg-background-neutral-hovered"
          >
            <FiGithub size={20} />
            View Source
          </a>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-6 py-16 bg-elevation-surface-sunken">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center font-primary-black text-3xl text-font">
            Everything you need to ship
          </h2>
          <p className="mb-12 text-center font-primary-light text-font-subtle">
            A full-featured project management experience in a clean, accessible interface.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded bg-elevation-surface-raised p-6 shadow-sm"
              >
                <div
                  className={cx(
                    "flex h-10 w-10 items-center justify-center rounded",
                    bg
                  )}
                >
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-primary-bold text-font">{title}</h3>
                <p className="font-primary-light text-sm text-font-subtle leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-center font-primary-black text-3xl text-font">
            Built with modern tools
          </h2>
          <p className="mb-10 text-center font-primary-light text-font-subtle">
            Open source and proudly built with the best of the JavaScript ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {TECH_STACK.map(({ icon: Icon, name, color }) => (
              <div
                key={name}
                className="flex items-center gap-2.5 rounded border border-border bg-elevation-surface-raised px-5 py-3 shadow-sm"
              >
                <Icon size={22} color={color} aria-hidden="true" />
                <span className="font-primary text-font">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-6 py-16 bg-background-brand-subtlest">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <HiOutlineUserGroup size={48} className="text-font-brand" />
          <h2 className="font-primary-black text-3xl text-font">
            Ready to get organized?
          </h2>
          <p className="font-primary-light text-font-subtle">
            No account required. Pick a character and start managing your projects in seconds.
          </p>
          {isLoggedIn ? (
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded bg-background-brand-bold px-8 py-3 font-primary-bold text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
            >
              Open Projects <FiArrowRight size={20} />
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded bg-background-brand-bold px-8 py-3 font-primary-bold text-lg text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
            >
              Start for Free <FiArrowRight size={20} />
            </Link>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="flex flex-col items-center gap-2 px-6 py-8 text-center bg-elevation-surface-raised">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" width={18} height={18} alt="" aria-hidden="true" />
          <span className="font-primary text-sm text-font-subtle">Jira Clone</span>
        </div>
        <p className="font-primary-light text-xs text-font-subtlest">
          A side project by{" "}
          <a
            href="https://github.com/daniserrano7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-font-brand hover:underline"
          >
            Daniel Serrano
          </a>
          . Inspired by Atlassian Jira.
        </p>
        <p className="font-primary-light text-xs text-font-subtlest">
          Built with React, Remix, TypeScript and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

interface Props {
  isLoggedIn: boolean;
}
