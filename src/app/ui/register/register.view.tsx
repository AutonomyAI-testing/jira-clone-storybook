import { Fragment, useEffect, useRef, useState } from "react";
import { Link, useFetcher, useNavigate } from "@remix-run/react";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { teamSizes } from "@domain/project";
import { userRoles } from "@domain/user";
import { Button } from "@app/components/button";
import type { ActionData } from "@app/routes/register";
import {
  FieldError,
  FormField,
  inputClassName,
  PasswordInput,
} from "./form-field";
import {
  getFirstErrorField,
  getFirstErrorStep,
  initialRegisterValues,
  MIN_PASSWORD_LENGTH,
  REGISTER_STEP_COPY,
  RegisterErrors,
  RegisterField,
  RegisterStep,
  RegisterValues,
  TOTAL_REGISTER_STEPS,
  validateRegisterForm,
  validateRegisterStep,
} from "./register.data";
import { Stepper } from "./stepper";

type RegisterTextField = Exclude<RegisterField, "terms">;

export const RegisterView = (): JSX.Element => {
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  const [step, setStep] = useState<RegisterStep>(1);
  const [values, setValues] = useState<RegisterValues>(initialRegisterValues);
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasRestarted, setHasRestarted] = useState(false);

  const actionData = fetcher.data as ActionData | undefined;
  const isSubmitting = fetcher.state !== "idle";
  const projectId = actionData?.projectId;
  const isRegistered = Boolean(projectId) && !hasRestarted;

  // The action answers with field-keyed errors: show them on the step that owns
  // the first one, so the user is never left staring at a step with no problem.
  useEffect(() => {
    const serverErrors = actionData?.errors;
    if (!serverErrors) return;

    setErrors(serverErrors);
    setStep(getFirstErrorStep(serverErrors));
  }, [actionData]);

  const clearError = (field: RegisterField): void => {
    setErrors((previous) => {
      if (!previous[field]) return previous;

      const next = { ...previous };
      delete next[field];
      return next;
    });
  };

  const setText = (field: RegisterTextField, value: string): void => {
    setValues((previous) => {
      const next = { ...previous };
      next[field] = value;
      return next;
    });
    clearError(field);
  };

  const setTerms = (value: boolean): void => {
    setValues((previous) => ({ ...previous, terms: value }));
    clearError("terms");
  };

  const focusField = (field: RegisterField): void => {
    formRef.current?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
  };

  const goToStep = (nextStep: RegisterStep): void => {
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showErrors = (nextErrors: RegisterErrors): void => {
    setErrors(nextErrors);

    const firstField = getFirstErrorField(nextErrors);
    if (firstField) focusField(firstField);
  };

  const handleNext = (): void => {
    const stepErrors = validateRegisterStep(step, values);
    if (Object.keys(stepErrors).length > 0) {
      showErrors(stepErrors);
      return;
    }

    setErrors({});
    goToStep((step + 1) as RegisterStep);
  };

  const handleBack = (): void => {
    setErrors({});
    goToStep((step - 1) as RegisterStep);
  };

  const submitForm = (): void => {
    const formErrors = validateRegisterForm(values);
    if (Object.keys(formErrors).length > 0) {
      showErrors(formErrors);
      goToStep(getFirstErrorStep(formErrors));
      return;
    }

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.set("_action", "register");
    fetcher.submit(formData, { method: "post" });
  };

  const handleAdvance = (): void => {
    if (isSubmitting || isRegistered) return;

    if (step < TOTAL_REGISTER_STEPS) {
      handleNext();
      return;
    }

    submitForm();
  };

  const getPrimaryLabel = (): string => {
    if (isSubmitting) return "Creating your account...";

    return step === TOTAL_REGISTER_STEPS ? "Create account" : "Continue";
  };

  // The wizard is driven by the button and never by a native submit. The primary
  // button changes meaning on the last step, and a native submit fires on the
  // very click that moves the user onto it.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    if (event.key !== "Enter") return;

    const target = event.target as HTMLElement;
    if (["BUTTON", "TEXTAREA", "A"].includes(target.tagName)) return;

    event.preventDefault();
    handleAdvance();
  };

  const handleRestart = (): void => {
    setValues(initialRegisterValues);
    setErrors({});
    setStep(1);
    setHasRestarted(true);
  };

  if (isRegistered) {
    return (
      <div className="mx-auto w-full max-w-[560px] px-6 pb-24 pt-[8vh]">
        <Stepper currentStep={TOTAL_REGISTER_STEPS} isComplete />
        <div className="mt-10">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background-success text-font-success">
            <BsCheckLg size={22} />
          </span>
          <h1 className="font-primary-black text-2xl text-font">
            You are all set
          </h1>
          <p className="mt-1.5 font-primary-light text-sm text-font-subtle">
            We created your workspace and signed you in. A confirmation link is
            on its way to {values.email}.
          </p>
        </div>
        <div className="mt-8">
          <Summary values={values} />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(`/projects/${projectId}/board`)}
          >
            Go to workspace
          </Button>
          <Button color="neutral" variant="subtlest" onClick={handleRestart}>
            Start over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[560px] px-6 pb-24 pt-[8vh]">
      <Stepper currentStep={step} isComplete={false} />

      <div className="mt-10">
        <h1 className="font-primary-black text-2xl text-font">
          {REGISTER_STEP_COPY[step].title}
        </h1>
        <p className="mt-1.5 font-primary-light text-sm text-font-subtle">
          {REGISTER_STEP_COPY[step].subtitle}
        </p>
      </div>

      <form
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        className="mt-8"
      >
        <div className={cx(step !== 1 && "hidden")}>
          <FormField id="email" label="Work email" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={inputClassName(Boolean(errors.email))}
              value={values.email}
              aria-invalid={Boolean(errors.email)}
              onChange={(event) => setText("email", event.currentTarget.value)}
            />
          </FormField>

          <FormField
            id="password"
            label="Password"
            hint={`Use at least ${MIN_PASSWORD_LENGTH} characters.`}
            error={errors.password}
          >
            <PasswordInput
              id="password"
              name="password"
              autoComplete="new-password"
              placeholder={`At least ${MIN_PASSWORD_LENGTH} characters`}
              value={values.password}
              hasError={Boolean(errors.password)}
              isRevealed={isRevealed}
              onToggleReveal={() => setIsRevealed((previous) => !previous)}
              onChange={(event) =>
                setText("password", event.currentTarget.value)
              }
            />
          </FormField>

          <FormField
            id="confirmPassword"
            label="Confirm password"
            error={errors.confirmPassword}
          >
            <PasswordInput
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Re-enter your password"
              value={values.confirmPassword}
              hasError={Boolean(errors.confirmPassword)}
              isRevealed={isRevealed}
              onToggleReveal={() => setIsRevealed((previous) => !previous)}
              onChange={(event) =>
                setText("confirmPassword", event.currentTarget.value)
              }
            />
          </FormField>
        </div>

        <div className={cx(step !== 2 && "hidden")}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              id="firstName"
              label="First name"
              error={errors.firstName}
            >
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="Ada"
                className={inputClassName(Boolean(errors.firstName))}
                value={values.firstName}
                aria-invalid={Boolean(errors.firstName)}
                onChange={(event) =>
                  setText("firstName", event.currentTarget.value)
                }
              />
            </FormField>

            <FormField id="lastName" label="Last name" error={errors.lastName}>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Lovelace"
                className={inputClassName(Boolean(errors.lastName))}
                value={values.lastName}
                aria-invalid={Boolean(errors.lastName)}
                onChange={(event) =>
                  setText("lastName", event.currentTarget.value)
                }
              />
            </FormField>
          </div>

          <FormField id="role" label="Role" error={errors.role}>
            <select
              id="role"
              name="role"
              className={inputClassName(Boolean(errors.role))}
              value={values.role}
              aria-invalid={Boolean(errors.role)}
              onChange={(event) => setText("role", event.currentTarget.value)}
            >
              <option value="">Select a role</option>
              {userRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="company" label="Company" optional>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Acme Inc."
              className={inputClassName(false)}
              value={values.company}
              onChange={(event) =>
                setText("company", event.currentTarget.value)
              }
            />
          </FormField>
        </div>

        <div className={cx(step !== 3 && "hidden")}>
          <FormField
            id="workspace"
            label="Workspace name"
            hint="You can rename it any time."
            error={errors.workspace}
          >
            <input
              id="workspace"
              name="workspace"
              type="text"
              placeholder="Acme design team"
              className={inputClassName(Boolean(errors.workspace))}
              value={values.workspace}
              aria-invalid={Boolean(errors.workspace)}
              onChange={(event) =>
                setText("workspace", event.currentTarget.value)
              }
            />
          </FormField>

          <fieldset className="mb-5">
            <legend className="mb-1.5 block font-primary-bold text-xs text-font">
              How big is your team?
            </legend>
            <div className="flex flex-wrap gap-2">
              {teamSizes.map((teamSize) => {
                const isSelected = values.teamSize === teamSize;

                return (
                  <label key={teamSize} className="cursor-pointer">
                    <input
                      type="radio"
                      name="teamSize"
                      value={teamSize}
                      checked={isSelected}
                      className="peer sr-only"
                      onChange={() => setText("teamSize", teamSize)}
                    />
                    <span
                      className={cx(
                        "block rounded border p-2 font-primary text-sm outline outline-2 outline-transparent duration-75 ease-linear",
                        "peer-focus-visible:outline-border-brand",
                        isSelected
                          ? "border-border-brand bg-background-brand-subtlest text-font-brand"
                          : "border-border-input bg-background-input text-font hover:bg-background-input-hovered"
                      )}
                    >
                      {teamSize}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.teamSize && <FieldError>{errors.teamSize}</FieldError>}
          </fieldset>
        </div>

        <div className={cx(step !== 4 && "hidden")}>
          <Summary values={values} onEdit={goToStep} />

          <label className="mb-1 flex items-start gap-2.5 font-primary-light text-xs text-font-subtle">
            <input
              type="checkbox"
              name="terms"
              value="accepted"
              checked={values.terms}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-background-brand-bold"
              onChange={(event) => setTerms(event.currentTarget.checked)}
            />
            <span>
              I agree to the{" "}
              <span className="font-primary-bold text-font">
                Terms of Service
              </span>{" "}
              and the{" "}
              <span className="font-primary-bold text-font">
                Privacy Policy
              </span>
              .
            </span>
          </label>
          {errors.terms && <FieldError>{errors.terms}</FieldError>}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
          {step > 1 ? (
            <Button
              type="button"
              color="neutral"
              variant="subtlest"
              disabled={isSubmitting}
              onClick={handleBack}
            >
              Back
            </Button>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-3">
            <span className="font-primary-light text-2xs uppercase tracking-wide text-font-subtlest sm:hidden">
              Step {step} of {TOTAL_REGISTER_STEPS}
            </span>

            <Button
              type="button"
              color="primary"
              variant="contained"
              disabled={isSubmitting}
              onClick={handleAdvance}
            >
              {isSubmitting && (
                <span
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-font-inverse border-t-transparent"
                />
              )}
              {getPrimaryLabel()}
            </Button>
          </div>
        </div>
      </form>

      <p className="mt-8 font-primary-light text-xs text-font-subtlest">
        Already have an account?{" "}
        <Link to="/login" className="font-primary-bold text-font-brand">
          Login
        </Link>
      </p>
    </div>
  );
};

const Summary = ({ values, onEdit }: SummaryProps): JSX.Element => {
  return (
    <div className="mb-6 divide-y divide-border overflow-hidden rounded-md border border-border">
      <SummaryGroup
        title="Account"
        rows={[
          ["Email", values.email],
          ["Password", "••••••••"],
        ]}
        onEdit={onEdit && (() => onEdit(1))}
      />
      <SummaryGroup
        title="About you"
        rows={[
          ["Name", `${values.firstName} ${values.lastName}`.trim()],
          ["Role", values.role],
          ["Company", values.company],
        ]}
        onEdit={onEdit && (() => onEdit(2))}
      />
      <SummaryGroup
        title="Workspace"
        rows={[
          ["Name", values.workspace],
          ["Team size", values.teamSize],
        ]}
        onEdit={onEdit && (() => onEdit(3))}
      />
    </div>
  );
};

const SummaryGroup = ({
  title,
  rows,
  onEdit,
}: SummaryGroupProps): JSX.Element => {
  return (
    <Fragment>
      <p className="bg-elevation-surface-sunken px-4 py-2 font-primary-light text-2xs uppercase tracking-wide text-font-subtlest">
        {title}
      </p>
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-center gap-3 px-4 py-2.5">
          <span className="w-[104px] shrink-0 font-primary-light text-xs text-font-subtle">
            {label}
          </span>
          <span className="flex-1 truncate font-primary text-sm text-font">
            {value || "—"}
          </span>
          {onEdit && (
            <Button
              type="button"
              color="primary"
              variant="text"
              className="px-2 py-1 text-xs"
              onClick={onEdit}
            >
              Edit
            </Button>
          )}
        </div>
      ))}
    </Fragment>
  );
};

interface SummaryProps {
  values: RegisterValues;
  onEdit?: (step: RegisterStep) => void;
}

interface SummaryGroupProps {
  title: string;
  rows: [string, string][];
  onEdit?: () => void;
}
