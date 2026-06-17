import { useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import cx from "classix";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";

const DRAG_PROFILE_CARD = "PROFILE_CARD";

// Shadow styles for drag-and-drop feedback
const SHADOW_HOVER = "0px 1px 8px rgba(9, 30, 66, 0.25)";
const SHADOW_DEFAULT = "0px 1px 3px rgba(9, 30, 66, 0.13)";

interface DragItem {
  id: string;
  index: number;
}

type Collected = { isDragging: boolean };

export const CardList = ({ users, onReorder }: CardListProps): JSX.Element => {
  // Maintain local state for cards to enable optimistic drag-and-drop reordering
  // Parent can sync updates via onReorder callback
  const [cards, setCards] = useState<CardUser[]>(users);

  const handleReorder = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = cards[dragIndex];
      if (!dragCard) return;

      // Reorder cards immediately for snappy feedback
      const newCards = [...cards];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      setCards(newCards);

      // Notify parent of the new order
      if (onReorder) {
        onReorder(newCards);
      }
    },
    [cards, onReorder]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-4">
        {cards.map((user, index) => (
          <ProfileCard
            key={user.id}
            user={user}
            status={user.status}
            index={index}
            onReorder={handleReorder}
          />
        ))}
      </div>
    </DndProvider>
  );
};

interface CardListProps {
  users: CardUser[];
  onReorder?: (users: CardUser[]) => void;
}

export interface CardUser extends User {
  role?: string;
  status?: "active" | "away" | "offline";
}

interface ProfileCardProps {
  user: CardUser;
  status?: "active" | "away" | "offline";
  index: number;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
}

const ProfileCard = ({
  user,
  status,
  index,
  onReorder,
}: ProfileCardProps): JSX.Element => {
  const statusColor = getStatusColor(status);

  const [{ isDragging }, dragRef] = useDrag<DragItem, unknown, Collected>(
    () => ({
      type: DRAG_PROFILE_CARD,
      item: { id: user.id, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [user.id, index]
  );

  const [{ isOver }, dropRef] = useDrop<DragItem, void, { isOver: boolean }>(
    () => ({
      accept: DRAG_PROFILE_CARD,
      drop: (item: DragItem) => {
        if (item.index !== index) {
          onReorder(item.index, index);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, onReorder]
  );

  // Combine drag and drop refs into a single ref handler for the card element
  const setRefs = useCallback(
    (el: HTMLDivElement | null) => {
      dragRef(el);
      dropRef(el);
    },
    [dragRef, dropRef]
  );

  return (
    <div
      ref={setRefs}
      style={{
        // Reduce opacity while dragging to indicate it's being moved
        opacity: isDragging ? 0.4 : 1,
        // Elevate shadow on hover to indicate it's a drop target
        boxShadow: isOver ? SHADOW_HOVER : SHADOW_DEFAULT,
      }}
      className="bg-color-elevation-surface flex items-center gap-4 rounded-lg p-4 shadow-md transition-all duration-200"
    >
      {/* Drag handle - braille pattern symbol indicates draggable element */}
      <div
        style={{
          color: "var(--Neutral400)",
          cursor: "grab",
          flexShrink: 0,
          userSelect: "none",
        }}
        className="text-lg"
      >
        ⠿
      </div>

      {/* Avatar with gradient border to draw visual attention */}
      <div
        className="flex-shrink-0 rounded-full p-1"
        style={{
          background:
            "linear-gradient(135deg, var(--Teal500), var(--Blue600), var(--Magenta500))",
        }}
      >
        <UserAvatar
          name={user.name}
          image={user.image}
          color={user.color}
          size={48}
        />
      </div>

      {/* User name and role */}
      <div className="flex flex-1 flex-col gap-1">
        <h3
          className="font-primary-bold text-font"
          style={{ fontSize: "16px" }}
        >
          {user.name}
        </h3>
        {user.role && (
          <p className="text-sm" style={{ color: "var(--Neutral700)" }}>
            {user.role}
          </p>
        )}
      </div>

      {/* Status indicator - only render if status is provided */}
      {status && (
        <div
          className={cx(
            "flex items-center gap-2 rounded-full px-3 py-1 font-primary-light text-xs text-font-inverse"
          )}
          style={{ backgroundColor: statusColor }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
          ></span>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      )}
    </div>
  );
};

// Maps user status to appropriate badge color
const getStatusColor = (status?: string): string => {
  switch (status) {
    case "active":
      return "var(--Green700)";
    case "away":
      return "var(--Orange700)";
    case "offline":
      return "var(--Neutral700)";
    default:
      return "var(--Neutral700)";
  }
};
