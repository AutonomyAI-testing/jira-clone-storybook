import type { Meta, StoryObj } from "@storybook/react-vite";

import { FeiMcpView } from "./fei-mcp.view";

const meta: Meta<typeof FeiMcpView> = {
  title: "Pages/FeiMcpView",
  component: FeiMcpView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof FeiMcpView>;

export const Default: Story = {};
