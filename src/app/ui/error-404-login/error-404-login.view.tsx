import { useState } from "react";
import { Form, Link } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const Error404LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(
    users[0] || userMock1
  );

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-elevation-surface px-4">
      <div className="mx-auto w-full max-w-[460px] text-center">
        {/* Circular avatar with turquoise-to-blue gradient border */}
        <div
          className="mx-auto mb-6"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #40e0d0 0%, #5b7fe8 50%, #9b9fe8 100%)",
            padding: 10,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <img
              src="/images/error-404-mascot.png"
              alt="404 not found mascot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-primary-black text-4xl text-font-danger">
          Oops! Page Not Found
        </h1>
        <p className="mb-2 mt-1 font-primary-black text-6xl text-font-danger">
          404
        </p>
        <p className="mb-8 font-primary-light text-base text-font-subtle">
          Looks like you&apos;ve wandered off the map!
          <br />
          Select your profile and head back.
        </p>

        {/* Login form */}
        <Form method="post" action="/login" className="mx-auto w-[300px]">
          <Select.Root
            name="user"
            defaultValue={users[0]?.id || userMock1.id}
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
            className="mt-2 w-full"
          >
            Login
          </Button>
        </Form>

        {/* Go home link */}
        <Link
          to="/"
          className="mt-6 inline-block font-primary-light text-sm text-link hover:underline"
        >
          ← Go back home
        </Link>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
