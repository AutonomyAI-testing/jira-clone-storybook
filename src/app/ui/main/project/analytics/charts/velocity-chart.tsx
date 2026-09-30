import { useState } from "react";
import { VelocityPoint } from "@domain/analytics";

export const VelocityChart = ({
  velocity,
  height = 220,
}: Props): JSX.Element => {
  const w = 600;
  const h = height;
  const padL = 34;
  const padR = 8;
  const padT = 10;
  const padB = 28;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const max = Math.max(...velocity.flatMap((d) => [d.committed, d.completed])) * 1.15;
  const groupW = innerW / velocity.length;
  const barW = (groupW - 14) / 2;
  const [hover, setHover] = useState<number | null>(null);

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width="100%"
      preserveAspectRatio="none"
      className="block"
    >
      {[0, 0.25, 0.5, 0.75, 1].map((t) => {
        const y = padT + innerH * t;
        const val = Math.round(max - max * t);
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
              {val}
            </text>
          </g>
        );
      })}
      {velocity.map((d, i) => {
        const gx = padL + groupW * i + 7;
        const committedH = (d.committed / max) * innerH;
        const completedH = (d.completed / max) * innerH;
        const isLast = i === velocity.length - 1;

        return (
          <g
            key={d.sprint}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(null)}
          >
            <rect
              x={gx}
              y={padT + innerH - committedH}
              width={barW}
              height={committedH}
              rx={3}
              fill="var(--color-background-neutral)"
            />
            <rect
              x={gx + barW + 4}
              y={padT + innerH - completedH}
              width={barW}
              height={completedH}
              rx={3}
              fill="var(--color-icon-brand)"
              opacity={isLast ? 0.5 : 1}
            />
            <text
              x={gx + barW + 2}
              y={h - 10}
              fontSize={10}
              fill={
                hover === i
                  ? "var(--color-font)"
                  : "var(--color-font-subtlest)"
              }
              textAnchor="middle"
            >
              {d.sprint}
            </text>
            {hover === i && (
              <text
                x={gx + barW + 2}
                y={padT + innerH - Math.max(committedH, completedH) - 6}
                fontSize={10}
                fill="var(--color-font)"
                textAnchor="middle"
              >
                {d.completed}/{d.committed}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

interface Props {
  velocity: VelocityPoint[];
  height?: number;
}
