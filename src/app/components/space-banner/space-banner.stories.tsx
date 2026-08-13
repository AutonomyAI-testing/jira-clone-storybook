import type { Meta, StoryObj } from "@storybook/react";
import { SpaceBanner } from "./space-banner";

const meta: Meta<typeof SpaceBanner> = {
  title: "Components/SpaceBanner",
  component: SpaceBanner,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SpaceBanner>;

export const Default: Story = {};
