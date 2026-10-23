import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";

import { SearchFilterBar } from "./search-filter-bar";
import { searchFilterOptionsMock } from "./search-filter-bar.mock";

const meta: Meta<typeof SearchFilterBar> = {
  title: "Components/SearchFilterBar",
  component: SearchFilterBar,
  parameters: {
    layout: "fullscreen",
  },
  // The bar is drawn 1500px wide, so give it the room it was designed for and
  // let the story canvas scroll rather than squashing the sections.
  render: (args) => (
    <div className="flex min-h-screen w-full min-w-[1500px] items-center bg-elevation-surface p-8">
      <SearchFilterBar {...args} />
    </div>
  ),
  args: {
    options: searchFilterOptionsMock,
    onSearch: () => undefined,
  },
};

export default meta;
type Story = StoryObj<typeof SearchFilterBar>;

export const Default: Story = {
  args: {
    defaultFilters: {
      location: "New York",
      propertyType: "Office Building",
      spaceTypes: ["Meeting Room", "Event Space"],
      priceRange: [500, 2000],
    },
  },
};

export const NothingSelected: Story = {};

export const MonthlySelected: Story = {
  args: {
    defaultFilters: {
      location: "New York",
      propertyType: "Coworking Space",
      billingPeriod: "monthly",
      spaceTypes: ["Hot Desk"],
    },
  },
};

export const PropertyTypeOpen: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole("button", { name: /Property Type/ })
    );
  },
};

export const SpaceTypeOpen: Story = {
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button", { name: /Space Type/ }));
  },
};

export const Searching: Story = {
  args: {
    ...Default.args,
    searching: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const NarrowCanvas: Story = {
  args: Default.args,
  render: (args) => (
    <div className="flex min-h-screen w-[900px] items-center bg-elevation-surface p-8">
      <SearchFilterBar {...args} />
    </div>
  ),
};
