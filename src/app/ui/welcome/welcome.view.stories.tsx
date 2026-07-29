import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const withRemixStub = (children: JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: children,
    },
    {
      path: "/login",
      element: <div />,
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
  decorators: [
    (Story) =>
      withRemixStub(
        <div className="h-screen">
          <Story />
        </div>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
