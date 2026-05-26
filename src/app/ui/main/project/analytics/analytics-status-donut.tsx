import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const COLORS = {
  TODO: "#0052CC",
  IN_PROGRESS: "#E2B203",
  DONE: "#006644",
};

export const StatusDonutChart = (props: Props): JSX.Element => {
  const { todoCount, inProgressCount, doneCount, total } = props;

  const completionRate = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  const data = [
    { name: "To Do", value: todoCount, color: COLORS.TODO },
    { name: "In Progress", value: inProgressCount, color: COLORS.IN_PROGRESS },
    { name: "Done", value: doneCount, color: COLORS.DONE },
  ];

  return (
    <div className="rounded bg-elevation-surface-raised p-4 shadow-xs">
      <h3 className="mb-4 font-primary-bold text-sm text-font">Status Distribution</h3>
      <div className="relative">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              formatter={(value, entry: any) => (
                <span className="font-primary text-xs text-font">
                  {value}: {entry.payload.value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center label showing completion percentage */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="font-primary-black text-2xl text-font">{completionRate}%</div>
          <div className="font-primary-light text-2xs text-font-subtle">complete</div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  todoCount: number;
  inProgressCount: number;
  doneCount: number;
  total: number;
}
