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
    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* ── LEFT PANEL: Mascot ── */}
      <div
        className="relative hidden flex-col items-center justify-center overflow-hidden lg:flex lg:w-2/5"
        style={{ backgroundColor: "#0f172a" }}
      >
        {/* Decorative stars scattered in the background */}
        <span
          className="pointer-events-none absolute select-none text-6xl opacity-20"
          style={{ top: "8%", left: "12%" }}
          aria-hidden
        >
          ✦
        </span>
        <span
          className="pointer-events-none absolute select-none text-4xl opacity-25"
          style={{ top: "14%", right: "10%" }}
          aria-hidden
        >
          ✦
        </span>
        <span
          className="pointer-events-none absolute select-none text-5xl opacity-15"
          style={{ bottom: "20%", left: "8%" }}
          aria-hidden
        >
          ☽
        </span>
        <span
          className="pointer-events-none absolute select-none text-3xl opacity-20"
          style={{ bottom: "12%", right: "14%" }}
          aria-hidden
        >
          ✦
        </span>
        <span
          className="pointer-events-none absolute select-none text-7xl opacity-10"
          style={{ top: "40%", right: "4%" }}
          aria-hidden
        >
          ★
        </span>
        <span
          className="pointer-events-none absolute select-none text-2xl opacity-20"
          style={{ top: "32%", left: "6%" }}
          aria-hidden
        >
          ☽
        </span>

        {/* Mascot image */}
        <div className="relative z-10 flex flex-col items-center px-8">
          <img
            src="/images/wizard-robot-mascot.jpg"
            alt="Wizard Robot Mascot — your magical guide to the app"
            className="w-full max-w-sm rounded-2xl object-contain drop-shadow-2xl"
            style={{ maxHeight: "60vh" }}
          />
          <h2
            className="mt-6 text-center font-primary-black text-3xl tracking-wide"
            style={{ color: "#e2e8f0" }}
          >
            Welcome, Wizard!
          </h2>
          <p
            className="mt-2 text-center font-primary-light text-sm"
            style={{ color: "#94a3b8" }}
          >
            Your magical productivity journey awaits.
          </p>
        </div>
      </div>

      {/* ── RIGHT PANEL: Form ── */}
      <div
        className="flex w-full flex-col items-center justify-center px-6 py-12 lg:w-3/5"
        style={{ backgroundColor: "#faf8f4" }}
      >
        {/* Mobile mascot — shown only on small screens */}
        <div className="mb-6 flex justify-center lg:hidden">
          <img
            src="/images/wizard-robot-mascot.jpg"
            alt="Wizard Robot Mascot"
            className="h-40 w-40 rounded-2xl object-contain drop-shadow-lg"
          />
        </div>

        <div className="w-full max-w-md">
          {/* Heading */}
          <h1
            className="font-primary-black text-5xl text-font-danger"
          >
            Sign in
          </h1>
          <p
            className="mb-8 mt-3 font-primary-light text-base"
            style={{ color: "#44546f" }}
          >
            There is no authentication involved. Select any user you like — you
            can only access projects that user is a member of. Try creating
            issues and comments with different users to see how it reflects in
            the UI. You can log out via the user avatar.
          </p>

          {/* Form */}
          <Form method="post" className="space-y-3">
            <label
              className="mb-1 block font-primary-bold text-xs uppercase tracking-widest"
              style={{ color: "#626f86" }}
              htmlFor="user-select-trigger"
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
              size="lg"
              className="mt-4 w-full transition-transform duration-150 active:scale-95"
            >
              Enter the Magic ✦
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
