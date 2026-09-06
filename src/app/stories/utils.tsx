import type { PartialStoryFn } from "@storybook/csf";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";
import { userMock1 } from "@domain/user";
import { setUser } from "@app/store/user.store";
import { useThemeStoreInit } from "@app/store/theme.store";
import { Theme, Preference } from "@app/store/theme.store";

type Story = PartialStoryFn<any, Record<string, never>>;

const StoreHydrator = ({ children }: { children: JSX.Element }) => {
  setUser(userMock1);
  useThemeStoreInit(Theme.LIGHT, Preference.SELECTED);
  return children;
};

export const withMainContext = (Story: Story): JSX.Element => {
  return (
    <StoreHydrator>
      <div className="w-full">
        <Story />
      </div>
    </StoreHydrator>
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
