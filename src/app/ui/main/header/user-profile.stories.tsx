import type { Meta, StoryObj } from "@storybook/react";
import { usersMock } from "@domain/user";
import { UserContextProvider } from "@app/store/user.store";
import { withRemixStub } from "@app/stories/utils";
import { UserProfile } from "./user-profile";

const meta: Meta<typeof UserProfile> = {
  title: "UI/Header/UserProfile",
  component: UserProfile,
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => withRemixStub(<UserContextProvider user={usersMock[1]}><Story /></UserContextProvider>)],
};

export default meta;
type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {};

export const UserWithoutImage: Story = {
  decorators: [(Story) => withRemixStub(<UserContextProvider user={usersMock[0]}><Story /></UserContextProvider>)],
};
