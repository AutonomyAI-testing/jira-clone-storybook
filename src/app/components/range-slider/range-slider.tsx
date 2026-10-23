import * as Slider from "@radix-ui/react-slider";
import cx from "classix";

export const RangeSlider = ({
  value,
  onValueChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  className,
}: Props): JSX.Element => (
  <Slider.Root
    className={cx(
      "relative flex h-4 w-full touch-none select-none items-center",
      disabled && "cursor-not-allowed opacity-60",
      className
    )}
    value={value}
    min={min}
    max={max}
    step={step}
    minStepsBetweenThumbs={1}
    disabled={disabled}
    onValueChange={onValueChange}
  >
    <Slider.Track className="relative h-1.5 grow rounded-full bg-background-neutral">
      <Slider.Range className="absolute h-full rounded-full bg-background-brand-bold" />
    </Slider.Track>
    {value.map((_, index) => (
      <Slider.Thumb
        key={index}
        aria-label={getThumbLabel(label, index, value.length)}
        className={cx(
          "block h-4 w-4 cursor-grab rounded-full bg-elevation-surface-raised",
          "shadow-xs outline outline-1 outline-border-bold",
          "active:cursor-grabbing disabled:cursor-not-allowed"
        )}
      />
    ))}
  </Slider.Root>
);

const getThumbLabel = (
  label: string,
  index: number,
  thumbCount: number
): string => {
  if (thumbCount === 1) return label;

  return `${label} ${index === 0 ? "minimum" : "maximum"}`;
};

interface Props {
  value: number[];
  onValueChange: (value: number[]) => void;
  /** Names the slider for assistive technology. */
  label: string;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
}
