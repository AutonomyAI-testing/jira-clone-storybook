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
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left panel — decorative */}
      <div
        className="relative hidden w-1/2 flex-col items-center justify-center overflow-hidden lg:flex"
        style={{
          background:
            "linear-gradient(145deg, #0d1b3e 0%, #0a1628 35%, #0c1e3d 65%, #091328 100%)",
        }}
      >
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(67, 131, 255, 0.18) 0%, transparent 60%), radial-gradient(ellipse at 75% 80%, rgba(100, 200, 240, 0.12) 0%, transparent 50%)",
          }}
        />

        {/* Avatar image — the uploaded artwork */}
        <div className="relative z-10 flex flex-col items-center gap-8">
          {/* Gradient ring border mimicking the reference artwork's border */}
          <div
            style={{
              padding: "3px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, #4dd0e1 0%, #5b9ef7 45%, #a78bfa 100%)",
              boxShadow:
                "0 0 40px rgba(67, 131, 255, 0.4), 0 0 80px rgba(100, 200, 240, 0.2)",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: "334px",
                height: "334px",
              }}
            >
              <img
                src="/images/login-avatar.png"
                alt="Login character"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p
              className="font-primary-bold text-lg"
              style={{ color: "rgba(189, 213, 255, 0.85)" }}
            >
              Manage your work.
            </p>
            <p
              className="font-primary text-base"
              style={{ color: "rgba(140, 170, 230, 0.65)" }}
            >
              Ship faster, together.
            </p>
          </div>
        </div>

        {/* Bottom decorative dots */}
        <div className="absolute bottom-10 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor:
                  i === 1
                    ? "rgba(100, 155, 255, 0.8)"
                    : "rgba(100, 155, 255, 0.3)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Right panel — login form */}
      <div className="flex w-full flex-col items-center justify-center bg-elevation-surface px-8 lg:w-1/2">
        <div className="w-full max-w-[380px]">
          {/* Logo + brand */}
          <div className="mb-10 flex items-center gap-2">
            <TaskIcon size={28} />
            <span className="font-primary-black text-xl text-font">
              Jira Clone
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-primary-black text-4xl" style={{ color: "#04f40e" }}>
            Welcome back
          </h1>
          <p className="mb-8 mt-3 font-primary text-base text-font-subtle">
            Select your profile to continue
          </p>

          {/* Form */}
          <Form method="post" className="flex flex-col gap-4">
            {/* User select — full width */}
            <div>
              <label className="mb-1.5 block font-primary-bold text-xs text-font-subtle uppercase tracking-wider">
                Profile
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
                    <UserAvatar {...selectedValue} size={24} />
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
                        <UserAvatar {...user} size={24} />
                        <Select.ItemText>{user.name}</Select.ItemText>
                      </Select.Item>
                    ))}
                    <Select.Separator />
                  </Select.Viewport>
                  <Select.ScrollDownButton />
                </Select.Content>
              </Select.Root>
            </div>

            {/* Currently selected user preview */}
            <div
              className="flex items-center gap-3 rounded-lg px-4 py-3"
              style={{
                backgroundColor: "var(--color-background-brand-subtlest)",
              }}
            >
              <UserAvatar {...selectedValue} size={40} />
              <div className="flex flex-col">
                <span className="font-primary-bold text-sm text-font">
                  {selectedValue.name}
                </span>
                <span className="font-primary text-xs text-font-subtle">
                  No authentication required
                </span>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              className="mt-2 w-full"
              size="lg"
            >
              Sign in as {selectedValue.name}
            </Button>
          </Form>

          {/* Footer hint */}
          <p className="mt-8 text-center font-primary text-xs text-font-subtlest">
            This is a demo app — pick any user to explore. You can switch
            accounts at any time from the top bar.
          </p>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
