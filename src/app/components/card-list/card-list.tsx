import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BsGripVertical } from "react-icons/bs";
import cx from "classix";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";

const DRAG_CARD_ITEM = "CARD_LIST_ITEM";

// Wrapper component that provides drag-and-drop context using react-dnd
export const CardListWrapper = (props: CardListProps): JSX.Element => (
  <DndProvider backend={HTML5Backend}>
    <CardList {...props} />
  </DndProvider>
);

export const CardList = ({
  cards = DEFAULT_CARDS,
  onReorder,
}: CardListProps): JSX.Element => {
  const [orderedCards, setOrderedCards] = useState<CardItem[]>(cards);

  const handleReorder = (newCards: CardItem[]) => {
    setOrderedCards(newCards);
    if (onReorder) {
      onReorder(newCards);
    }
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {orderedCards.map((card, index) => (
        <CardRow
          key={card.id}
          card={card}
          index={index}
          cards={orderedCards}
          onReorder={handleReorder}
        />
      ))}
    </div>
  );
};

interface CardRowProps {
  card: CardItem;
  index: number;
  cards: CardItem[];
  onReorder: (cards: CardItem[]) => void;
}

const CardRow = ({
  card,
  index,
  cards,
  onReorder,
}: CardRowProps): JSX.Element => {
  // Drag-and-drop state collection types
  type Collected = { isDragging: boolean };

  // useDrag hook for making the card draggable
  const [{ isDragging }, dragRef] = useDrag<
    { id: string; index: number },
    unknown,
    Collected
  >(
    () => ({
      type: DRAG_CARD_ITEM,
      item: { id: card.id, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [card.id, index]
  );

  // Drop target state collection type
  type DropCollected = { isOver: boolean };

  // useDrop hook for making the card a drop target; reorders cards when dropped
  const [{ isOver }, dropRef] = useDrop<
    { id: string; index: number },
    unknown,
    DropCollected
  >(
    () => ({
      accept: DRAG_CARD_ITEM,
      drop: (item: { id: string; index: number }) => {
        // Only reorder if dropped on a different position to avoid unnecessary updates
        if (item.index !== index) {
          const newCards = [...cards];
          const draggedCard = newCards[item.index];
          newCards.splice(item.index, 1);
          newCards.splice(index, 0, draggedCard);
          onReorder(newCards);
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, cards]
  );

  // Combine drag and drop refs on the same element
  const ref = (element: HTMLDivElement | null) => {
    dragRef(element);
    dropRef(element);
  };

  return (
    <div
      ref={ref}
      className={cx(
        "flex items-center gap-4 rounded-md bg-elevation-surface-raised p-4 shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered",
        isDragging && "opacity-40",
        isOver && "border-l-4"
      )}
      // Visual feedback: blue left border when dragging over this card
      style={isOver ? { borderLeftColor: "var(--Blue500)" } : undefined}
    >
      {/* Drag Handle */}
      <div className="flex-shrink-0 cursor-grab active:cursor-grabbing text-font-subtlest">
        <BsGripVertical size={20} />
      </div>

      {/* Avatar */}
      <div className="flex-shrink-0">
        <UserAvatar
          name={card.user.name}
          image={card.user.image}
          color={card.user.color}
          size={48}
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="text-font font-primary-bold">{card.user.name}</h3>
        <p className="text-sm text-font-subtle">{card.role}</p>
        <div className="flex items-center gap-4">
          {card.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <span className="text-2xs text-font-subtlest">{stat.label}</span>
              <span className="text-sm font-primary-bold text-font">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Badge + Action */}
      <div className="flex flex-shrink-0 flex-col items-end gap-2">
        {card.priority && (
          <div
            className="rounded px-2 py-1 text-2xs font-primary-bold text-font-inverse"
            style={{ backgroundColor: `var(${getPriorityColor(card.priority)})` }}
          >
            {card.priority}
          </div>
        )}
        <Button
          color="primary"
          variant="subtlest"
          size="md"
          className="whitespace-nowrap"
        >
          View
        </Button>
      </div>
    </div>
  );
};

interface Stat {
  label: string;
  value: string | number;
}

interface CardItem {
  id: string;
  user: {
    name: string;
    image?: string;
    color?: string;
  };
  role: string;
  stats: Stat[];
  priority?: "High" | "Medium" | "Low";
}

interface CardListProps {
  cards?: CardItem[];
  onReorder?: (cards: CardItem[]) => void;
}

// Maps priority levels to CSS color variables for visual distinction
const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case "High":
      return "--Red500";
    case "Medium":
      return "--Yellow500";
    case "Low":
      return "--Green500";
    default:
      return "--Neutral500";
  }
};

// Default mock data for CardList component stories and demo
const DEFAULT_CARDS: CardItem[] = [
  {
    id: "1",
    user: {
      name: "Alex Chen",
      image: "avatar-1.webp",
    },
    role: "Senior Developer",
    stats: [
      { label: "Issues", value: 12 },
      { label: "Priority", value: "High" },
    ],
    priority: "High",
  },
  {
    id: "2",
    user: {
      name: "Jordan Smith",
      image: "avatar-2.webp",
    },
    role: "Product Manager",
    stats: [
      { label: "Tasks", value: 8 },
      { label: "Status", value: "Active" },
    ],
    priority: "Medium",
  },
  {
    id: "3",
    user: {
      name: "Casey Rodriguez",
      image: "avatar-3.webp",
    },
    role: "QA Engineer",
    stats: [
      { label: "Tests", value: 45 },
      { label: "Pass Rate", value: "98%" },
    ],
    priority: "Low",
  },
  {
    id: "4",
    user: {
      name: "Morgan Taylor",
      image: "avatar-4.webp",
    },
    role: "UX Designer",
    stats: [
      { label: "Designs", value: 23 },
      { label: "Reviews", value: 5 },
    ],
    priority: "Medium",
  },
  {
    id: "5",
    user: {
      name: "Riley Johnson",
      image: "avatar-5.webp",
    },
    role: "DevOps Specialist",
    stats: [
      { label: "Deployments", value: 34 },
      { label: "Uptime", value: "99.9%" },
    ],
    priority: "High",
  },
  {
    id: "6",
    user: {
      name: "Blake Wilson",
      image: "avatar-6.webp",
    },
    role: "Technical Lead",
    stats: [
      { label: "Mentees", value: 4 },
      { label: "Code Reviews", value: 67 },
    ],
  },
];
