import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1, projectMock2 } from "@domain/project";
import { withRemixStub, withMainContext } from "@app/stories/utils";
import { AnalyticsView } from "./analytics.view";

const meta: Meta<typeof AnalyticsView> = {
  title: "Pages/Project/AnalyticsView",
  component: AnalyticsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof AnalyticsView>;

export const Default: Story = {
  args: {
    project: projectMock1,
  },
};

export const SmallTeam: Story = {
  args: {
    project: projectMock2,
  },
};
