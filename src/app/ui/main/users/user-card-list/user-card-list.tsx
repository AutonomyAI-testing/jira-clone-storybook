import { useState, useCallback } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MdDragIndicator } from "react-icons/md";
import cx from "classix";
import { User, usersMock } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";

// Drag-and-drop type identifier for user card items
const DRAG_USER_CARD = "USER_CARD";

interface DragUserCardItem {
  userId: string;
  index: number;
}

interface UserCardProps {
  user: User;
  index: number;
  onMove: (fromIndex: number, toIndex: number) => void;
}

export const UserCard = ({
  user,
  index,
  onMove,
}: UserCardProps): JSX.Element => {
  type DragCollected = { isDragging: boolean };
  type DropCollected = { isOver: boolean };

  const [{ isDragging }, dragRef] = useDrag<
    DragUserCardItem,
    unknown,
    DragCollected
  >(
    () => ({
      type: DRAG_USER_CARD,
      item: {
        userId: user.id,
        index,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [user.id, index]
  );

  const [{ isOver }, dropRef] = useDrop<
    DragUserCardItem,
    unknown,
    DropCollected
  >(
    () => ({
      accept: DRAG_USER_CARD,
      // Update order immediately as user hovers to provide live reordering feedback
      hover: (item: DragUserCardItem) => {
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

  return (
    <div
      ref={(node) => {
        dragRef(node);
        dropRef(node);
      }}
      className="relative flex w-[280px] flex-col items-center rounded-xl bg-elevation-surface-raised shadow-sm transition-all duration-200"
      style={{
        padding: "24px",
        // Reduce opacity while dragging to provide clear visual feedback that card is being moved
        opacity: isDragging ? 0.5 : 1,
        // Grab cursor when hoverable, grabbing cursor while actively dragging
        cursor: isDragging ? "grabbing" : "grab",
        // Blue outline appears when hovering over drop target
        outline: isOver ? "2px solid var(--Blue300)" : "none",
      }}
    >
      {/* Drag handle icon - provides visual affordance for draggable element */}
      <div className="absolute right-3 top-3">
        <MdDragIndicator size={20} style={{ color: "var(--Neutral400)" }} />
      </div>

      {/* Avatar with gradient border - creates visual hierarchy and polish */}
      <div
        className="mb-6 flex items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(135deg, var(--Blue500), var(--Teal500))",
          padding: "4px",
        }}
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{ backgroundColor: "var(--Neutral0)" }}
        >
          <UserAvatar
            name={user.name}
            image={user.image}
            color={user.color}
            size={80}
          />
        </div>
      </div>

      {/* User name - primary identifier */}
      <h3
        className="mb-2 text-center font-primary-bold text-base"
        style={{ color: "var(--Neutral1000)" }}
      >
        {user.name}
      </h3>

      {/* Static role badge - could be dynamic in future */}
      <p
        className="mb-6 text-center text-sm"
        style={{ color: "var(--Neutral700)" }}
      >
        Team Member
      </p>

      {/* Action buttons - text variant for secondary actions */}
      <div className="flex w-full gap-2">
        <Button variant="text" color="primary" size="md" className="flex-1">
          Message
        </Button>
        <Button variant="text" color="primary" size="md" className="flex-1">
          View Profile
        </Button>
      </div>
    </div>
  );
};

export const UserCardListView = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>(usersMock);

  // Reorder users array when a card is dragged to a new position
  const handleMoveCard = useCallback(
    (fromIndex: number, toIndex: number): void => {
      setUsers((prevUsers) => {
        const newUsers = [...prevUsers];
        const [movedUser] = newUsers.splice(fromIndex, 1);
        newUsers.splice(toIndex, 0, movedUser);
        return newUsers;
      });
    },
    []
  );

  return (
    // DndProvider wraps entire list to enable drag-and-drop functionality
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-8">
        {/* 3-column grid layout for user cards */}
        <div className="grid grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div key={user.id} className="flex justify-center">
              {/* Wrapper to center card in grid cell */}
              <UserCard user={user} index={index} onMove={handleMoveCard} />
            </div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};
