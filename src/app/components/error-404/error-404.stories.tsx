import type { Meta, StoryObj } from "@storybook/react-vite";
import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Pages/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
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
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message:
      "Whoops! This spell backfired. The wizard's divination failed us.",
  },
};

export const CustomHref: Story = {
  args: {
    href: "/projects",
  },
};

export const CustomMessageAndHref: Story = {
  args: {
    message:
      "The crystal ball shows nothing but void... this page doesn't exist in our realm.",
    href: "/projects",
  },
};
