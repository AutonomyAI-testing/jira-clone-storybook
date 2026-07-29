import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const STATUS_COLORS = {
  todo: "#0052CC",
  inProgress: "#E2B203",
  done: "#006644",
};

export const AssigneeWorkloadChart = (props: Props): JSX.Element => {
  const { data } = props;

  if (data.length === 0) {
    return (
      <div className="rounded bg-elevation-surface-raised p-4 shadow-xs">
        <h3 className="mb-4 font-primary-bold text-sm text-font">Assignee Workload</h3>
        <div className="flex h-40 items-center justify-center">
          <p className="font-primary-light text-sm text-font-subtle">
            No assignees with issues yet
          </p>
        </div>
      </div>
    );
  }

  const chartHeight = Math.max(200, data.length * 50);

  return (
    <div className="rounded bg-elevation-surface-raised p-4 shadow-xs">
      <h3 className="mb-4 font-primary-bold text-sm text-font">Assignee Workload</h3>
      <ResponsiveContainer width="100%" height={chartHeight}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.3} />
          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fill: "var(--color-font-subtle)", fontSize: 12 }}
            axisLine={{ stroke: "var(--color-border)" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "var(--color-font-subtle)", fontSize: 12 }}
            axisLine={{ stroke: "var(--color-border)" }}
            width={120}
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
          <Legend
            wrapperStyle={{ fontSize: "12px" }}
            formatter={(value) => {
              const labels: Record<string, string> = {
                todo: "To Do",
                inProgress: "In Progress",
                done: "Done",
              };
              return labels[value] || value;
            }}
          />
          <Bar dataKey="todo" stackId="a" fill={STATUS_COLORS.todo} radius={[0, 4, 4, 0]} />
          <Bar
            dataKey="inProgress"
            stackId="a"
            fill={STATUS_COLORS.inProgress}
            radius={[0, 4, 4, 0]}
          />
          <Bar dataKey="done" stackId="a" fill={STATUS_COLORS.done} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface AssigneeDataItem {
  name: string;
  todo: number;
  inProgress: number;
  done: number;
}

interface Props {
  data: AssigneeDataItem[];
}
