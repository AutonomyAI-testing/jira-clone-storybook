import type { Meta, StoryObj } from "@storybook/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { projectMock1 } from "@domain/project";
import { ListView } from "./list-view";

const meta: Meta<typeof ListView> = {
  title: "Pages/Project/ListView",
  component: ListView,
  parameters: { layout: "fullscreen" },
  decorators: [
    withMainContext,
    (Story) =>
      withRemixStub(
        <DndProvider backend={HTML5Backend}>
          <Story />
        </DndProvider>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListView>;

export const Default: Story = {
  render: () => <ListView project={projectMock1} />,
};
