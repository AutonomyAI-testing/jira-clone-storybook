import { RxValueNone } from "react-icons/rx";

export const FaqEmptyState = ({ search, onClear }: Props): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center text-font-subtlest">
      <RxValueNone size={36} />
      <p className="font-primary text-sm">
        No questions match &quot;{search}&quot;.
      </p>
      <button
        onClick={onClear}
        className="cursor-pointer rounded border-none bg-transparent font-primary text-sm text-link hover:underline"
      >
        Clear search and browse all categories
      </button>
    </div>
  );
};

interface Props {
  search: string;
  onClear: () => void;
}
