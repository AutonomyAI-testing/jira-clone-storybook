import type { ChangeEvent } from "react";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { AVATAR_COLORS } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { RegisterStepProps } from "./register.constants";
import { StepHeading, TextField } from "./register-fields";

export const StepProfile = ({
  form,
  onChange,
}: RegisterStepProps): JSX.Element => {
  const handleJobTitle = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ jobTitle: e.target.value });

  const handleColor = (e: ChangeEvent<HTMLInputElement>): void =>
    onChange({ color: e.target.value });

  return (
    <>
      <StepHeading
        step={2}
        title="Set up your profile"
        description="This is what the rest of your team sees on issues, comments and the board."
      />

      <div className="mb-6 flex items-center gap-5 rounded p-4 outline outline-2 outline-border-input">
        <UserAvatar
          name={form.name.trim() || "Your name"}
          color={form.color}
          size={64}
        />
        <div>
          <p className="font-primary-bold text-sm text-font">
            {form.name.trim() || "Your name"}
          </p>
          <p className="mt-0.5 font-primary-light text-xs text-font-subtlest">
            {form.jobTitle.trim() || "Add a job title below"}
          </p>
        </div>
      </div>

      <TextField
        name="jobTitle"
        label="Job title"
        value={form.jobTitle}
        onChange={handleJobTitle}
        placeholder="Product designer"
        autoComplete="organization-title"
        optional
      />

      <fieldset className="mb-5">
        <legend className="mb-2 font-primary-bold text-sm text-font">
          Avatar colour
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {AVATAR_COLORS.map((color) => (
            <label key={color} className="cursor-pointer">
              <input
                type="radio"
                name="color"
                value={color}
                checked={form.color === color}
                onChange={handleColor}
                aria-label={`Avatar colour ${color}`}
                className="peer sr-only"
              />
              <span
                className={cx(
                  "flex h-9 w-9 items-center justify-center rounded-full outline outline-2 duration-100 ease-in-out",
                  "peer-focus-visible:outline-border-brand",
                  form.color === color
                    ? "outline-border-brand"
                    : "outline-transparent"
                )}
                style={{ backgroundColor: color }}
              >
                {form.color === color && (
                  <BsCheckLg size={14} className="text-[var(--Neutral1000)]" />
                )}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
    </>
  );
};
