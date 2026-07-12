import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { LoginView } from "./login.view";

// Import the login page CSS so it renders correctly in Storybook
import "../../styles/login-page.css";

const withRemixStub = (Story: React.ComponentType) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: <Story />,
      action: async () => ({ status: 200 }),
    },
  ]);
  return <RemixStub />;
};

const meta: Meta<typeof LoginView> = {
  title: "Pages/Login",
  component: LoginView,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withRemixStub],
};

export default meta;
type Story = StoryObj<typeof LoginView>;

/** Default empty state — as the user first sees the page */
export const Default: Story = {};

/** Mobile viewport — brand panel is hidden, compact wordmark appears above the form */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
