import type { Meta, StoryObj } from "@storybook/react-vite";

import NotFound404Route from "./404";
import { CatchBoundary } from "./index";

const meta: Meta<typeof NotFound404Route> = {
  title: "Routes/404",
  component: NotFound404Route,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof NotFound404Route>;

export const NotFoundRoute: Story = {
  name: "NotFound404Route",
};

export const CatchBoundaryStory: StoryObj<typeof CatchBoundary> = {
  name: "CatchBoundary",
  render: () => (
    <CatchBoundary />
  ),
  parameters: {
    layout: "centered",
  },
};
