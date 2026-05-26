import type { Meta, StoryObj } from "@storybook/react";
import {
  projectToProjectSummary,
  projectMock1,
  projectMock2,
} from "@domain/project";

import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {
  args: {
    projectsSummary: [
      projectToProjectSummary(projectMock1),
      projectToProjectSummary(projectMock2),
    ],
  },
};

export const Empty: Story = {
  args: {
    projectsSummary: [],
  },
};
