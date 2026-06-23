import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

// Brand logo component - displays the Suddenly Spaces application logo
const SuddenlySpacesLogo = (): JSX.Element => (
  <div className="mb-12 flex items-center gap-2">
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className="text-font"
    >
      <path
        d="M14 2 L26 8 L26 20 L14 26 L2 20 L2 8 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M2 8 L14 14 L26 8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 14 L14 26"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
    <span className="font-primary-black text-sm tracking-widest text-font">
      SUDDENLYSPACES
    </span>
  </div>
);

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* LEFT PANEL - Form */}
      <div className="flex w-1/2 flex-col justify-start bg-elevation-surface px-16 py-12">
        <div className="w-full max-w-sm">
          <SuddenlySpacesLogo />

          <h1 className="mb-2 font-primary-black text-5xl text-font-danger">
            Welcome Back
          </h1>
          <p className="mb-8 font-primary-light text-lg text-font-subtle">
            Sign in to access your spaces
          </p>

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
              className="mt-6 w-full"
            >
              Login
            </Button>
          </Form>

          <p className="mt-6 text-center font-primary-light text-sm text-font-subtle">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-font-brand hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT PANEL - Image */}
      {/* Requires login-room.jpg asset at public/images/login-room.jpg */}
      <div
        className="relative hidden w-1/2 lg:block"
        style={{
          backgroundImage: "url(/images/login-room.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Quote overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-8 text-white"
        >
          <h2 className="mb-2 font-primary-bold text-2xl">
            Find your ideal space
          </h2>
          <p className="font-primary-light text-base">
            Discover residential and commercial properties tailored to your
            needs
          </p>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
