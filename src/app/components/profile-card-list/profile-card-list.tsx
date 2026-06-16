import { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  HiOutlineEnvelope,
  HiOutlineUserPlus,
  HiOutlineBars3,
} from "react-icons/hi2";
import { usersMock } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";

const ROLES = [
  "Frontend Engineer",
  "Product Designer",
  "Backend Engineer",
  "UI/UX Designer",
  "Full Stack Developer",
  "Project Manager",
  "QA Engineer",
  "DevOps Engineer",
] as const;

const STATUSES = ["Online", "Away", "Busy"] as const;

// Mock data for profile cards with status and roles
const profileCardsMock = usersMock.slice(0, 8).map((user, index) => ({
  ...user,
  role: ROLES[index % ROLES.length],
  status: STATUSES[index % STATUSES.length],
}));

export const ProfileCardList = (): JSX.Element => {
  const [cards, setCards] = useState(profileCardsMock);

  const moveCard = useCallback((fromIndex: number, toIndex: number) => {
    setCards((prevCards) => {
      const newCards = [...prevCards];
      const [movedCard] = newCards.splice(fromIndex, 1);
      newCards.splice(toIndex, 0, movedCard);
      return newCards;
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full bg-elevation-surface p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <ProfileCard
              key={card.id}
              card={card}
              index={index}
              moveCard={moveCard}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

import { useDrag, useDrop } from "react-dnd";

const DRAG_TYPE = "PROFILE_CARD";

const ProfileCard = ({
  card,
  index,
  moveCard,
}: ProfileCardProps): JSX.Element => {
  const [isHovering, setIsHovering] = useState(false);

  // Types for react-dnd drag-and-drop hooks
  type DragItem = { id: string; index: number };
  type Collected = { isDragging: boolean };

  const [{ isDragging }, dragRef] = useDrag<DragItem, unknown, Collected>(
    () => ({
      type: DRAG_TYPE,
      item: { id: card.id, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [card.id, index]
  );

  const [{ isOver }, dropRef] = useDrop<DragItem, unknown, { isOver: boolean }>(
    () => ({
      accept: DRAG_TYPE,
      drop: (draggedItem: DragItem) => {
        // Only move if dropping on a different card to prevent unnecessary updates
        if (draggedItem.index !== index) {
          moveCard(draggedItem.index, index);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, moveCard]
  );

  // Attach both drag and drop handlers to the same element
  const combinedRef = (node: HTMLDivElement | null) => {
    dragRef(node);
    dropRef(node);
  };

  // Map status to corresponding color for visual indicator
  const statusColor =
    card.status === "Online"
      ? "var(--Green500)"
      : card.status === "Away"
        ? "var(--Yellow500)"
        : "var(--Red600)";

  return (
    <div
      ref={combinedRef}
      className="relative flex flex-col gap-4 rounded-lg bg-elevation-surface-raised p-4 shadow-sm transition-all duration-200 ease-out"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        opacity: isDragging ? 0.4 : 1,
        border: isOver ? "2px solid #89c4f4" : "2px solid transparent",
        boxShadow:
          isHovering && !isDragging
            ? "0px 8px 12px rgba(9, 30, 66, 0.15)"
            : undefined,
        transform: isHovering && !isDragging ? "translateY(-4px)" : undefined,
      }}
    >
      {/* Drag handle icon */}
      <div className="absolute right-2 top-2">
        <div
          style={{
            opacity: isHovering ? 1 : 0,
            transition: "opacity 200ms ease-out",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          <HiOutlineBars3 size={16} className="text-font-subtle" />
        </div>
      </div>

      {/* Avatar with gradient border */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="flex items-center justify-center rounded-full p-1"
          style={{
            background:
              "conic-gradient(from 0deg, #89c4f4, #6ed0d0, #b89cf0, #89c4f4)",
          }}
        >
          <div className="rounded-full bg-elevation-surface-raised p-1">
            <UserAvatar
              name={card.name}
              image={card.image}
              color={card.color}
              size={72}
            />
          </div>
        </div>

        {/* Status badge */}
        <div className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: statusColor }}
          />
          <span
            className="font-primary-light text-xs"
            style={{ color: statusColor }}
          >
            {card.status}
          </span>
        </div>
      </div>

      {/* User info */}
      <div className="text-center">
        <h3 className="font-primary-bold text-sm text-font">{card.name}</h3>
        <p className="text-xs text-font-subtle">{card.role}</p>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <Button
          color="primary"
          variant="subtlest"
          className="flex-1"
          title="Send message"
          aria-label={`Send message to ${card.name}`}
        >
          <HiOutlineEnvelope size={16} />
        </Button>
        <Button
          color="primary"
          variant="subtlest"
          className="flex-1"
          title="Follow user"
          aria-label={`Follow ${card.name}`}
        >
          <HiOutlineUserPlus size={16} />
        </Button>
        <Button
          color="primary"
          variant="subtlest"
          className="flex-1"
          title="More options"
          aria-label={`More options for ${card.name}`}
        >
          <span className="flex h-4 w-4 items-center justify-center text-xs">
            •••
          </span>
        </Button>
      </div>
    </div>
  );
};

interface ProfileCardData {
  id: string;
  name: string;
  image?: string;
  color?: string;
  role: string;
  status: "Online" | "Away" | "Busy";
}

interface ProfileCardProps {
  card: ProfileCardData;
  index: number;
  moveCard: (fromIndex: number, toIndex: number) => void;
}
