import type { Meta, StoryObj } from "@storybook/react";
import { withRemixStub } from "@app/stories/utils";
import { UserContextProvider } from "@app/store/user.store";
import { ProjectContextProvider } from "@app/ui/main/project";
import { userMock1, userMock2, usersMock } from "@domain/user";
import { projectMock1 } from "@domain/project";
import { todoIssuesMock1, inProgressIssuesMock1, doneIssuesMock1 } from "@domain/issue";
import { commentMock1, commentMock2, commentMock3 } from "@domain/comment";
import { IssuePanel } from "./issue-panel.view";

const meta: Meta<typeof IssuePanel> = {
  title: "Pages/Project/IssuePanel",
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

// Default story with an existing issue (IN_PROGRESS status)
export const Default: Story = {
  args: {
    issue: inProgressIssuesMock1[0],
  },
};

// Issue with multiple comments
export const WithComments: Story = {
  args: {
    issue: {
      ...todoIssuesMock1[0],
      comments: [commentMock1, commentMock2, commentMock3],
    },
  },
};

// New issue creation (no issue prop provided)
export const NewIssue: Story = {
  args: {
    issue: undefined,
  },
};

// Done issue
export const DoneIssue: Story = {
  args: {
    issue: doneIssuesMock1[0],
  },
};

// Issue assigned to a different user (read-only for current user)
export const AssignedToOtherUser: Story = {
  args: {
    issue: {
      ...inProgressIssuesMock1[1],
      reporter: userMock2,
      asignee: usersMock[2],
    },
  },
};
