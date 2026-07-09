import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";

export const LoginView = ({ users }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User>(userMock1);

  const onSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div
      className="flex min-h-screen w-full"
      style={{ backgroundColor: "var(--color-elevation-surface-sunken)" }}
    >
      {/* Left panel — mascot */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #1d2125 0%, #172b4d 60%, #0c2340 100%)",
        }}
      >
        <img
          src="/images/wizard-robot-avatar.png"
          alt="Wizard Robot Mascot"
          style={{
            width: "420px",
            maxWidth: "80%",
            filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.55))",
            userSelect: "none",
          }}
          draggable={false}
        />
        <h2
          className="mt-8 font-primary-black text-3xl text-center"
          style={{ color: "#dee4ea", letterSpacing: "-0.5px" }}
        >
          Welcome back!
        </h2>
        <p
          className="mt-2 font-primary-light text-base text-center"
          style={{ color: "#738496", maxWidth: "320px" }}
        >
          Pick your character and dive into your projects.
        </p>
      </div>

      {/* Right panel — login form */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        <div
          className="w-full rounded-2xl p-8"
          style={{
            maxWidth: "480px",
            backgroundColor: "var(--color-elevation-surface-overlay)",
            boxShadow: "var(--color-shadow-overlay)",
          }}
        >
          {/* Logo / mobile mascot */}
          <div className="flex items-center gap-3 mb-6 lg:hidden">
            <img
              src="/images/wizard-robot-avatar.png"
              alt="Wizard Robot"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            />
            <span
              className="font-primary-black text-xl"
              style={{ color: "var(--color-font)" }}
            >
              Jira Clone
            </span>
          </div>

          <h1
            className="font-primary-black text-3xl"
            style={{ color: "var(--color-font)" }}
          >
            Sign in
          </h1>
          <p
            className="mt-2 mb-7 font-primary-light text-sm"
            style={{ color: "var(--color-font-subtle)" }}
          >
            No password needed — just choose your character.
          </p>

          <Form method="post">
            {/* Hidden field carries the selected user id */}
            <input type="hidden" name="user" value={selectedUser.id} />
            <input type="hidden" name="_action" value="setUser" />

            <p
              className="mb-3 font-primary-medium text-xs uppercase tracking-widest"
              style={{ color: "var(--color-font-subtlest)" }}
            >
              Choose your character
            </p>

            {/* Avatar grid */}
            <div
              className="grid gap-3 mb-6"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))" }}
            >
              {users.map((user) => {
                const isSelected = user.id === selectedUser.id;
                return (
                  <button
                    key={user.id}
                    type="button"
                    onClick={() => onSelectUser(user)}
                    title={user.name}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 6px",
                      borderRadius: "12px",
                      border: isSelected
                        ? "2px solid var(--color-border-brand)"
                        : "2px solid transparent",
                      backgroundColor: isSelected
                        ? "var(--color-background-brand-subtlest)"
                        : "var(--color-background-neutral)",
                      cursor: "pointer",
                      transition: "border-color 0.15s, background-color 0.15s",
                      outline: "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                          "var(--color-background-neutral-hovered)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                          "var(--color-background-neutral)";
                      }
                    }}
                  >
                    <UserAvatar {...user} size={48} />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        textAlign: "center",
                        lineHeight: 1.2,
                        maxWidth: "64px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        color: isSelected
                          ? "var(--color-font-brand)"
                          : "var(--color-font-subtle)",
                      }}
                    >
                      {user.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected user summary */}
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-3 mb-6"
              style={{
                backgroundColor: "var(--color-background-brand-subtlest)",
                border: "1px solid var(--color-border-brand)",
              }}
            >
              <UserAvatar {...selectedUser} size={40} />
              <div>
                <p
                  className="font-primary-medium text-sm"
                  style={{ color: "var(--color-font)" }}
                >
                  {selectedUser.name}
                </p>
                <p
                  className="font-primary-light text-xs"
                  style={{ color: "var(--color-font-subtle)" }}
                >
                  Signing in as this character
                </p>
              </div>
            </div>

            <Button
              type="submit"
              aria-label="Login"
              className="w-full"
            >
              Continue →
            </Button>
          </Form>
        </div>

        <p
          className="mt-6 font-primary-light text-xs text-center"
          style={{ color: "var(--color-font-subtlest)", maxWidth: "360px" }}
        >
          This is a demo app — no real authentication is used. You can switch
          users at any time from the user avatar in the top bar.
        </p>
      </div>
    </div>
  );
};

interface Props {
  users: User[];
}
