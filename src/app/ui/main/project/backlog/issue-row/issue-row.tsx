import { useEffect } from "react";
import { Link } from "@remix-run/react";
import cx from "classix";
import { useDrag } from "react-dnd";
import { MdDragIndicator } from "react-icons/md";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon";
import { UserAvatar } from "@app/components/user-avatar";
import { useSortBy } from "@app/hooks/useSortBy";

export interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
  index: number;
}

export const DRAG_ISSUE_ROW = "ISSUE_ROW";

export const IssueRow = ({
  issue,
  categoryId,
  index,
  isSubmitting,
  handleDragging,
}: Props): JSX.Element => {
  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  type Collected = { isDragging: boolean };

  // Drag configuration: makes this row draggable with metadata about the issue
  const [{ isDragging }, dragRef] = useDrag<DropItem, unknown, Collected>(
    () => ({
      type: DRAG_ISSUE_ROW,
      item: {
        issueId: issue.id,
        categoryId,
        index,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id, categoryId, index]
  );

  // Notify parent component when drag state changes (used to highlight drop zones)
  useEffect(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]);

  return (
    <div
      // Disable dragging while submitting to prevent multiple rapid submissions
      ref={isSubmitting ? undefined : dragRef}
      className={cx(
        "flex items-center gap-3 w-full px-3 py-2.5 rounded hover:bg-elevation-surface-raised-hovered cursor-pointer border-b border-border last:border-0 duration-200 ease-in-out",
        isSubmitting && "opacity-50"
      )}
    >
      <Link to={issueLink} className="flex items-center gap-3 flex-1 min-w-0">
        <MdDragIndicator size={18} className="text-icon-disabled cursor-grab active:cursor-grabbing flex-shrink-0" />
        <TaskIcon size={18} />
        <span className="flex-1 font-primary-light text-sm text-font line-clamp-1">
          {issue.name}
        </span>
        <PriorityIcon priority={issue.priority.id} />
        <UserAvatar {...issue.asignee} size={24} />
      </Link>
      <span className="text-2xs font-primary-light px-1.5 py-0.5 rounded bg-background-neutral text-font-subtlest flex-shrink-0">
        {issueIdPrefix}
      </span>
    </div>
  );
};

interface Props {
  issue: Issue;
  categoryId: CategoryId;
  index: number;
  isSubmitting: boolean;
  handleDragging: (isDragging: boolean) => void;
}
