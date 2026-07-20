import type { Meta, StoryObj } from "@storybook/react";
import { LandingView } from "./landing.view";

const meta: Meta<typeof LandingView> = {
  title: "Pages/Landing",
  component: LandingView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LandingView>;

export const Default: Story = {};
