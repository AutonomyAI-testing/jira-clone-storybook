export const SuddenlySpacesHeader = (): JSX.Element => {
  const navLinkClass =
    "font-['Montserrat',sans-serif] text-sm font-semibold leading-6 text-black";

  return (
    <header className="flex h-[70px] w-full items-center justify-between border-b border-[#f4f4f4] bg-white px-10">
      <a href="/" className="flex items-center gap-2">
        <img
          src="/images/suddenly-spaces/logo.svg"
          width={24}
          height={24}
          alt="SuddenlySpaces logo"
        />
        <span className="font-['Montserrat',sans-serif] text-sm font-semibold tracking-[0.2em] text-[#dc2626]">
          SUDDENLYSPACES
        </span>
      </a>
      <nav className="flex items-center gap-6">
        <a href="#" className={navLinkClass}>
          Switch to Tenant
        </a>
        <a
          href="#"
          className="rounded-full bg-black px-6 py-1.5 font-['Montserrat',sans-serif] text-sm font-semibold leading-6 text-white"
        >
          List Your Space
        </a>
        <button
          className="flex items-center gap-1.5"
          aria-label="Select language"
        >
          <img
            src="/images/suddenly-spaces/us-flag.svg"
            width={16}
            height={16}
            alt="United States"
            className="rounded-full"
          />
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-sm font-medium leading-[14px] text-black">
            EN
          </span>
        </button>
        <a href="#" className={navLinkClass}>
          Sign Up
        </a>
        <a href="#" className={navLinkClass}>
          Login
        </a>
      </nav>
    </header>
  );
};
