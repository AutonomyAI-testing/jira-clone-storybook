import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { Sidebar } from "./sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Pages/Project/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  decorators: [(Story) => withRemixStub(<Story />)],
  render: () => (
    <div style={{ height: "100vh" }}>
      <Sidebar
        projectName={projectMock1.name}
        projectDescription={projectMock1.description || "Project description"}
        projectImage={projectMock1.image}
      />
    </div>
  ),
};

export const PartyTheme: Story = {
  decorators: [(Story) => withRemixStub(<Story />)],
  render: () => (
    <div className="party" style={{ height: "100vh" }}>
      <Sidebar
        projectName={projectMock1.name}
        projectDescription={projectMock1.description || "Project description"}
        projectImage={projectMock1.image}
      />
    </div>
  ),
};
