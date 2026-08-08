import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./not-found-page";

const meta: Meta<typeof NotFoundPage> = {
  title: "Pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {};
