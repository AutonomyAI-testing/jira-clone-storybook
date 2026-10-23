import type { Meta, StoryObj } from "@storybook/react";

import { FilterSelect } from "./filter-select";

const options = [
  "Office Building",
  "Coworking Space",
  "Retail Unit",
  "Warehouse",
  "Studio",
];

const meta: Meta<typeof FilterSelect> = {
  title: "Components/FilterSelect",
  component: FilterSelect,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Property Type",
    options,
    value: "Office Building",
    onValueChange: () => undefined,
  },
};

export default meta;
type Story = StoryObj<typeof FilterSelect>;

export const SingleSelect: Story = {};

export const Empty: Story = {
  args: {
    value: "",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const MultiSelect: Story = {
  args: {
    label: "Space Type",
    multiple: true,
    value: ["Meeting Room", "Event Space"],
    onValueChange: () => undefined,
  },
};
