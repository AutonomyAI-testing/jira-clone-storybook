import { LoginBrandPanel } from "./login-brand-panel";
import { LoginForm } from "./login-form";

export const LoginPageView = () => {
  return (
    <div
      className="min-h-screen w-full grid lg:grid-cols-2"
      style={{ background: "#161a1d" }}
    >
      {/* Left: Brand panel */}
      <LoginBrandPanel />

      {/* Right: Login form */}
      <LoginForm />
    </div>
  );
};
