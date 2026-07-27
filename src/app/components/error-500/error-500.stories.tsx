import type { Meta, StoryObj } from "@storybook/react-vite";

import { Error500 } from "./error-500";

const meta: Meta<typeof Error500> = {
  title: "Components/Error500",
  component: Error500,
  parameters: {
    layout: "centered",
  },
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
type Story = StoryObj<typeof Error500>;

export const Default: Story = {};

export const WithLink: Story = {
  args: {
    href: "/",
  },
};
