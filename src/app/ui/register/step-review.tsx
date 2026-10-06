import type { ChangeEvent, ReactNode } from "react";
import { BiBell, BiCategory, BiEnvelope, BiUser } from "react-icons/bi";
import { Topic } from "@domain/topic";
import { UserAvatar } from "@app/components/user-avatar";
import { RegisterSummaryProps } from "./register.constants";
import { CheckboxField, StepHeading } from "./register-fields";

export const StepReview = ({
  form,
  errors,
  onChange,
  onGoToStep,
  topics,
}: Props): JSX.Element => {
  const handleTerms = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ acceptedTerms: e.target.checked });

  const selectedTopics = topics
    .filter((topic) => form.interests.includes(topic.id))
    .map((topic) => topic.name);

  const notifications = [
    form.notifyIssueActivity && "issue activity",
    form.notifyMentions && "mentions and comments",
    form.notifyWeeklyDigest && "the weekly digest",
  ].filter(Boolean);

  return (
    <>
      <StepHeading
        step={5}
        title="Check everything over"
        description="One last look. Edit jumps back to the step that owns each detail."
      />

      <SummaryRow
        stepIndex={0}
        icon={<BiEnvelope size={18} />}
        title="Account"
        onGoToStep={onGoToStep}
      >
        {form.email.trim() || "—"}
      </SummaryRow>

      <SummaryRow
        stepIndex={1}
        icon={<BiUser size={18} />}
        title="Profile"
        onGoToStep={onGoToStep}
      >
        <span className="flex items-center gap-2.5">
          <UserAvatar
            name={form.name.trim() || "Your name"}
            color={form.color}
            size={28}
          />
          <span>
            {form.name.trim() || "—"}
            {form.jobTitle.trim() && ` · ${form.jobTitle.trim()}`}
          </span>
        </span>
      </SummaryRow>

      <SummaryRow
        stepIndex={2}
        icon={<BiCategory size={18} />}
        title="Focus areas"
        onGoToStep={onGoToStep}
      >
        {selectedTopics.length > 0
          ? selectedTopics.join(", ")
          : "None selected"}
      </SummaryRow>

      <SummaryRow
        stepIndex={3}
        icon={<BiBell size={18} />}
        title="Notifications"
        onGoToStep={onGoToStep}
      >
        {notifications.length > 0
          ? `Emails about ${notifications.join(", ")}`
          : "No notification emails"}
      </SummaryRow>

      <CheckboxField
        name="terms"
        checked={form.acceptedTerms}
        onChange={handleTerms}
        error={errors.terms}
      >
        I agree to the terms of service, and I am happy for Jira Clone to email
        me about the projects I am part of.
      </CheckboxField>
    </>
  );
};

const SummaryRow = ({
  stepIndex,
  icon,
  title,
  onGoToStep,
  children,
}: SummaryRowProps): JSX.Element => {
  const handleEdit = (): void => onGoToStep(stepIndex);

  return (
    <div className="mb-3 flex items-start gap-3.5 rounded p-4 outline outline-2 outline-border-input">
      <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded bg-background-neutral text-icon-subtle">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-primary-bold text-2xs uppercase tracking-wide text-font-subtlest">
          {title}
        </span>
        <span className="mt-1 block font-primary-light text-sm text-font">
          {children}
        </span>
      </span>
      <button
        type="button"
        onClick={handleEdit}
        aria-label={`Edit ${title}`}
        className="ml-auto shrink-0 cursor-pointer rounded px-2 py-1 font-primary-bold text-xs text-font-brand duration-75 ease-in-out hover:bg-background-brand-subtlest"
      >
        Edit
      </button>
    </div>
  );
};

type Props = RegisterSummaryProps & {
  topics: Topic[];
};

type SummaryRowProps = {
  stepIndex: number;
  icon: ReactNode;
  title: string;
  onGoToStep: (stepIndex: number) => void;
  children: ReactNode;
};
