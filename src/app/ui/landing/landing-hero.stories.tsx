import type { Meta, StoryObj } from "@storybook/react";
import { LandingHero } from "./landing-hero";

const meta = {
  title: "Pages/Landing",
  component: LandingHero,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LandingHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <LandingHero />,
};
