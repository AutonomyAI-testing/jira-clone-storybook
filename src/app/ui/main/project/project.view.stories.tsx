import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1, projectMock2 } from "@domain/project";
import { ProjectView } from "./project.view";

const meta: Meta<typeof ProjectView> = {
  title: "Pages/Project",
  component: ProjectView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof ProjectView>;

export const Default: Story = {
  args: {
    name: projectMock1.name,
    description: projectMock1.description,
    image: projectMock1.image,
  },
};

export const Analytics: Story = {
  args: {
    name: projectMock1.name,
    description: projectMock1.description,
    image: projectMock1.image,
  },
};

export const LongDescription: Story = {
  args: {
    name: projectMock2.name,
    description: projectMock2.description,
    image: projectMock2.image,
  },
};
