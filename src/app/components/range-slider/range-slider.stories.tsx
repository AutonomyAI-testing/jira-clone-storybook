import type { Meta, StoryObj } from "@storybook/react";

import { RangeSlider } from "./range-slider";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  parameters: {
    layout: "centered",
  },
  args: {
    min: 100,
    max: 3200,
    step: 50,
    value: [500, 2500],
    formatValue: (value: number) => `$${value}`,
    ariaLabel: "Price",
    onValueChange: () => undefined,
  },
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {};

export const AtBothEnds: Story = {
  args: {
    value: [100, 3200],
  },
};

export const SamePosition: Story = {
  args: {
    value: [1500, 1500],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
