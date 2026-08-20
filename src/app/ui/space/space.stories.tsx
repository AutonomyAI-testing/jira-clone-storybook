import type { Meta, StoryObj } from "@storybook/react-vite";

import { SpaceView } from "./space.view";

const meta: Meta<typeof SpaceView> = {
  title: "UI/SpaceView",
  component: SpaceView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SpaceView>;

export const Default: Story = {};
