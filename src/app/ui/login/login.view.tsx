import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] =
    useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen bg-background-neutral-subtle">
      {/* Left panel — avatar (hidden on mobile) */}
      <div
        className="
          hidden md:flex
          flex-1 flex-col items-center justify-center
          bg-gradient-to-br from-background-brand-subtlest
          to-background-neutral-subtlest
          px-12
        "
      >
        {/* Gradient ring wrapper */}
        <div
          className="
            rounded-full p-[3px]
            bg-gradient-to-br from-blue-400 via-teal-400 to-cyan-300
            shadow-blue
          "
        >
          <img
            src="/images/login-avatar.png"
            alt=""
            aria-hidden="true"
            className="
              h-[300px] w-[300px]
              rounded-full object-cover
            "
          />
        </div>
        <p
          className="
            mt-6 font-primary-light text-sm
            text-font-subtlest tracking-widest uppercase
          "
        >
          Jira Clone Demo
        </p>
      </div>

      {/* Right panel — form */}
      <div
        className="
          flex flex-1 flex-col items-center
          justify-center px-8 py-16
        "
      >
        {/* Mobile avatar */}
        <div className="mb-8 md:hidden">
          <div
            className="
              rounded-full p-[3px]
              bg-gradient-to-br from-blue-400 via-teal-400 to-cyan-300
              shadow-blue
            "
          >
            <img
              src="/images/login-avatar.png"
              alt=""
              aria-hidden="true"
              className="
                h-[180px] w-[180px]
                rounded-full object-cover
              "
            />
          </div>
        </div>

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Jira Clone"
          className="mb-8 h-8 object-contain"
        />

        {/* Headings */}
        <h1
          className="
            font-primary-black text-4xl
            text-center
          "
          style={{ color: "#ef4444" }}
        >
          Welcome back
        </h1>
        <p
          className="
            mt-3 mb-8 font-primary-light text-base
            text-font-subtle text-center max-w-[340px]
          "
        >
          No authentication needed — just pick a user
          and jump right in. Switch between users to
          explore different views and permissions.
        </p>

        {/* Form */}
        <Form
          method="post"
          className="w-full max-w-[300px] space-y-3"
        >
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
                    <Select.ItemText>
                      {user.name}
                    </Select.ItemText>
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
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
