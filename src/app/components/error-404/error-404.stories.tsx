import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  render: () => <Error404 cta_href="/" />,
};

export const WithCustomHref: Story = {
  render: () => <Error404 cta_href="/projects" />,
};
