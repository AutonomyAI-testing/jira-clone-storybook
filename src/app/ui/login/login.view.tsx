import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-[400px] rounded-2xl border border-border bg-surface p-8 shadow-lg">
        {/* Mascot avatar */}
        <div className="mb-6 flex justify-center">
          <div
            className="rounded-full p-[3px]"
            style={{
              background: "linear-gradient(135deg, #6ee7f7, #60a5fa, #a78bfa)",
            }}
          >
            <img
              src="/avatars/mascot-avatar.png"
              alt="Workspace mascot"
              className="h-[200px] w-[200px] rounded-full object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center font-primary-black text-4xl" style={{ color: "var(--Red500)" }}>
          Select login user
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-center font-primary-light text-base text-font-subtle">
          No password needed — pick a workspace member and jump right in.
        </p>

        {/* Form */}
        <Form method="post" className="w-full">
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
                <UserAvatar {...selectedValue} />
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
                    <UserAvatar {...user} />
                    <Select.ItemText>{user.name}</Select.ItemText>
                  </Select.Item>
                ))}
                <Select.Separator />
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select.Root>
          <Button
            type="submit"
            name="_action"
            value="setUser"
            aria-label="Login"
            className="mt-3 w-full"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
