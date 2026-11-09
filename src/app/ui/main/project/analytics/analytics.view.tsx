import cx from "classix";
import { RxValueNone } from "react-icons/rx";
import { Category, CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { prioritiesMock, PriorityId } from "@domain/priority";
import { Project } from "@domain/project";
import { PriorityIcon } from "@app/components/priority-icon";

export const AnalyticsView = ({ project }: Props): JSX.Element => {
  const categories = [...project.categories].sort((a, b) => a.order - b.order);
  const issues = categories.flatMap((category) => category.issues);

  if (issues.length === 0) {
    return <EmptyAnalytics />;
  }

  const doneIssues = issuesOfCategories(categories, ["DONE"]);
  const openIssues = issuesOfCategories(categories, ["TODO", "IN_PROGRESS"]);

  const stats: Stat[] = [
    {
      key: "total",
      label: "Total issues",
      value: issues.length,
      hint: "Across all board columns",
    },
    {
      key: "high",
      label: "Open high priority",
      value: openIssues.filter((issue) => issue.priority.id === "high").length,
      hint: "Not in the Done column",
    },
    {
      key: "done",
      label: "Done",
      value: doneIssues.length,
      hint: `${toPercent(doneIssues.length, issues.length)}% of all issues`,
    },
  ];

  const statusItems: BreakdownItem[] = categories.map((category) => ({
    key: category.id,
    label: category.name,
    count: category.issues.length,
  }));

  const priorityItems: BreakdownItem[] = [...prioritiesMock]
    .sort((a, b) => b.order - a.order)
    .map((priority) => ({
      key: priority.id,
      label: priority.name,
      count: issues.filter((issue) => issue.priority.id === priority.id).length,
      icon: <PriorityIcon priority={priority.id} size={14} />,
      barClassName: PRIORITY_BAR_CLASS[priority.id],
    }));

  return (
    <div className="min-h-0 w-full flex-1 overflow-y-auto">
      <div className="flex gap-4">
        {stats.map(({ key, ...stat }) => (
          <StatTile key={key} {...stat} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-4">
        <BreakdownPanel
          title="Issues by status"
          items={statusItems}
          total={issues.length}
        />
        <BreakdownPanel
          title="Issues by priority"
          items={priorityItems}
          total={issues.length}
        />
      </div>
    </div>
  );
};

interface Props {
  project: Project;
}

const issuesOfCategories = (
  categories: Category[],
  types: CategoryType[]
): Issue[] =>
  categories
    .filter((category) => types.includes(category.type))
    .flatMap((category) => category.issues);

const toPercent = (count: number, total: number): number =>
  total > 0 ? Math.round((count / total) * 100) : 0;

/**
 * Priority accent tokens — the same triad `PriorityIcon` maps each priority to,
 * used here as a fill instead of an icon colour.
 */
const PRIORITY_BAR_CLASS: Record<PriorityId, string> = {
  low: "bg-icon-accent-green",
  medium: "bg-icon-accent-yellow",
  high: "bg-icon-accent-red",
};

const DEFAULT_BAR_CLASS = "bg-background-neutral-bold";

interface Stat {
  key: string;
  label: string;
  value: number;
  hint?: string;
}

const StatTile = ({ label, value, hint }: StatTileProps): JSX.Element => (
  <div className="w-[200px] rounded bg-elevation-surface-raised p-5 shadow-sm">
    <p className="font-primary-light text-xs uppercase text-font-subtlest">
      {label}
    </p>
    <p className="mt-2 font-primary-black text-3xl">{value}</p>
    {hint && (
      <p className="mt-1 font-primary-light text-2xs text-font-subtlest">
        {hint}
      </p>
    )}
  </div>
);

interface StatTileProps {
  label: string;
  value: number;
  hint?: string;
}

interface BreakdownItem {
  key: string;
  label: string;
  count: number;
  icon?: JSX.Element;
  barClassName?: string;
}

const BreakdownPanel = ({
  title,
  items,
  total,
}: BreakdownPanelProps): JSX.Element => (
  <section className="w-[360px] rounded bg-elevation-surface-raised p-5 shadow-sm">
    <h2 className="font-primary-bold text-xs uppercase text-font-subtle">
      {title}
    </h2>
    <ul className="mt-4 flex flex-col gap-4">
      {items.map((item) => (
        <BreakdownRow key={item.key} item={item} total={total} />
      ))}
    </ul>
  </section>
);

interface BreakdownPanelProps {
  title: string;
  items: BreakdownItem[];
  total: number;
}

const BreakdownRow = ({ item, total }: BreakdownRowProps): JSX.Element => {
  const percent = toPercent(item.count, total);

  return (
    <li>
      <div className="flex items-center justify-between text-sm text-font-subtle">
        <span className="flex items-center gap-2">
          {item.icon}
          <span>{item.label}</span>
        </span>
        <span className="font-primary-light text-font-subtlest">
          {item.count} &middot; {percent}%
        </span>
      </div>
      {/* The count and share above carry the value, so the bar itself is decorative. */}
      <div
        aria-hidden="true"
        className="mt-2 h-2 w-full rounded bg-background-accent-grey-subtler"
      >
        <div
          style={{ width: `${percent}%` }}
          className={cx(
            "h-full rounded",
            item.barClassName || DEFAULT_BAR_CLASS
          )}
        />
      </div>
    </li>
  );
};

interface BreakdownRowProps {
  item: BreakdownItem;
  total: number;
}

const EmptyAnalytics = (): JSX.Element => (
  <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center text-font-subtlest">
    <RxValueNone size={36} />
    <p className="mt-4 font-primary-light text-xs uppercase">
      No issues to analyse yet
    </p>
    <p className="mt-2 font-primary-light text-sm">
      Create an issue on the board and its status and priority will show up
      here.
    </p>
  </div>
);
