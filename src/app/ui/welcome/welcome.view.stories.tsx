import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
import { WelcomeView } from "./welcome.view";

const withRemixAndTheme = (story: () => JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: (
        <ThemeProvider
          specifiedTheme={Theme.LIGHT}
          specifiedPreference={Preference.SELECTED}
        >
          {story()}
        </ThemeProvider>
      ),
    },
    {
      path: "/login",
      element: <div className="p-8 text-center">Login page</div>,
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
    (Story) => withRemixAndTheme(Story),
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  decorators: [
    (Story) => (
      <div id="welcome-mobile-root">
        <style>{`#welcome-mobile-root .welcome-action { align-items: flex-start !important; }`}</style>
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          element: (
            <ThemeProvider
              specifiedTheme={Theme.DARK}
              specifiedPreference={Preference.SELECTED}
            >
              <div className="dark">
                <Story />
              </div>
            </ThemeProvider>
          ),
        },
        {
          path: "/login",
          element: <div>Login page</div>,
        },
      ]);
      return <RemixStub />;
    },
  ],
};
