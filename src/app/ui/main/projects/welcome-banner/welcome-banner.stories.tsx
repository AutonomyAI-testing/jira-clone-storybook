import type { Meta, StoryObj } from "@storybook/react";
import { userMock1 } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";
import { withRemixStub } from "@app/stories/utils";
import { WelcomeBanner } from "./welcome-banner";

const meta: Meta<typeof WelcomeBanner> = {
  title: "Pages/Projects/WelcomeBanner",
  component: WelcomeBanner,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) =>
      withRemixStub(
        <UserContextProvider user={userMock1}>
          <ThemeProvider
            specifiedTheme={Theme.LIGHT}
            specifiedPreference={Preference.SELECTED}
          >
            <div className="w-full max-w-4xl">
              <Story />
            </div>
          </ThemeProvider>
        </UserContextProvider>
      ),
  ],
};

export default meta;
type Story = StoryObj<typeof WelcomeBanner>;

export const Default: Story = {};
