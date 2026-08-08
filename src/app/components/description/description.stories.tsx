import type { Meta, StoryObj } from "@storybook/react";
import { Description } from "./description";

const meta: Meta<typeof Description> = {
  title: "Components/Description",
  component: Description,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
    initDescription: "This issue describes a critical bug in the authentication system that causes users to be logged out unexpectedly during active sessions.",
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    initDescription: "Implement support for multiple themes including light, dark, and custom color schemes. The implementation should use CSS variables for dynamic switching without page reload.",
    readOnly: true,
  },
};

export const Empty: Story = {
  args: {
    initDescription: "",
    readOnly: false,
  },
};
