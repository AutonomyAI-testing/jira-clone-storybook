import type { Meta, StoryObj } from "@storybook/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Tooltip } from "./tooltip";

const BUTTON_STYLES = "rounded bg-background-neutral p-2 text-font hover:bg-background-neutral-hovered";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipPrimitive.Provider>
      <Tooltip title="Tooltip message">
        <div className="rounded bg-background-neutral p-1 text-font">
          Hover over me!
        </div>
      </Tooltip>
    </TooltipPrimitive.Provider>
  ),
};

export const WithLongText: Story = {
  render: () => (
    <TooltipPrimitive.Provider>
      <Tooltip title="This is a longer tooltip message with more information">
        <button className="rounded bg-background-brand px-3 py-2 text-sm text-font-inverse hover:bg-background-brand-hovered">
          Hover for details
        </button>
      </Tooltip>
    </TooltipPrimitive.Provider>
  ),
};

export const MultipleTooltips: Story = {
  render: () => (
    <TooltipPrimitive.Provider>
      <div className="flex gap-4">
        <Tooltip title="Save">
          <button className={BUTTON_STYLES}>💾</button>
        </Tooltip>
        <Tooltip title="Delete">
          <button className={BUTTON_STYLES}>🗑️</button>
        </Tooltip>
        <Tooltip title="Settings">
          <button className={BUTTON_STYLES}>⚙️</button>
        </Tooltip>
      </div>
    </TooltipPrimitive.Provider>
  ),
};
