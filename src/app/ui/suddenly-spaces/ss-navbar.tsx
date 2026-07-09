export const SSNavbar = () => {
  return (
    <header className="flex w-full items-center justify-between px-8 py-5">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          width="26"
          height="28"
          viewBox="0 0 26 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Two parallel diagonal slash marks — matches the Figma logo */}
          <path d="M0 0H7L16 28H9Z" fill="black" />
          <path d="M10 0H17L26 28H19Z" fill="black" />
        </svg>
        <span className="text-sm font-bold tracking-[0.15em] text-black uppercase">
          SUDDENLYSPACES
        </span>
      </div>

      {/* Right nav actions */}
      <nav className="flex items-center gap-6">
        <button className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
          Switch to Tenant
        </button>
        <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors">
          List Your Space
        </button>
        <div className="flex items-center gap-1 text-sm text-black">
          <span>🇺🇸</span>
          <span className="font-medium">EN</span>
        </div>
        <button className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
          Sign Up
        </button>
        <button className="text-sm font-medium text-black hover:opacity-70 transition-opacity">
          Login
        </button>
      </nav>
    </header>
  );
};
