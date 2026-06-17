import type { Meta, StoryObj } from "@storybook/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { categoriesMock1 } from "@domain/category";
import { ListView } from "./list-view";
import { withRemixStub } from "@app/stories/utils";

const meta: Meta<typeof ListView> = {
  title: "Pages/Project/ListView",
  component: ListView,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <div className="bg-elevation-surface-sunken" style={{ minHeight: "400px", padding: "16px" }}>
          {withRemixStub(<Story />)}
        </div>
      </DndProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListView>;

export const Default: Story = {
  args: {
    categories: categoriesMock1,
  },
};
