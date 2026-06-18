import type { Meta, StoryObj } from "@storybook/react";
import {
  ProjectSummary,
  projectToProjectSummary,
  projectMock1,
} from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ProjectCard } from "./project-card";

const meta: Meta<typeof ProjectCard> = {
  title: "Pages/Projects/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "padded",
  },
  decorators: [(Story) => withRemixStub(Story())],
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const mockProjectSummary: ProjectSummary = {
  id: "1",
  name: "Jira Clone",
  description: "A full-stack Jira-like project management application.",
  image: "/images/projects/1.svg",
};

const mockLongDescription: ProjectSummary = {
  id: "2",
  name: "Design System",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam.",
  image: "/images/projects/2.svg",
};

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <p className="mb-2 text-sm font-medium text-font-subtle">Default state</p>
        <ProjectCard project={mockProjectSummary} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-font-subtle">With long description</p>
        <ProjectCard project={mockLongDescription} />
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-font-subtle">Non-deletable (default project)</p>
        <ProjectCard project={projectToProjectSummary(projectMock1)} />
      </div>
    </div>
  ),
};

export const Standard: Story = {
  args: {
    project: mockProjectSummary,
  },
};

export const WithLongDescription: Story = {
  args: {
    project: mockLongDescription,
  },
};

export const NonDeletable: Story = {
  args: {
    project: projectToProjectSummary(projectMock1),
  },
};
