import cx from "classix";
import { User } from "@domain/user";
import { WorkloadRow } from "@domain/analytics";
import { UserAvatar } from "@app/components/user-avatar";
import { accentColorVar } from "./accent-color";

const SEGMENT_COLORS = {
  done: accentColorVar("green"),
  review: accentColorVar("blue"),
  inProgress: accentColorVar("yellow"),
  todo: accentColorVar("grey"),
};

export const WorkloadList = ({ workload, users }: Props): JSX.Element => {
  const max = Math.max(
    ...workload.map((row) => row.todo + row.inProgress + row.review + row.done)
  );

  return (
    <div className="flex flex-col gap-3">
      {workload.map((row) => {
        const user = users.find((u) => u.id === row.userId);
        const total = row.todo + row.inProgress + row.review + row.done;
        const pct = (n: number) => (n / max) * 100;
        const overloaded = total > row.capacity;

        return (
          <div
            key={row.userId}
            className="grid grid-cols-[140px_1fr_56px] items-center gap-3"
          >
            <div className="flex min-w-0 items-center gap-2">
              {user && <UserAvatar {...user} size={24} />}
              <p className="truncate font-primary-light text-xs text-font">
                {user?.name || "Unassigned"}
              </p>
            </div>
            <div className="flex h-[22px] overflow-hidden rounded border border-border bg-elevation-surface-sunken">
              <div
                style={{
                  width: `${pct(row.done)}%`,
                  backgroundColor: SEGMENT_COLORS.done,
                }}
              />
              <div
                style={{
                  width: `${pct(row.review)}%`,
                  backgroundColor: SEGMENT_COLORS.review,
                }}
              />
              <div
                style={{
                  width: `${pct(row.inProgress)}%`,
                  backgroundColor: SEGMENT_COLORS.inProgress,
                }}
              />
              <div
                style={{
                  width: `${pct(row.todo)}%`,
                  backgroundColor: SEGMENT_COLORS.todo,
                }}
              />
            </div>
            <p
              className={cx(
                "text-right font-primary-light text-xs",
                overloaded ? "text-font-danger" : "text-font-subtlest"
              )}
            >
              {total}/{row.capacity}
            </p>
          </div>
        );
      })}
    </div>
  );
};

interface Props {
  workload: WorkloadRow[];
  users: User[];
}
