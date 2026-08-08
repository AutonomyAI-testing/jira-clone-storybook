import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
// Re-export Props type for use in Storybook type definitions

import { Error404, type Props } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<Props>;

export const Default: Story = {};

// Example showing a custom redirect destination
export const CustomHref: Story = {
  args: {
    href: "/",
  },
};
