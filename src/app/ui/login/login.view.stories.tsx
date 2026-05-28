import type { Meta, StoryObj } from "@storybook/react";
import { LoginView } from "./login.view";
import { usersMock } from "@domain/user";
import { withRemixStub } from "@app/stories/utils";

const meta: Meta<typeof LoginView> = {
  title: "UI/Login/LoginView",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: () => JSX.Element) => withRemixStub(<Story />),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};
