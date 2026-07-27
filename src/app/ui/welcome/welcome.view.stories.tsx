import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const RemixDecorator = (Story: () => JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
    },
    {
      path: "/login",
      element: <div className="p-8 text-font">Login page</div>,
    },
  ]);
  return <RemixStub />;
};

const meta: Meta<typeof WelcomeView> = {
  title: "Pages/Welcome",
  component: WelcomeView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [RemixDecorator],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
