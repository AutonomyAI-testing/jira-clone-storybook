import { Link } from "@remix-run/react";
import { HiOutlineViewBoards } from "react-icons/hi";
import { ImStatsDots } from "react-icons/im";
import { MdLightMode } from "react-icons/md";
import { BsLightningChargeFill, BsPeopleFill } from "react-icons/bs";
import { HiFlag } from "react-icons/hi";
import { FaCheckSquare } from "react-icons/fa";
import { Button } from "@app/components/button";

// ─── Tiny helpers (no context / no routing dependencies) ──────────────────────

const TaskIcon = ({ size = 16 }: { size?: number }) => (
  <span className="relative flex items-center before:absolute before:inset-1/2 before:h-3/4 before:w-3/4 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white">
    <FaCheckSquare fill="#4BADE8" className="relative" size={size} />
  </span>
);

type PriorityColor = "text-icon-accent-green" | "text-icon-accent-yellow" | "text-icon-accent-red";
const PriorityIcon = ({
  priority,
}: {
  priority: "low" | "medium" | "high";
}) => {
  const colors: Record<string, PriorityColor> = {
    low: "text-icon-accent-green",
    medium: "text-icon-accent-yellow",
    high: "text-icon-accent-red",
  };
  return (
    <span className={`flex ${colors[priority]}`}>
      <HiFlag size={14} />
    </span>
  );
};

// ─── Static issue card (no Link / no drag — safe for welcome page) ────────────

interface StaticIssueCardProps {
  name: string;
  priority: "low" | "medium" | "high";
  idPrefix: string;
}

const StaticIssueCard = ({ name, priority, idPrefix }: StaticIssueCardProps) => (
  <div className="flex w-full cursor-default flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs">
    <p className="line-clamp-2 min-h-[40px] w-full text-xs text-font">{name}</p>
    <div className="flex items-center justify-between pt-3">
      <span className="flex items-center gap-1.5">
        <TaskIcon size={14} />
        <span className="text-2xs text-font-subtlest">{idPrefix}</span>
      </span>
      <PriorityIcon priority={priority} />
    </div>
  </div>
);

// ─── Kanban column ─────────────────────────────────────────────────────────────

interface KanbanColumnProps {
  title: string;
  badge?: number;
  cards: StaticIssueCardProps[];
}

const KanbanColumn = ({ title, badge, cards }: KanbanColumnProps) => (
  <div className="flex w-[200px] min-w-[200px] flex-col rounded-md bg-elevation-surface-sunken">
    <div className="px-3 py-2 font-primary-light text-xs uppercase text-font-subtlest">
      <span className="flex gap-2">
        <span>{title}</span>
        {badge ? <span>( {badge} )</span> : null}
      </span>
    </div>
    <ul className="mt-1 flex flex-col gap-2 px-3 pb-3">
      {cards.map((card, i) => (
        <li key={i}>
          <StaticIssueCard {...card} />
        </li>
      ))}
    </ul>
  </div>
);

// ─── Feature card ──────────────────────────────────────────────────────────────

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="flex flex-col gap-3 rounded-md bg-elevation-surface-raised p-6 shadow-sm outline outline-2 outline-transparent">
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background-brand-subtlest text-font-brand">
      {icon}
    </span>
    <h3 className="font-primary-bold text-base text-font">{title}</h3>
    <p className="font-primary-light text-sm leading-relaxed text-font-subtle">{description}</p>
  </div>
);

// ─── Welcome view ──────────────────────────────────────────────────────────────

