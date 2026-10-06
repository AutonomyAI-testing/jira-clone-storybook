import { Link } from "@remix-run/react";
import { BiChevronRight, BiPlus } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

export const RegisterSuccess = ({ name, email }: Props): JSX.Element => {
  const firstName = name.trim().split(" ")[0] || "there";

  return (
    <>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background-success text-font-success">
        <BsCheckLg size={30} />
      </span>
      <h1 className="mt-6 font-primary-black text-4xl text-font">
        Welcome, {firstName}
      </h1>
      <p className="mt-3 font-primary-light text-sm text-font-subtle">
        Your account is ready and you are signed in as {email}. Everything you
        picked is saved to your profile.
      </p>

      <Link
        to="/projects/new"
        className="mt-8 flex items-center gap-3.5 rounded p-4 text-font outline outline-2 outline-border-input duration-100 ease-in-out hover:bg-background-brand-subtlest"
      >
        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded bg-background-brand-subtlest text-icon-brand">
          <BiPlus size={18} />
        </span>
        <span>
          <span className="block font-primary-bold text-sm">
            Create your first project
          </span>
          <span className="mt-0.5 block font-primary-light text-xs text-font-subtlest">
            A project holds your board, its categories and its issues
          </span>
        </span>
        <BiChevronRight size={20} className="ml-auto text-icon-subtle" />
      </Link>

      <p className="mt-6 font-primary-light text-xs text-font-subtlest">
        You can log out at any time from the user avatar in the header.
      </p>
    </>
  );
};

interface Props {
  name: string;
  email: string;
}
