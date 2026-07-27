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
        {
          path: "/",
          element: <Story />,
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

/** Anonymous visitor — CTA points to /login */
export const Default: Story = {
  args: {
    ctaHref: "/login",
  },
};

/** Logged-in user scenario — CTA would point to /projects */
export const LoggedIn: Story = {
  args: {
    ctaHref: "/projects",
  },
};
