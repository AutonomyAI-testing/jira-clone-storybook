import { CumulativeFlowPoint } from "@domain/analytics";
import { accentColorVar } from "../accent-color";

const SERIES = [
  { key: "done" as const, colorToken: "green" as const },
  { key: "review" as const, colorToken: "blue" as const },
  { key: "inProgress" as const, colorToken: "yellow" as const },
  { key: "todo" as const, colorToken: "grey" as const },
];

export const CumulativeFlowChart = ({
  data,
  height = 220,
}: Props): JSX.Element => {
  const w = 600;
  const h = height;
  const padL = 34;
  const padR = 8;
  const padT = 12;
  const padB = 28;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const days = data.length - 1;
  const stepX = innerW / days;
  const totals = data.map((d) => d.todo + d.inProgress + d.review + d.done);
  const max = Math.max(...totals) * 1.05;
  const yScale = (v: number) => padT + innerH - (v / max) * innerH;
  const xScale = (i: number) => padL + stepX * i;

  const pathFor = (idx: number): string => {
    const top = data.map((d, i) => {
      let acc = 0;
      for (let j = 0; j <= idx; j++) acc += d[SERIES[j].key];
      return { x: xScale(i), y: yScale(acc) };
    });
    const bottom = data
      .map((d, i) => {
        let acc = 0;
        for (let j = 0; j < idx; j++) acc += d[SERIES[j].key];
        return { x: xScale(i), y: yScale(acc) };
      })
      .reverse();

    return (
      [...top, ...bottom]
        .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
        .join(" ") + " Z"
    );
  };

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="none"
      className="block"
    >
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
      {SERIES.map((series, idx) => (
        <path
          key={series.key}
          d={pathFor(idx)}
          fill={accentColorVar(series.colorToken)}
          opacity={0.85}
        />
      ))}
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
    </svg>
  );
};

interface Props {
  data: CumulativeFlowPoint[];
  height?: number;
}
