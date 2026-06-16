import type { Meta, StoryObj } from "@storybook/react";
import { ErrorBase } from "./error-base";

const meta: Meta<typeof ErrorBase> = {
  title: "Components/ErrorBase",
  component: ErrorBase,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBase>;

export const NotFound: Story = {
  args: {
    variant: "404",
    message: "Go back home",
    href: "/",
  },
};

export const ServerError: Story = {
  args: {
    variant: "500",
    message: "Go back home",
    href: "/",
  },
};
