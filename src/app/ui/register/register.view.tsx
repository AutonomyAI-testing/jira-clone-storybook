import { useEffect, useRef, useState } from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useTransition,
} from "@remix-run/react";
import cx from "classix";
import { BiArrowBack, BiChevronRight } from "react-icons/bi";
import { Topic } from "@domain/topic";
import { RegisterErrors, UserRegistration } from "@domain/user";
import { Button } from "@app/components/button";
import { ActionData as RegisterActionData } from "@app/routes/register";
import {
  DEFAULT_REGISTRATION,
  REGISTER_STEPS,
  getStepIndexForErrors,
  validateStep,
} from "./register.constants";
import { RegisterRail } from "./register-rail";
import { RegisterSuccess } from "./register-success";
import { StepAccount } from "./step-account";
import { StepFocus } from "./step-focus";
import { StepNotifications } from "./step-notifications";
import { StepProfile } from "./step-profile";
import { StepReview } from "./step-review";

export const RegisterView = ({ topics }: Props): JSX.Element => {
  const actionData = useActionData() as RegisterActionData | undefined;
  const transition = useTransition();
  const navigate = useNavigate();

  const [stepIndex, setStepIndex] = useState<number>(0);
  const [form, setForm] = useState<UserRegistration>(DEFAULT_REGISTRATION);
  const [errors, setErrors] = useState<RegisterErrors>({});
  const scrollRef = useRef<HTMLDivElement>(null);

  const isSubmitting = transition.state !== "idle";
  const createdUser = actionData?.status === "created" ? actionData.user : null;
  const isLastStep = stepIndex === REGISTER_STEPS.length - 1;

  useEffect(() => {
    if (actionData?.status !== "error") return;

    // The action rejected the submit: show what it said and send the user back
    // to the first step that owns one of the rejected fields.
    setErrors(actionData.errors);
    setStepIndex(getStepIndexForErrors(actionData.errors));
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [actionData]);

  const updateForm = (patch: Partial<UserRegistration>): void => {
    setForm((current) => ({ ...current, ...patch }));
  };

  const goToStep = (index: number): void => {
    setErrors({});
    setStepIndex(index);
  };

  const goNext = (): void => {
    const stepErrors = validateStep(stepIndex, form);
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length > 0) return;

    setStepIndex((index) => Math.min(index + 1, REGISTER_STEPS.length - 1));
  };

  const goBack = (): void => {
    setErrors({});
    setStepIndex((index) => Math.max(index - 1, 0));
  };

  const goToProjects = (): void => navigate("/projects");

  const stepProps = { form, errors, onChange: updateForm };

  return (
    <div className="flex h-screen w-full">
      <RegisterRail
        currentStep={stepIndex}
        completed={Boolean(createdUser)}
        onGoToStep={goToStep}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-end border-b border-border px-8 py-4">
          <span className="font-primary-light text-sm text-font-subtle">
            Already have an account?{" "}
            <Link
              to="/login"
              className="rounded font-primary-bold text-font-brand hover:underline"
            >
              Sign in
            </Link>
          </span>
        </header>

        {isSubmitting && (
          <div className="h-[3px] w-full bg-background-brand-subtlest">
            <span className="block h-full w-full animate-pulse bg-background-brand-bold" />
          </div>
        )}

        {createdUser ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-8 py-12">
            <div className="mx-auto w-full max-w-[600px]">
              <RegisterSuccess
                name={createdUser.name}
                email={createdUser.email}
              />
            </div>
          </div>
        ) : (
          <Form method="post" className="flex min-h-0 flex-1 flex-col">
            <input type="hidden" name="_action" value="createAccount" />

            <div
              ref={scrollRef}
              className={cx(
                "min-h-0 flex-1 overflow-y-auto px-8 py-10",
                isSubmitting && "pointer-events-none opacity-60"
              )}
            >
              <div className="mx-auto w-full max-w-[600px]">
                <div className={cx(stepIndex !== 0 && "hidden")}>
                  <StepAccount {...stepProps} />
                </div>
                <div className={cx(stepIndex !== 1 && "hidden")}>
                  <StepProfile {...stepProps} />
                </div>
                <div className={cx(stepIndex !== 2 && "hidden")}>
                  <StepFocus {...stepProps} topics={topics} />
                </div>
                <div className={cx(stepIndex !== 3 && "hidden")}>
                  <StepNotifications {...stepProps} />
                </div>
                <div className={cx(stepIndex !== 4 && "hidden")}>
                  <StepReview
                    {...stepProps}
                    onGoToStep={goToStep}
                    topics={topics}
                  />
                </div>
              </div>
            </div>

            <footer className="flex items-center justify-between gap-4 border-t border-border px-8 py-4">
              {stepIndex > 0 ? (
                <Button
                  type="button"
                  variant="text"
                  onClick={goBack}
                  className="gap-2 px-3 py-2"
                >
                  <BiArrowBack size={18} />
                  Back
                </Button>
              ) : (
                <span className="font-primary-light text-xs text-font-subtlest">
                  Takes about two minutes
                </span>
              )}

              {isLastStep ? (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gap-2 px-8 py-2 font-primary-bold text-lg"
                >
                  {isSubmitting ? (
                    <>
                      Creating your account…
                      <BusySpinner />
                    </>
                  ) : (
                    "Create account"
                  )}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={goNext}
                  className="gap-2 px-8 py-2 font-primary-bold text-lg"
                >
                  Continue
                  <BiChevronRight size={20} />
                </Button>
              )}
            </footer>
          </Form>
        )}

        {createdUser && (
          <footer className="flex items-center justify-between gap-4 border-t border-border px-8 py-4">
            <span className="font-primary-light text-xs text-font-subtlest">
              Signed in as {createdUser.email}
            </span>
            <Button
              type="button"
              onClick={goToProjects}
              className="gap-2 px-8 py-2 font-primary-bold text-lg"
            >
              Go to my projects
              <BiChevronRight size={20} />
            </Button>
          </footer>
        )}
      </div>
    </div>
  );
};

const BusySpinner = (): JSX.Element => (
  <span
    aria-hidden="true"
    className="border-current inline-block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
  />
);

interface Props {
  topics: Topic[];
}
