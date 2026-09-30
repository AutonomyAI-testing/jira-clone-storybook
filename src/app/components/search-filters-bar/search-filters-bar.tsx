import { useState, useRef, useCallback } from "react";
import cx from "classix";
import { HiChevronDown } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import * as Select from "@app/components/select";
import { Button } from "@app/components/button";

const propertyTypes = [
  "Office Building",
  "Retail Space",
  "Warehouse",
  "Coworking Space",
] as const;

const spaceTypes = [
  "Meeting Room, Event Space",
  "Private Office",
  "Open Desk",
  "Conference Room",
] as const;

const rates = ["hourly", "monthly"] as const;
type Rate = (typeof rates)[number];

const PRICE_MIN = 0;
const PRICE_MAX = 5000;
const PRICE_STEP = 50;

export const SearchFiltersBar = ({
  onSearch,
}: SearchFiltersBarProps): JSX.Element => {
  const [location] = useState<string>("New York");
  const [propertyType, setPropertyType] = useState<string>(propertyTypes[0]);
  const [spaceType, setSpaceType] = useState<string>(spaceTypes[0]);
  const [rate, setRate] = useState<Rate>("hourly");
  const [minPrice, setMinPrice] = useState<number>(500);
  const [maxPrice, setMaxPrice] = useState<number>(2500);

  const handleSearch = (): void => {
    onSearch?.({ location, propertyType, spaceType, rate, minPrice, maxPrice });
  };

  return (
    <div
      className={cx(
        "flex w-full flex-wrap items-center gap-x-8 gap-y-4 rounded-2xl bg-elevation-surface p-6 shadow-md"
      )}
    >
      <Field label="Location">
        <span className="font-primary-bold text-base text-font">
          {location}
        </span>
      </Field>

      <Divider />

      <Field label="Property Type">
        <PlainSelect
          ariaLabel="Open property type select"
          value={propertyType}
          onValueChange={setPropertyType}
          options={propertyTypes}
        />
      </Field>

      <Divider />

      <RateToggle rate={rate} onChange={setRate} />

      <Divider />

      <Field label="Space Type">
        <PlainSelect
          ariaLabel="Open space type select"
          value={spaceType}
          onValueChange={setSpaceType}
          options={spaceTypes}
          truncate
        />
      </Field>

      <Divider />

      <PriceRangeField
        min={minPrice}
        max={maxPrice}
        onChange={(nextMin, nextMax) => {
          setMinPrice(nextMin);
          setMaxPrice(nextMax);
        }}
      />

      <Button
        color="neutral"
        variant="contained"
        className="ml-auto !rounded-full !bg-background-neutral-bold px-8 py-3 !text-font-inverse hover:!bg-background-neutral-bold-hovered active:!bg-background-neutral-bold-pressed"
        aria-label="Search"
        onClick={handleSearch}
      >
        <BiSearch size={18} />
        <span className="font-primary-bold text-sm">Search</span>
      </Button>
    </div>
  );
};

const Field = ({ label, children }: FieldProps): JSX.Element => (
  <div className="flex min-w-[120px] flex-col gap-1">
    <span className="font-primary-light text-xs text-font-subtlest">
      {label}
    </span>
    {children}
  </div>
);

const Divider = (): JSX.Element => (
  <span className="hidden h-11 w-px bg-border sm:block" />
);

const PlainSelect = ({
  ariaLabel,
  value,
  onValueChange,
  options,
  truncate = false,
}: PlainSelectProps): JSX.Element => (
  <Select.Root value={value} onValueChange={onValueChange}>
    <Select.Trigger
      aria-label={ariaLabel}
      className="!bg-transparent !p-0 hover:!bg-transparent active:!bg-transparent"
    >
      <Select.Value
        className={cx(
          "font-primary-bold text-base text-font",
          truncate && "max-w-[190px] truncate"
        )}
      />
      <span className="ml-2 flex text-icon">
        <HiChevronDown size={18} />
      </span>
    </Select.Trigger>
    <Select.Content>
      <Select.ScrollUpButton />
      <Select.Viewport>
        {options.map((option) => (
          <Select.Item key={option} value={option}>
            <Select.ItemIndicator />
            <Select.ItemText>{option}</Select.ItemText>
          </Select.Item>
        ))}
      </Select.Viewport>
      <Select.ScrollDownButton />
    </Select.Content>
  </Select.Root>
);

