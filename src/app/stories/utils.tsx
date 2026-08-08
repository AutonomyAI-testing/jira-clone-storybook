import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { userMock1 } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { ThemeProvider, Theme, Preference } from "@app/store/theme.store";

export const withMainContext = (
  Story: JSX.Element | React.ComponentType
): JSX.Element => {
  const StoryComponent =
    typeof Story === "function" ? Story : () => Story;
  return (
    <UserContextProvider user={userMock1}>
      <ThemeProvider
        specifiedTheme={Theme.LIGHT}
        specifiedPreference={Preference.SELECTED}
      >
        <div className="w-full">
          <StoryComponent />
        </div>
      </ThemeProvider>
    </UserContextProvider>
  );
};

export const withRemixStub = (children: JSX.Element) => {
  const RemixStub = createRemixStub([
    {
      path: "/",
      element: children,
      action: async () => {
        return {
          status: 200,
        };
      },
    },
  ]);

  return <RemixStub />;
};
