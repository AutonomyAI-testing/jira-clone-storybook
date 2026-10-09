import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./text-input";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Work email",
    name: "email",
    placeholder: "you@company.com",
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "We send your verification code here.",
  },
};

export const WithError: Story = {
  args: {
    error: "That doesn't look like an email — try name@company.com",
  },
};

export const Filled: Story = {
  args: {
    value: "jane@northwindlabs.com",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    value: "jane@northwindlabs.com",
    readOnly: true,
    disabled: true,
  },
};
