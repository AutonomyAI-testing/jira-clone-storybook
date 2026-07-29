import { cx } from "classix";

export const AnalyticsStatCards = (props: Props): JSX.Element => {
  const { total, todoCount, inProgressCount, doneCount } = props;

  const completionRate = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Total Issues */}
      <div
        className={cx(
          "rounded border-l-4 border-border-brand bg-elevation-surface-raised p-4 shadow-xs"
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="font-primary-light text-2xs text-font-subtlest">Total Issues</div>
          <div className="font-primary-black text-2xl text-font">{total}</div>
        </div>
      </div>

      {/* To Do */}
      <div
        className={cx(
          "rounded border-l-4 border-border-brand bg-elevation-surface-raised p-4 shadow-xs"
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="font-primary-light text-2xs text-font-subtlest">To Do</div>
          <div className="flex items-baseline gap-2">
            <div className="font-primary-black text-2xl text-font">{todoCount}</div>
            {total > 0 && (
              <div className="font-primary-light text-xs text-font-subtle">
                {Math.round((todoCount / total) * 100)}%
              </div>
            )}
          </div>
        </div>
      </div>

      {/* In Progress */}
      <div
        className={cx(
          "rounded border-l-4 border-border-warning bg-elevation-surface-raised p-4 shadow-xs"
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="font-primary-light text-2xs text-font-subtlest">In Progress</div>
          <div className="flex items-baseline gap-2">
            <div className="font-primary-black text-2xl text-font">{inProgressCount}</div>
            {total > 0 && (
              <div className="font-primary-light text-xs text-font-subtle">
                {Math.round((inProgressCount / total) * 100)}%
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Done */}
      <div
        className={cx(
          "rounded border-l-4 border-border-success bg-elevation-surface-raised p-4 shadow-xs"
        )}
      >
        <div className="flex flex-col gap-1">
          <div className="font-primary-light text-2xs text-font-subtlest">Done</div>
          <div className="flex items-baseline gap-2">
            <div className="font-primary-black text-2xl text-font">{doneCount}</div>
            {total > 0 && (
              <div className="font-primary-light text-xs text-font-subtle">
                {Math.round((doneCount / total) * 100)}%
              </div>
            )}
          </div>
          {total > 0 && (
            <div className="mt-1 font-primary-bold text-xs text-font-success">
              {completionRate}% completion
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface Props {
  total: number;
  todoCount: number;
  inProgressCount: number;
  doneCount: number;
}
