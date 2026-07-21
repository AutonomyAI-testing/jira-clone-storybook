import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { WelcomeView } from "./welcome.view";

const withRemixStub = (element: JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element,
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
  argTypes: {
    isLoggedIn: {
      control: { type: "boolean" },
    },
  },
  decorators: [
    (Story, ctx) =>
      withRemixStub(<WelcomeView isLoggedIn={ctx.args.isLoggedIn ?? false} />),
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const LoggedOut: Story = {
  name: "Logged Out (Visitor)",
  args: {
    isLoggedIn: false,
  },
};

export const LoggedIn: Story = {
  name: "Logged In (User)",
  args: {
    isLoggedIn: true,
  },
};
