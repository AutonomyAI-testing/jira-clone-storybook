import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserCardList } from "./user-card-list";

const meta: Meta<typeof UserCardList> = {
  title: "Components/UserCardList",
  component: UserCardList,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof UserCardList>;

export const Default: Story = {
  args: {
    users: usersMock.slice(0, 6),
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[700px]">
        <Story />
      </div>
    ),
  ],
};

export const WithTitle: Story = {
  args: {
    users: usersMock.slice(0, 6),
    title: "Team Members",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[700px]">
        <Story />
      </div>
    ),
  ],
};

export const EmptyState: Story = {
  args: {
    users: [],
  },
};

export const SingleUser: Story = {
  args: {
    users: [usersMock[0]],
    title: "Assigned To",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[200px]">
        <Story />
      </div>
    ),
  ],
};

export const ManyUsers: Story = {
  args: {
    users: usersMock,
    title: "All Contributors",
  },
  decorators: [
    (Story) => (
      <div className="h-96 w-[700px] overflow-y-auto rounded-lg border border-border p-4">
        <Story />
      </div>
    ),
  ],
};

export const WithClickHandler: Story = {
  args: {
    users: usersMock.slice(0, 6),
    title: "Select a user",
    onUserClick: (userId: string) => {
      alert(`Clicked user: ${userId}`);
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-[700px]">
        <Story />
      </div>
    ),
  ],
};
