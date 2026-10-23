import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RangeSlider } from "./range-slider";

const meta: Meta<typeof RangeSlider> = {
  title: "Components/RangeSlider",
  component: RangeSlider,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  render: () => <RangeSliderComponent />,
};

const RangeSliderComponent = () => {
  const [value, setValue] = useState([500, 2500]);

  return (
    <RangeSlider
      label="Price"
      value={value}
      min={0}
      max={5000}
      step={50}
      onValueChange={setValue}
    />
  );
};

export const SingleThumb: Story = {
  render: () => <SingleThumbComponent />,
};

const SingleThumbComponent = () => {
  const [value, setValue] = useState([60]);

  return <RangeSlider label="Opacity" value={value} onValueChange={setValue} />;
};

export const Disabled: Story = {
  args: {
    label: "Price",
    value: [500, 2500],
    min: 0,
    max: 5000,
    step: 50,
    disabled: true,
    onValueChange: () => undefined,
  },
};