const RateToggle = ({ rate, onChange }: RateToggleProps): JSX.Element => (
  <div className="flex items-center gap-2 rounded-full bg-background-neutral p-2">
    {rates.map((option) => (
      <button
        key={option}
        type="button"
        aria-pressed={rate === option}
        onClick={() => onChange(option)}
        className={cx(
          "rounded-full border-none px-4 py-2 font-primary-bold text-sm capitalize",
          rate === option
            ? "bg-background-neutral-bold text-font-inverse"
            : "bg-transparent text-font-subtlest hover:text-font"
        )}
      >
        {option}
      </button>
    ))}
  </div>
);

const PriceRangeField = ({
  min,
  max,
  onChange,
}: PriceRangeFieldProps): JSX.Element => {
  const trackRef = useRef<HTMLDivElement>(null);

  const percentFor = (value: number): number =>
    ((value - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;

  const valueFromClientX = useCallback((clientX: number): number => {
    const track = trackRef.current;
    if (!track) return PRICE_MIN;

    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const rawValue = PRICE_MIN + ratio * (PRICE_MAX - PRICE_MIN);

    return Math.round(rawValue / PRICE_STEP) * PRICE_STEP;
  }, []);

  const handlePointerDown = useCallback(
    (thumb: "min" | "max") =>
      (e: React.PointerEvent<HTMLDivElement>): void => {
        e.preventDefault();
        const target = e.currentTarget;
        target.setPointerCapture(e.pointerId);

        const onPointerMove = (moveEvent: PointerEvent): void => {
          const nextValue = valueFromClientX(moveEvent.clientX);

          if (thumb === "min") {
            onChange(Math.min(nextValue, max - PRICE_STEP), max);
          } else {
            onChange(min, Math.max(nextValue, min + PRICE_STEP));
          }
        };

        const onPointerUp = (): void => {
          window.removeEventListener("pointermove", onPointerMove);
          window.removeEventListener("pointerup", onPointerUp);
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
      },
    [min, max, onChange, valueFromClientX]
  );

  const minPercent = percentFor(min);
  const maxPercent = percentFor(max);

  return (
    <div className="flex min-w-[220px] flex-col gap-3">
      <span className="font-primary-light text-xs text-font-subtlest">
        Price
      </span>
      <div ref={trackRef} className="relative flex h-4 items-center">
        <div className="absolute inset-x-0 h-1.5 rounded-full bg-background-neutral" />
        <div
          className="absolute h-1.5 rounded-full bg-background-neutral-bold"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
        <PriceThumb
          value={min}
          percent={minPercent}
          onPointerDown={handlePointerDown("min")}
        />
        <PriceThumb
          value={max}
          percent={maxPercent}
          onPointerDown={handlePointerDown("max")}
        />
      </div>
    </div>
  );
};

const PriceThumb = ({
  value,
  percent,
  onPointerDown,
}: PriceThumbProps): JSX.Element => (
  <div
    className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-grab flex-col items-center"
    style={{ left: `${percent}%` }}
    onPointerDown={onPointerDown}
    role="slider"
    tabIndex={0}
    aria-valuemin={PRICE_MIN}
    aria-valuemax={PRICE_MAX}
    aria-valuenow={value}
  >
    <span className="absolute -top-8 whitespace-nowrap rounded bg-background-neutral-bold px-1.5 py-0.5 font-primary text-2xs text-font-inverse">
      ${value}
    </span>
    <span className="h-4 w-4 rounded-full border border-border-bold bg-elevation-surface shadow-sm" />
  </div>
);

export interface SearchFilters {
  location: string;
  propertyType: string;
  spaceType: string;
  rate: Rate;
  minPrice: number;
  maxPrice: number;
}

interface SearchFiltersBarProps {
  onSearch?: (filters: SearchFilters) => void;
}

interface FieldProps {
  label: string;
  children: JSX.Element;
}

interface PlainSelectProps {
  ariaLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: readonly string[];
  truncate?: boolean;
}

interface RateToggleProps {
  rate: Rate;
  onChange: (rate: Rate) => void;
}

interface PriceRangeFieldProps {
  min: number;
  max: number;
  onChange: (min: number, max: number) => void;
}

interface PriceThumbProps {
  value: number;
  percent: number;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
}
