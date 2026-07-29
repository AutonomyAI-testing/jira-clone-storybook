import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub, withMainContext } from "@app/stories/utils";
import { PropertySearchHero } from "./property-search-hero";

const meta: Meta<typeof PropertySearchHero> = {
  title: "Pages/Main/PropertySearchHero",
  component: PropertySearchHero,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof PropertySearchHero>;

export const Default: Story = {};

export const CommercialTab: Story = {};

export const ResidentialTab: Story = {};
