import { Fragment } from "react";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { REGISTER_STEPS, RegisterStep } from "./register.data";

export const Stepper = ({
  currentStep,
  isComplete,
}: StepperProps): JSX.Element => {
  return (
    <ol className="flex w-full items-center gap-2">
      {REGISTER_STEPS.map((label, index) => {
        const step = (index + 1) as RegisterStep;
        const isDone = isComplete || step < currentStep;
        const isCurrent = !isComplete && step === currentStep;

        return (
          <Fragment key={label}>
            {/* The connector belongs to the step it leads into, so every one of
                them stretches by the same amount instead of being squeezed by
                whichever label happens to be longest. */}
            {index > 0 && (
              <li
                aria-hidden="true"
                className={cx(
                  "h-px min-w-[12px] flex-1",
                  isDone || isCurrent ? "bg-border-brand" : "bg-border"
                )}
              />
            )}
            <li
              aria-current={isCurrent ? "step" : undefined}
              className="flex min-w-0 items-center gap-2"
            >
              <span
                aria-hidden="true"
                className={cx(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-primary-bold text-xs",
                  isDone &&
                    "border border-border-brand bg-background-brand-bold text-font-inverse",
                  isCurrent &&
                    "border-2 border-border-brand bg-background-brand-subtlest text-font-brand",
                  !isDone &&
                    !isCurrent &&
                    "border border-border-bold text-font-subtlest"
                )}
              >
                {isDone ? <BsCheckLg size={12} /> : step}
              </span>
              <span
                className={cx(
                  "truncate font-primary-light text-2xs uppercase tracking-wide",
                  isDone || isCurrent ? "text-font" : "text-font-subtlest"
                )}
              >
                {label}
              </span>
            </li>
          </Fragment>
        );
      })}
    </ol>
  );
};

interface StepperProps {
  currentStep: RegisterStep;
  isComplete: boolean;
}
