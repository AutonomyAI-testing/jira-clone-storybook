import type { Meta, StoryObj } from "@storybook/react";

import { CardList } from "./card-list";
import { cardListUsersMock } from "./card-list.mock";

const meta: Meta<typeof CardList> = {
  title: "Components/CardList",
  component: CardList,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {
    users: cardListUsersMock,
  },
};

export const SingleCard: Story = {
  args: {
    users: [cardListUsersMock[0]],
  },
};

export const WithoutRole: Story = {
  args: {
    users: [
      {
        ...cardListUsersMock[0],
        role: undefined,
      },
    ],
  },
};

export const WithoutStatus: Story = {
  args: {
    users: [
      {
        ...cardListUsersMock[0],
        status: undefined,
      },
    ],
  },
};

export const WithDragAndDrop: Story = {
  args: {
    users: cardListUsersMock,
    onReorder: (reorderedUsers) => {
      console.log("Cards reordered:", reorderedUsers);
    },
  },
};
