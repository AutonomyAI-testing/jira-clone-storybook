import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "The text content displayed in the tooltip",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    show: {
      control: "boolean",
      description: "Enable/disable tooltip functionality",
      defaultValue: true,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "State",
      },
    },
    className: {
      control: "text",
      description: "Additional Tailwind CSS classes for custom styling",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
    children: {
      control: null,
      description:
        "Element that triggers the tooltip on hover (desktop) or tap"
        + " (touch)",
      table: {
        type: { summary: "JSX.Element" },
        category: "Content",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * Default tooltip behavior. Hover over the element on desktop,
 * or tap on touch devices. Shows smooth slide-up animation.
 */
export const Default: Story = {
  render: () => (
    <Tooltip title="Tooltip message">
      <div className="rounded bg-background-neutral p-1 text-font">
        Hover over me!
      </div>
    </Tooltip>
  ),
};

/**
 * Demonstrates tooltip with longer text content.
 * Useful for checking text wrapping behavior.
 */
export const LongContent: Story = {
  render: () => (
    <Tooltip title="This is a longer tooltip message that provides more context">
      <button className="rounded bg-background-brand-bold px-3 py-2 text-font-inverse">
        Long Tooltip
      </button>
    </Tooltip>
  ),
};

/**
 * Shows behavior when `show` prop is set to false.
 * Tooltip never appears even on hover.
 */
export const Disabled: Story = {
  render: () => (
    <Tooltip title="This tooltip is disabled" show={false}>
      <div className="rounded bg-background-neutral p-1 text-font">
        Tooltip disabled
      </div>
    </Tooltip>
  ),
};

/**
 * Demonstrates custom styling using the `className` prop.
 * Applies Tailwind classes for custom colors and padding.
 */
export const CustomStyling: Story = {
  render: () => (
    <Tooltip
      title="Custom styled tooltip"
      className="bg-background-brand-bold text-font-inverse font-primary-bold"
    >
      <div className="rounded bg-background-neutral p-1 text-font">
        Custom Tooltip
      </div>
    </Tooltip>
  ),
};
