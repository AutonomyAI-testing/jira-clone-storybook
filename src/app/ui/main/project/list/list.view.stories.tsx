import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { withRemixStub } from "@app/stories/utils";
import { ListView } from "./list.view";

const meta: Meta<typeof ListView> = {
  title: "Pages/Project/ListView",
  component: ListView,
};

export default meta;
type Story = StoryObj<typeof ListView>;

export const Default: Story = {
  render: () => {
    const element = <ListView project={projectMock1} />;
    return withRemixStub(element);
  },
};
