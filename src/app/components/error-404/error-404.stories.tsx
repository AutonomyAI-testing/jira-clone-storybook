import type { Meta, StoryObj } from "@storybook/react";

import { Error404Page } from "./error-404-page";

const meta: Meta<typeof Error404Page> = {
  title: "Components/Error404",
  component: Error404Page,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "900px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {
  render: () => <Error404Page />,
};
