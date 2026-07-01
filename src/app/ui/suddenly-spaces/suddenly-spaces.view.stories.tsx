import type { Meta, StoryObj } from "@storybook/react-vite";
import { SuddenlySpacesView } from "./suddenly-spaces.view";

const meta: Meta<typeof SuddenlySpacesView> = {
  title: "Pages/SuddenlySpacesView",
  component: SuddenlySpacesView,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "custom",
      viewports: {
        custom: {
          name: "Desktop 1440",
          styles: { width: "1440px", height: "900px" },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuddenlySpacesView>;

export const Default: Story = {};
