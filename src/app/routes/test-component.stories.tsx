import type { Meta, StoryObj } from "@storybook/react";

import TestComponent from "./test-component";

const meta: Meta<typeof TestComponent> = {
  title: "Routes/TestComponent",
  component: TestComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof TestComponent>;

export const Default: Story = {};
