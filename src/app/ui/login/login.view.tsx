import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users, featuredAvatarSrc }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "var(--color-elevation-surface-sunken, var(--Neutral100))" }}
    >
      <div
        className="w-full max-w-[420px] rounded-2xl px-10 py-12"
        style={{
          backgroundColor: "var(--color-elevation-surface)",
          boxShadow: "0 8px 40px 0 rgba(0,0,0,0.12)",
        }}
      >
        {/* Featured avatar with gradient ring */}
        <div className="mb-6 flex flex-col items-center gap-4">
          <UserAvatar
            name="Guest"
            customSrc={featuredAvatarSrc || "/avatars/custom-avatar.png"}
            size={96}
            gradientRing
          />
          <div className="text-center">
            <h1
              className="font-primary-black text-3xl"
              style={{ color: "var(--color-font)" }}
            >
              Welcome back
            </h1>
            <p
              className="mt-1 font-primary-light text-sm"
              style={{ color: "var(--color-font-subtle)" }}
            >
              Select a user to continue
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-6 h-px w-full"
          style={{ backgroundColor: "var(--color-border)" }}
        />

        {/* Login form */}
        <Form method="post" className="flex flex-col gap-4">
          <div>
            <label
              className="mb-1 block text-xs font-semibold uppercase tracking-wide"
              style={{ color: "var(--color-font-subtlest)" }}
            >
              Login as
            </label>
            <Select.Root
              name="user"
              defaultValue={userMock1.id}
              onValueChange={onValueChange}
            >
              <Select.Trigger
                className="flex w-full justify-between"
                aria-label="Open user select"
              >
                <div className="flex items-center gap-2">
                  <UserAvatar {...selectedValue} size={28} />
                  <Select.Value />
                </div>
                <Select.TriggerIcon />
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  {users.map((user, index) => (
                    <Select.Item key={index} value={user.id}>
                      <Select.ItemIndicator />
                      <UserAvatar {...user} size={28} />
                      <Select.ItemText>{user.name}</Select.ItemText>
                    </Select.Item>
                  ))}
                  <Select.Separator />
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select.Root>
          </div>

          <Button
            type="submit"
            name="_action"
            value="setUser"
            aria-label="Login"
            className="w-full"
          >
            Sign in
          </Button>
        </Form>

        {/* Footer note */}
        <p
          className="mt-6 text-center font-primary-light text-xs"
          style={{ color: "var(--color-font-subtlest)" }}
        >
          No authentication needed — pick any user and explore!
        </p>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
  /** Optional custom src for the featured hero avatar */
  featuredAvatarSrc?: string;
}
