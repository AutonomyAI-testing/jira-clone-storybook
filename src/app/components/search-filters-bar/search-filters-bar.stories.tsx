import type { Meta, StoryObj } from "@storybook/react";
import { SearchFiltersBar } from "./search-filters-bar";

const meta: Meta<typeof SearchFiltersBar> = {
  title: "Components/SearchFiltersBar",
  component: SearchFiltersBar,
  parameters: {
    layout: "padded",
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchFiltersBar>;

export const Default: Story = {
  render: () => (
    <div className="w-full">
      <SearchFiltersBar />
    </div>
  ),
};

export const WithSearchHandler: Story = {
  render: () => (
    <div className="w-full">
      <SearchFiltersBar onSearch={(filters) => console.log(filters)} />
    </div>
  ),
};
