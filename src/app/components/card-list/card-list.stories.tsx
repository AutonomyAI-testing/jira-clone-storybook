import type { Meta, StoryObj } from "@storybook/react";
import { CardListWrapper as CardList } from "./card-list";

const meta: Meta<typeof CardList> = {
  title: "Components/CardList",
  component: CardList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A list of cards with drag-and-drop reordering support. Grab the handle icon on the left side of any card to drag and reorder.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  args: {},
};

export const CustomCards: Story = {
  args: {
    cards: [
      {
        id: "custom-1",
        user: {
          name: "Sarah Anderson",
          image: "avatar-1.webp",
          color: "#4A90E2",
        },
        role: "Frontend Engineer",
        stats: [
          { label: "Components", value: 28 },
          { label: "PRs Merged", value: 15 },
        ],
        priority: "High",
      },
      {
        id: "custom-2",
        user: {
          name: "Michael Chen",
          image: "avatar-2.webp",
          color: "#7B68EE",
        },
        role: "Backend Engineer",
        stats: [
          { label: "APIs", value: 12 },
          { label: "Performance", value: "Good" },
        ],
        priority: "Medium",
      },
      {
        id: "custom-3",
        user: {
          name: "Emily Rodriguez",
        },
        role: "Security Engineer",
        stats: [
          { label: "Audits", value: 6 },
          { label: "Issues Fixed", value: 19 },
        ],
      },
    ],
  },
};
