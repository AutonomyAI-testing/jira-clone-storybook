import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  // Wrap with RemixStub to support Link components used in Error404
  decorators: [(Story) => withRemixStub(<Story />)],
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

// Story showcasing custom error message
export const WithCustomMessage: Story = {
  args: {
    message: "Oops! The page you're looking for doesn't exist.",
  },
};

// Story showcasing custom navigation link destination
export const WithCustomLink: Story = {
  args: {
    href: "/projects",
  },
};

// Story showcasing both custom message and navigation link
export const WithCustomMessageAndLink: Story = {
  args: {
    message: "Something went wrong. Let's get you back on track.",
    href: "/projects",
  },
};
