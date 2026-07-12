import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

const fadeInStyle = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to { opacity: 1; transform: scale(1); }
  }
  .login-scale-in { animation: scaleIn 0.5s ease forwards; }
  .login-fade-in { animation: fadeInUp 0.55s ease forwards; }
  .login-fade-in-delay { animation: fadeInUp 0.55s 0.15s ease both; }
  .login-fade-in-delay2 { animation: fadeInUp 0.55s 0.3s ease both; }
`;

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);
    if (foundUser) setSelectedValue(foundUser);
  };

  return (
    <>
      <style>{fadeInStyle}</style>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Mascot Avatar with gradient border */}
        <div
          className="login-scale-in mb-8"
          style={{
            background: "linear-gradient(135deg, #5FF7E8 0%, #7BAEFF 50%, #B48FFF 100%)",
            padding: "6px",
            borderRadius: "50%",
            width: "clamp(220px, 32vw, 300px)",
            height: "clamp(220px, 32vw, 300px)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="/images/mascot.png"
              alt="Jira Clone Mascot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* Heading */}
        <div className="login-fade-in mb-1 text-center">
          <h1
            className="font-primary-black text-4xl"
            style={{ color: "#ef5c48" }}
          >
            Jira Clone
          </h1>
        </div>
        <div className="login-fade-in-delay mb-8 text-center">
          <p className="max-w-[360px] font-primary-light text-base text-font-subtle">
            Select your user profile and dive into your projects.
          </p>
        </div>

        {/* Login Form */}
        <div className="login-fade-in-delay2 w-full max-w-[320px]">
          <Form method="post">
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
              className="mt-3 w-full"
            >
              Login
            </Button>
          </Form>

          {/* Info note */}
          <p className="mt-6 text-center font-primary-light text-xs leading-relaxed text-font-subtlest">
            No authentication required. You can only access projects the
            selected user is a member of. Logout via the user avatar.
          </p>
        </div>
      </div>
    </>
  );
};

interface Props {
  users: User[];
}
