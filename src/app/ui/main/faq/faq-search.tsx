import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const FaqSearch = ({
  query,
  setQuery,
  matchCount,
}: FaqSearchProps): JSX.Element => {
  const clearSearch = () => setQuery("");
  const isSearching = query.trim().length > 0;

  return (
    <div>
      <div className="relative w-full">
        <input
          type="text"
          name="faq-search"
          value={query}
          placeholder="Search questions…"
          aria-label="Search questions"
          onChange={(e) => setQuery(e.target.value)}
          className={cx(
            "h-[44px] w-full rounded border-none bg-background-input py-2 pl-4 pr-10",
            "outline outline-2 outline-border-input duration-200 ease-in-out",
            "hover:bg-background-input-hovered",
            "placeholder:font-primary-light placeholder:text-sm placeholder:text-font-subtlest",
            "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
          )}
        />
        <span className="absolute right-0 top-1/2 -translate-y-1/2 px-3">
          {isSearching ? (
            <button
              onMouseDown={clearSearch}
              className="flex cursor-pointer items-center justify-center rounded text-icon hover:bg-background-neutral"
              aria-label="Clear search"
            >
              <IoCloseOutline size={20} />
            </button>
          ) : (
            <span className="flex items-center justify-center text-icon-subtle">
              <BiSearch size={18} />
            </span>
          )}
        </span>
      </div>
      {isSearching && (
        <p className="mt-2 font-primary-light text-xs text-font-subtlest">
          {matchCount} {matchCount === 1 ? "result" : "results"} for &quot;
          {query}&quot;
        </p>
      )}
    </div>
  );
};

interface FaqSearchProps {
  query: string;
  setQuery: (query: string) => void;
  matchCount: number;
}
