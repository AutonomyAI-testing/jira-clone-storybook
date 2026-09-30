import { BurndownSeries } from "@domain/analytics";

export const BurndownChart = ({
  burndown,
  height = 220,
}: Props): JSX.Element => {
  const w = 600;
  const h = height;
  const padL = 34;
  const padR = 16;
  const padT = 12;
  const padB = 28;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const total = burndown.ideal[0];
  const days = burndown.days;
  const stepX = innerW / days;
  const yScale = (v: number) => padT + innerH - (v / total) * innerH;
  const xScale = (i: number) => padL + stepX * i;

  const idealPath = burndown.ideal
    .map((v, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(v)}`)
    .join(" ");

  const actualPts = burndown.actual
    .map((v, i) => (v == null ? null : { x: xScale(i), y: yScale(v) }))
    .filter((p): p is { x: number; y: number } => p !== null);
  const actualPath = actualPts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaPath = actualPts.length
    ? `${actualPath} L ${actualPts[actualPts.length - 1].x} ${padT + innerH} L ${actualPts[0].x} ${padT + innerH} Z`
    : "";
  const lastPoint = actualPts[actualPts.length - 1];

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="none"
      className="block"
    >
      <defs>
        <linearGradient id="burndown-area" x1="0" x2="0" y1="0" y2="1">
          <stop
            offset="0%"
            stopColor="var(--color-icon-brand)"
            stopOpacity={0.28}
          />
          <stop
            offset="100%"
            stopColor="var(--color-icon-brand)"
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      {[0, 0.25, 0.5, 0.75, 1].map((t) => {
        const y = padT + innerH * t;
        const v = Math.round(total * (1 - t));
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
              {v}
            </text>
          </g>
        );
      })}
      {Array.from({ length: days + 1 }, (_, i) => i)
        .filter((i) => i % 2 === 0)
        .map((i) => (
          <text
            key={i}
            x={xScale(i)}
            y={h - 10}
            fontSize={10}
            fill="var(--color-font-subtlest)"
            textAnchor="middle"
          >
            D{i}
          </text>
        ))}
      <path
        d={idealPath}
        stroke="var(--color-border-bold)"
        strokeWidth={1.5}
        strokeDasharray="4 4"
        fill="none"
      />
      <path d={areaPath} fill="url(#burndown-area)" />
      <path
        d={actualPath}
        stroke="var(--color-icon-brand)"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {actualPts.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === actualPts.length - 1 ? 4 : 2.5}
          fill="var(--color-icon-brand)"
        />
      ))}
      {lastPoint && (
        <>
          <line
            x1={lastPoint.x}
            x2={lastPoint.x}
            y1={padT}
            y2={padT + innerH}
            stroke="var(--color-border-bold)"
            strokeDasharray="2 4"
          />
          <text
            x={lastPoint.x + 6}
            y={padT + 12}
            fontSize={10}
            fill="var(--color-font-subtlest)"
          >
            Today
          </text>
        </>
      )}
    </svg>
  );
};

interface Props {
  burndown: BurndownSeries;
  height?: number;
}
