import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  PropertySearchFilters,
  propertySearchFiltersMock,
} from "@domain/property-search";

import { PropertySearchBar } from "./property-search-bar";

const meta: Meta<typeof PropertySearchBar> = {
  title: "Components/PropertySearchBar",
  component: PropertySearchBar,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="w-full overflow-x-auto p-10">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PropertySearchBar>;

export const Default: Story = {
  render: () => <PropertySearchBarComponent />,
};

export const Monthly: Story = {
  render: () => (
    <PropertySearchBarComponent
      filters={{ ...propertySearchFiltersMock, rentalPeriod: "monthly" }}
    />
  ),
};

export const Searching: Story = {
  render: () => <PropertySearchBarComponent isLoading />,
};

export const LongValues: Story = {
  render: () => (
    <PropertySearchBarComponent
      filters={{
        ...propertySearchFiltersMock,
        location: "Downtown Manhattan Financial District",
        spaceTypes: [
          "meeting-room",
          "event-space",
          "private-office",
          "hot-desk",
          "studio",
          "conference-suite",
        ],
      }}
    />
  ),
};

export const DarkTheme: Story = {
  // `themeOverride` is the theme-switcher addon's own per-story hook, so the
  // whole canvas renders on the dark tokens without touching the toolbar.
  parameters: { theming: { themeOverride: "dark" } },
  render: () => <PropertySearchBarComponent />,
};

const PropertySearchBarComponent = ({
  filters = propertySearchFiltersMock,
  isLoading = false,
}: PropertySearchBarComponentProps) => {
  const [value, setValue] = useState<PropertySearchFilters>(filters);

  return (
    <PropertySearchBar
      value={value}
      onChange={setValue}
      onSubmit={() => undefined}
      isLoading={isLoading}
    />
  );
};

interface PropertySearchBarComponentProps {
  filters?: PropertySearchFilters;
  isLoading?: boolean;
}
