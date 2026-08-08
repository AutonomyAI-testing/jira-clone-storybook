import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
import ServerError500Route from "./500";

const meta: Meta<typeof ServerError500Route> = {
  title: "Routes/ServerError500Route",
  component: ServerError500Route,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof ServerError500Route>;

export const Default: Story = {};
