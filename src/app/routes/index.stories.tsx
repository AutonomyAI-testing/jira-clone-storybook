import type { Meta, StoryObj } from "@storybook/react";
import IndexRoute from "./index";

const meta: Meta<typeof IndexRoute> = {
  title: "Routes/IndexRoute",
  component: IndexRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof IndexRoute>;

export const Default: Story = {};
