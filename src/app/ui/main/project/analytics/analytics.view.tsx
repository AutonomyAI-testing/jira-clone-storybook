import { RxValueNone } from "react-icons/rx";
import { Project } from "@domain/project";
import { Priority, prioritiesMock } from "@domain/priority";
import { PriorityIcon } from "@app/components/priority-icon";

export const AnalyticsView = ({ project }: Props): JSX.Element => {
  const priorityCounts = countIssuesByPriority(project);
  const total = priorityCounts.reduce((sum, { count }) => sum + count, 0);
  const max = Math.max(...priorityCounts.map(({ count }) => count));

  return (
    <section className="w-full max-w-[420px] rounded-md border border-border bg-elevation-surface-sunken p-4">
      <h2 className="font-primary-light text-xs uppercase text-font-subtlest">
        Issues by priority
      </h2>
      {total === 0 ? (
        <EmptyAnalytics />
      ) : (
        <ul className="mt-4 flex flex-col gap-4">
          {priorityCounts.map(({ priority, count }) => (
            <li key={priority.id} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-font">
                  <PriorityIcon priority={priority.id} size={16} />
                  <span className="text-sm">{priority.name}</span>
                </span>
                <span className="text-xs text-font-subtlest">
                  {count} {count === 1 ? "issue" : "issues"}
                </span>
              </div>
              <div
                className="h-1.5 w-full rounded bg-background-accent-grey-subtlest"
                aria-hidden="true"
              >
                {count > 0 && (
                  <div
                    className="h-full rounded bg-background-accent-grey-bolder"
                    style={{ width: `${(count / max) * 100}%` }}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

interface Props {
  project: Project;
}

interface PriorityCount {
  priority: Priority;
  count: number;
}

const countIssuesByPriority = (project: Project): PriorityCount[] => {
  const issues = project.categories.flatMap((category) => category.issues);

  return prioritiesMock
    .map((priority) => ({
      priority,
      count: issues.filter((issue) => issue.priority.id === priority.id).length,
    }))
    .sort((a, b) => b.priority.order - a.priority.order);
};

const EmptyAnalytics = (): JSX.Element => (
  <div className="mt-4 flex flex-col items-center text-font-subtlest">
    <RxValueNone size={36} />
    <p className="mt-4 font-primary-light text-xs uppercase">No issues yet</p>
  </div>
);
