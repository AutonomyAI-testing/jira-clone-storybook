import type { Meta, StoryObj } from "@storybook/react";
import { Error404Full } from "./error-404-full";

const meta: Meta<typeof Error404Full> = {
  title: "Pages/Error404Full",
  component: Error404Full,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Error404Full>;

export const Default: Story = {};
