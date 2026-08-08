import { useState, useCallback } from "react";
import cx from "classix";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MdDragIndicator } from "react-icons/md";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";

const DRAG_USER_CARD = "USER_CARD";

export const UserCardList = ({ users }: Props): JSX.Element => {
  const [orderedUsers, setUsers] = useState<User[]>(users);

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      setUsers((prev) => {
        const next = [...prev];
        const [removed] = next.splice(dragIndex, 1);
        next.splice(hoverIndex, 0, removed);
        return next;
      });
    },
    []
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-4">
        {orderedUsers.map((user, index) => (
          <DraggableUserCard
            key={user.id}
            user={user}
            index={index}
            moveCard={moveCard}
          />
        ))}
      </div>
    </DndProvider>
  );
};

interface DraggableUserCardProps {
  user: User;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableUserCard = ({
  user,
  index,
  moveCard,
}: DraggableUserCardProps): JSX.Element => {
  // Setup drag functionality to detect when this card is being dragged
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DRAG_USER_CARD,
      item: { id: user.id, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [user.id, index]
  );

  // Setup drop functionality to detect when another card is dragged over this one
  const [{ isOver }, dropRef] = useDrop<
    { id: string; index: number },
    unknown,
    { isOver: boolean }
  >(
    () => ({
      accept: DRAG_USER_CARD,
      drop: (item) => {
        // Only move if the dragged item is from a different position
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

  // Combine drag and drop refs into a single callback to apply both to the same element
  const combinedRef = (el: HTMLDivElement) => {
    dragRef(el);
    dropRef(el);
  };

  return (
    <div
      ref={combinedRef}
      className={cx(
        "flex items-center justify-between rounded-xl bg-elevation-surface-raised p-4 shadow-sm duration-200 ease-in-out",
        "hover:shadow-md hover:bg-elevation-surface-raised-hovered",
        isDragging && "opacity-30",
        isOver && "opacity-50"
      )}
    >
      {/* Drag handle and avatar */}
      <div className="flex items-center gap-4">
        <div className="text-font-subtlest cursor-grab active:cursor-grabbing">
          <MdDragIndicator size={20} />
        </div>

        {/* Avatar with gradient ring for visual hierarchy */}
        <div
          style={{
            background: "linear-gradient(135deg, #64f4ac, #8b9fe8)",
            padding: "3px",
            borderRadius: "50%",
          }}
        >
          <UserAvatar
            name={user.name}
            image={user.image}
            color={user.color}
            size={56}
          />
        </div>

        {/* User info */}
        <div className="flex flex-col gap-1">
          <h3 className="text-font text-lg font-medium">
            {user.name}
          </h3>
          <p className="text-font-subtle text-sm">
            @{user.name.toLowerCase().replace(/\s+/g, "_")}
          </p>
          <p className="text-font-subtle text-xs">
            Frontend Developer · Madrid
          </p>
        </div>
      </div>

      {/* Follow button */}
      <button
        className={cx(
          "border border-border-brand rounded-full px-4 py-1 text-sm text-font-brand",
          "duration-200 ease-in-out",
          "hover:bg-background-brand-subtlest-hovered active:bg-background-brand-subtlest-pressed"
        )}
        aria-label={`Follow ${user.name}`}
      >
        Follow
      </button>
    </div>
  );
};

interface Props {
  users: User[];
}
