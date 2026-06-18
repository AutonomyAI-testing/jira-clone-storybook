import type { Meta, StoryObj } from "@storybook/react";
import { LandingHero } from "./landing-hero";

const meta: Meta<typeof LandingHero> = {
  title: "Pages/LandingHero",
  component: LandingHero,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingHero>;

export const Default: Story = {
  render: () => <LandingHero />,
};
