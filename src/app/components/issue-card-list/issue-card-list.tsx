import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag, useDrop } from "react-dnd";
import cx from "classix";
import { Issue } from "@domain/issue";
import {
  todoIssuesMock1,
  inProgressIssuesMock1,
  doneIssuesMock1,
  todoIssuesMock2,
  inProgressIssuesMock2,
  doneIssuesMock2,
} from "@domain/issue";
import { categoryTypeDict } from "@domain/category";
import { UserAvatar } from "@app/components/user-avatar";

const DRAG_ISSUE_CARD_LIST = "ISSUE_CARD_LIST";
type IssueStatus = "TODO" | "IN_PROGRESS" | "DONE";

interface DragItem {
  index: number;
}

// Configuration for drag-and-drop operations
const DRAG_HANDLE_STYLES = {
  cursor: "grab",
  userSelect: "none" as const,
  fontSize: "12px",
  lineHeight: "1",
};

// Maps priority levels to their visual indicator colors
const getPriorityColor = (priority: "low" | "medium" | "high"): string => {
  switch (priority) {
    case "high":
      return "var(--Red600)"; // Red for high priority
    case "medium":
      return "#f59e0b"; // Amber for medium priority
    case "low":
      return "var(--Green500)"; // Green for low priority
    default:
      return "var(--Green500)";
  }
};

// Returns light background color for status badges
const getStatusBgColor = (status: IssueStatus): string => {
  switch (status) {
    case "TODO":
      return "rgba(59, 130, 246, 0.1)"; // Light blue
    case "IN_PROGRESS":
      return "rgba(245, 158, 11, 0.1)"; // Light amber
    case "DONE":
      return "rgba(34, 197, 94, 0.1)"; // Light green
    default:
      return "rgba(0, 0, 0, 0.1)";
  }
};

// Returns text color for status badges that contrasts with background
const getStatusTextColor = (status: IssueStatus): string => {
  switch (status) {
    case "TODO":
      return "var(--Blue500)";
    case "IN_PROGRESS":
      return "var(--Yellow600)";
    case "DONE":
      return "var(--Green700)";
    default:
      return "var(--Neutral600)";
  }
};

interface DraggableIssueCardProps {
  issue: Issue;
  index: number;
  moveIssue: (dragIndex: number, hoverIndex: number) => void;
}

// A single draggable card in the issue list. Supports both drag-source and drop-target
// to enable reordering by dragging cards over each other.
const DraggableIssueCard = ({
  issue,
  index,
  moveIssue,
}: DraggableIssueCardProps): JSX.Element => {
  // Configure this card as a drag source
  const [{ isDragging }, dragRef] = useDrag<
    DragItem,
    unknown,
    { isDragging: boolean }
  >(
    () => ({
      type: DRAG_ISSUE_CARD_LIST,
      item: { index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [index]
  );

  // Configure this card as a drop target for reordering
  const [{ isOver }, dropRef] = useDrop<DragItem, unknown, { isOver: boolean }>(
    () => ({
      accept: DRAG_ISSUE_CARD_LIST,
      drop: (item: DragItem) => {
        // Reorder only if dragging onto a different position
        if (item.index !== index) {
          moveIssue(item.index, index);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, moveIssue]
  );

  return (
    <div ref={dropRef} className="relative">
      {/* Drop indicator line */}
      {isOver && (
        <div
          className="absolute left-0 right-0 top-0 z-10 h-0.5"
          style={{ backgroundColor: "var(--Blue500)" }}
        />
      )}

      {/* Card with drag handle */}
      <div
        ref={dragRef}
        className={cx(
          "border-border-subtle flex items-start gap-3 rounded-lg border",
          "bg-elevation-surface-raised p-4 shadow-xs transition-all duration-200",
          "ease-in-out hover:bg-elevation-surface-raised-hovered hover:shadow-md",
          isDragging && "opacity-40"
        )}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {/* Drag handle */}
        <div
          className="flex-shrink-0 pt-1 text-font-subtle"
          style={DRAG_HANDLE_STYLES}
        >
          ⠿
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          <UserAvatar
            name={issue.asignee.name}
            image={issue.asignee.image}
            color={issue.asignee.color}
            size={40}
          />
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Title */}
          <h3 className="mb-2 font-primary-bold text-sm leading-tight text-font">
            {issue.name}
          </h3>

          {/* Description */}
          <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-font-subtle">
            {issue.description}
          </p>

          {/* Bottom row: Priority, Status, Date */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Priority Badge */}
            <div className="flex items-center gap-1">
              <div
                className="h-2 w-2 flex-shrink-0 rounded-full"
                style={{ backgroundColor: getPriorityColor(issue.priority.id) }}
              />
              <span className="text-xs text-font-subtle">
                {issue.priority.name}
              </span>
            </div>

            {/* Status Chip */}
            {(() => {
              const status = issue.categoryType as IssueStatus;
              const statusBgColor = getStatusBgColor(status);
              const statusTextColor = getStatusTextColor(status);
              const statusLabel = categoryTypeDict[status];
              return (
                <div
                  className="whitespace-nowrap rounded px-2 py-1 text-xs font-medium"
                  style={{
                    backgroundColor: statusBgColor,
                    color: statusTextColor,
                  }}
                >
                  {statusLabel}
                </div>
              );
            })()}

            {/* Timestamp */}
            <span className="ml-auto text-xs text-font-subtlest">
              {new Date(issue.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal component that manages the list state and renders draggable cards
const IssueCardListContent = ({ issues }: { issues: Issue[] }): JSX.Element => {
  // Track the current order of issues (can be reordered by dragging)
  const [orderIssues, setOrderIssues] = useState<Issue[]>(issues);

  // Handler for moving issues when they are dragged over each other
  const moveIssue = (dragIndex: number, hoverIndex: number): void => {
    const draggedItem = orderIssues[dragIndex];
    const newIssues = [...orderIssues];
    newIssues.splice(dragIndex, 1); // Remove from old position
    newIssues.splice(hoverIndex, 0, draggedItem); // Insert at new position
    setOrderIssues(newIssues);
  };

  return (
    <div className="w-full bg-background-brand-subtlest p-4">
      <div className="space-y-3">
        {orderIssues.map((issue, index) => (
          <DraggableIssueCard
            key={issue.id}
            issue={issue}
            index={index}
            moveIssue={moveIssue}
          />
        ))}
      </div>
    </div>
  );
};

// Main exported component. Wraps the list in a DndProvider to enable drag-and-drop.
export const IssueCardList = (): JSX.Element => {
  // Combine mock data from multiple projects and statuses for demo purposes
  const initialIssues = [
    ...todoIssuesMock1,
    ...inProgressIssuesMock1,
    ...doneIssuesMock1,
    ...todoIssuesMock2,
    ...inProgressIssuesMock2,
    ...doneIssuesMock2,
  ];

  return (
    // DndProvider must wrap all components that use drag-and-drop hooks
    <DndProvider backend={HTML5Backend}>
      <IssueCardListContent issues={initialIssues} />
    </DndProvider>
  );
};
