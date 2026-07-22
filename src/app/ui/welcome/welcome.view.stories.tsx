import type { Meta, StoryObj } from "@storybook/react-vite";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const meta: Meta<typeof WelcomeView> = {
  title: "Pages/Welcome/WelcomeView",
  component: WelcomeView,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "tablet",
    },
  },
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        { path: "/", element: <Story /> },
        { path: "/projects", element: <div>Projects page</div> },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
