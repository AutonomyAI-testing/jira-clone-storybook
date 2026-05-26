import { MdInsertChart } from "react-icons/md";

export const AnalyticsEmptyState = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 rounded-full bg-elevation-surface-sunken p-6">
        <MdInsertChart className="text-font-subtlest" size={48} />
      </div>
      <h3 className="mb-2 font-primary-bold text-lg text-font">No data yet</h3>
      <p className="max-w-md font-primary-light text-sm text-font-subtle">
        Create some issues on the board to start seeing analytics here.
      </p>
    </div>
  );
};
