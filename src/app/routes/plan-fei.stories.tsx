import type { Meta, StoryObj } from "@storybook/react-vite";
import PlanFeiRoute from "./plan-fei";

const meta: Meta<typeof PlanFeiRoute> = {
  title: "Routes/PlanFei",
  component: PlanFeiRoute,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof PlanFeiRoute>;

export const Default: Story = {};
