import { Link } from "@remix-run/react";
import cx from "classix";
import { User } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import { useUserStore } from "@app/store/user.store";

export const WelcomeView = ({
  projectCount,
  inProgressCount,
  doneCount,
  recentProjects,
  teamMembers,
}: Props): JSX.Element => {
  const { user } = useUserStore();
  const firstName = user.name.split(" ")[0];

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* LEFT PANEL — Brand / Info */}
      <div className="hidden flex-shrink-0 flex-col justify-between bg-elevation-surface-sunken px-12 py-10 lg:flex lg:w-[52%]">
        {/* Top: Logo + Wordmark */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" width={32} height={32} alt="Logo" />
          <span className="font-primary-bold text-lg text-font">Jira Clone</span>
        </div>

        {/* Center: Headline + Stats Pipeline */}
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="font-primary-black text-5xl leading-tight text-font">
              Manage your
              <br />
              <span className="text-font-brand">projects</span>
              <br />
              with ease.
            </h2>
            <p className="mt-4 font-primary-light text-lg text-font-subtle">
              Track issues, collaborate with your team, and ship faster.
            </p>
          </div>

          {/* Stats Pipeline */}
          <div className="flex flex-col">
            <StatRow
              dot="bg-background-brand-bold"
              label="Active Projects"
              value={projectCount}
            />
            <div className="ml-[10px] h-8 w-0.5 bg-border" />
            <StatRow
              dot="bg-background-warning-bold"
              label="Issues In Progress"
              value={inProgressCount}
            />
            <div className="ml-[10px] h-8 w-0.5 bg-border" />
            <StatRow
              dot="bg-background-success-bold"
              label="Issues Completed"
              value={doneCount}
            />
          </div>
        </div>

        {/* Bottom: Team Avatars */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {teamMembers.slice(0, 5).map((member) => (
              <UserAvatar key={member.id} {...member} size={32} tooltip />
            ))}
          </div>
          <span className="font-primary-light text-sm text-font-subtle">
            {teamMembers.length} team member{teamMembers.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* RIGHT PANEL — Personalized Content */}
      <div className="flex flex-grow flex-col items-center justify-center overflow-y-auto px-8 py-10">
        <div className="w-full max-w-[440px]">
          {/* Avatar + Greeting */}
          <div className="mb-8 flex flex-col items-center gap-4">
            <UserAvatar {...user} size={80} />
            <div className="text-center">
              <h1 className="font-primary-black text-4xl text-font-danger">
                Welcome, {firstName}!
              </h1>
              <p className="mt-2 font-primary-light text-base text-font-subtle">
                Here's an overview of your workspace.
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8 flex flex-col gap-3">
            <Link to="/projects" className="flex">
              <Button color="primary" className="w-full justify-center py-3 text-base">
                View All Projects
              </Button>
            </Link>
            <Link to="/projects/new" className="flex">
              <Button
                color="neutral"
                variant="subtlest"
                className="w-full justify-center py-3 text-base"
              >
                + Create New Project
              </Button>
            </Link>
          </div>

          {/* Recent Projects */}
          {recentProjects.length > 0 && (
            <div>
              <h2 className="mb-3 font-primary-bold text-sm uppercase tracking-wide text-font-subtle">
                Recent Projects
              </h2>
              <div className="flex flex-col gap-2">
                {recentProjects.slice(0, 3).map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className={cx(
                      "group flex items-center gap-3 rounded bg-elevation-surface-raised p-3 shadow-xs",
                      "outline outline-2 outline-transparent duration-100 ease-linear",
                      "hover:bg-background-brand-subtlest-hovered hover:text-font-brand hover:shadow-sm hover:outline-border-brand"
                    )}
                  >
                    <img
                      src={project.image || "/images/default-project.png"}
                      alt={project.name}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded object-cover"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-primary-bold text-sm text-font group-hover:text-font-brand">
                        {project.name}
                      </span>
                      {project.description && (
                        <span className="line-clamp-1 font-primary-light text-xs text-font-subtle">
                          {project.description}
                        </span>
                      )}
                    </div>
                    <span className="ml-auto flex-shrink-0 text-sm text-font-subtlest group-hover:text-font-brand">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface Props {
  projectCount: number;
  inProgressCount: number;
  doneCount: number;
  recentProjects: { id: string; name: string; description?: string; image: string }[];
  teamMembers: User[];
}

const StatRow = ({
  dot,
  label,
  value,
}: {
  dot: string;
  label: string;
  value: number;
}): JSX.Element => (
  <div className="flex items-center gap-3">
    <span className={cx("h-[22px] w-[22px] flex-shrink-0 rounded-full", dot)} />
    <span className="font-primary text-sm text-font">{label}</span>
    <span className="ml-auto font-primary-bold text-base text-font">{value}</span>
  </div>
);
