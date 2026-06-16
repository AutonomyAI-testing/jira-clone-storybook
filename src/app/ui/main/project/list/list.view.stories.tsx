import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { withRemixStub, withMainContext } from "@app/stories/utils";
import { ListView } from "./list.view";

const meta: Meta<typeof ListView> = {
  title: "Pages/Project/ListView",
  component: ListView,
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof ListView>;

export const Default: Story = {
  args: { project: projectMock1 },
};
