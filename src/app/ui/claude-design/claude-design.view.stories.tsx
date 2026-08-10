import type { Meta, StoryObj } from "@storybook/react";
import { ClaudeDesignView } from "./claude-design.view";

const meta: Meta<typeof ClaudeDesignView> = {
  title: "Pages/ClaudeDesign",
  component: ClaudeDesignView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ClaudeDesignView>;

/** Default desktop two-panel layout */
export const Default: Story = {};

/** Mobile viewport — left brand panel hidden, mobile wordmark visible above form */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

/** Loading state after form submit (triggered by interacting with the form) */
export const WithLoadingState: Story = {
  name: "Loading State",
};
