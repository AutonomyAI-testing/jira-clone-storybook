import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCardList } from "./profile-card-list";

const meta: Meta<typeof ProfileCardList> = {
  title: "Components/ProfileCardList",
  component: ProfileCardList,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCardList>;

export const Default: Story = {
  render: () => <ProfileCardList />,
};

export const WithDescription: Story = {
  render: () => (
    <div className="w-full">
      <div className="mb-4 p-4">
        <h2 className="mb-2 font-primary-bold text-2xl">Team Members</h2>
        <p className="text-font-subtle">
          Browse and interact with team members. Send messages, follow profiles,
          and access more options.
        </p>
      </div>
      <ProfileCardList />
    </div>
  ),
};
