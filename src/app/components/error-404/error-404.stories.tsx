import type { Meta, StoryObj } from "@storybook/react";

import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    code: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    actionText: {
      control: {
        type: "text",
      },
    },
    actionHref: {
      control: {
        type: "text",
      },
    },
    imageSrc: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: "The page you are looking for has been moved or deleted.",
    actionText: "Return to Home",
  },
};

export const ProjectNotFound: Story = {
  args: {
    code: "404",
    description: "Project Error",
    message: "Project not found. Please check the project ID and try again.",
    actionText: "View All Projects",
    actionHref: "/projects",
  },
};

export const WithCustomImage: Story = {
  args: {
    imageSrc: "/images/error-404.svg",
  },
};
