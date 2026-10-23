import React from "react";
import cx from "classix";
import { BiSearch } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const FaqSearch = ({
  value,
  onChange,
  onClear,
}: FaqSearchProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <div className="relative w-full max-w-[400px]">
      <input
        type="text"
        value={value}
        placeholder="Filter questions"
        aria-label="Filter questions"
        onChange={handleChange}
        className={cx(
          "h-[40px] w-full rounded border-none bg-background-input py-2 pl-2 pr-9",
          "box-border outline outline-2 outline-border-input",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "duration-200 ease-in-out hover:bg-background-input-hovered",
          "focus:bg-background-input-pressed focus:shadow-blue focus:outline-border-brand"
        )}
      />
      <span className="absolute right-0 top-0 flex h-[40px] w-[40px] flex-center">
        {value === "" ? (
          <BiSearch size={20} aria-hidden="true" className="text-icon-subtle" />
        ) : (
          <button
            type="button"
            aria-label="Clear search"
            onClick={onClear}
            className="flex h-full w-full cursor-pointer items-center justify-center border-none text-icon-subtle hover:text-icon-brand"
          >
            <IoCloseOutline size={20} aria-hidden="true" />
          </button>
        )}
      </span>
    </div>
  );
};

interface FaqSearchProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}
