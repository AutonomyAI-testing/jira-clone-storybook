import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta: Meta<typeof Title> = {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    initTitle: "Fix authentication bug in login flow",
    readOnly: false,
  },
};

export const ReadOnly: Story = {
  args: {
    initTitle: "Implement dark mode support across the app",
    readOnly: true,
  },
};

export const WithError: Story = {
  args: {
    initTitle: "",
    readOnly: false,
    error: "Title is required",
  },
};

export const Placeholder: Story = {
  args: {
    initTitle: "",
    readOnly: false,
    placeholder: "Write the title",
  },
};