export const WelcomeView = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <HiOutlineViewBoards size={22} />,
      title: "Kanban Boards",
      description:
        "Visualise your work with drag-and-drop kanban columns. Move issues between To Do, In Progress and Done with a single drag.",
    },
    {
      icon: <BsPeopleFill size={20} />,
      title: "Issue Tracking",
      description:
        "Create, assign and prioritise issues. Add comments, change statuses and track every detail from one clean panel.",
    },
    {
      icon: <BsLightningChargeFill size={20} />,
      title: "Real-Time Updates",
      description:
        "All changes are streamed instantly. Open the same project in two tabs and watch updates appear without a refresh.",
    },
    {
      icon: <MdLightMode size={22} />,
      title: "Multiple Themes",
      description:
        "Switch between Light, Dark, Lava, Lime and Barbie themes. The whole app re-skins instantly without a page reload.",
    },
  ];

  const todoCards: StaticIssueCardProps[] = [
    { name: "Add dark mode toggle to header", priority: "medium", idPrefix: "JC-14" },
    { name: "Set up database migrations", priority: "high", idPrefix: "JC-15" },
  ];

  const inProgressCards: StaticIssueCardProps[] = [
    { name: "Build kanban drag-and-drop", priority: "high", idPrefix: "JC-11" },
    { name: "Implement SSE for real-time", priority: "high", idPrefix: "JC-12" },
  ];

  const doneCards: StaticIssueCardProps[] = [
    { name: "Design component library", priority: "medium", idPrefix: "JC-08" },
    { name: "Set up Remix routing", priority: "low", idPrefix: "JC-09" },
  ];

  return (
    <>
      {/* Scoped responsive styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .wlc-mascot {
          animation: float 4s ease-in-out infinite;
        }
        .wlc-hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }
        .wlc-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 860px) {
          .wlc-hero-inner {
            text-align: center;
          }
          .wlc-features-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (min-width: 860px) {
          .wlc-hero-inner {
            flex-direction: row;
            text-align: left;
            gap: 4rem;
          }
        }
        .wlc-kanban-strip {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .wlc-kanban-strip::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="flex min-h-full flex-col bg-elevation-surface">

        {/* ── Minimal nav bar ──────────────────────────────────────────── */}
        <nav className="flex items-center justify-between bg-elevation-surface-raised px-8 py-3 shadow-sm">
          <Link
            to="/"
            className="flex items-center gap-2 rounded px-2 py-1.5 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
          >
            <img src="/images/logo.png" width={22} height={22} alt="Jira Clone logo" />
            <span className="font-primary-bold text-base">Jira Clone</span>
          </Link>
          <Link to="/login">
            <Button color="primary" variant="contained" size="md">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="mx-auto w-full max-w-[1100px] px-8 py-20">
          <div className="wlc-hero-inner">
            {/* Mascot */}
            <div className="flex shrink-0 items-center justify-center">
              <img
                src="/images/wizard-mascot.png"
                alt="Jira Clone wizard mascot"
                className="wlc-mascot"
                style={{ width: "260px", height: "auto", maxWidth: "80vw" }}
              />
            </div>

            {/* Copy */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="inline-block w-fit rounded-full bg-background-brand-subtlest px-3 py-1 text-xs font-primary-bold uppercase tracking-wider text-font-brand">
                  Project management, simplified
                </span>
                <h1 className="font-primary-black text-5xl leading-tight text-font">
                  <span style={{ color: "var(--Red600)" }}>Your team&apos;s</span>{" "}work,{" "}
                  <span className="text-font-brand">all in one place.</span>
                </h1>
                <p className="font-primary-light text-lg leading-relaxed text-font-subtle">
                  Jira Clone brings kanban boards, issue tracking and real-time
                  collaboration to your fingertips — no magic wand required.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/login">
                  <Button color="primary" variant="contained" size="lg" className="px-10">
                    Get Started — it&apos;s free
                  </Button>
                </Link>
                <a
                  href="https://github.com/daniserrano7/jira-clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button color="neutral" variant="subtlest" size="lg">
                    View on GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────────── */}
        <section className="bg-elevation-surface-sunken py-20">
          <div className="mx-auto w-full max-w-[1100px] px-8">
            <div className="mb-12 flex flex-col gap-2">
              <h2 className="font-primary-black text-3xl text-font">
                Everything you need to ship faster
              </h2>
              <p className="font-primary-light text-base text-font-subtle">
                A focused set of tools that keeps your team aligned without the overhead.
              </p>
            </div>
            <div className="wlc-features-grid">
              {features.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Kanban preview ────────────────────────────────────────────── */}
        <section className="py-20">
          <div className="mx-auto w-full max-w-[1100px] px-8">
            <div className="mb-10 flex flex-col gap-2">
              <h2 className="font-primary-black text-3xl text-font">
                See the board in action
              </h2>
              <p className="font-primary-light text-base text-font-subtle">
                A real preview of the kanban board — drag issues between columns
                when you&apos;re inside the app.
              </p>
            </div>

            {/* Fake project header */}
            <div className="mb-4 flex items-center gap-3">
              <img
                src="https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10400?size=xxlarge"
                width={28}
                height={28}
                className="rounded"
                alt="project"
              />
              <span className="font-primary-bold text-font">JIRA Clone</span>
              <span className="mx-2 text-font-subtlest">/</span>
              <span className="font-primary-light text-sm text-font-subtle">Board</span>
            </div>

            <div
              className="rounded-lg bg-elevation-surface-raised p-6 shadow-sm"
              style={{ overflowX: "auto" }}
            >
              <div className="wlc-kanban-strip">
                <KanbanColumn title="To Do" badge={todoCards.length} cards={todoCards} />
                <KanbanColumn title="In Progress" badge={inProgressCards.length} cards={inProgressCards} />
                <KanbanColumn title="Done" badge={doneCards.length} cards={doneCards} />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA banner ────────────────────────────────────────────────── */}
        <section className="bg-background-brand-bold py-20">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-6 px-8 text-center">
            <h2 className="font-primary-black text-3xl text-font-inverse">
              Ready to get organised?
            </h2>
            <p className="font-primary-light text-base text-font-inverse opacity-80">
              Jump right in — no account, no credit card, no setup.
            </p>
            <Link to="/login">
              <button
                className="rounded bg-white px-10 py-3 font-primary-bold text-base text-font-brand shadow-md hover:opacity-90 active:opacity-80"
              >
                Start for free
              </button>
            </Link>
          </div>
        </section>

        {/* ── Footer ────────────────────────────────────────────────────── */}
        <footer className="border-t border-border bg-elevation-surface-raised px-8 py-8">
          <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-font hover:text-font-brand">
              <img src="/images/logo.png" width={20} height={20} alt="logo" />
              <span className="font-primary-bold text-sm">Jira Clone</span>
            </Link>
            <p className="font-primary-light text-xs text-font-subtlest">
              A personal project by{" "}
              <a
                href="https://github.com/daniserrano7"
                className="text-font-brand hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                daniserrano7
              </a>
              . Built with Remix, React, Tailwind &amp; Prisma.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
