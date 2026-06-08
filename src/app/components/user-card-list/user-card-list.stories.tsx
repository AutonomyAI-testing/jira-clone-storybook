import type { Meta, StoryObj } from "@storybook/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { UserCardList, type UserCardData } from "./user-card-list";

const meta: Meta<typeof UserCardList> = {
  title: "Components/UserCardList",
  component: UserCardList,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserCardList>;

const mockUsers: UserCardData[] = [
  {
    id: "1",
    name: "Sarah Chen",
    handle: "sarahchen",
    bio: "Product designer passionate about user-centered design and accessibility",
    badge: "Online",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Alex Rodriguez",
    handle: "alexrodriguez",
    bio: "Full-stack engineer building scalable web applications",
    badge: "Engineer",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Jamie Lee",
    handle: "jamielee",
    bio: "Design systems lead, creating beautiful and functional UI libraries",
    badge: "Designer",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Morgan Smith",
    handle: "morgansmith",
    bio: "Project manager orchestrating cross-functional teams to deliver great products",
    badge: "Manager",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Taylor Davis",
    handle: "taylordavis",
    bio: "Frontend developer specializing in React and TypeScript",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "6",
    name: "Casey Johnson",
    handle: "caseyjohnson",
    bio: "QA engineer ensuring quality and reliability across all products",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
  },
];

export const Default: Story = {
  args: {
    users: mockUsers,
  },
};

export const SingleCard: Story = {
  args: {
    users: [mockUsers[0]],
  },
};

export const WithoutBadges: Story = {
  args: {
    users: mockUsers.map(({ badge, ...user }) => user) as UserCardData[],
  },
};

export const LongBio: Story = {
  args: {
    users: [
      {
        ...mockUsers[0],
        bio: "Product designer passionate about user-centered design and accessibility. Experienced in design systems, prototyping, and user research. Always eager to learn new tools and techniques.",
      },
    ],
  },
};
