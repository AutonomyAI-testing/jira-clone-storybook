import { Link } from "@remix-run/react";
import cx from "classix";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { Tooltip } from "@app/components/tooltip";
import { SelctTheme } from "./select-theme";
import { UserProfile } from "./user-profile";


interface Props {
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Header = ({
  isLoading = false,
  isDisabled = false,
}: Props): JSX.Element => {
  const iconBaseClass = cx(
    "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand",
    (isLoading || isDisabled) && "disabled:cursor-not-allowed disabled:opacity-60"
  );

  return (
    <header
      className={cx(
        "relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]",
        (isLoading || isDisabled) && "opacity-60 pointer-events-none"
      )}
    >
      <section>
        <Link
          to="/"
          className={cx(
            "flex cursor-pointer items-center rounded px-3 py-2 text-font-brand hover:bg-background-brand-subtlest",
            (isLoading || isDisabled) && "pointer-events-none"
          )}
        >
          <img src="/images/logo.png" width={24} height={24} alt="Logo" />
          <span className="ml-2">Jira Clone</span>
        </Link>
      </section>
      <section className={cx("flex items-center gap-4")}>
        <Tooltip title="About">
          <button
            aria-label="About this website"
            disabled
            className={cx(iconBaseClass, "cursor-not-allowed")}
          >
            <HiQuestionMarkCircle size={24} />
          </button>
        </Tooltip>
        <Tooltip title="Github">
          <a
            href="https://github.com/daniserrano7/jira-clone"
            className={iconBaseClass}
            aria-label="Go to my Github"
            onClick={(e) => {
              if (isLoading || isDisabled) e.preventDefault();
            }}
          >
            <AiFillGithub size={24} />
          </a>
        </Tooltip>
        <div className={cx(isLoading && "opacity-50")}>
          <SelctTheme />
        </div>
        <div className={cx(isLoading && "opacity-50")}>
          <UserProfile />
        </div>
      </section>
    </header>
  );
};
