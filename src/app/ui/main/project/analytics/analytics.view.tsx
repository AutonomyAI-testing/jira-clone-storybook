import { useEffect } from "react";
import { toast } from "react-toastify";
import { ImStatsDots } from "react-icons/im";

export const AnalyticsView = (): JSX.Element => {
  useEffect(() => {
    toast.info("This section is not available yet.");
  }, []);

  return (
    <div className="flex flex-grow flex-col items-center justify-center text-font-subtlest">
      <ImStatsDots size={36} />
      <p className="mt-4 font-primary-light text-sm">Coming soon</p>
    </div>
  );
};
