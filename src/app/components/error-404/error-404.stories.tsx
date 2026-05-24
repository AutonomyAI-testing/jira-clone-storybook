import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "stretch" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    message: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
  },

};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const WithMessage: Story = {
  args: {
    message: "The resource you requested could not be found.",
  },
};

export const WithHomeButton: Story = {
  args: {
    href: "/",
  },
};

export const FullExample: Story = {
  args: {
    message: "It seems that you have lost! Go to the main page",
    href: "/",
  },
};
