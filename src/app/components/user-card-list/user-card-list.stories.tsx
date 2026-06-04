import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";

import { UserCardList } from "./user-card-list";

const meta: Meta<typeof UserCardList> = {
  title: "Components/UserCardList",
  component: UserCardList,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UserCardList>;

export const Default: Story = {
  args: {
    users: usersMock.slice(0, 5),
  },
};
