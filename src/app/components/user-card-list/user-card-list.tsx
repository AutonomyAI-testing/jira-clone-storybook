import { useState, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import { User } from "@domain/user";
import cx from "classix";

// Identifier for the drag-and-drop item type (used by react-dnd to match drag sources with drop targets)
const DRAG_USER_CARD = "USER_CARD";

export const UserCardList = ({
  users: initialUsers,
}: UserCardListProps): JSX.Element => {
  const [users, setUsers] = useState<UserCardData[]>(initialUsers);

  // Reorders users when a card is dragged over another position
  // Returns early if dragging over the same position to avoid unnecessary state updates
  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      if (dragIndex === hoverIndex) return;

      const newUsers = [...users];
      const draggedUser = newUsers[dragIndex];
      newUsers.splice(dragIndex, 1);
      newUsers.splice(hoverIndex, 0, draggedUser);
      setUsers(newUsers);
    },
    [users]
  );

  return (
    <div className="flex flex-col gap-4 p-6">
      {users.map((user, index) => (
        <UserCard key={user.id} user={user} index={index} moveCard={moveCard} />
      ))}
    </div>
  );
};

interface UserCardProps {
  user: UserCardData;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const UserCard = ({ user, index, moveCard }: UserCardProps): JSX.Element => {
  type DragItem = { index: number; id: string };
  type Collected = { isDragging: boolean };

  const [{ isDragging }, dragRef] = useDrag<DragItem, unknown, Collected>(
    () => ({
      type: DRAG_USER_CARD,
      item: { index, id: user.id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [index]
  );

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_USER_CARD,
      drop: (item: DragItem) => {
        if (item.index !== index) {
          moveCard(item.index, index);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, moveCard]
  );

  // Combines drag and drop refs onto a single element
  // Allows the card to be both dragged and used as a drop target
  const dragDropRef = (element: HTMLDivElement | null) => {
    dragRef(element);
    dropRef(element);
  };

  return (
    <div
      ref={dragDropRef}
      className={cx(
        "flex items-center gap-4 rounded-lg p-4",
        "border-2 border-border",
        "bg-elevation-surface-raised",
        "transition-all duration-200",
        "hover:bg-elevation-surface-raised-hovered",
        "hover:shadow-md",
        isDragging && "opacity-50",
        isOver && "border-border-brand"
      )}
      // Visual feedback when hovering over a valid drop target - blue top border highlights the drop zone
      style={{
        borderTopColor: isOver ? "var(--Blue500)" : undefined,
        borderTopWidth: isOver ? "3px" : undefined,
      }}
    >
      {/* Drag Handle */}
      <div
        className="flex-shrink-0 cursor-grab active:cursor-grabbing"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
          height: "24px",
        }}
      >
        <DragHandleIcon />
      </div>

      {/* Avatar with gradient border */}
      <div className="relative flex-shrink-0">
        <div
          className="h-20 w-20 rounded-full p-1"
          style={{
            background:
              "conic-gradient(from 0deg, var(--Blue500), var(--Blue400), var(--Teal500), var(--Blue500))",
          }}
        >
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* User info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-primary-bold text-sm text-font">
            {user.name}
          </h3>
          {user.badge && (
            <span
              className={cx(
                "inline-flex rounded-full px-2 py-1 font-primary-light text-2xs",
                user.badge === "Online" &&
                  "bg-background-success text-font-success",
                user.badge === "Designer" &&
                  "bg-background-brand-subtlest text-font-brand",
                user.badge === "Engineer" &&
                  "bg-background-info text-font-info",
                user.badge === "Manager" &&
                  "bg-background-warning text-font-warning"
              )}
            >
              {user.badge}
            </span>
          )}
        </div>
        <p className="mt-0.5 text-2xs text-font-subtle">@{user.handle}</p>
        <p className="mt-1 line-clamp-2 text-xs text-font-subtlest">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

const DragHandleIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: "var(--color-icon-subtle)" }}
  >
    {/* Grip dots pattern: 2 columns, 3 rows */}
    <circle cx="8" cy="6" r="2" />
    <circle cx="16" cy="6" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="16" cy="12" r="2" />
    <circle cx="8" cy="18" r="2" />
    <circle cx="16" cy="18" r="2" />
  </svg>
);

export interface UserCardData extends User {
  handle: string;
  bio: string;
  badge?: "Online" | "Designer" | "Engineer" | "Manager";
  avatarUrl: string;
}

interface UserCardListProps {
  users: UserCardData[];
}
