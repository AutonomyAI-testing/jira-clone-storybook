import cx from "classix";

export const ToggleSwitch = ({
  label,
  checked,
  onCheckedChange,
}: ToggleSwitchProps): JSX.Element => {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-font">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onCheckedChange(!checked)}
        className={cx(
          "relative h-[24px] w-[44px] cursor-pointer rounded-full border-none transition-colors duration-200",
          checked
            ? "bg-background-brand-bold"
            : "bg-background-neutral-bold"
        )}
      >
        <span
          className={cx(
            "absolute top-[2px] left-[2px] h-[20px] w-[20px] rounded-full bg-white transition-transform duration-200",
            checked && "translate-x-[20px]"
          )}
        />
      </button>
    </div>
  );
};

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}
