import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { Project } from "@domain/project";
import { CategoryType } from "@domain/category";

// ── Status color palette ──────────────────────────────────────────────────────
const STATUS_COLORS: Record<CategoryType, string> = {
  TODO: "#6B7280",
  IN_PROGRESS: "#3B82F6",
  DONE: "#22C55E",
};

const STATUS_LABELS: Record<CategoryType, string> = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getStatusData(project: Project) {
  return project.categories.map((cat) => ({
    name: STATUS_LABELS[cat.type] ?? cat.name,
    value: cat.issues.length,
    color: STATUS_COLORS[cat.type] ?? "#9CA3AF",
    type: cat.type,
  }));
}

function getWorkloadData(project: Project) {
  const counts: Record<string, { name: string; issues: number; color: string }> = {};

  for (const category of project.categories) {
    for (const issue of category.issues) {
      const id = issue.asignee.id;
      if (!counts[id]) {
        counts[id] = {
          name: issue.asignee.name,
          issues: 0,
          color: issue.asignee.color,
        };
      }
      counts[id].issues += 1;
    }
  }

  return Object.values(counts).sort((a, b) => b.issues - a.issues);
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
}

const StatCard = ({ label, value, sub, color }: StatCardProps) => (
  <div
    className="flex flex-col gap-1 rounded-lg border border-border p-5 shadow-sm"
    style={{ backgroundColor: "var(--color-elevation-surface-raised)" }}
  >
    <span className="text-xs font-primary text-font-subtlest uppercase tracking-wider">
      {label}
    </span>
    <span
      className="text-4xl font-primary-bold"
      style={{ color: color ?? "var(--color-font)" }}
    >
      {value}
    </span>
    {sub && (
      <span className="text-xs font-primary text-font-subtle">{sub}</span>
    )}
  </div>
);

// ── Chart Card wrapper ────────────────────────────────────────────────────────
interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard = ({ title, children }: ChartCardProps) => (
  <div
    className="flex flex-col gap-4 rounded-lg border border-border p-5 shadow-sm"
    style={{ backgroundColor: "var(--color-elevation-surface-raised)" }}
  >
    <h3 className="text-sm font-primary text-font-subtlest uppercase tracking-wider">
      {title}
    </h3>
    {children}
  </div>
);

// ── Custom tooltip ────────────────────────────────────────────────────────────
interface TooltipPayloadItem {
  name: string;
  value: number;
  payload?: { color?: string };
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-md border border-border px-3 py-2 text-xs shadow-sm"
      style={{ backgroundColor: "var(--color-elevation-surface-overlay)" }}
    >
      {label && (
        <p className="mb-1 font-primary text-font-subtlest">{label}</p>
      )}
      {payload.map((entry, i) => (
        <p key={i} className="font-primary" style={{ color: entry.payload?.color ?? "var(--color-font)" }}>
          {entry.name}: <strong>{entry.value}</strong>
        </p>
      ))}
    </div>
  );
};

// ── Main View ─────────────────────────────────────────────────────────────────
interface Props {
  project: Project;
}

export const AnalyticsView = ({ project }: Props): JSX.Element => {
  const statusData = getStatusData(project);
  const workloadData = getWorkloadData(project);

  const totalIssues = statusData.reduce((sum, d) => sum + d.value, 0);
  const doneCount = statusData.find((d) => d.type === "DONE")?.value ?? 0;
  const donePercent =
    totalIssues > 0 ? Math.round((doneCount / totalIssues) * 100) : 0;
  const memberCount = project.users.length;

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto px-1 py-6">
      {/* ── Page title ── */}
      <div>
        <h2 className="text-xl font-primary-bold text-font">
          {project.name} — Analytics
        </h2>
        <p className="mt-1 text-xs font-primary text-font-subtlest">
          Project health at a glance
        </p>
      </div>

      {/* ── Summary stat cards ── */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Total Issues" value={totalIssues} />
        <StatCard
          label="Done"
          value={`${donePercent}%`}
          sub={`${doneCount} of ${totalIssues} issues complete`}
          color={STATUS_COLORS.DONE}
        />
        <StatCard label="Team Members" value={memberCount} />
      </div>

      {/* ── Charts grid ── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Chart 1: Donut — Issues by Status */}
        <ChartCard title="Issues by Status">
          {totalIssues === 0 ? (
            <p className="py-8 text-center text-sm text-font-subtlest">
              No issues yet
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={72}
                  outerRadius={108}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  formatter={(value) => (
                    <span style={{ fontSize: 12, color: "var(--color-font)" }}>
                      {value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          )}
        </ChartCard>

        {/* Chart 2: Horizontal bar — Issues per Status */}
        <ChartCard title="Issues per Status">
          {totalIssues === 0 ? (
            <p className="py-8 text-center text-sm text-font-subtlest">
              No issues yet
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={260}>
              <BarChart
                data={statusData}
                layout="vertical"
                margin={{ top: 4, right: 24, left: 16, bottom: 4 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="var(--color-border)"
                />
                <XAxis
                  type="number"
                  allowDecimals={false}
                  tick={{ fontSize: 11, fill: "var(--color-font-subtlest)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={84}
                  tick={{ fontSize: 11, fill: "var(--color-font)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "var(--color-background-neutral)" }} />
                <Bar dataKey="value" name="Issues" radius={[0, 4, 4, 0]}>
                  {statusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartCard>

        {/* Chart 3: Workload per Member — full width */}
        <ChartCard title="Workload per Member">
          {workloadData.length === 0 ? (
            <p className="py-8 text-center text-sm text-font-subtlest">
              No assignments yet
            </p>
          ) : (
            <ResponsiveContainer width="100%" height={Math.max(200, workloadData.length * 52)}>
              <BarChart
                data={workloadData}
                layout="vertical"
                margin={{ top: 4, right: 24, left: 16, bottom: 4 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="var(--color-border)"
                />
                <XAxis
                  type="number"
                  allowDecimals={false}
                  tick={{ fontSize: 11, fill: "var(--color-font-subtlest)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={100}
                  tick={{ fontSize: 11, fill: "var(--color-font)" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "var(--color-background-neutral)" }}
                />
                <Bar dataKey="issues" name="Issues Assigned" radius={[0, 4, 4, 0]}>
                  {workloadData.map((entry, index) => (
                    <Cell key={index} fill={entry.color || "#3B82F6"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}
        </ChartCard>
      </div>
    </div>
  );
};
