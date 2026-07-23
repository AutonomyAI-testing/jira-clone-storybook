import type { Meta, StoryObj } from "@storybook/react-vite";

import { SuddenlySpacesLogo } from "./suddenly-spaces-logo";

const meta: Meta<typeof SuddenlySpacesLogo> = {
  title: "Welcome/SuddenlySpacesLogo",
  component: SuddenlySpacesLogo,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof SuddenlySpacesLogo>;

export const Default: Story = {
  args: {
    className: "w-[393px] text-font",
  },
};
