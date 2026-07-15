import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import { TaskIcon } from "@app/components/icons";
import * as Select from "@app/components/select";

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex h-full min-h-screen">
      {/* Left branding panel */}
      <aside
        aria-hidden="true"
        className="hidden w-1/2 flex-col justify-between bg-background-brand-bold p-12 lg:flex"
      >
        {/* Logo area */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-font-inverse">
            <TaskIcon size={22} />
          </div>
          <span className="font-primary-black text-xl text-font-inverse">
            Jira Clone
          </span>
        </div>

        {/* Central illustration text */}
        <div className="flex flex-col gap-6">
          <h1 className="font-primary-black text-5xl leading-tight text-font-inverse">
            Manage your
            <br />
            projects with
            <br />
            clarity.
          </h1>
          <p className="max-w-sm font-primary-light text-lg text-font-inverse opacity-80">
            Plan sprints, track issues, collaborate with your team — all in one
            place.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-3 font-primary text-font-inverse opacity-90">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-font-inverse bg-opacity-20 text-xs">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom quote */}
        <p className="font-primary-light text-xs text-font-inverse opacity-50">
          Built with Remix, React &amp; Tailwind CSS
        </p>
      </aside>

      {/* Right login panel */}
      <main className="flex w-full flex-col justify-center bg-elevation-surface px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
        {/* Mobile logo */}
        <div className="mb-8 flex items-center gap-3 lg:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-background-brand-bold">
            <TaskIcon size={18} />
          </div>
          <span className="font-primary-black text-lg text-font">
            Jira Clone
          </span>
        </div>

        <div className="mx-auto w-full max-w-[400px]">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-primary-black text-3xl text-font-danger">
              Welcome back
            </h2>
            <p className="mt-2 font-primary-light text-sm text-font-subtle">
              No authentication required. Select any user to explore the app as
              them.
            </p>
          </div>

          {/* Form */}
          <Form method="post" className="flex flex-col gap-5">
            {/* User select */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="user-select-trigger"
                className="font-primary text-sm text-font"
              >
                Select user
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  id="user-select-trigger"
                  className="flex w-full justify-between"
                  aria-label="Open user select"
                >
                  <div className="flex items-center gap-2">
                    <UserAvatar {...selectedValue} size={28} />
                    <span className="font-primary text-sm text-font">
                      {selectedValue.name}
                    </span>
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

            {/* Selected user preview card */}
            <div className="flex items-center gap-3 rounded bg-background-brand-subtlest p-3">
              <UserAvatar {...selectedValue} size={40} />
              <div className="flex flex-col">
                <span className="font-primary text-sm text-font">
                  {selectedValue.name}
                </span>
                <span className="font-primary-light text-xs text-font-subtle">
                  Logging in as this user
                </span>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              size="lg"
              className="w-full py-3"
            >
              Continue to dashboard
            </Button>
          </Form>

          {/* Disclaimer */}
          <p className="mt-6 font-primary-light text-xs text-font-subtlest">
            You can only access the projects the selected user is a member of.
            Switch users anytime by logging out from the avatar menu.
          </p>
        </div>

        {/* Bottom user list preview */}
        <div className="mx-auto mt-10 w-full max-w-[400px]">
          <p className="mb-3 font-primary-light text-xs text-font-subtlest">
            Available team members
          </p>
          <div className="flex flex-wrap gap-2">
            {users.map((user) => (
              <UserAvatar key={user.id} {...user} size={32} tooltip />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const features = [
  "Drag-and-drop kanban boards",
  "Real-time collaboration via SSE",
  "Priority tracking & assignments",
  "Multi-theme support",
];

interface Props {
  users: User[];
}
