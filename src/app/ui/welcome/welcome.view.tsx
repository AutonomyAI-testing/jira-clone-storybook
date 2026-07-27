import welcomeStyles from "./welcome.css";
import { WelcomeBrandPanel } from "./welcome-brand-panel";
import { WelcomeAuthPanel } from "./welcome-auth-panel";

export const WelcomeView = () => {
  return (
    <main className="welcome-shell">
      <WelcomeBrandPanel />
      <WelcomeAuthPanel />
    </main>
  );
};

export const welcomeLinks = () => [
  { rel: "stylesheet", href: welcomeStyles },
];
