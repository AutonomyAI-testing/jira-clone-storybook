import type { Meta, StoryObj } from "@storybook/react";

import { SegmentedTabs } from "./segmented-tabs";

const meta: Meta<typeof SegmentedTabs> = {
  title: "Components/SegmentedTabs",
  component: SegmentedTabs,
  parameters: {
    layout: "centered",
  },
  args: {
    options: [
      { value: "hourly", label: "Hourly" },
      { value: "monthly", label: "Monthly" },
    ],
    value: "hourly",
    ariaLabel: "Billing period",
    onValueChange: () => undefined,
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedTabs>;

export const HourlySelected: Story = {};

export const MonthlySelected: Story = {
  args: {
    value: "monthly",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ThreeItems: Story = {
  args: {
    options: [
      { value: "hourly", label: "Hourly" },
      { value: "daily", label: "Daily" },
      { value: "monthly", label: "Monthly" },
    ],
  },
};
