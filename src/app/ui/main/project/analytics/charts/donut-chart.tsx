import { AccentColorToken } from "@domain/analytics";
import { accentColorVar } from "../accent-color";

export const DonutChart = ({
  data,
  size = 160,
  thickness = 22,
  centerLabel = "issues",
}: Props): JSX.Element => {
  const r = size / 2;
  const total = data.reduce((sum, d) => sum + d.count, 0);
  let acc = 0;
  const segments = data.map((d) => {
    const start = acc / total;
    acc += d.count;
    const end = acc / total;
    return { ...d, start, end };
  });

  const arc = (start: number, end: number, outer: number, inner: number): string => {
    const a0 = start * 2 * Math.PI - Math.PI / 2;
    const a1 = end * 2 * Math.PI - Math.PI / 2;
    const large = end - start > 0.5 ? 1 : 0;
    const x0 = r + Math.cos(a0) * outer;
    const y0 = r + Math.sin(a0) * outer;
    const x1 = r + Math.cos(a1) * outer;
    const y1 = r + Math.sin(a1) * outer;
    const xi1 = r + Math.cos(a1) * inner;
    const yi1 = r + Math.sin(a1) * inner;
    const xi0 = r + Math.cos(a0) * inner;
    const yi0 = r + Math.sin(a0) * inner;

    return `M ${x0} ${y0} A ${outer} ${outer} 0 ${large} 1 ${x1} ${y1} L ${xi1} ${yi1} A ${inner} ${inner} 0 ${large} 0 ${xi0} ${yi0} Z`;
  };

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="block">
      {segments.map((s, i) => (
        <path key={i} d={arc(s.start, s.end, r - 1, r - thickness)} fill={accentColorVar(s.colorToken)} />
      ))}
      <text
        x={r}
        y={r - 2}
        fontSize={22}
        fontWeight={600}
        fill="var(--color-font)"
        textAnchor="middle"
      >
        {total}
      </text>
      <text
        x={r}
        y={r + 16}
        fontSize={11}
        fill="var(--color-font-subtlest)"
        textAnchor="middle"
      >
        {centerLabel}
      </text>
    </svg>
  );
};

interface DonutDatum {
  count: number;
  colorToken: AccentColorToken;
}

interface Props {
  data: DonutDatum[];
  size?: number;
  thickness?: number;
  centerLabel?: string;
}
