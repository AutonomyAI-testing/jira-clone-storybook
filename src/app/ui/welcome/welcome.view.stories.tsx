import type { Meta, StoryObj } from "@storybook/react-vite";
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
        { path: "/", element: <Story /> },
        { path: "/login", element: <div>Login</div> },
      ]);
      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
