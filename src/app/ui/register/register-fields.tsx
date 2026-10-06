import type { ChangeEvent, ReactNode } from "react";
import cx from "classix";
import { BsCheckLg } from "react-icons/bs";
import { PASSWORD_RULES } from "@domain/user";
import { REGISTER_STEPS } from "./register.constants";

const fieldClass = (hasError: boolean): string =>
  cx(
    "w-full rounded bg-background-input px-3 py-2 font-primary-light text-sm text-font",
    "outline outline-2 duration-150 ease-in-out placeholder:text-font-subtlest",
    hasError
      ? "outline-border-danger focus-visible:outline-border-danger"
      : cx(
          "outline-border-input hover:bg-background-input-hovered",
          "focus:bg-background-input-pressed focus-visible:outline-border-brand"
        )
  );

export const StepHeading = ({
  step,
  title,
  description,
}: StepHeadingProps): JSX.Element => (
  <div className="mb-7">
    <p className="font-primary-bold text-2xs uppercase tracking-wide text-font-brand">
      Step {step} of {REGISTER_STEPS.length}
    </p>
    <h1 className="mt-2 font-primary-black text-4xl text-font">{title}</h1>
    <p className="mt-3 font-primary-light text-sm text-font-subtle">
      {description}
    </p>
  </div>
);

export const TextField = ({
  name,
  label,
  value,
  onChange,
  error,
  hint,
  placeholder,
  type = "text",
  autoComplete,
  optional,
}: TextFieldProps): JSX.Element => {
  const id = `register-${name}`;

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-1.5 block font-primary-bold text-sm text-font"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-primary-light text-font-subtlest">
            — optional
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-message` : undefined}
        className={fieldClass(Boolean(error))}
      />
      <FieldMessage id={`${id}-message`} error={error} hint={hint} />
    </div>
  );
};

export const PasswordField = ({
  name,
  label,
  value,
  onChange,
  error,
}: PasswordFieldProps): JSX.Element => {
  const id = `register-${name}`;

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-1.5 block font-primary-bold text-sm text-font"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="password"
        value={value}
        autoComplete="new-password"
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-rules`}
        className={fieldClass(Boolean(error))}
      />
      <div className="mt-2 flex gap-1.5" aria-hidden="true">
        {PASSWORD_RULES.map((rule) => (
          <span
            key={rule.id}
            className={cx(
              "h-1 flex-1 rounded-full duration-150 ease-in-out",
              rule.test(value)
                ? "bg-background-success-bold"
                : "bg-background-accent-grey-subtler"
            )}
          />
        ))}
      </div>
      <div id={`${id}-rules`} className="mt-2 flex flex-wrap gap-1.5">
        {PASSWORD_RULES.map((rule) => (
          <span
            key={rule.id}
            className={cx(
              "flex items-center gap-1 rounded-full px-2 py-0.5 font-primary-light text-2xs",
              rule.test(value)
                ? "bg-background-success text-font-success"
                : "bg-background-accent-grey-subtler text-font-subtlest"
            )}
          >
            {rule.test(value) && <BsCheckLg size={10} />}
            {rule.label}
          </span>
        ))}
      </div>
      {error && (
        <p className="mt-1.5 font-primary-light text-xs text-font-danger">
          {error}
        </p>
      )}
    </div>
  );
};

export const Toggle = ({
  name,
  label,
  description,
  checked,
  onChange,
}: ToggleProps): JSX.Element => (
  <label className="flex cursor-pointer items-center justify-between gap-4 rounded px-3 py-3 duration-75 ease-in-out hover:bg-background-neutral">
    <span>
      <span className="block font-primary-bold text-sm text-font">{label}</span>
      <span className="mt-0.5 block font-primary-light text-xs text-font-subtlest">
        {description}
      </span>
    </span>
    <span className="relative flex h-[24px] w-[42px] shrink-0">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span
        className={cx(
          "absolute inset-0 rounded-full duration-150 ease-in-out",
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-border-brand",
          checked ? "bg-background-brand-bold" : "bg-background-neutral-pressed"
        )}
      />
      <span
        className={cx(
          "absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow-sm duration-150 ease-in-out",
          checked ? "left-[21px]" : "left-[3px]"
        )}
      />
    </span>
  </label>
);

export const CheckboxField = ({
  name,
  checked,
  onChange,
  error,
  children,
}: CheckboxFieldProps): JSX.Element => (
  <div className="mt-6">
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span
        className={cx(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm outline outline-2 duration-150 ease-in-out",
          "peer-focus-visible:outline-border-brand",
          checked
            ? "bg-background-brand-bold outline-border-brand"
            : "bg-background-input outline-border-input"
        )}
      >
        <BsCheckLg
          size={12}
          className={checked ? "text-font-inverse" : "text-transparent"}
        />
      </span>
      <span className="font-primary-light text-sm text-font-subtle">
        {children}
      </span>
    </label>
    {error && (
      <p className="mt-1.5 font-primary-light text-xs text-font-danger">
        {error}
      </p>
    )}
  </div>
);

type FieldMessageProps = {
  id: string;
  error?: string;
  hint?: string;
};

const FieldMessage = ({
  id,
  error,
  hint,
}: FieldMessageProps): JSX.Element | null => {
  if (error) {
    return (
      <p id={id} className="mt-1.5 font-primary-light text-xs text-font-danger">
        {error}
      </p>
    );
  }

  if (hint) {
    return (
      <p className="mt-1.5 font-primary-light text-xs text-font-subtlest">
        {hint}
      </p>
    );
  }

  return null;
};

type StepHeadingProps = {
  step: number;
  title: string;
  description: string;
};

type TextFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
};

type PasswordFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

type ToggleProps = {
  name: string;
  label: string;
  description: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type CheckboxFieldProps = {
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  children: ReactNode;
};
