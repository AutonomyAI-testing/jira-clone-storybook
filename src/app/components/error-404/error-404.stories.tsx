import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    message: {
      control: {
        type: "text",
      },
      description: "Witty message displayed under the heading",
    },
    href: {
      control: {
        type: "text",
      },
      description: "URL for the primary dashboard button",
    },
    showGoBack: {
      control: {
        type: "boolean",
      },
      description: "Whether to show the Go Back button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {
  args: {
    message: "Looks like the wizard lost the spell and sent you here!",
    href: "/projects",
    showGoBack: true,
  },
};

export const WithCustomMessage: Story = {
  args: {
    message:
      "Even the wizard's magic couldn't find this page. Let's get you back on track!",
    href: "/projects",
  },
};

export const WithoutLink: Story = {
  args: {
    message: "Looks like the wizard lost the spell and sent you here!",
  },
};

export const WithDashboardHref: Story = {
  args: {
    message:
      "Your journey hit a dead end. But don't worry, the wizard can guide you home!",
    href: "/",
    showGoBack: true,
  },
};
