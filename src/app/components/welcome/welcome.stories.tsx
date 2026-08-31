import type { Meta, StoryObj } from "@storybook/react";

import { Welcome } from "./welcome";

const meta: Meta<typeof Welcome> = {
  title: "Components/Welcome",
  component: Welcome,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Welcome>;

export const Default: Story = {};
