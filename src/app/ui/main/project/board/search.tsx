import React, { useState, useRef, useEffect } from "react";
import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { useProjectStore } from "@app/ui/main/project";

export const Search = (): JSX.Element => {
  const { search, setSearch, recentIssues } = useProjectStore();
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const showSuggestions =
    isFocused && search.length === 0 && recentIssues.length > 0;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = () => setSearch("");
  const renderIcon = (): JSX.Element => {
    return search.length === 0 ? (
      <SearchIcon />
    ) : (
      <ClearIcon onClick={clearSearch} />
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const pickSuggestion = (title: string): void => {
    setSearch(title);
    setIsFocused(false);
  };

  return (
    <div className="relative w-fit" ref={containerRef}>
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Filter issues"
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        className={cx(
          "h-[40px] w-[120px] rounded border-none bg-background-input py-2 hover:bg-background-input-hovered",
          "border-1 box-border pl-2 pr-8 outline outline-2 outline-border-input duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "placeholder:duration-200 placeholder:ease-in-out focus:w-[190px]",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )}
      />
      <span className="absolute right-0 top-1/2 -translate-y-1/2 px-2">
        {renderIcon()}
      </span>
      {showSuggestions && (
        <ul
          className={cx(
            "absolute left-0 top-full z-20 mt-1 w-[190px] rounded py-1",
            "bg-elevation-surface shadow-overlay"
          )}
          role="listbox"
          aria-label="Recently viewed issues"
        >
          <li className="px-3 pb-1 pt-2 font-primary-light text-2xs uppercase tracking-wide text-font-subtlest">
            Recently viewed
          </li>
          {recentIssues.map((issue) => (
            <li key={issue.id}>
              <button
                type="button"
                // onMouseDown runs before the input blur
                onMouseDown={() => pickSuggestion(issue.title)}
                className={cx(
                  "w-full cursor-pointer truncate px-3 py-1.5 text-left",
                  "font-primary text-xs text-font hover:bg-background-neutral"
                )}
                role="option"
                aria-selected={false}
              >
                {issue.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const iconBaseClass = cx(
  "flex border-none justify-center items-center font-icon z-10"
);

const SearchIcon = (): JSX.Element => (
  <span className={iconBaseClass}>
    <BiSearch size={16} />
  </span>
);

const ClearIcon = ({ onClick }: ClearIconProps): JSX.Element => (
  // onMouseDown is needed because blur (unfocus) happens
  // before 'click' event, but not before 'onMouseDown'
  <button
    onMouseDown={onClick}
    className={cx(
      iconBaseClass,
      "cursor-pointer rounded hover:bg-background-neutral"
    )}
    aria-label="Clear search"
  >
    <IoCloseOutline size={16} />
  </button>
);

interface ClearIconProps {
  onClick: () => void;
}
