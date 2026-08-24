import type { Meta, StoryObj } from "@storybook/react";
import ClaudeFeiRoute from "./claude-fei";

const meta: Meta<typeof ClaudeFeiRoute> = {
  title: "Pages/ClaudeFei",
  component: ClaudeFeiRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ClaudeFeiRoute>;

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
      viewports: {
        desktop: {
          name: "Desktop",
          styles: { width: "1280px", height: "800px" },
          type: "desktop",
        },
      },
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "390px", height: "844px" },
          type: "mobile",
        },
      },
    },
  },
};
