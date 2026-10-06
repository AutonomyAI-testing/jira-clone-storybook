import type { ChangeEvent } from "react";
import { RegisterStepProps } from "./register.constants";
import { StepHeading, Toggle } from "./register-fields";

export const StepNotifications = ({
  form,
  onChange,
}: RegisterStepProps): JSX.Element => {
  const handleIssueActivity = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ notifyIssueActivity: e.target.checked });

  const handleMentions = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ notifyMentions: e.target.checked });

  const handleWeeklyDigest = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ notifyWeeklyDigest: e.target.checked });

  return (
    <>
      <StepHeading
        step={4}
        title="Stay in the loop"
        description="Choose what reaches you. You can change any of this later from your profile."
      />

      <div className="mb-4 overflow-hidden rounded outline outline-2 outline-border-input">
        <p className="border-b border-border bg-background-neutral px-4 py-2 font-primary-bold text-2xs uppercase tracking-wide text-font-subtle">
          Email
        </p>
        <div className="p-1.5">
          <Toggle
            name="notifyIssueActivity"
            label="Issue activity"
            description="When an issue you reported or are assigned is updated"
            checked={form.notifyIssueActivity}
            onChange={handleIssueActivity}
          />
          <Toggle
            name="notifyMentions"
            label="Mentions and comments"
            description="When someone mentions you or replies to your comment"
            checked={form.notifyMentions}
            onChange={handleMentions}
          />
          <Toggle
            name="notifyWeeklyDigest"
            label="Weekly digest"
            description="A Monday summary of what moved across your projects"
            checked={form.notifyWeeklyDigest}
            onChange={handleWeeklyDigest}
          />
        </div>
      </div>

      <p className="font-primary-light text-xs text-font-subtlest">
        We only ever email you about the projects you are a member of.
      </p>
    </>
  );
};
