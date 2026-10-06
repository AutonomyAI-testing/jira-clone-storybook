import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import cx from "classix";
import type { PriceRange } from "./types";

const RAIL_IMAGE = "/images/property-search/rail.svg";
const THUMB_IMAGE = "/images/property-search/thumb.png";
const ARROW_IMAGE = "/images/property-search/arrow.svg";

// Half of the widest price tooltip, used to keep the end tooltips inside the rail
const TOOLTIP_HALF_WIDTH = 26;

// Smallest gap kept between the two price tooltips
const TOOLTIP_GAP = 6;

const handles = ["min", "max"] as const;

type Handle = (typeof handles)[number];

const clamp = (amount: number, min: number, max: number): number =>
  Math.min(Math.max(amount, min), max);

// Keeps both tooltips inside the rail and apart from each other, whatever the
// handle positions are
const getTooltipCenters = (
  railWidth: number,
  widths: [number, number],
  ratios: [number, number]
): [number, number] => {
  const halves: [number, number] = [widths[0] / 2, widths[1] / 2];
  const minCenter = clamp(
    ratios[0] * railWidth,
    halves[0],
    Math.max(railWidth - halves[0], halves[0])
  );
  const maxCenter = clamp(
    ratios[1] * railWidth,
    halves[1],
    Math.max(railWidth - halves[1], halves[1])
  );
  const overlap = minCenter + halves[0] + TOOLTIP_GAP - (maxCenter - halves[1]);

  if (overlap <= 0) return [minCenter, maxCenter];

  return [
    Math.max(minCenter - overlap / 2, halves[0]),
    Math.min(
      maxCenter + overlap / 2,
      Math.max(railWidth - halves[1], halves[1])
    ),
  ];
};

const tooltipLeft = (
  railWidth: number,
  center: number,
  percent: number
): string =>
  railWidth > 0
    ? `${center}px`
    : `clamp(${TOOLTIP_HALF_WIDTH}px, ${percent}%, calc(100% - ${TOOLTIP_HALF_WIDTH}px))`;

