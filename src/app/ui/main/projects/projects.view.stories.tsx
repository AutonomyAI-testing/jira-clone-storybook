import type { Meta, StoryObj } from "@storybook/react";
import { userMock1 } from "@domain/user";
import {
  projectsMock,
  projectToProjectSummary,
} from "@domain/project";
import { UserContextProvider } from "@app/store/user.store";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
import { withRemixStub } from "@app/stories/utils";
import { ProjectsView } from "./projects.view";

const mockProjectsSummary = projectsMock.map(projectToProjectSummary);

const meta: Meta<typeof ProjectsView> = {
  title: "Pages/Projects/ProjectsView",
  component: ProjectsView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) =>
      withRemixStub(
        <UserContextProvider user={userMock1}>
          <ThemeProvider
            specifiedTheme={Theme.LIGHT}
            specifiedPreference={Preference.SELECTED}
          >
            <Story />
          </ThemeProvider>
        </UserContextProvider>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsView>;

export const Default: Story = {
  args: {
    projectsSummary: mockProjectsSummary,
  },
};

export const WithProjects: Story = {
  args: {
    projectsSummary: [
      ...mockProjectsSummary,
      {
        id: "third-project",
        name: "Third Project",
        description: "Another sample project",
        image:
          "https://admin.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10402?size=xxlarge",
        createdAt: new Date("2023-02-01 09:00").valueOf(),
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    projectsSummary: [],
  },
};
