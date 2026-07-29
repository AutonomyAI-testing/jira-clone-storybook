import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const PRIORITY_COLORS = {
  Low: "#36B37E",
  Medium: "#E2B203",
  High: "#DE350B",
};

export const PriorityBarChart = (props: Props): JSX.Element => {
  const { lowCount, mediumCount, highCount } = props;

  const data = [
    { name: "Low", value: lowCount, color: PRIORITY_COLORS.Low },
    { name: "Medium", value: mediumCount, color: PRIORITY_COLORS.Medium },
    { name: "High", value: highCount, color: PRIORITY_COLORS.High },
  ];

  return (
    <div className="rounded bg-elevation-surface-raised p-4 shadow-xs">
      <h3 className="mb-4 font-primary-bold text-sm text-font">Priority Breakdown</h3>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.3} />
          <XAxis
            dataKey="name"
            tick={{ fill: "var(--color-font-subtle)", fontSize: 12 }}
            axisLine={{ stroke: "var(--color-border)" }}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "var(--color-font-subtle)", fontSize: 12 }}
            axisLine={{ stroke: "var(--color-border)" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-elevation-surface-overlay)",
              border: "1px solid var(--color-border)",
              borderRadius: "4px",
              fontSize: "12px",
            }}
            cursor={{ fill: "var(--color-background-brand-subtlest)" }}
          />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface Props {
  lowCount: number;
  mediumCount: number;
  highCount: number;
}
