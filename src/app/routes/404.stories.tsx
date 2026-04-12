import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import NotFound404Route from "./404";

const meta: Meta<typeof NotFound404Route> = {
  title: "Routes/NotFound404Route",
  component: NotFound404Route,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NotFound404Route>;

export const Default: Story = {};
