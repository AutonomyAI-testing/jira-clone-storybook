import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import IndexRoute from "./index";

const meta: Meta<typeof IndexRoute> = {
  title: "Routes/IndexRoute",
  component: IndexRoute,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ paddingTop: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IndexRoute>;

export const HeroSection: Story = {};
