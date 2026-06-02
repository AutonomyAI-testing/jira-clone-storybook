import type { Meta, StoryObj } from "@storybook/react-vite";
import { Error404Page } from "./error-404-page";

const meta: Meta<typeof Error404Page> = {
  title: "Components/Error404Page",
  component: Error404Page,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    homeHref: {
      control: {
        type: "text",
      },
    },
    showBackButton: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {
  args: {
    title: "404 - Page Not Found",
    description:
      "The page you're looking for doesn't exist. Let's get you back on track.",
    homeHref: "/",
    showBackButton: true,
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-elevation-surface">
        <Story />
      </div>
    ),
  ],
};

export const WithCustomTitle: Story = {
  args: {
    title: "Oops! Lost in Code Galaxy",
    description:
      "The page you're looking for seems to have vanished into the digital void. No worries, let's get you back on track!",
    homeHref: "/",
    showBackButton: true,
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-elevation-surface">
        <Story />
      </div>
    ),
  ],
};

export const NoBackButton: Story = {
  args: {
    title: "404 - Page Not Found",
    description:
      "The page you're looking for doesn't exist. Let's get you back on track.",
    homeHref: "/",
    showBackButton: false,
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-elevation-surface">
        <Story />
      </div>
    ),
  ],
};

export const CustomHomeHref: Story = {
  args: {
    title: "404 - Page Not Found",
    description:
      "The page you're looking for doesn't exist. Let's get you back on track.",
    homeHref: "/projects",
    showBackButton: true,
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen items-center justify-center bg-elevation-surface">
        <Story />
      </div>
    ),
  ],
};
