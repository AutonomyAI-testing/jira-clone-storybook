import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";

import { Header } from "./header";
import { Theme, Preference, ThemeContext } from "@app/store/theme.store";
import { UserContextProvider } from "@app/store/user.store";
import { userMock1 } from "@domain/user/user.mock";

const MockThemeProvider = ({
  children,
  theme: initialTheme = Theme.LIGHT,
  preference: initialPreference = Preference.SELECTED,
}: {
  children: JSX.Element;
  theme?: Theme;
  preference?: Preference;
}) => {
  const [theme, setThemeState] = useState<Theme | null>(initialTheme);
  const [preference, setPreference] = useState<Preference | null>(initialPreference);

  const setTheme = (newTheme: Theme, newPreference: Preference = Preference.SYSTEM) => {
    setThemeState(newTheme);
    setPreference(newPreference);
  };

  return (
    <ThemeContext.Provider value={{ theme, preference, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const meta: Meta<typeof Header> = {
  title: "UI/Main/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <MockThemeProvider theme={Theme.LIGHT}>
          <UserContextProvider user={userMock1}>
            <Story />
          </UserContextProvider>
        </MockThemeProvider>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <MockThemeProvider theme={Theme.DARK}>
        <UserContextProvider user={userMock1}>
          <div className="dark">
            <Story />
          </div>
        </UserContextProvider>
      </MockThemeProvider>
    ),
  ],
};
