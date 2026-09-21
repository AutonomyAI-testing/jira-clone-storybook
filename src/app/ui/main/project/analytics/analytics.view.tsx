import { ImStatsDots } from "react-icons/im";

export const AnalyticsView = (): JSX.Element => (
  <div className="flex h-full flex-col items-center justify-center px-6 text-center">
    <ImStatsDots size={48} aria-hidden="true" className="text-icon-subtle" />
    <p className="mt-5 font-primary-black text-2xl text-font">
      Analytics are on the way
    </p>
    <p className="mt-2 max-w-[400px] font-primary-light text-sm leading-6 text-font-subtlest">
      This section isn&apos;t implemented yet. Head to the board to keep working
      on this project.
    </p>
  </div>
);
