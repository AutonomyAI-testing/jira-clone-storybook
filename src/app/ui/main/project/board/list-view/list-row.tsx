import { useRef } from "react";
import cx from "classix";
import { useDrag, useDrop } from "react-dnd";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Link } from "@remix-run/react";
import { Issue } from "@domain/issue";
import { CategoryType, categoryTypeDict } from "@domain/category";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon";
import { UserAvatar } from "@app/components/user-avatar";
import { useSortBy } from "@app/hooks/useSortBy";

export const ListRow = ({
  issue,
  index,
  categoryType,
  onMove,
}: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const sortBy = useSortBy();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;
  const issueIdPrefix = issue.id.split("-")[0];

  type DragItem = { id: string; index: number };
  type Collected = { isDragging: boolean };

  const [{ isDragging }, dragRef] = useDrag<DragItem, unknown, Collected>(
    () => ({
      type: LIST_ROW,
      item: { id: issue.id, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id, index]
  );

  const [{ isOver }, dropRef] = useDrop<
    DragItem,
    unknown,
    { isOver: boolean }
  >(
    () => ({
      accept: LIST_ROW,
      hover: (item: DragItem) => {
        if (item.index !== index) {
          onMove(item.index, index);
          item.index = index;
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, onMove]
  );

  dragRef(dropRef(ref));

  return (
    <>
      {isOver && (
        <div className="h-0.5 bg-border-brand" />
      )}
      <div
        ref={ref}
        className={cx(
          "group flex items-center gap-3 rounded px-4 py-3 duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered",
          isDragging && "opacity-50",
          "bg-elevation-surface-raised"
        )}
      >
        {/* Drag handle */}
        <div className="flex flex-shrink-0 items-center opacity-0 group-hover:opacity-100">
          <RxDragHandleDots2 size={18} className="text-font-subtle" />
        </div>

        {/* Priority icon */}
        <div className="flex flex-shrink-0 items-center">
          <PriorityIcon priority={issue.priority.id} />
        </div>

        {/* Task icon */}
        <div className="flex flex-shrink-0 items-center">
          <TaskIcon size={18} />
        </div>

        {/* Issue name */}
        <Link to={issueLink} className="flex-1 min-w-0">
          <p className="truncate text-font hover:underline">{issue.name}</p>
        </Link>

        {/* Issue ID prefix */}
        <span className="flex-shrink-0 text-2xs text-font-subtlest">
          {issueIdPrefix}
        </span>

        {/* Category badge */}
        <div
          className={cx(
            "flex flex-shrink-0 items-center rounded-full px-3 py-1 text-2xs font-medium",
            getCategoryBadgeStyle(categoryType)
          )}
        >
          {categoryTypeDict[categoryType]}
        </div>

        {/* Assignee avatar */}
        <div className="flex flex-shrink-0 items-center">
          <UserAvatar
            name={issue.asignee.name}
            image={issue.asignee.image}
            color={issue.asignee.color}
            size={24}
            tooltip
          />
        </div>
      </div>
    </>
  );
};

interface Props {
  issue: Issue;
  index: number;
  categoryType: CategoryType;
  onMove: (fromIndex: number, toIndex: number) => void;
}

const getCategoryBadgeStyle = (categoryType: CategoryType): string => {
  switch (categoryType) {
    case "TODO":
      return "bg-background-neutral text-font-subtlest";
    case "IN_PROGRESS":
      return "bg-background-info text-font-info";
    case "DONE":
      return "bg-background-success text-font-success";
    default:
      return "bg-background-neutral text-font-subtlest";
  }
};

export const LIST_ROW = "LIST_ROW";
