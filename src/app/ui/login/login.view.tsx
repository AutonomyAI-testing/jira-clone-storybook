import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(users[0]);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface px-4">
      <div className="w-full max-w-[392px]">
        {/* Avatar */}
        <div className="mb-6 flex justify-center">
          <UserAvatar {...selectedValue} size={96} />
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-3.5 font-primary text-xs font-medium uppercase tracking-[0.16em] text-font-subtle">
            Select user
          </p>
          <h1
            className="font-primary-black text-[30px] leading-[1.1] text-font"
            style={{ letterSpacing: "-0.02em" }}
          >
            Welcome
          </h1>
          <p className="mt-2.5 text-[15px] leading-relaxed text-font-subtle">
            No authentication needed — pick any user and log in.
          </p>
        </div>

        {/* Form */}
        <Form method="post" className="flex flex-col gap-3">
          <Select.Root
            name="user"
            defaultValue={users[0].id}
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
            className="w-full"
          >
            Login
          </Button>
        </Form>

        {/* Footer note */}
        <p className="mt-6 text-center font-primary text-[11px] tracking-[0.05em] text-font-subtle opacity-60">
          You can switch users anytime from your avatar.
        </p>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
