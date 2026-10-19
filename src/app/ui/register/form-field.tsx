import cx from "classix";
import { BsExclamationCircle } from "react-icons/bs";

export const FormField = ({
  id,
  label,
  optional,
  hint,
  error,
  children,
}: FormFieldProps): JSX.Element => {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="mb-1.5 block font-primary-bold text-xs text-font"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-primary-light text-font-subtlest">
            Optional
          </span>
        )}
      </label>
      {children}
      {error ? (
        <FieldError>{error}</FieldError>
      ) : hint ? (
        <p
          id={`${id}-hint`}
          className="mt-1.5 font-primary-light text-xs text-font-subtlest"
        >
          {hint}
        </p>
      ) : null}
    </div>
  );
};

export const FieldError = ({ children }: FieldErrorProps): JSX.Element => {
  return (
    <p
      role="alert"
      className="mt-1.5 flex items-center gap-1 font-primary-light text-xs text-font-danger"
    >
      <BsExclamationCircle size={13} className="shrink-0" />
      <span>{children}</span>
    </p>
  );
};

export const PasswordInput = ({
  id,
  name,
  placeholder,
  autoComplete,
  value,
  hasError,
  isRevealed,
  onToggleReveal,
  onChange,
}: PasswordInputProps): JSX.Element => {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={isRevealed ? "text" : "password"}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={cx(inputClassName(hasError), "pr-16")}
        value={value}
        aria-invalid={hasError}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onToggleReveal}
        aria-label={isRevealed ? "Hide password" : "Show password"}
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded p-1.5 font-primary-bold text-xs text-font-subtle outline outline-2 outline-transparent duration-75 ease-linear hover:bg-background-neutral-hovered hover:text-font focus-visible:outline-border-brand"
      >
        {isRevealed ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export const inputClassName = (hasError: boolean): string =>
  cx(
    "w-full rounded-md border bg-background-input p-3 font-primary text-font outline outline-2 outline-transparent",
    "duration-75 ease-linear placeholder:text-font-subtlest hover:bg-background-input-hovered focus-visible:bg-background-input-pressed focus-visible:outline-border-brand",
    hasError ? "border-border-danger" : "border-border-input"
  );

interface FormFieldProps {
  id: string;
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  children: JSX.Element | JSX.Element[];
}

interface FieldErrorProps {
  children: string;
}

interface PasswordInputProps {
  id: string;
  name: string;
  placeholder: string;
  autoComplete: string;
  value: string;
  hasError: boolean;
  isRevealed: boolean;
  onToggleReveal: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
