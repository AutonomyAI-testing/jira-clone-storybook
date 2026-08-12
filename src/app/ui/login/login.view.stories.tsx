import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { LoginView } from "./login.view";
import "./login.css";

const RemixDecorator = (Story: React.ComponentType) => {
  const Stub = createRemixStub([
    {
      path: "/",
      element: <Story />,
      action: async () => ({ status: 200 }),
    },
  ]);
  return <Stub />;
};

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [RemixDecorator],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

export const Default: Story = {};

export const LoadingState: Story = {
  args: { isLoading: true },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
