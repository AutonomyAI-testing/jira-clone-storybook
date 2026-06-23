import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { BacklogView } from "./backlog.view";

const meta: Meta<typeof BacklogView> = {
  title: "Pages/Project/BacklogView",
  component: BacklogView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof BacklogView>;

export const Default: Story = {
  render: () => withRemixStub(<BacklogView project={projectMock1} />),
};
