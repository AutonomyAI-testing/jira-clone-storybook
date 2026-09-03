import type { Meta, StoryObj } from "@storybook/react-vite";

import { SuddenlySpacesHeader } from "./suddenly-spaces-header";

const meta: Meta<typeof SuddenlySpacesHeader> = {
  title: "SuddenlySpaces/SuddenlySpacesHeader",
  component: SuddenlySpacesHeader,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "white" },
  },
};

export default meta;
type Story = StoryObj<typeof SuddenlySpacesHeader>;

export const Default: Story = {};
