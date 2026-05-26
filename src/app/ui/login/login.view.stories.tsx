import type { Meta, StoryObj } from "@storybook/react";
import { LoginView } from "./login.view";
import { usersMock } from "@domain/user";

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {
  args: {
    users: usersMock,
  },
};
