import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
import { WelcomeView } from "./welcome.view";

const RemixStubWrapper = ({ children }: { children: JSX.Element }) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: children,
      action: async () => ({ status: 200 }),
    },
    {
      path: "/login",
      element: <div />,
    },
    {
      path: "action/set-theme",
      action: async () => ({ status: 200 }),
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
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <RemixStubWrapper>
        <ThemeProvider
          specifiedTheme={Theme.LIGHT}
          specifiedPreference={Preference.SELECTED}
        >
          <Story />
        </ThemeProvider>
      </RemixStubWrapper>
    ),
  ],
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <RemixStubWrapper>
        <ThemeProvider
          specifiedTheme={Theme.DARK}
          specifiedPreference={Preference.SELECTED}
        >
          <Story />
        </ThemeProvider>
      </RemixStubWrapper>
    ),
  ],
};
