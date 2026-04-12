import type { Meta, StoryObj } from "@storybook/react";
import {
  projectToProjectSummary,
  projectMock1,
  projectMock2,
  ProjectSummary,
} from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => withRemixStub(<Story />)],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

const mockProjectsSummary: ProjectSummary[] = [
  projectToProjectSummary(projectMock1),
  projectToProjectSummary(projectMock2),
];

export const Default: Story = {
  args: {
    projectsSummary: mockProjectsSummary,
  },
};

export const SingleProject: Story = {
  args: {
    projectsSummary: [projectToProjectSummary(projectMock1)],
  },
};

export const Empty: Story = {
  args: {
    projectsSummary: [],
  },
};

export const ManyProjects: Story = {
  args: {
    projectsSummary: [
      projectToProjectSummary(projectMock1),
      projectToProjectSummary(projectMock2),
      {
        id: "third-project",
        name: "Third Project",
        description: "A third project for layout testing",
        image:
          "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10402?size=xxlarge",
        createdAt: new Date("2023-06-15 09:00").valueOf(),
      },
      {
        id: "fourth-project",
        name: "Fourth Project",
        description: "Another project with a very long description that should be clamped on the card view in projects page",
        image:
          "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xxlarge",
        createdAt: new Date("2023-09-20 14:30").valueOf(),
      },
    ],
  },
};
