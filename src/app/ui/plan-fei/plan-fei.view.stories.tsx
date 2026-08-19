import type { Meta, StoryObj } from "@storybook/react";
import { PlanFeiView } from "./plan-fei.view";

const meta = {
  title: "UI/PlanFei",
  component: PlanFeiView,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof PlanFeiView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
