import { useRef } from "react";
import cx from "classix";
import { CODE_LENGTH } from "./register.validation";

const EMPTY_DIGIT = " ";

export const RegisterCodeInput = ({
  value,
  onChange,
  error,
}: Props): JSX.Element => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  // The code is held as a single string, so empty positions are padded with a
  // space to keep every box tied to a fixed index.
  const digits = value.padEnd(CODE_LENGTH, EMPTY_DIGIT).split("");

  const focusInput = (index: number): void => {
    inputRefs.current[index]?.focus();
  };

  const handleDigitChange =
    (index: number) =>
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const typed = e.currentTarget.value.replace(/\D/g, "");
      const next = [...digits];

      if (typed.length === 0) {
        next[index] = EMPTY_DIGIT;
        onChange(next.join("").trimEnd());
        return;
      }

      // A pasted code fills the remaining boxes from the one it landed in.
      typed.split("").forEach((digit, offset) => {
        if (index + offset < CODE_LENGTH) next[index + offset] = digit;
      });

      onChange(next.join("").trimEnd());
      focusInput(Math.min(index + typed.length, CODE_LENGTH - 1));
    };

  const handleDigitKeyDown =
    (index: number) =>
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Backspace" && digits[index] === EMPTY_DIGIT && index > 0) {
        focusInput(index - 1);
      }
    };

  return (
    <div className="flex gap-2">
      <input type="hidden" name="code" value={value} />
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs.current[index] = element;
          }}
          value={digit === EMPTY_DIGIT ? "" : digit}
          onChange={handleDigitChange(index)}
          onKeyDown={handleDigitKeyDown(index)}
          inputMode="numeric"
          autoComplete="one-time-code"
          aria-label={`Digit ${index + 1} of ${CODE_LENGTH}`}
          className={cx(
            "h-[56px] w-[46px] rounded-md border-none bg-background-input text-center font-primary-black text-xl text-font outline outline-2",
            error
              ? "outline-border-danger focus-visible:outline-border-danger"
              : "outline-border-input focus-visible:outline-border-brand"
          )}
        />
      ))}
    </div>
  );
};

interface Props {
  value: string;
  onChange: (code: string) => void;
  error?: string;
}
