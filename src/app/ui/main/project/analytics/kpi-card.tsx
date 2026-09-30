import cx from "classix";
import { HiArrowUp, HiArrowDown } from "react-icons/hi";
import { KpiValue } from "@domain/analytics";

export const KpiCard = ({ label, kpi, icon }: Props): JSX.Element => {
  const { value, unit, delta, deltaLabel, invertDelta } = kpi;
  const isPositive = delta != null && delta > 0;
  const isGood = delta == null ? null : invertDelta ? !isPositive : isPositive;

  return (
    <div className="flex min-h-[124px] flex-col justify-between gap-3 rounded-md bg-elevation-surface-raised p-4 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <p className="font-primary-light text-2xs text-font-subtlest">
          {label}
        </p>
        {icon && (
          <span className="flex h-7 w-7 items-center justify-center rounded bg-background-neutral text-icon-brand">
            {icon}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-1.5">
        <p className="font-primary-black text-2xl text-font">{value}</p>
        <p className="font-primary-light text-2xs text-font-subtlest">
          {unit}
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-2xs">
        {delta != null && (
          <span
            className={cx(
              "flex items-center gap-0.5 font-primary-bold",
              isGood ? "text-font-success" : "text-font-danger"
            )}
          >
            {isPositive ? <HiArrowUp size={11} /> : <HiArrowDown size={11} />}
            {Math.abs(delta)}
          </span>
        )}
        <span className="font-primary-light text-font-subtlest">
          {deltaLabel}
        </span>
      </div>
    </div>
  );
};

interface Props {
  label: string;
  kpi: KpiValue;
  icon?: React.ReactNode;
}
