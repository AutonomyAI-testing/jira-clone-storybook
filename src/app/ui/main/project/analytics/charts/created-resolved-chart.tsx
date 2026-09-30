import { CreatedResolvedPoint } from "@domain/analytics";

export const CreatedResolvedChart = ({
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
  const max = Math.max(...data.flatMap((d) => [d.created, d.resolved])) * 1.2;
  const stepX = innerW / (data.length - 1);
  const xScale = (i: number) => padL + stepX * i;
  const yScale = (v: number) => padT + innerH - (v / max) * innerH;
  const path = (key: "created" | "resolved") =>
    data
      .map((d, i) => `${i === 0 ? "M" : "L"} ${xScale(i)} ${yScale(d[key])}`)
      .join(" ");
  const area = (key: "created" | "resolved") =>
    `${path(key)} L ${xScale(data.length - 1)} ${padT + innerH} L ${xScale(0)} ${padT + innerH} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="none"
      className="block"
    >
      <defs>
        <linearGradient id="cr-created" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-icon-brand)" stopOpacity={0.22} />
          <stop offset="100%" stopColor="var(--color-icon-brand)" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="cr-resolved" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-icon-accent-green)" stopOpacity={0.22} />
          <stop offset="100%" stopColor="var(--color-icon-accent-green)" stopOpacity={0} />
        </linearGradient>
      </defs>
      {[0, 0.5, 1].map((t) => (
        <line
          key={t}
          x1={padL}
          x2={w - padR}
          y1={padT + innerH * t}
          y2={padT + innerH * t}
          stroke="var(--color-border)"
        />
      ))}
      <path d={area("created")} fill="url(#cr-created)" />
      <path d={area("resolved")} fill="url(#cr-resolved)" />
      <path
        d={path("created")}
        stroke="var(--color-icon-brand)"
        strokeWidth={2}
        fill="none"
        strokeLinejoin="round"
      />
      <path
        d={path("resolved")}
        stroke="var(--color-icon-accent-green)"
        strokeWidth={2}
        fill="none"
        strokeLinejoin="round"
      />
      {data.map((d, i) => (
        <text
          key={d.week}
          x={xScale(i)}
          y={h - 8}
          fontSize={10}
          fill="var(--color-font-subtlest)"
          textAnchor="middle"
        >
          {d.week}
        </text>
      ))}
    </svg>
  );
};

interface Props {
  data: CreatedResolvedPoint[];
  height?: number;
}
