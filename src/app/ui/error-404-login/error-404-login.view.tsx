import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const Error404LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-elevation-surface px-4 py-12">
      {/* Header with logo */}
      <div className="mb-8 flex items-center gap-2">
        <img src="/images/logo.png" width={32} height={32} alt="Logo" />
        <span className="font-primary-black text-2xl text-font">
          Jira Clone
        </span>
      </div>

      {/* Main card */}
      <div className="w-full max-w-[900px] overflow-hidden rounded-2xl bg-elevation-surface-raised shadow-overlay">
        <div className="flex flex-col md:flex-row">
          {/* Left: 404 Illustration */}
          <div className="flex flex-1 flex-col items-center justify-center bg-elevation-surface-sunken px-8 py-10">
            <img
              src="/images/error-404.svg"
              alt="404 Error illustration"
              className="h-[260px] w-auto"
            />
            <div className="mt-6 text-center">
              <h1 className="font-primary-black text-4xl text-font-danger">
                Oops! Page not found
              </h1>
              <p className="mt-3 font-primary-light text-base text-font-subtle">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved. But don&apos;t worry — you can log in and get back on
                track.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden w-px bg-border md:block"
            aria-hidden="true"
          />
          <div
            className="h-px bg-border md:hidden"
            aria-hidden="true"
          />

          {/* Right: Login Form */}
          <div className="flex w-full flex-col justify-center px-8 py-10 md:max-w-[380px]">
            <div className="mb-6">
              <h2 className="font-primary-black text-3xl text-font">
                Sign in
              </h2>
              <p className="mt-2 font-primary-light text-sm text-font-subtle">
                Select a user to continue to the app. No password required —
                this is a demo.
              </p>
            </div>

            <Form method="post" className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="user-select"
                  className="mb-1.5 block font-primary text-sm text-font-subtle"
                >
                  Select user
                </label>
                <Select.Root
                  name="user"
                  defaultValue={userMock1.id}
                  onValueChange={onValueChange}
                >
                  <Select.Trigger
                    id="user-select"
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
              </div>

              <Button
                type="submit"
                name="_action"
                value="setUser"
                aria-label="Login"
                className="mt-2 w-full"
              >
                Continue to app
              </Button>
            </Form>

            <div className="mt-8 border-t border-border pt-6">
              <a
                href="/"
                className="font-primary-light text-sm text-link hover:underline active:text-link-pressed"
              >
                ← Back to home
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-8 font-primary-light text-xs text-font-subtlest">
        Jira Clone — A side project inspired by Atlassian Jira.
      </p>
    </div>
  );
};

interface Props {
  users: User[];
}
