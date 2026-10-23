import cx from "classix";

const TICK_COUNT = 8;
const THUMB_SIZE = 16;

// The field's label sits above the left end of the rail, so a tooltip pinned to
// a handle at either extreme would land on top of it. Keeping the tooltips
// inside the middle of the rail leaves the label readable at every value.
const MIN_TOOLTIP_FRACTION = 0.24;

/**
 * A two-handle range slider. The rail, the ticks and the selected span are
 * drawn, and two native range inputs sit on top of them so each handle is a
 * real slider to assistive technology and to the keyboard.
 */
export const RangeSlider = ({
  min,
  max,
  step,
  value,
  onValueChange,
  formatValue,
  ariaLabel,
  minDistance = 0,
  disabled = false,
  className,
}: Props): JSX.Element => {
  const [lower, upper] = value;
  const span = max - min;

  const toFraction = (amount: number): number =>
    span === 0 ? 0 : (amount - min) / span;

  const lowerFraction = toFraction(lower);
  const upperFraction = toFraction(upper);

  // The handles travel inset by half a thumb, so the visual elements line up
  // with the native inputs rather than with the raw rail width.
  const handleOffset = (fraction: number): string =>
    `calc(${THUMB_SIZE / 2}px + ${fraction} * (100% - ${THUMB_SIZE}px))`;

  const handleLowerChange = (amount: number): void => {
    onValueChange([Math.min(amount, upper - minDistance), upper]);
  };

  const handleUpperChange = (amount: number): void => {
    onValueChange([lower, Math.max(amount, lower + minDistance)]);
  };

  const inputClass = cx(
    "absolute inset-0 h-6 w-full cursor-pointer appearance-none bg-transparent",
    "pointer-events-none",
    "[&::-webkit-slider-runnable-track]:h-6",
    "[&::-webkit-slider-runnable-track]:bg-transparent",
    "[&::-webkit-slider-thumb]:pointer-events-auto",
    "[&::-webkit-slider-thumb]:mt-1",
    "[&::-webkit-slider-thumb]:h-4",
    "[&::-webkit-slider-thumb]:w-4",
    "[&::-webkit-slider-thumb]:appearance-none",
    "[&::-webkit-slider-thumb]:rounded-full",
    "[&::-webkit-slider-thumb]:bg-background-input",
    "[&::-webkit-slider-thumb]:shadow-sm",
    "[&::-webkit-slider-thumb]:outline",
    "[&::-webkit-slider-thumb]:outline-1",
    "[&::-webkit-slider-thumb]:outline-border",
    "[&::-moz-range-track]:h-6",
    "[&::-moz-range-track]:bg-transparent",
    "[&::-moz-range-thumb]:pointer-events-auto",
    "[&::-moz-range-thumb]:h-4",
    "[&::-moz-range-thumb]:w-4",
    "[&::-moz-range-thumb]:rounded-full",
    "[&::-moz-range-thumb]:border-none",
    "[&::-moz-range-thumb]:bg-background-input"
  );

  const tooltipFraction = (fraction: number): number =>
    Math.min(
      Math.max(fraction, MIN_TOOLTIP_FRACTION),
      1 - MIN_TOOLTIP_FRACTION
    );

  const renderValueTooltip = (
    amount: number,
    fraction: number
  ): JSX.Element => (
    <div
      className="pointer-events-none absolute bottom-full mb-1 -translate-x-1/2"
      style={{ left: handleOffset(tooltipFraction(fraction)) }}
    >
      <div className="relative flex h-6 items-center whitespace-nowrap rounded bg-font px-1.5 text-2xs text-font-inverse">
        {formatValue(amount)}
        <span
          className={cx(
            "absolute left-1/2 top-full -translate-x-1/2",
            "border-x-4 border-t-4 border-x-transparent border-t-font"
          )}
        />
      </div>
    </div>
  );

  return (
    <div className={cx("relative h-6", className)}>
      <div className="absolute inset-x-2 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-background-neutral">
        <div
          className="absolute inset-y-0 rounded-full bg-background-neutral-bold"
          style={{
            left: `${lowerFraction * 100}%`,
            right: `${(1 - upperFraction) * 100}%`,
          }}
        />
      </div>

      <div className="absolute inset-x-2 top-1/2 flex -translate-y-1/2 justify-between px-[10%]">
        {Array.from({ length: TICK_COUNT }, (_, index) => (
          <span
            key={index}
            className="h-1 w-px rounded-full bg-background-neutral-pressed"
          />
        ))}
      </div>

      {renderValueTooltip(lower, lowerFraction)}
      {renderValueTooltip(upper, upperFraction)}

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={lower}
        disabled={disabled}
        onChange={(event) => handleLowerChange(Number(event.target.value))}
        aria-label={`${ariaLabel} minimum`}
        aria-valuetext={formatValue(lower)}
        className={cx(
          inputClass,
          lowerFraction > 0.5 ? "z-20" : "z-10",
          disabled && "cursor-not-allowed"
        )}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={upper}
        disabled={disabled}
        onChange={(event) => handleUpperChange(Number(event.target.value))}
        aria-label={`${ariaLabel} maximum`}
        aria-valuetext={formatValue(upper)}
        className={cx(
          inputClass,
          lowerFraction > 0.5 ? "z-10" : "z-20",
          disabled && "cursor-not-allowed"
        )}
      />
    </div>
  );
};

interface Props {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  formatValue: (value: number) => string;
  ariaLabel: string;
  minDistance?: number;
  disabled?: boolean;
  className?: string;
}
