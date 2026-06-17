import type { Meta, StoryObj } from "@storybook/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IssueCardList } from "./issue-card-list";

const meta: Meta<typeof IssueCardList> = {
  title: "Components/IssueCardList",
  component: IssueCardList,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story: typeof IssueCardList) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IssueCardList>;

/**
 * Default story showing the IssueCardList component with all mock issues
 * from multiple projects and statuses combined.
 */
export const Default: Story = {
  render: () => <IssueCardList />,
};

/**
 * Full width layout to show the list in a typical container width.
 */
export const FullWidth: Story = {
  render: () => <IssueCardList />,
  parameters: {
    layout: "fullscreen",
  },
};