export const PriceRangeSlider = ({
  label,
  labelId,
  value,
  bounds,
  step,
  formatValue,
  onChange,
  disabled,
  className,
}: Props): JSX.Element => {
  const railRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const tooltipRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const draggingRef = useRef<Handle | null>(null);
  const [dragging, setDragging] = useState<Handle | null>(null);
  const [railWidth, setRailWidth] = useState<number>(0);
  const [railInset, setRailInset] = useState<number>(0);
  const [tooltipWidths, setTooltipWidths] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const updateWidth = (): void =>
      setRailWidth(rail.getBoundingClientRect().width);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(rail);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const widths: [number, number] = [
      tooltipRefs.current[0]?.offsetWidth ?? 0,
      tooltipRefs.current[1]?.offsetWidth ?? 0,
    ];

    setTooltipWidths((previous) =>
      previous[0] === widths[0] && previous[1] === widths[1] ? previous : widths
    );
    setRailInset((labelRef.current?.offsetWidth ?? 0) + TOOLTIP_GAP);
  }, [value.min, value.max, formatValue]);

  const ratioOf = (amount: number): number => {
    const span = bounds.max - bounds.min;
    return span > 0 ? (amount - bounds.min) / span : 0;
  };

  // The two handles can meet but never cross, so the min stops at the max
  const withHandleValue = (handle: Handle, amount: number): PriceRange =>
    handle === "min"
      ? { min: clamp(amount, bounds.min, value.max), max: value.max }
      : { min: value.min, max: clamp(amount, value.min, bounds.max) };

  const amountFromPointer = (clientX: number): number | null => {
    const rail = railRef.current;
    if (!rail) return null;

    const rect = rail.getBoundingClientRect();
    if (rect.width <= 0) return null;

    const ratio = (clientX - rect.left) / rect.width;
    const amount = bounds.min + ratio * (bounds.max - bounds.min);

    return Math.round(amount / step) * step;
  };

  const handlePointerDown =
    (handle: Handle) =>
    (e: React.PointerEvent<HTMLSpanElement>): void => {
      if (disabled) return;

      e.currentTarget.setPointerCapture(e.pointerId);
      draggingRef.current = handle;
      setDragging(handle);
    };

  const handlePointerMove =
    (handle: Handle) =>
    (e: React.PointerEvent<HTMLSpanElement>): void => {
      if (draggingRef.current !== handle) return;

      const amount = amountFromPointer(e.clientX);
      if (amount === null) return;

      onChange(withHandleValue(handle, amount));
    };

  const handlePointerUp =
    (handle: Handle) =>
    (e: React.PointerEvent<HTMLSpanElement>): void => {
      if (draggingRef.current !== handle) return;

      draggingRef.current = null;
      setDragging(null);

      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    };

  const handleKeyDown =
    (handle: Handle) =>
    (e: React.KeyboardEvent<HTMLSpanElement>): void => {
      if (disabled) return;

      const current = handle === "min" ? value.min : value.max;
      let next: number | null = null;

      if (e.key === "ArrowRight" || e.key === "ArrowUp") next = current + step;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = current - step;
      if (e.key === "PageUp") next = current + step * 10;
      if (e.key === "PageDown") next = current - step * 10;
      if (e.key === "Home") next = handle === "min" ? bounds.min : value.min;
      if (e.key === "End") next = handle === "max" ? bounds.max : value.max;

      if (next === null) return;

      e.preventDefault();
      onChange(withHandleValue(handle, next));
    };

  const tooltipCenters = getTooltipCenters(railWidth, tooltipWidths, [
    ratioOf(value.min),
    ratioOf(value.max),
  ]);

  return (
    <div className={cx("flex min-w-0 flex-col gap-4", className)}>
      {/* self-start keeps the label as wide as its text, which is also the
      inset the rail starts at so the price bubbles never cover it */}
      <span
        ref={labelRef}
        id={labelId}
        className="self-start text-2xs text-font-subtlest"
      >
        {label}
      </span>
      <div className="h-5 w-full" style={{ paddingLeft: railInset }}>
        <div
          ref={railRef}
          role="group"
          aria-labelledby={labelId}
          className="relative h-full w-full"
        >
          <img
            src={RAIL_IMAGE}
            alt=""
            className="pointer-events-none absolute inset-x-0 top-1/2 h-1.5 w-full -translate-y-1/2"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-background-neutral-boldest"
            style={{
              left: `${ratioOf(value.min) * 100}%`,
              right: `${(1 - ratioOf(value.max)) * 100}%`,
            }}
          />
          {handles.map((handle, index) => {
            const amount = handle === "min" ? value.min : value.max;
            const percent = ratioOf(amount) * 100;

            return (
              <Fragment key={handle}>
                <PriceTooltip
                  left={tooltipLeft(railWidth, tooltipCenters[index], percent)}
                  value={amount}
                  formatValue={formatValue}
                  measureRef={(node): void => {
                    tooltipRefs.current[index] = node;
                  }}
                />
                <SliderHandle
                  label={handle === "min" ? "Minimum price" : "Maximum price"}
                  value={amount}
                  bounds={bounds}
                  percent={percent}
                  disabled={disabled}
                  isDragging={dragging === handle}
                  formatValue={formatValue}
                  onPointerDown={handlePointerDown(handle)}
                  onPointerMove={handlePointerMove(handle)}
                  onPointerUp={handlePointerUp(handle)}
                  onKeyDown={handleKeyDown(handle)}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface Props {
  label: string;
  labelId: string;
  value: PriceRange;
  bounds: PriceRange;
  step: number;
  formatValue: (value: number) => string;
  onChange: (value: PriceRange) => void;
  disabled?: boolean;
  className?: string;
}

interface SliderHandleProps {
  label: string;
  value: number;
  bounds: PriceRange;
  percent: number;
  disabled?: boolean;
  isDragging: boolean;
  formatValue: (value: number) => string;
  onPointerDown: React.PointerEventHandler<HTMLSpanElement>;
  onPointerMove: React.PointerEventHandler<HTMLSpanElement>;
  onPointerUp: React.PointerEventHandler<HTMLSpanElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLSpanElement>;
}

const SliderHandle = ({
  label,
  value,
  bounds,
  percent,
  disabled,
  isDragging,
  formatValue,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onKeyDown,
}: SliderHandleProps): JSX.Element => (
  <span
    role="slider"
    tabIndex={disabled ? -1 : 0}
    aria-label={label}
    aria-valuemin={bounds.min}
    aria-valuemax={bounds.max}
    aria-valuenow={value}
    aria-valuetext={formatValue(value)}
    aria-disabled={disabled}
    onPointerDown={onPointerDown}
    onPointerMove={onPointerMove}
    onPointerUp={onPointerUp}
    onPointerCancel={onPointerUp}
    onKeyDown={onKeyDown}
    // The drawn thumb is 16px, so the grabbable area is padded out to 44px
    className={cx(
      "absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 touch-none items-center justify-center rounded-full",
      disabled
        ? "cursor-not-allowed"
        : isDragging
        ? "cursor-grabbing"
        : "cursor-grab"
    )}
    style={{ left: `${percent}%` }}
  >
    <img
      src={THUMB_IMAGE}
      alt=""
      width={21}
      height={21}
      className="pointer-events-none"
    />
  </span>
);

interface PriceTooltipProps {
  left: string;
  value: number;
  formatValue: (value: number) => string;
  measureRef: (node: HTMLSpanElement | null) => void;
}

const PriceTooltip = ({
  left,
  value,
  formatValue,
  measureRef,
}: PriceTooltipProps): JSX.Element => (
  <span
    ref={measureRef}
    aria-hidden="true"
    className="pointer-events-none absolute bottom-full flex -translate-x-1/2 flex-col items-center"
    style={{ left }}
  >
    <span className="rounded bg-background-inverse px-1.5 py-[3px] text-2xs leading-[18px] text-font-inverse">
      {formatValue(value)}
    </span>
    <img src={ARROW_IMAGE} alt="" width={8} height={4} />
  </span>
);
