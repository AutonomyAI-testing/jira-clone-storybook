import { SprintInfo } from "@domain/analytics";

export const SprintProgressCard = ({ sprint }: Props): JSX.Element => {
  const { goalPoints, completedPoints, day, length } = sprint;
  const pct = Math.round((completedPoints / goalPoints) * 100);
  const radius = 28;
  const stroke = 5;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct / 100);
  const daysLeft = Math.max(length - day, 0);

  return (
    <div className="flex min-h-[124px] items-center gap-4 rounded-md bg-elevation-surface-raised p-4 shadow-xs">
      <svg width={72} height={72} viewBox="0 0 72 72" className="shrink-0">
        <circle
          cx={36}
          cy={36}
          r={radius}
          fill="none"
          stroke="var(--color-background-neutral)"
          strokeWidth={stroke}
        />
        <circle
          cx={36}
          cy={36}
          r={radius}
          fill="none"
          stroke="var(--color-icon-brand)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 36 36)"
        />
        <text
          x={36}
          y={40}
          fontSize={14}
          fontWeight={600}
          fill="var(--color-font)"
          textAnchor="middle"
        >
          {pct}%
        </text>
      </svg>
      <div className="min-w-0">
        <p className="font-primary-light text-2xs text-font-subtlest">
          Sprint goal
        </p>
        <p className="mt-0.5 font-primary-bold text-lg text-font">
          {completedPoints} / {goalPoints} pts
        </p>
        <p className="mt-1 font-primary-light text-2xs text-font-subtlest">
          {daysLeft} days remaining · Day {day} of {length}
        </p>
      </div>
    </div>
  );
};

interface Props {
  sprint: SprintInfo;
}
