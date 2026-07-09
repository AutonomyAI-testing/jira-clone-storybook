import type { Meta, StoryObj } from "@storybook/react";
import { SuddenlySpacesView } from "./suddenly-spaces.view";

const meta: Meta<typeof SuddenlySpacesView> = {
  title: "Pages/SuddenlySpaces",
  component: SuddenlySpacesView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SuddenlySpacesView>;

export const Default: Story = {};
