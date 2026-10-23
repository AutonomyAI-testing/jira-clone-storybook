import { useCallback, useEffect, useRef, useState } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import * as Checkbox from "@radix-ui/react-checkbox";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { User, UserId, isValidEmail } from "@domain/user";
import { ActionData } from "@app/routes/register";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import { Spinner } from "@app/components/spinner";
import { Kbd } from "@app/components/kbd-placeholder";

const STEPS = [
  {
    name: "Your profile",
    title: "Your profile",
    subtitle: "How you will appear on the board.",
  },
  {
    name: "Your workspace",
    title: "Your workspace",
    subtitle: "The first project you will see when you log in.",
  },
  {
    name: "Your team",
    title: "Your team",
    subtitle:
      "Pick anyone who should be on this project. You can change this later.",
  },
  {
    name: "Review",
    title: "Review and confirm",
    subtitle: "One last look before we create everything.",
  },
];

// Avatar colours are user data, not design tokens: they are stored on the user
// and painted as an avatar background, the same way getRandomPastelColor() does.
const AVATAR_COLORS = [
  "#dae3f9",
  "#d7f0e4",
  "#fbe6d4",
  "#f5d9e4",
  "#e3dcf7",
  "#fdf0c4",
];

const PROJECT_IMAGES = [1, 5, 9, 13, 17, 21].map(
  (index) => `/images/projects/${index}.svg`
);

