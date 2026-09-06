import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { BoardView } from "./board.view";

const meta: Meta<typeof BoardView> = {
  title: "Pages/Project/Board",
  component: BoardView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) =>
      withMainContext(() =>
        withRemixStub(
          // The board lays out with h-full chains; give it a real height
          // so the category column scroll containers don't collapse to 0.
          <div className="h-screen">
            <Story />
          </div>
        ) as JSX.Element
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof BoardView>;

export const Default: Story = {
  args: {
    project: projectMock1,
  },
};
