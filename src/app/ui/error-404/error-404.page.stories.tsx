import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";

import { Error404Page } from "./error-404.page";

const meta: Meta<typeof Error404Page> = {
  title: "Pages/Error404Page",
  component: Error404Page,
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
type Story = StoryObj<typeof Error404Page>;

export const Default: Story = {};
