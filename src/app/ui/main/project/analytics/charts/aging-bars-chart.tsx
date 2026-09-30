import { AgingBucket } from "@domain/analytics";
import { accentColorVar } from "../accent-color";

export const AgingBarsChart = ({ data }: Props): JSX.Element => {
  const max = Math.max(...data.map((d) => d.count));

  return (
    <div className="flex flex-col gap-2.5">
      {data.map((bucket) => (
        <div
          key={bucket.bucket}
          className="grid grid-cols-[64px_1fr_28px] items-center gap-2.5"
        >
          <p className="font-primary-light text-2xs text-font-subtlest">
            {bucket.bucket}
          </p>
          <div className="h-4 overflow-hidden rounded bg-elevation-surface-sunken">
            <div
              className="h-full"
              style={{
                width: `${(bucket.count / max) * 100}%`,
                backgroundColor: accentColorVar(bucket.colorToken),
              }}
            />
          </div>
          <p className="text-right font-primary-light text-2xs text-font">
            {bucket.count}
          </p>
        </div>
      ))}
    </div>
  );
};

interface Props {
  data: AgingBucket[];
}
