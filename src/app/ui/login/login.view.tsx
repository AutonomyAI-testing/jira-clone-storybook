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
    <div className="flex h-full min-h-screen">
      {/* Left panel — decorative */}
      <div
        className="relative hidden flex-col items-center justify-center overflow-hidden lg:flex"
        style={{
          width: "45%",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 80%, #1a1a2e 100%)",
        }}
      >
        {/* Glowing orb behind avatar */}
        <div
          style={{
            position: "absolute",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(88,166,255,0.25) 0%, rgba(88,166,255,0.05) 60%, transparent 80%)",
            filter: "blur(24px)",
          }}
        />

        {/* Avatar image */}
        <div
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #58a6ff, #a8d8ff, #3fb8af)",
            padding: "4px",
            boxShadow: "0 0 60px rgba(88,166,255,0.45), 0 0 120px rgba(88,166,255,0.2)",
          }}
        >
          <img
            src="/images/login-avatar.png"
            alt="Login avatar"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Brand text below avatar */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <h2
            className="font-primary-black"
            style={{
              fontSize: "28px",
              color: "#e6edf3",
              letterSpacing: "-0.5px",
              marginBottom: "8px",
            }}
          >
            Jira Clone
          </h2>
          <p
            className="font-primary-light"
            style={{
              fontSize: "14px",
              color: "#8b949e",
              maxWidth: "240px",
              lineHeight: 1.6,
            }}
          >
            Manage your projects and collaborate with your team
          </p>
        </div>

        {/* Decorative dots */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            display: "flex",
            gap: "8px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: i === 0 ? "#58a6ff" : "rgba(88,166,255,0.3)",
                display: "block",
              }}
            />
          ))}
        </div>

        {/* Top-left decorative corner accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "120px",
            height: "120px",
            background: "linear-gradient(135deg, rgba(88,166,255,0.12) 0%, transparent 60%)",
            borderBottomRightRadius: "100%",
          }}
        />
        {/* Bottom-right accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "120px",
            height: "120px",
            background: "linear-gradient(315deg, rgba(63,184,175,0.12) 0%, transparent 60%)",
            borderTopLeftRadius: "100%",
          }}
        />
      </div>

      {/* Right panel — login form */}
      <div
        className="flex flex-1 flex-col items-center justify-center bg-elevation-surface px-8"
        style={{ minHeight: "100vh" }}
      >
        <div style={{ width: "100%", maxWidth: "380px" }}>
          {/* Logo / title */}
          <div style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              {/* Simple Jira-like icon mark */}
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "var(--color-background-brand-bold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L2 10l2.5 2.5L10 7l5.5 5.5L18 10 10 2z"
                    fill="white"
                    opacity="0.9"
                  />
                  <path
                    d="M10 8l-4 4 1.5 1.5L10 11l2.5 2.5L14 12l-4-4z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="font-primary-black text-font" style={{ fontSize: "22px" }}>
                Jira Clone
              </span>
            </div>
            <h1
              className="font-primary-black"
              style={{ fontSize: "28px", marginBottom: "6px", color: "var(--color-font-danger)" }}
            >
              Welcome back
            </h1>
            <p className="font-primary-light text-font-subtle" style={{ fontSize: "14px" }}>
              Select your profile to continue
            </p>
          </div>

          {/* Form */}
          <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* User select */}
            <div>
              <label
                className="font-primary-bold text-font"
                style={{ display: "block", fontSize: "13px", marginBottom: "6px" }}
              >
                User profile
              </label>
              <Select.Root
                name="user"
                defaultValue={userMock1.id}
                onValueChange={onValueChange}
              >
                <Select.Trigger
                  className="flex w-full justify-between"
                  aria-label="Open user select"
                  style={{ borderRadius: "8px", padding: "10px 12px", fontSize: "14px" }}
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

            {/* Login button */}
            <Button
              type="submit"
              name="_action"
              value="setUser"
              aria-label="Login"
              className="w-full"
              style={{ borderRadius: "8px", padding: "12px 16px", fontSize: "15px" }}
            >
              Sign in
            </Button>
          </Form>

          {/* Info note */}
          <div
            style={{
              marginTop: "24px",
              padding: "12px 16px",
              borderRadius: "8px",
              background: "var(--color-background-brand-subtlest)",
              border: "1px solid var(--color-border-brand)",
              borderColor: "var(--color-background-brand-subtlest-hovered)",
            }}
          >
            <p className="font-primary-light text-font-subtle" style={{ fontSize: "12px", lineHeight: "1.6" }}>
              <span className="font-primary-bold text-font-brand">No authentication required.</span>{" "}
              Pick any user to explore their projects. You can log out via the user avatar in the app header.
            </p>
          </div>

          {/* Bottom mobile-only avatar teaser */}
          <div
            className="flex items-center justify-center lg:hidden"
            style={{ marginTop: "32px" }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #58a6ff, #a8d8ff)",
                padding: "3px",
                boxShadow: "0 0 20px rgba(88,166,255,0.4)",
              }}
            >
              <img
                src="/images/login-avatar.png"
                alt="Login avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
