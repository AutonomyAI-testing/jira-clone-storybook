import { CycleTimePoint } from "@domain/analytics";

const OUTLIER_THRESHOLD_DAYS = 6;

export const CycleScatterChart = ({
  data,
  height = 200,
}: Props): JSX.Element => {
  const w = 600;
  const h = height;
  const padL = 30;
  const padR = 8;
  const padT = 10;
  const padB = 24;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const maxX = Math.max(...data.map((d) => d.issueIndex));
  const maxY = Math.max(...data.map((d) => d.days)) * 1.1;
  const xScale = (v: number) => padL + (v / maxX) * innerW;
  const yScale = (v: number) => padT + innerH - (v / maxY) * innerH;
  const sortedDays = [...data.map((d) => d.days)].sort((a, b) => a - b);
  const median = sortedDays[Math.floor(data.length / 2)];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="none"
      className="block"
    >
      {[0, 0.5, 1].map((t) => {
        const y = padT + innerH * t;
        const v = (maxY * (1 - t)).toFixed(0);
        return (
          <g key={t}>
            <line
              x1={padL}
              x2={w - padR}
              y1={y}
              y2={y}
              stroke="var(--color-border)"
            />
            <text
              x={padL - 6}
              y={y + 3}
              fontSize={10}
              fill="var(--color-font-subtlest)"
              textAnchor="end"
            >
              {v}d
            </text>
          </g>
        );
      })}
      <line
        x1={padL}
        x2={w - padR}
        y1={yScale(median)}
        y2={yScale(median)}
        stroke="var(--color-icon-brand)"
        strokeDasharray="3 4"
        opacity={0.6}
      />
      <text
        x={w - padR - 4}
        y={yScale(median) - 4}
        fontSize={10}
        fill="var(--color-icon-brand)"
        textAnchor="end"
      >
        median {median}d
      </text>
      {data.map((d, i) => {
        const isOutlier = d.days > OUTLIER_THRESHOLD_DAYS;
        return (
          <circle
            key={i}
            cx={xScale(d.issueIndex)}
            cy={yScale(d.days)}
            r={isOutlier ? 5 : 3.5}
            fill={
              isOutlier
                ? "var(--color-icon-accent-red)"
                : "var(--color-icon-brand)"
            }
            fillOpacity={0.85}
          />
        );
      })}
    </svg>
  );
};

interface Props {
  data: CycleTimePoint[];
  height?: number;
}