export const RegisterView = ({ users }: Props): JSX.Element => {
  const actionData = useActionData() as ActionData | undefined;
  const navigation = useNavigation();
  const submit = useSubmit();
  const formRef = useRef<HTMLFormElement>(null);
  const primaryAction = useRef<(() => void) | null>(null);

  const [step, setStep] = useState<number>(0);
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    color: AVATAR_COLORS[0],
    projectName: "",
    projectDescription: "",
    projectImage: PROJECT_IMAGES[0],
    userIds: [],
  });
  const [errors, setErrors] = useState<Errors>({});

  const isSubmitting = navigation.state !== "idle";
  const isLastStep = step === STEPS.length - 1;
  const selectedUsers = users.filter((user) =>
    values.userIds.includes(user.id)
  );

  useEffect(() => {
    const serverErrors = actionData?.errors;
    if (!serverErrors || Object.keys(serverErrors).length === 0) return;

    setErrors(serverErrors);
    setStep(firstStepWithError(serverErrors));
  }, [actionData]);

  const updateValue = <Key extends keyof Values>(
    key: Key,
    value: Values[Key]
  ): void => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => clearError(current, key));
  };

  const toggleUser = (userId: UserId, checked: boolean): void => {
    setValues((current) => ({
      ...current,
      userIds: checked
        ? [...current.userIds, userId]
        : current.userIds.filter((id) => id !== userId),
    }));
  };

  const goNext = useCallback((): void => {
    const stepErrors = validateStep(step, values);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setStep((current) => Math.min(current + 1, STEPS.length - 1));
  }, [step, values]);

  const goBack = (): void => {
    setErrors({});
    setStep((current) => Math.max(current - 1, 0));
  };

  const createAccount = useCallback((): void => {
    const allErrors = STEPS.reduce<Errors>(
      (accumulator, _step, index) => ({
        ...accumulator,
        ...validateStep(index, values),
      }),
      {}
    );

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      setStep(firstStepWithError(allErrors));
      return;
    }

    if (formRef.current) {
      submit(formRef.current, { method: "post" });
    }
  }, [submit, values]);

  const handlePrimaryClick = useCallback((): void => {
    if (isSubmitting) return;

    if (isLastStep) {
      createAccount();
      return;
    }

    goNext();
  }, [createAccount, goNext, isLastStep, isSubmitting]);

  useEffect(() => {
    primaryAction.current = handlePrimaryClick;
  }, [handlePrimaryClick]);

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent): void => {
      if (event.shiftKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        primaryAction.current?.();
      }
    };

    window.addEventListener("keydown", onShortcut);

    return () => window.removeEventListener("keydown", onShortcut);
  }, []);

  const onFormKeyDown = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    const target = event.target as HTMLElement;
    const isTyping =
      target.tagName === "INPUT" || target.tagName === "TEXTAREA";

    if (event.key !== "Enter" || !isTyping) return;

    event.preventDefault();
    handlePrimaryClick();
  };

  return (
    <div className="flex min-h-full w-full justify-center bg-elevation-surface-sunken px-5 py-12">
      <div className="w-full max-w-[560px]">
        <h1 className="font-primary-black text-5xl text-font">
          Create your account
        </h1>
        <h2 className="mb-8 mt-3 font-primary-light text-lg text-font-subtle">
          Four short steps to set up your profile and your first workspace.
          There is no password to choose: this demo has no authentication, and
          you can log in as any user you want.
        </h2>

        <Form
          ref={formRef}
          method="post"
          onKeyDown={onFormKeyDown}
          className="rounded-md bg-elevation-surface-raised p-6 shadow-sm"
        >
          <input type="hidden" name="_action" value="register" />
          <input type="hidden" name="color" value={values.color} />
          <input
            type="hidden"
            name="projectImage"
            value={values.projectImage}
          />

          <div className="mb-6">
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <span className="font-primary-bold text-xs uppercase text-font-subtlest">
                Step {step + 1} of {STEPS.length}
              </span>
              <span className="font-primary-light text-xs text-font-subtle">
                {STEPS[step].name}
              </span>
            </div>
            <div
              className="flex gap-1.5"
              role="progressbar"
              aria-label="Registration progress"
              aria-valuemin={1}
              aria-valuemax={STEPS.length}
              aria-valuenow={step + 1}
            >
              {STEPS.map((definedStep, index) => (
                <span
                  key={definedStep.name}
                  className={cx(
                    "h-1 flex-1 rounded-full",
                    index < step && "bg-background-neutral-bold",
                    index === step && "bg-background-brand-bold",
                    index > step && "bg-background-accent-grey-subtler"
                  )}
                />
              ))}
            </div>
          </div>

          <h3 className="font-primary-black text-2xl text-font">
            {STEPS[step].title}
          </h3>
          <p className="mb-6 mt-1 font-primary-light text-sm text-font-subtle">
            {STEPS[step].subtitle}
          </p>

          <div hidden={step !== 0}>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <UserAvatar
                  name={values.name || "New user"}
                  color={values.color}
                  size={56}
                />
                <div className="flex flex-col gap-2">
                  <span className="font-primary-bold text-xs uppercase text-font-subtlest">
                    Avatar colour
                  </span>
                  <div className="flex gap-2">
                    {AVATAR_COLORS.map((color, index) => (
                      <button
                        key={color}
                        type="button"
                        aria-label={`Use avatar colour ${index + 1}`}
                        aria-pressed={values.color === color}
                        onClick={() => updateValue("color", color)}
                        className={cx(
                          "h-8 w-8 cursor-pointer rounded-full outline outline-2 flex-center",
                          values.color === color
                            ? "outline-border-brand"
                            : "outline-transparent"
                        )}
                        style={{ backgroundColor: color }}
                      >
                        {values.color === color && (
                          <BsCheckLg size={14} className="text-icon" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="register-name"
                  className="font-primary-bold text-xs uppercase text-font-subtlest"
                >
                  Full name
                </label>
                <input
                  id="register-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Daniel Serrano"
                  value={values.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateValue("name", event.target.value)
                  }
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name ? (
                  <span className="font-primary-light text-sm text-font-danger">
                    {errors.name}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="register-email"
                  className="font-primary-bold text-xs uppercase text-font-subtlest"
                >
                  Email
                </label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="daniel@example.com"
                  value={values.email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateValue("email", event.target.value)
                  }
                  className={inputClass(Boolean(errors.email))}
                />
                {errors.email ? (
                  <span className="font-primary-light text-sm text-font-danger">
                    {errors.email}
                  </span>
                ) : (
                  <span className="font-primary-light text-2xs text-font-subtlest">
                    Only used to tell profiles apart. Nothing is ever sent to
                    it.
                  </span>
                )}
              </div>
            </div>
          </div>

          <div hidden={step !== 1}>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="register-project-name"
                  className="font-primary-bold text-xs uppercase text-font-subtlest"
                >
                  Workspace name
                </label>
                <input
                  id="register-project-name"
                  name="projectName"
                  type="text"
                  maxLength={30}
                  placeholder="My first project"
                  value={values.projectName}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateValue("projectName", event.target.value)
                  }
                  className={inputClass(Boolean(errors.projectName))}
                />
                {errors.projectName ? (
                  <span className="font-primary-light text-sm text-font-danger">
                    {errors.projectName}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="register-project-description"
                  className="font-primary-bold text-xs uppercase text-font-subtlest"
                >
                  Description{" "}
                  <span className="font-primary-light normal-case">
                    Optional
                  </span>
                </label>
                <textarea
                  id="register-project-description"
                  name="projectDescription"
                  rows={3}
                  placeholder="What is this project about?"
                  value={values.projectDescription}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                    updateValue("projectDescription", event.target.value)
                  }
                  className={cx(inputClass(false), "resize-none")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-primary-bold text-xs uppercase text-font-subtlest">
                  Cover
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_IMAGES.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      aria-label={`Use cover ${index + 1}`}
                      aria-pressed={values.projectImage === image}
                      onClick={() => updateValue("projectImage", image)}
                      className={cx(
                        "h-[54px] w-[72px] cursor-pointer overflow-hidden rounded outline outline-2",
                        values.projectImage === image
                          ? "outline-border-brand"
                          : "outline-transparent"
                      )}
                    >
                      <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div hidden={step !== 2}>
            <div className="flex flex-col gap-3">
              {users.length === 0 ? (
                <p className="font-primary-light text-sm text-font-subtle">
                  There are no other profiles yet.
                </p>
              ) : (
                <ul className="space-y-1.5">
                  {users.map((user) => (
                    <li
                      key={user.id}
                      className="-mx-2 rounded-lg px-2 outline outline-2 outline-transparent duration-75 ease-linear hover:bg-background-brand-subtlest hover:outline-border-brand"
                    >
                      <label
                        htmlFor={`team-${user.id}`}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-2"
                      >
                        <span className="flex items-center gap-4">
                          <UserAvatar {...user} size={40} />
                          <span>
                            <span className="block font-primary-bold">
                              {user.name}
                            </span>
                            {user.email ? (
                              <span className="block font-primary-light text-2xs text-font-subtlest">
                                {user.email}
                              </span>
                            ) : null}
                          </span>
                        </span>
                        <Checkbox.Root
                          id={`team-${user.id}`}
                          className="h-[28px] w-[28px] rounded-md bg-background-input"
                          name="userIds"
                          value={user.id}
                          defaultChecked={false}
                          onCheckedChange={(checked) =>
                            toggleUser(user.id, checked === true)
                          }
                        >
                          <Checkbox.Indicator className="h-[28px] w-[28px] rounded-md bg-background-brand-bold duration-150 ease-in flex-center">
                            <BsCheckLg
                              size={14}
                              className="text-font-inverse"
                            />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
              <p className="font-primary-light text-sm text-font-subtle">
                {values.userIds.length === 0
                  ? "Nobody selected yet. It will be just you."
                  : `${values.userIds.length} of ${users.length} selected`}
              </p>
            </div>
          </div>

          <div hidden={step !== 3}>
            <div className="flex flex-col gap-3">
              <div className="rounded-md bg-background-accent-grey-subtlest p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-primary-bold text-xs uppercase text-font-subtlest">
                    Profile
                  </h4>
                  <Button
                    type="button"
                    variant="text"
                    onClick={() => setStep(0)}
                    className="px-2 py-0.5 text-xs"
                    aria-label="Edit profile"
                  >
                    Edit
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <UserAvatar
                    name={values.name || "New user"}
                    color={values.color}
                    size={36}
                  />
                  <dl className="grid grid-cols-[80px_1fr] gap-x-3 gap-y-1 text-sm">
                    <dt className="text-font-subtlest">Name</dt>
                    <dd className="font-primary-bold">{values.name}</dd>
                    <dt className="text-font-subtlest">Email</dt>
                    <dd>{values.email}</dd>
                  </dl>
                </div>
              </div>

              <div className="rounded-md bg-background-accent-grey-subtlest p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-primary-bold text-xs uppercase text-font-subtlest">
                    Workspace
                  </h4>
                  <Button
                    type="button"
                    variant="text"
                    onClick={() => setStep(1)}
                    className="px-2 py-0.5 text-xs"
                    aria-label="Edit workspace"
                  >
                    Edit
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src={values.projectImage}
                    alt=""
                    className="h-[40px] w-[54px] rounded object-cover"
                  />
                  <dl className="grid grid-cols-[80px_1fr] gap-x-3 gap-y-1 text-sm">
                    <dt className="text-font-subtlest">Name</dt>
                    <dd className="font-primary-bold">{values.projectName}</dd>
                    <dt className="text-font-subtlest">Description</dt>
                    <dd className="font-primary-light text-font-subtle">
                      {values.projectDescription || "No description"}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="rounded-md bg-background-accent-grey-subtlest p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="font-primary-bold text-xs uppercase text-font-subtlest">
                    Team
                  </h4>
                  <Button
                    type="button"
                    variant="text"
                    onClick={() => setStep(2)}
                    className="px-2 py-0.5 text-xs"
                    aria-label="Edit team"
                  >
                    Edit
                  </Button>
                </div>
                {selectedUsers.length === 0 ? (
                  <p className="font-primary-light text-sm text-font-subtle">
                    Just you for now.
                  </p>
                ) : (
                  <div className="flex flex-wrap items-center gap-2">
                    {selectedUsers.map((user) => (
                      <UserAvatar key={user.id} {...user} size={32} tooltip />
                    ))}
                    <span className="font-primary-light text-sm text-font-subtle">
                      {selectedUsers.length} selected
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <Button
              type="button"
              color="neutral"
              variant="subtlest"
              onClick={goBack}
              disabled={step === 0 || isSubmitting}
              aria-label="Go back one step"
            >
              Back
            </Button>
            <div className="flex items-center gap-3">
              <span className="font-primary-light text-2xs text-font-subtlest">
                Press <Kbd>Shift</Kbd> + <Kbd>S</Kbd> to{" "}
                {isLastStep ? "create" : "continue"}
              </span>
              <Button
                type="button"
                onClick={handlePrimaryClick}
                disabled={isSubmitting}
                className="gap-2 px-8 py-2 font-primary-bold"
                aria-label={isLastStep ? "Create account" : "Continue"}
              >
                {isSubmitting ? (
                  <>
                    Creating
                    <Spinner />
                  </>
                ) : isLastStep ? (
                  "Create account"
                ) : (
                  "Continue"
                )}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

type Values = {
  name: string;
  email: string;
  color: string;
  projectName: string;
  projectDescription: string;
  projectImage: string;
  userIds: UserId[];
};

type Errors = ActionData["errors"];

const validateStep = (index: number, values: Values): Errors => {
  const errors: Errors = {};

  if (index === 0) {
    if (!values.name.trim()) errors.name = "Write your name";

    if (!values.email.trim()) {
      errors.email = "Write your email";
    } else if (!isValidEmail(values.email.trim())) {
      errors.email = "Write a valid email address";
    }
  }

  if (index === 1) {
    if (!values.projectName.trim()) {
      errors.projectName = "Write a workspace name";
    }
  }

  return errors;
};

const firstStepWithError = (errors: Errors): number => {
  if (errors.name || errors.email) return 0;
  if (errors.projectName) return 1;
  return 0;
};

const clearError = (errors: Errors, key: keyof Values): Errors => {
  if (!(key in errors)) return errors;

  const next = { ...errors };
  delete next[key as keyof Errors];
  return next;
};

const inputClass = (hasError: boolean): string =>
  cx(
    "w-full rounded bg-background-input p-3 font-primary text-sm text-font",
    "outline outline-2 placeholder:font-primary-light placeholder:text-font-subtlest",
    "focus:outline-border-brand",
    hasError ? "outline-border-danger" : "outline-border-input"
  );

interface Props {
  users: User[];
}
