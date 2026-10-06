import { Link } from "@remix-run/react";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { REGISTER_STEPS } from "./register.constants";

export const RegisterRail = ({
  currentStep,
  completed,
  onGoToStep,
}: Props): JSX.Element => (
  <aside className="hidden w-[320px] shrink-0 flex-col border-r border-border bg-elevation-surface-sunken p-8 lg:flex">
    <Link
      to="/"
      className="flex w-fit cursor-pointer items-center rounded px-2 py-1.5 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
    >
      <img src="/images/logo.png" width={24} height={24} alt="Logo" />
      <span className="ml-2 font-primary-bold">Jira Clone</span>
    </Link>

    <h2 className="mt-9 font-primary-black text-2xl text-font">
      {completed ? "You're all set" : "Create your account"}
    </h2>
    <p className="mt-2 font-primary-light text-sm text-font-subtle">
      {completed
        ? "Your account is live and your board is ready."
        : "Five short steps, and you can go back to any of them before you finish."}
    </p>

    <ol className="mt-8 flex flex-col gap-0.5">
      {REGISTER_STEPS.map((step, index) => {
        const isDone = completed || index < currentStep;
        const isCurrent = !completed && index === currentStep;
        // Only steps already visited can be reopened; the ones ahead stay shut
        // until the wizard reaches them.
        const isReachable = !completed && index <= currentStep;

        return (
          <li key={step.key}>
            <button
              type="button"
              onClick={() => onGoToStep(index)}
              disabled={!isReachable}
              aria-current={isCurrent ? "step" : undefined}
              className={cx(
                "flex w-full items-center gap-3.5 rounded px-3 py-2.5 text-left duration-100 ease-in-out",
                isReachable && "cursor-pointer hover:bg-background-neutral",
                isCurrent && "bg-elevation-surface-raised shadow-sm",
                !isReachable && "cursor-default"
              )}
            >
              <span
                className={cx(
                  "flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full font-primary-bold text-xs",
                  isCurrent && "bg-background-brand-bold text-font-inverse",
                  isDone && "bg-background-brand-subtlest text-font-brand",
                  !isCurrent &&
                    !isDone &&
                    "bg-background-neutral text-font-subtlest"
                )}
              >
                {isDone ? <BsCheckLg size={12} /> : index + 1}
              </span>
              <span>
                <span
                  className={cx(
                    "block font-primary-bold text-sm",
                    isCurrent ? "text-font" : "text-font-subtle"
                  )}
                >
                  {step.title}
                </span>
                <span className="mt-0.5 block font-primary-light text-xs text-font-subtlest">
                  {step.description}
                </span>
              </span>
            </button>
          </li>
        );
      })}
    </ol>

    <p className="mt-auto font-primary-light text-xs text-font-subtlest">
      {completed
        ? "You can change any of this later from your profile."
        : "You can change anything on the review step before your account is created."}
    </p>
  </aside>
);

interface Props {
  currentStep: number;
  completed: boolean;
  onGoToStep: (stepIndex: number) => void;
}
