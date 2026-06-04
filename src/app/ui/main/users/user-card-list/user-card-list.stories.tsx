import type { Meta, StoryObj } from "@storybook/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { usersMock } from "@domain/user";
import { UserCardListView, UserCard } from "./user-card-list";

const meta: Meta<typeof UserCardListView> = {
  title: "Pages/Users/UserCardListView",
  component: UserCardListView,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof UserCardListView>;

export const Default: Story = {
  render: () => <UserCardListView />,
};

export const SingleCard: Story = {
  render: () => (
    <DndProvider backend={HTML5Backend}>
      <UserCard user={usersMock[1]} index={0} onMove={() => {}} />
    </DndProvider>
  ),
  parameters: {
    layout: "centered",
  },
};
