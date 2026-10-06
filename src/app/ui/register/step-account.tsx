import type { ChangeEvent } from "react";
import { RegisterStepProps } from "./register.constants";
import { PasswordField, StepHeading, TextField } from "./register-fields";

export const StepAccount = ({
  form,
  errors,
  onChange,
}: RegisterStepProps): JSX.Element => {
  const handleName = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ name: e.target.value });

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ email: e.target.value });

  const handlePassword = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ password: e.target.value });

  return (
    <>
      <StepHeading
        step={1}
        title="Create your account"
        description="Your email and a password are all we need to set you up."
      />
      <TextField
        name="name"
        label="Full name"
        value={form.name}
        onChange={handleName}
        error={errors.name}
        placeholder="Ada Lovelace"
        autoComplete="name"
      />
      <TextField
        name="email"
        type="email"
        label="Email address"
        value={form.email}
        onChange={handleEmail}
        error={errors.email}
        placeholder="you@company.com"
        autoComplete="email"
        hint="We'll send a confirmation link here, and use it to sign you in."
      />
      <PasswordField
        name="password"
        label="Password"
        value={form.password}
        onChange={handlePassword}
        error={errors.password}
      />
    </>
  );
};
