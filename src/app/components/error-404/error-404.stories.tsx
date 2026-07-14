import type { Meta, StoryObj } from "@storybook/react";
import { Error404 } from "./error-404";

const meta: Meta<typeof Error404> = {
  title: "Components/Error404",
  component: Error404,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    message: { control: { type: "text" } },
    href: { control: { type: "text" } },
  },
};

export default meta;
type Story = StoryObj<typeof Error404>;

export const Default: Story = {};

export const WithLink: Story = {
  args: {
    href: "/",
  },
};

export const WithCustomMessage: Story = {
  args: {
    message: "The project you were looking for has been removed.",
  },
};
