import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
  title: "Pages/Welcome",
  component: WelcomeView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: <Story />,
        },
      ]);

      return (
        <div className="h-screen bg-elevation-surface">
          <RemixStub initialEntries={["/"]} />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
