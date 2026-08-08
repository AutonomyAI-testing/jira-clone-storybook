import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Create Issue",
    color: "primary",
    variant: "contained",
  },
};

export const PrimaryText: Story = {
  args: {
    children: "View Details",
    color: "primary",
    variant: "text",
  },
};

export const Neutral: Story = {
  args: {
    children: "Cancel",
    color: "neutral",
    variant: "contained",
  },
};

export const NeutralText: Story = {
  args: {
    children: "More Options",
    color: "neutral",
    variant: "text",
  },
};

export const Danger: Story = {
  args: {
    children: "Delete Issue",
    color: "danger",
    variant: "contained",
  },
};

export const Success: Story = {
  args: {
    children: "Resolve",
    color: "success",
    variant: "contained",
  },
};

export const Disabled: Story = {
  args: {
    children: "Submit",
    color: "primary",
    variant: "contained",
    disabled: true,
  },
};
