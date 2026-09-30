import { useState } from "react";
import cx from "classix";
import {
  HiOutlineExclamation,
  HiOutlineChartBar,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { SprintInsight } from "@domain/analytics";
import { Button } from "@app/components/button";

const toneStyle: Record<
  SprintInsight["tone"],
  { icon: JSX.Element; className: string }
> = {
  warning: {
    icon: <HiOutlineExclamation size={18} />,
    className: "bg-background-warning text-font-warning",
  },
  info: {
    icon: <HiOutlineChartBar size={18} />,
    className: "bg-background-info text-font-info",
  },
  alert: {
    icon: <HiOutlineExclamation size={18} />,
    className: "bg-background-danger text-font-danger",
  },
};

export const InsightsCard = ({ insights }: Props): JSX.Element => {
  const [index, setIndex] = useState(0);
  const insight = insights[index];
  const tone = toneStyle[insight.tone];

  const goTo = (delta: number) => {
    setIndex((prev) => (prev + delta + insights.length) % insights.length);
  };

  return (
    <div className="flex h-full flex-col gap-3 rounded-md border border-border bg-elevation-surface-raised p-4 shadow-xs">
      <div className="flex items-center justify-between gap-2">
        <p className="font-primary-bold text-sm text-font">
          Sprint insights
        </p>
        <div className="flex gap-1">
          <button
            onClick={() => goTo(-1)}
            aria-label="Previous insight"
            className="flex h-6 w-6 items-center justify-center rounded bg-background-neutral text-icon hover:bg-background-neutral-hovered"
          >
            <HiOutlineArrowLeft size={13} />
          </button>
          <button
            onClick={() => goTo(1)}
            aria-label="Next insight"
            className="flex h-6 w-6 items-center justify-center rounded bg-background-neutral text-icon hover:bg-background-neutral-hovered"
          >
            <HiOutlineArrowRight size={13} />
          </button>
        </div>
      </div>
      <div className="flex flex-1 gap-3">
        <span
          className={cx(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-md",
            tone.className
          )}
        >
          {tone.icon}
        </span>
        <div className="min-w-0">
          <p className="font-primary-bold text-sm text-font">
            {insight.title}
          </p>
          <p className="mt-1 font-primary-light text-xs leading-5 text-font-subtlest">
            {insight.body}
          </p>
        </div>
      </div>
      <Button size="md" className="w-fit text-xs">
        {insight.actionLabel}
      </Button>
      <div className="-mt-1 flex gap-1">
        {insights.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show insight ${i + 1}`}
            className={cx(
              "h-1.5 rounded-full bg-background-neutral",
              i === index ? "w-4 bg-background-brand-bold" : "w-1.5"
            )}
          />
        ))}
      </div>
    </div>
  );
};

interface Props {
  insights: SprintInsight[];
}
