import { Link } from "@remix-run/react";
import welcomeStyles from "./welcome.css";

export const welcomeLinks = () => [{ rel: "stylesheet", href: welcomeStyles }];

export const WelcomeView = () => {
  return (
    <div className="welcome-shell">
      <div className="welcome-card">
        <img
          src="/images/welcome-wizard.png"
          alt="Friendly wizard robot mascot"
          className="welcome-mascot"
        />
        <h1 className="welcome-title">Welcome</h1>
        <p className="welcome-subtitle">
          Manage your team's work with ease. Create projects, track issues, and
          collaborate in real-time.
        </p>
        <div className="welcome-actions">
          <Link to="/projects" className="welcome-btn-primary">
            Go to Projects
          </Link>
          <Link to="/login" className="welcome-btn-secondary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};
