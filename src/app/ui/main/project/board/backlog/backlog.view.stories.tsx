import type { Meta, StoryObj } from "@storybook/react-vite";
import { projectMock1 } from "@domain/project";
import { withRemixStub, withMainContext } from "@app/stories/utils";
import { BacklogView } from "./backlog.view";

const meta: Meta<typeof BacklogView> = {
  title: "Pages/Project/Backlog",
  parameters: {
    layout: "padded",
  },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof BacklogView>;

export const Default: Story = {
  render: () => <BacklogView project={projectMock1} />,
};

export const Empty: Story = {
  render: () => (
    <BacklogView
      project={{
        ...projectMock1,
        categories: projectMock1.categories.map((cat) => ({
          ...cat,
          issues: [],
        })),
      }}
    />
  ),
};
