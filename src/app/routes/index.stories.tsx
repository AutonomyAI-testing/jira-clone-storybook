import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
import { CatchBoundary } from "./index";

const meta: Meta<typeof CatchBoundary> = {
  title: "Routes/CatchBoundary",
  component: CatchBoundary,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof CatchBoundary>;

export const Default: Story = {};
