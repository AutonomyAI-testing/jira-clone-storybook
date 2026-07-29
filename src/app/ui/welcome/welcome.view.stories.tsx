import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const withRemixStub = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
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
  decorators: [withRemixStub],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div id="welcome-mobile-root">
        <style>{`#welcome-mobile-root .welcome-auth { justify-content: flex-start !important; padding-top: 40px !important; }`}</style>
        <Story />
      </div>
    ),
  ],
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
