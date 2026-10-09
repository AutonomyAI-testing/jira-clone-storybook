import { useEffect, useState } from "react";
import {
  Form,
  Link,
  useActionData,
  useFetcher,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { Button } from "@app/components/button";
import { TextInput } from "@app/components/text-input";
import * as Select from "@app/components/select";
import type { ActionData as RegisterActionData } from "@app/routes/register";
import { RegisterCodeInput } from "./register-code-input";
import { RegisterStepHeader } from "./register-step-header";
import { RegisterStepRail } from "./register-step-rail";
import {
  CODE_LENGTH,
  ROLES,
  TEAM_SIZES,
  TERMS_VALUE,
  firstStepWithError,
  initialRegisterFields,
  passwordStrength,
  validateAccount,
  validateDetails,
} from "./register.validation";
import type {
  RegisterErrors,
  RegisterFields,
  RegisterStep,
} from "./register.validation";

const TOTAL_STEPS = 4;
const STRENGTH_LEVELS = [1, 2, 3, 4];
const STRENGTH_LABELS = ["", "Weak", "Fair", "Good", "Strong"];

type SendCodeData = {
  verificationCode?: string;
  errors?: RegisterErrors;
};

export const RegisterView = (): JSX.Element => {
  const actionData = useActionData() as RegisterActionData | undefined;
  const sendCodeFetcher = useFetcher<SendCodeData>();
  const navigation = useNavigation();
  const navigate = useNavigate();

  const [step, setStep] = useState<RegisterStep>("account");
  const [fields, setFields] = useState<RegisterFields>(initialRegisterFields);
  const [clientErrors, setClientErrors] = useState<RegisterErrors>({});

  const errors: RegisterErrors = {
    ...clientErrors,
    ...(actionData?.errors || {}),
  };
  const created = actionData?.created;
  const verificationCode = sendCodeFetcher.data?.verificationCode;
  const isSendingCode = sendCodeFetcher.state !== "idle";
  const isCreatingUser = navigation.state === "submitting";
  const fullName = `${fields.firstName} ${fields.lastName}`.trim();
  const detailsSummary =
    [fullName, fields.company].filter(Boolean).join(" · ") || undefined;

  useEffect(() => {
    const sendCodeData = sendCodeFetcher.data;

    if (!sendCodeData || sendCodeFetcher.state !== "idle") return;

    if (sendCodeData.errors) {
      setClientErrors(sendCodeData.errors);
      setStep(firstStepWithError(sendCodeData.errors));
      return;
    }

    setStep("verify");
  }, [sendCodeFetcher.data, sendCodeFetcher.state]);

  useEffect(() => {
    if (!actionData) return;

    if (actionData.errors && Object.keys(actionData.errors).length > 0) {
      setStep(firstStepWithError(actionData.errors));
    }

    if (actionData.created) {
      setStep("finish");
    }
  }, [actionData]);

  const updateFields = (values: Partial<RegisterFields>): void => {
    setFields((previous) => ({ ...previous, ...values }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateFields({ email: e.currentTarget.value });
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateFields({ password: e.currentTarget.value });
  };

  const handleFirstNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateFields({ firstName: e.currentTarget.value });
  };

  const handleLastNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateFields({ lastName: e.currentTarget.value });
  };

  const handleCompanyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateFields({ company: e.currentTarget.value });
  };

  const handleTeamSizeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateFields({ teamSize: e.currentTarget.value });
  };

  const handleRoleChange = (role: string): void => {
    updateFields({ role });
  };

  const handleTermsChange = (checked: boolean | "indeterminate"): void => {
    updateFields({ terms: checked === true });
  };

  const handleCodeChange = (code: string): void => {
    updateFields({ code });
  };

  const handleAccountNext = (): void => {
    const accountErrors = validateAccount(fields);
    setClientErrors(accountErrors);

    if (Object.keys(accountErrors).length === 0) {
      setStep("details");
    }
  };

  const handleDetailsNext = (): void => {
    const detailsErrors = validateDetails(fields);
    setClientErrors(detailsErrors);

    if (Object.keys(detailsErrors).length > 0) return;

    sendVerificationCode();
  };

  const sendVerificationCode = (): void => {
    sendCodeFetcher.submit(
      { _action: "sendVerificationCode", email: fields.email },
      { method: "post" }
    );
  };

  const handleBack = (): void => {
    setClientErrors({});
    setStep(step === "verify" ? "details" : "account");
  };

  const handleUseDifferentEmail = (): void => {
    setClientErrors({});
    setStep("account");
  };

  const handleGoToProjects = (): void => {
    navigate("/projects");
  };

  // Steps one and two are advanced in the browser, so Enter has to run the
  // same check the Continue button does instead of submitting the form.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    if (step === "account") {
      e.preventDefault();
      handleAccountNext();
      return;
    }

    if (step === "details") {
      e.preventDefault();
      handleDetailsNext();
    }
  };

  const summaryRows = created
    ? [
        { label: "Name", value: created.name },
        { label: "Email", value: created.email },
        { label: "Company", value: created.company },
        { label: "Role", value: created.role },
        { label: "Team size", value: created.teamSize },
      ]
    : [];

  return (
    <div className="flex min-h-full w-full items-start justify-center bg-elevation-surface-sunken px-4 py-12">
      <div className="w-full max-w-[880px] overflow-hidden rounded-lg bg-elevation-surface-raised shadow-sm md:grid md:grid-cols-[260px_1fr]">
        <RegisterStepRail
          step={step}
          accountSummary={fields.email || undefined}
          detailsSummary={detailsSummary}
        />
        <div className="p-6 md:p-10">
          <Form method="post" onSubmit={handleSubmit} className="flex flex-col">
            <div
              className={cx(
                "flex flex-col gap-5",
                step !== "account" && "hidden"
              )}
            >
              <RegisterStepHeader
                eyebrow={`Step 1 of ${TOTAL_STEPS}`}
                title="Create your account"
                description="This app has no authentication, so your password is checked here and never stored."
              />
              <TextInput
                label="Work email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={fields.email}
                onChange={handleEmailChange}
                error={errors.email}
                hint="We send your verification code here."
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                value={fields.password}
                onChange={handlePasswordChange}
                error={errors.password}
                hint="At least 8 characters, with a number and a symbol."
              >
                <PasswordStrengthMeter
                  strength={passwordStrength(fields.password)}
                />
              </TextInput>
              <TermsCheckbox
                checked={fields.terms}
                error={errors.terms}
                onChange={handleTermsChange}
              />
            </div>

            <div
              className={cx(
                "flex flex-col gap-5",
                step !== "details" && "hidden"
              )}
            >
              <RegisterStepHeader
                eyebrow={`Step 2 of ${TOTAL_STEPS}`}
                title="Tell us about you"
                description="This is what your teammates see when you report or comment on an issue."
              />
              <div className="grid grid-cols-2 gap-4">
                <TextInput
                  label="First name"
                  name="firstName"
                  autoComplete="given-name"
                  value={fields.firstName}
                  onChange={handleFirstNameChange}
                  error={errors.firstName}
                />
                <TextInput
                  label="Last name"
                  name="lastName"
                  autoComplete="family-name"
                  value={fields.lastName}
                  onChange={handleLastNameChange}
                  error={errors.lastName}
                />
              </div>
              <TextInput
                label="Company"
                name="company"
                autoComplete="organization"
                value={fields.company}
                onChange={handleCompanyChange}
                error={errors.company}
              />
              <div className="flex flex-col">
                <span className="mb-1.5 font-primary-bold text-sm text-font">
                  Your role
                </span>
                <Select.Root
                  name="role"
                  value={fields.role}
                  onValueChange={handleRoleChange}
                >
                  <Select.Trigger
                    className="w-full justify-between"
                    aria-label="Open role select"
                  >
                    <Select.Value />
                    <Select.TriggerIcon />
                  </Select.Trigger>
                  <Select.Content>
                    <Select.ScrollUpButton />
                    <Select.Viewport>
                      {ROLES.map((role) => (
                        <Select.Item key={role} value={role}>
                          <Select.ItemIndicator />
                          <Select.ItemText>{role}</Select.ItemText>
                        </Select.Item>
                      ))}
                      <Select.Separator />
                    </Select.Viewport>
                    <Select.ScrollDownButton />
                  </Select.Content>
                </Select.Root>
                {errors.role && (
                  <span className="mt-1.5 font-primary-light text-2xs text-font-danger">
                    {errors.role}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="mb-1.5 font-primary-bold text-sm text-font">
                  Team size
                </span>
                <div className="flex gap-1 rounded-md bg-background-accent-grey-subtler p-1">
                  {TEAM_SIZES.map((size) => (
                    <label key={size} className="flex-1 cursor-pointer">
                      <input
                        type="radio"
                        name="teamSize"
                        value={size}
                        checked={fields.teamSize === size}
                        onChange={handleTeamSizeChange}
                        className="peer sr-only"
                      />
                      <span
                        className={cx(
                          "block rounded px-2 py-1.5 text-center font-primary-bold text-xs",
                          "text-font-subtle peer-checked:bg-background-brand-bold peer-checked:text-font-inverse"
                        )}
                      >
                        {size}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={cx(
                "flex flex-col gap-5",
                step !== "verify" && "hidden"
              )}
            >
              <RegisterStepHeader
                eyebrow={`Step 3 of ${TOTAL_STEPS}`}
                title="Check your inbox"
                description={`We sent a ${CODE_LENGTH}-digit code to ${fields.email}.`}
              />
              <p className="rounded-md bg-background-info p-3 font-primary-light text-xs leading-5 text-font">
                This app has no email service, so here is the code it would have
                sent you:{" "}
                <span className="font-primary-bold">{verificationCode}</span>
              </p>
              <RegisterCodeInput
                value={fields.code}
                onChange={handleCodeChange}
                error={errors.code}
              />
              {errors.code && (
                <span className="-mt-3 font-primary-light text-2xs text-font-danger">
                  {errors.code}
                </span>
              )}
              <p className="font-primary-light text-2xs text-font-subtlest">
                Didn&apos;t get it?{" "}
                <button
                  type="button"
                  onClick={sendVerificationCode}
                  disabled={isSendingCode}
                  className="cursor-pointer text-link disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSendingCode ? "Sending…" : "Resend code"}
                </button>{" "}
                ·{" "}
                <button
                  type="button"
                  onClick={handleUseDifferentEmail}
                  className="cursor-pointer text-link"
                >
                  Use a different email
                </button>
              </p>
            </div>

            {step === "finish" && (
              <div className="flex flex-col gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background-success text-font-success">
                  <BsCheckLg size={26} />
                </div>
                <RegisterStepHeader
                  eyebrow="All done"
                  title={`You're all set, ${fields.firstName}`}
                  description="Your profile is ready. Projects you are added to will show up on your projects page."
                />
                <dl className="overflow-hidden rounded-md border border-border">
                  {summaryRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 border-b border-border px-4 py-3 last:border-b-0"
                    >
                      <dt className="font-primary-light text-xs text-font-subtle">
                        {row.label}
                      </dt>
                      <dd className="font-primary-bold text-xs text-font">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-8 flex items-center gap-3">
              {(step === "details" || step === "verify") && (
                <Button
                  type="button"
                  color="neutral"
                  variant="subtlest"
                  onClick={handleBack}
                  className="px-6 py-2 font-primary-bold"
                >
                  Back
                </Button>
              )}
              <span className="flex-1" />
              {step === "account" && (
                <Button
                  type="button"
                  onClick={handleAccountNext}
                  className="px-6 py-2 font-primary-bold"
                >
                  Continue
                </Button>
              )}
              {step === "details" && (
                <Button
                  type="button"
                  onClick={handleDetailsNext}
                  disabled={isSendingCode}
                  className="px-6 py-2 font-primary-bold"
                >
                  {isSendingCode ? "Sending code…" : "Continue"}
                </Button>
              )}
              {step === "verify" && (
                <Button
                  type="submit"
                  name="_action"
                  value="createUser"
                  disabled={isCreatingUser}
                  className="px-6 py-2 font-primary-bold"
                >
                  {isCreatingUser
                    ? "Creating your account…"
                    : "Verify and finish"}
                </Button>
              )}
              {step === "finish" && (
                <Button
                  type="button"
                  onClick={handleGoToProjects}
                  className="px-6 py-2 font-primary-bold"
                >
                  Go to your projects
                </Button>
              )}
            </div>
          </Form>
          {step === "account" && (
            <p className="mt-6 font-primary-light text-xs text-font-subtle">
              Already have an account?{" "}
              <Link to="/login" className="text-link">
                Log in as an existing user
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const PasswordStrengthMeter = ({ strength }: StrengthProps): JSX.Element => (
  <div className="mt-2 flex items-center gap-2">
    <div className="flex flex-1 gap-1">
      {STRENGTH_LEVELS.map((level) => (
        <span
          key={level}
          className={cx(
            "h-1 flex-1 rounded-full",
            getStrengthClass(level, strength)
          )}
        />
      ))}
    </div>
    <span className="w-[54px] font-primary-light text-2xs text-font-subtlest">
      {STRENGTH_LABELS[strength]}
    </span>
  </div>
);

const getStrengthClass = (level: number, strength: number): string => {
  if (level > strength) return "bg-background-accent-grey-subtler";

  return strength >= STRENGTH_LEVELS.length
    ? "bg-background-success-bold"
    : "bg-background-warning-bold";
};

const TermsCheckbox = ({
  checked,
  error,
  onChange,
}: TermsProps): JSX.Element => (
  <div className="flex flex-col">
    <div className="flex items-start gap-2.5">
      <Checkbox.Root
        id="terms"
        name="terms"
        value={TERMS_VALUE}
        checked={checked}
        onCheckedChange={(nextChecked) => onChange(nextChecked === true)}
        className={cx(
          "mt-0.5 h-[18px] w-[18px] flex-none rounded border-none bg-background-input outline outline-2",
          error ? "outline-border-danger" : "outline-border-input"
        )}
      >
        <Checkbox.Indicator className="flex h-full w-full items-center justify-center rounded bg-background-brand-bold text-font-inverse">
          <BsCheckLg size={12} />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label
        htmlFor="terms"
        className="cursor-pointer font-primary-light text-xs leading-5 text-font-subtle"
      >
        I agree to the{" "}
        <span className="font-primary-bold text-font">Terms of Service</span>{" "}
        and <span className="font-primary-bold text-font">Privacy Policy</span>.
      </label>
    </div>
    {error && (
      <span className="mt-1.5 font-primary-light text-2xs text-font-danger">
        {error}
      </span>
    )}
  </div>
);

interface StrengthProps {
  strength: number;
}

interface TermsProps {
  checked: boolean;
  error?: string;
  onChange: (checked: boolean | "indeterminate") => void;
}
