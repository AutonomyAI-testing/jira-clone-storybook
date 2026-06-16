import type { Meta, StoryObj } from "@storybook/react";
import { HeroSearch } from "./hero-search";

const meta: Meta<typeof HeroSearch> = {
  title: "Components/HeroSearch",
  component: HeroSearch,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroSearch>;

export const Default: Story = {
  render: () => <HeroSearch />,
};
