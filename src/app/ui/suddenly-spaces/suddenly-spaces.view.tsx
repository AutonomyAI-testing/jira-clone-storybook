import { SSNavbar } from "./ss-navbar";
import { HeroSearchSection } from "./hero-search-section";
import { SSFooter } from "./ss-footer";

export const SuddenlySpacesView = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-primary">
      {/* Navbar */}
      <SSNavbar />

      {/* Main hero/search content */}
      <main className="flex flex-1 flex-col items-center justify-center">
        <HeroSearchSection />
      </main>

      {/* Footer */}
      <SSFooter />
    </div>
  );
};
