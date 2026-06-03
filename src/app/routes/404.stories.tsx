import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
import NotFound404Route from "./404";

const meta: Meta<typeof NotFound404Route> = {
  title: "Routes/NotFound404Route",
  component: NotFound404Route,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof NotFound404Route>;

export const Default: Story = {};
