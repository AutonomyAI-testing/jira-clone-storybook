import cx from "classix";

export const TextInput = ({
  label,
  name,
  error,
  hint,
  className,
  children,
  ...rest
}: Props): JSX.Element => {
  const messageId = `${name}-message`;
  const hasMessage = Boolean(error || hint);

  return (
    <div className={cx("flex flex-col", className)}>
      <label
        htmlFor={name}
        className="mb-1.5 font-primary-bold text-sm text-font"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={hasMessage ? messageId : undefined}
        className={cx(
          "box-border h-[40px] w-full rounded-md border-none bg-background-input px-3 text-font outline outline-2",
          "placeholder:font-primary-light placeholder:text-font-subtlest",
          "hover:bg-background-input-hovered focus-visible:bg-background-input-pressed",
          error
            ? "outline-border-danger focus-visible:outline-border-danger"
            : "outline-border-input focus-visible:outline-border-brand"
        )}
        {...rest}
      />
      {children}
      {hasMessage && (
        <span
          id={messageId}
          className={cx(
            "mt-1.5 font-primary-light text-2xs",
            error ? "text-font-danger" : "text-font-subtlest"
          )}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
};

export interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  className?: string;
  children?: React.ReactNode;
}
