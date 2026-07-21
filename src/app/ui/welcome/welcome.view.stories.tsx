import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
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
          element: (
            <ThemeProvider
              specifiedTheme={Theme.LIGHT}
              specifiedPreference={Preference.SELECTED}
            >
              <Story />
            </ThemeProvider>
          ),
        },
      ]);

      return <RemixStub />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeView>;

export const Default: Story = {};
