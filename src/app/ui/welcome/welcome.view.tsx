import { Link } from "@remix-run/react";
import {
  HiOutlineViewBoards,
  HiOutlineCollection,
} from "react-icons/hi";
import { MdOutlinePalette, MdKeyboard } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "@app/components/button";

/* ─────────────────────────────────────────────
   WelcomeNav — standalone top bar (no user ctx)
───────────────────────────────────────────── */
const WelcomeNav = ({ ctaHref }: { ctaHref: string }): JSX.Element => (
  <header className="flex w-full items-center justify-between bg-elevation-surface-raised px-6 py-3 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
    <Link
      to="/"
      className="flex cursor-pointer items-center rounded px-2 py-1.5 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
    >
      <img src="/images/logo.png" width={24} height={24} alt="Logo" />
      <span className="ml-2 font-primary-bold">Jira Clone</span>
    </Link>
    <nav className="flex items-center gap-3">
      <a
        href="https://github.com/daniserrano7/jira-clone"
        className="flex items-center gap-1.5 text-font-subtle hover:text-font-brand"
        aria-label="View on GitHub"
      >
        <AiFillGithub size={22} />
        <span className="font-primary-light text-sm">GitHub</span>
      </a>
      <Link to={ctaHref}>
        <Button color="primary" variant="contained" size="md" className="px-5">
          Get Started
        </Button>
      </Link>
    </nav>
  </header>
);

/* ─────────────────────────────────────────────
   Feature cards data
───────────────────────────────────────────── */
interface FeatureCardData {
  icon: JSX.Element;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

const features: FeatureCardData[] = [
  {
    icon: <HiOutlineViewBoards size={28} />,
    title: "Kanban Board",
    description:
      "Drag and drop issues across TODO, In Progress, and Done columns. Changes stream in real time across all open tabs via Server-Sent Events.",
    image: "/images/readme/project.png",
    imageAlt: "Kanban board screenshot",
  },
  {
    icon: <HiOutlineCollection size={28} />,
    title: "Issue Management",
    description:
      "Create, edit, and delete issues with priorities (Low / Medium / High), assignees, rich descriptions, and threaded comments.",
    image: "/images/readme/issue-panel.png",
    imageAlt: "Issue panel screenshot",
  },
  {
    icon: <MdOutlinePalette size={28} />,
    title: "Multiple Themes",
    description:
      "Switch between Light, Dark, Lava, Lime, and Barbie themes. Every colour is driven by semantic CSS tokens — no hard-coded values.",
    image: "/images/readme/login-dark.png",
    imageAlt: "Dark theme screenshot",
  },
  {
    icon: <MdKeyboard size={28} />,
    title: "Keyboard Shortcuts",
    description:
      "Move fast with built-in shortcuts. Press Shift + N to create an issue anywhere on the board, Shift + S to save changes instantly.",
    image: "/images/readme/projects.png",
    imageAlt: "Projects page screenshot",
  },
];

/* ─────────────────────────────────────────────
   FeatureCard
───────────────────────────────────────────── */
const FeatureCard = ({
  icon,
  title,
  description,
  image,
  imageAlt,
}: FeatureCardData): JSX.Element => (
  <div className="flex flex-col overflow-hidden rounded bg-elevation-surface-raised shadow-sm outline outline-2 outline-transparent duration-150 hover:-translate-y-0.5 hover:shadow-md hover:outline-border-brand">
    {image && (
      <div className="h-40 w-full overflow-hidden bg-elevation-surface-sunken">
        <img
          src={image}
          alt={imageAlt ?? title}
          className="h-full w-full object-cover object-top"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col gap-2 p-5">
      <span className="text-font-brand">{icon}</span>
      <h3 className="font-primary-bold text-lg text-font">{title}</h3>
      <p className="font-primary-light text-sm leading-relaxed text-font-subtle">
        {description}
      </p>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   WelcomeView — main page
───────────────────────────────────────────── */
export const WelcomeView = ({ ctaHref }: Props): JSX.Element => (
  <div className="flex min-h-full flex-col bg-elevation-surface">
    <WelcomeNav ctaHref={ctaHref} />

    {/* Hero */}
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-16 pt-12 text-center">
      {/* Mascot with float animation */}
      <div
        className="mb-8 select-none"
        style={{
          animation: "welcome-float 3.5s ease-in-out infinite",
        }}
      >
        <img
          src="/images/wizard-bot.png"
          alt="Jira Clone mascot — a friendly wizard robot"
          width={220}
          height={220}
          className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
        />
      </div>

      <h1 className="font-primary-black text-5xl leading-tight">
        <span className="text-font-danger">Your project board,</span>{" "}
        <span className="text-font-brand">reimagined.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl font-primary-light text-xl text-font-subtle">
        A Jira-inspired project management tool built with Remix, React, and
        Tailwind CSS. Drag issues, track priorities, and collaborate in real
        time.
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Link to={ctaHref}>
          <Button
            color="primary"
            variant="contained"
            size="lg"
            className="px-10 py-3 text-base"
          >
            Get Started →
          </Button>
        </Link>
        <a
          href="https://github.com/daniserrano7/jira-clone"
          className="flex items-center gap-2 font-primary text-font-subtle hover:text-font-brand"
        >
          <AiFillGithub size={20} />
          View on GitHub
        </a>
      </div>

      {/* Mascot attribution hint */}
      <p className="mt-6 font-primary-light text-xs text-font-subtlest">
        No auth required — just pick a user and start exploring.
      </p>
    </section>

    {/* Feature cards */}
    <section className="mx-auto w-full max-w-5xl px-6 pb-20">
      <h2 className="mb-2 text-center font-primary-black text-2xl text-font">
        Everything you need to ship
      </h2>
      <p className="mb-10 text-center font-primary-light text-base text-font-subtle">
        A full-featured project tracker you can spin up locally in minutes.
      </p>
      <div className="grid grid-cols-2 gap-6">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer className="mt-auto border-t border-border py-6 text-center font-primary-light text-xs text-font-subtlest">
      Built with Remix · React · Tailwind · Radix UI &nbsp;|&nbsp;{" "}
      <a
        href="https://github.com/daniserrano7/jira-clone"
        className="underline hover:text-font-brand"
      >
        Open Source on GitHub
      </a>
    </footer>

    {/* Float keyframe injected inline so it works without modifying tailwind.config */}
    <style>{`
      @keyframes welcome-float {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-14px); }
      }
    `}</style>
  </div>
);

interface Props {
  /** Where the "Get Started" button points — /login or /projects */
  ctaHref: string;
}
