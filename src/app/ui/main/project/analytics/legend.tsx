import { AccentColorToken } from "@domain/analytics";
import { accentColorVar } from "./accent-color";

export const Legend = ({ items }: Props): JSX.Element => (
  <div className="flex flex-wrap items-center gap-3.5">
    {items.map((item) => (
      <span key={item.label} className="flex items-center gap-1.5">
        <span
          className="inline-block h-2.5 w-2.5 rounded-sm"
          style={{ backgroundColor: accentColorVar(item.colorToken) }}
        />
        <span className="font-primary-light text-2xs text-font-subtlest">
          {item.label}
        </span>
      </span>
    ))}
  </div>
);

interface LegendItem {
  label: string;
  colorToken: AccentColorToken;
}

interface Props {
  items: LegendItem[];
}
