import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { RegisterStep } from "./register.validation";

const STEPS: Array<{
  id: RegisterStep;
  title: string;
  subtitle: string;
}> = [
  { id: "account", title: "Account", subtitle: "Email and password" },
  { id: "details", title: "Your details", subtitle: "Name, company, role" },
  { id: "verify", title: "Verify email", subtitle: "6-digit code" },
  { id: "finish", title: "Finish", subtitle: "Your profile" },
];

export const RegisterStepRail = ({
  step,
  accountSummary,
  detailsSummary,
}: Props): JSX.Element => {
  const currentIndex = STEPS.findIndex((item) => item.id === step);
  const progress = ((currentIndex + 1) / STEPS.length) * 100;

  // A completed step shows what was captured in it, so a typo is visible
  // before the form is finished rather than after. The step being filled in
  // keeps its plain description until it has been passed.
  const getSubtitle = (
    id: RegisterStep,
    fallback: string,
    isDone: boolean
  ): string => {
    if (!isDone) return fallback;
    if (id === "account" && accountSummary) return accountSummary;
    if (id === "details" && detailsSummary) return detailsSummary;

    return fallback;
  };

  return (
    <>
      <div className="border-b border-border px-6 pb-4 pt-6 md:hidden">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-primary-black text-lg text-font">
            Create your account
          </span>
          <span className="font-primary-light text-2xs text-font-subtle">
            Step {currentIndex + 1} of {STEPS.length}
          </span>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-background-neutral">
          <div
            className="h-full rounded-full bg-background-brand-bold transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <aside className="hidden bg-elevation-surface-sunken p-6 md:block">
        <span className="font-primary-black text-lg text-font">Jira clone</span>
        <ol className="mt-8">
          {STEPS.map((item, index) => {
            const isDone = index < currentIndex;
            const isCurrent = index === currentIndex;

            return (
              <li
                key={item.id}
                aria-current={isCurrent ? "step" : undefined}
                className="relative flex gap-3 pb-7 last:pb-0"
              >
                {index < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[11px] top-[30px] w-px bg-border"
                  />
                )}
                <span
                  className={cx(
                    "flex h-6 w-6 flex-none items-center justify-center rounded-full border font-primary-bold text-2xs",
                    isDone &&
                      "border-border-brand bg-background-brand-bold text-font-inverse",
                    isCurrent &&
                      "border-border-brand bg-elevation-surface-raised text-font-brand",
                    !isDone &&
                      !isCurrent &&
                      "border-border bg-elevation-surface-raised text-font-subtle"
                  )}
                >
                  {isDone ? <BsCheckLg size={12} /> : index + 1}
                </span>
                <span className="flex flex-col">
                  <span
                    className={cx(
                      "font-primary-bold text-sm",
                      isDone || isCurrent ? "text-font" : "text-font-subtle"
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="mt-0.5 font-primary-light text-2xs text-font-subtlest">
                    {getSubtitle(item.id, item.subtitle, isDone)}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>
      </aside>
    </>
  );
};

interface Props {
  step: RegisterStep;
  accountSummary?: string;
  detailsSummary?: string;
}
