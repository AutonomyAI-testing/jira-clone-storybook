import { ChangeEvent } from "react";
import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const FaqSearchBar = ({
  search,
  setSearch,
  resultsCount,
}: Props): JSX.Element => {
  const clearSearch = () => setSearch("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-[520px]">
      <div className="relative w-full">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-icon-subtle">
          <BiSearch size={18} />
        </span>
        <input
          type="text"
          name="faq-search"
          value={search}
          placeholder="Search questions and answers"
          onChange={handleChange}
          aria-label="Search FAQ"
          className={cx(
            "h-[44px] w-full rounded border-none bg-background-input py-2 pl-10 pr-10 text-font hover:bg-background-input-hovered",
            "outline outline-2 outline-border-input duration-200 ease-in-out",
            "placeholder:font-primary-light placeholder:text-sm placeholder:text-font-subtlest",
            "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
          )}
        />
        {search.length > 0 && (
          <button
            onMouseDown={clearSearch}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded border-none bg-transparent text-icon hover:bg-background-neutral"
          >
            <IoCloseOutline size={18} />
          </button>
        )}
      </div>
      {search.length > 0 && (
        <p className="mt-2 font-primary-light text-xs text-font-subtlest">
          {resultsCount} {resultsCount === 1 ? "result" : "results"} found
        </p>
      )}
    </div>
  );
};

interface Props {
  search: string;
  setSearch: (value: string) => void;
  resultsCount: number;
}
