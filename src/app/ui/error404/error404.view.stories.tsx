import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { Error404View } from "./error404.view";

type Story = StoryObj<typeof Error404View>;

const RemixDecorator = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: React.createElement(Story),
    },
  ]);
  return React.createElement(RemixStub);
};

const meta: Meta<typeof Error404View> = {
  title: "Pages/Error404",
  component: Error404View,
  decorators: [RemixDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};
