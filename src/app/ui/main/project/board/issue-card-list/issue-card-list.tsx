import { Link } from "@remix-run/react";
import cx from "classix";
import { Category, CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { TaskIcon } from "@app/components/icons";
import { UserAvatar } from "@app/components/user-avatar";
import { PriorityIcon } from "@app/components/priority-icon";
import { formatDateTime } from "@utils/formatDateTime";
import { useSortBy } from "@app/hooks/useSortBy";
import { IoChatbubbleOutline } from "react-icons/io5";

/**
 * IssueCardList component
 *
 * Displays a categorized list of issues (e.g., To Do, In Progress, Done).
 * Each category shows its name as a header, followed by the issues within that category.
 * If no issues exist across all categories, displays an empty state message.
 */
export const IssueCardList = ({
  categories,
}: IssueCardListProps): JSX.Element => {
  const hasAnyIssues = categories.some((cat) => cat.issues.length > 0);

  // Show empty state when no issues exist in any category
  if (!hasAnyIssues) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-sm text-font-subtle">No issues found</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.id}>
          {/* Category Header */}
          <h3 className="mb-3 font-primary-bold text-2xs uppercase tracking-wider text-font-subtlest">
            {category.name}
          </h3>

          {/* Category Issues List */}
          <div className="flex flex-col gap-3">
            {category.issues.length > 0 ? (
              category.issues.map((issue) => (
                <IssueCardItem
                  key={issue.id}
                  issue={issue}
                  category={category}
                />
              ))
            ) : (
              <p className="text-xs italic text-font-subtle">
                No issues in this category
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * IssueCardItem component
 *
 * Individual issue card displayed in the list. Shows issue details including:
 * - ID prefix (derived from issue.id)
 * - Issue name and optional description
 * - Status badge (color-coded by category type)
 * - Assignee avatar with gradient wrapper
 * - Priority icon
 * - Comment count
 * - Last updated date
 *
 * Preserves the current sortBy parameter in links to maintain list state on navigation.
 */
const IssueCardItem = ({
  issue,
  category,
}: {
  issue: Issue;
  category: Category;
}): JSX.Element => {
  // Extract the project key from the issue ID (e.g., "PROJ" from "PROJ-123")
  const issueIdPrefix = issue.id.split("-")[0];

  // Preserve current sort state when navigating to issue detail
  const sortBy = useSortBy();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  return (
    <Link
      to={issueLink}
      className={cx(
        "group flex cursor-pointer items-center gap-4 rounded-md border border-border bg-elevation-surface-raised px-4 py-3 shadow-xs transition-colors duration-150 hover:bg-elevation-surface-raised-hovered"
      )}
    >
      {/* Left: Task Icon + ID Prefix */}
      <div className="flex flex-shrink-0 items-center gap-2">
        <TaskIcon size={18} />
        <span className="text-2xs text-font-subtlest">{issueIdPrefix}</span>
      </div>

      {/* Center: Issue Name + Description */}
      <div className="min-w-0 flex-1">
        <p className="font-primary text-sm text-font">{issue.name}</p>
        {issue.description && (
          <p className="line-clamp-1 text-2xs text-font-subtlest">
            {issue.description}
          </p>
        )}
      </div>

      {/* Right: Status Badge, Avatar, Priority, Comments, Updated Date */}
      <div className="ml-4 flex flex-shrink-0 items-center gap-3">
        {/* Status Badge */}
        <span
          className={cx(
            "flex w-fit items-center rounded px-1.5 py-0.5 font-primary text-2xs uppercase",
            category.type === "TODO" &&
              "bg-background-accent-grey-subtler text-font-accent-grey",
            category.type === "IN_PROGRESS" &&
              "bg-background-accent-blue-subtler text-font-accent-blue",
            category.type === "DONE" &&
              "bg-background-accent-green-subtler text-font-accent-green"
          )}
        >
          {getCategoryDisplayName(category.type)}
        </span>

        {/* Assignee Avatar with Gradient Wrapper */}
        <div className="rounded-full bg-gradient-to-br from-[#5eead4] to-[#818cf8] p-[2px]">
          <UserAvatar
            name={issue.asignee.name}
            image={issue.asignee.image}
            size={28}
            tooltip={true}
          />
        </div>

        {/* Priority Icon */}
        <div className="flex-shrink-0">
          <PriorityIcon priority={issue.priority.id} size={18} />
        </div>

        {/* Comment Count */}
        <div className="flex items-center gap-1">
          <IoChatbubbleOutline className="h-4 w-4 text-font-subtle" />
          <span className="text-2xs text-font-subtle">
            {issue.comments.length}
          </span>
        </div>

        {/* Updated Date */}
        <span className="whitespace-nowrap text-2xs text-font-subtlest">
          {formatDateTime(issue.updatedAt)}
        </span>
      </div>
    </Link>
  );
};

/**
 * Converts category type enum to human-readable display name.
 * Used for status badge text in issue cards.
 */
const getCategoryDisplayName = (categoryType: CategoryType): string => {
  const names: Record<CategoryType, string> = {
    TODO: "To do",
    IN_PROGRESS: "In progress",
    DONE: "Done",
  };
  return names[categoryType];
};

interface IssueCardListProps {
  categories: Category[];
}
