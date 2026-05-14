import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
import { IssuePanel } from "./issue-panel.view";
import { UserContextProvider } from "@app/store/user.store";
import { ProjectContextProvider } from "@app/ui/main/project/project.store";
import { userMock1, userMock2 } from "@domain/user";
import { commentMock1, commentMock2 } from "@domain/comment";
import { priorityHigh, priorityMedium, priorityLow } from "@domain/priority";
import { projectMock1 } from "@domain/project";
import { Issue } from "@domain/issue";

// Mock issue data for the stories
const mockIssue: Issue = {
  id: "test-issue-123",
  name: "Implement new feature for user dashboard",
  description:
    "This is a detailed description of the issue. It should explain what needs to be done and provide context for the implementer.",
  categoryType: "IN_PROGRESS",
  reporter: userMock1,
  asignee: userMock2,
  comments: [commentMock1, commentMock2],
  priority: priorityHigh,
  createdAt: new Date("2024-01-15 10:00").valueOf(),
  updatedAt: new Date("2024-01-20 15:30").valueOf(),
};

const mockIssueEmpty: Issue = {
  id: "test-issue-empty",
  name: "Bug: Empty state handling",
  description: "",
  categoryType: "TODO",
  reporter: userMock1,
  asignee: userMock1,
  comments: [],
  priority: priorityLow,
  createdAt: Date.now(),
  updatedAt: Date.now(),
};

const meta: Meta<typeof IssuePanel> = {
  title: "Board/IssuePanel",
  component: IssuePanel,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) =>
      withRemixStub(
        <UserContextProvider user={userMock1}>
          <ProjectContextProvider project={projectMock1}>
            <Story />
          </ProjectContextProvider>
        </UserContextProvider>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof IssuePanel>;

export const Default: Story = {
  args: {
    issue: mockIssue,
  },
};

export const WithMediumPriority: Story = {
  args: {
    issue: {
      ...mockIssue,
      priority: priorityMedium,
      name: "Medium priority task",
      description: "This task has medium priority and needs attention.",
    },
  },
};

export const EmptyComments: Story = {
  args: {
    issue: mockIssueEmpty,
  },
};

export const CreateNew: Story = {
  args: {
    issue: undefined,
  },
};
