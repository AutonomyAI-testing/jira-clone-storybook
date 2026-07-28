import { Link } from "@remix-run/react";
import { AiOutlineProject } from "react-icons/ai";
import { HiOutlineViewBoards } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";

export const WelcomeView = ({ user }: Props): JSX.Element => {
  return (
    <div className="flex h-full items-center justify-center bg-elevation-surface p-8">
      <div className="w-full max-w-[520px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 flex justify-center">
            <img src="/images/logo.png" width={56} height={56} alt="Jira Clone Logo" />
          </div>
          <h1 className="font-primary-black text-5xl text-font-danger">Welcome</h1>
          {user && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <UserAvatar {...user} size={36} />
              <p className="font-primary text-lg text-font-subtle">
                Hello, <span className="font-primary-bold text-font">{user.name}</span>!
              </p>
            </div>
          )}
          {!user && (
            <p className="mt-3 font-primary-light text-lg text-font-subtle">
              Your team&apos;s project management workspace
            </p>
          )}
        </div>

        {/* Feature highlights */}
        <div className="mb-10 flex flex-col gap-3">
          <FeatureItem
            icon={<HiOutlineViewBoards size={22} />}
            title="Kanban Board"
            description="Drag &amp; drop issues across To Do, In Progress, and Done columns"
          />
          <FeatureItem
            icon={<AiOutlineProject size={22} />}
            title="Projects"
            description="Organise work into projects and assign team members"
          />
          <FeatureItem
            icon={<BsPersonFill size={20} />}
            title="Collaboration"
            description="Comment on issues and see your teammates' changes in real time"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link to="/projects" className="w-full">
            <Button size="lg" className="w-full">
              Go to Projects
            </Button>
          </Link>
          {user && (
            <p className="text-center font-primary-light text-sm text-font-subtlest">
              Logged in as {user.name} · <Link to="action/logout" className="text-font-brand hover:underline">Log out</Link>
            </p>
          )}
          {!user && (
            <Link to="/login" className="w-full">
              <Button color="neutral" variant="subtlest" size="lg" className="w-full">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureItem = ({ icon, title, description }: FeatureItemProps): JSX.Element => (
  <div className="flex items-start gap-4 rounded bg-elevation-surface-raised p-4 shadow-xs outline outline-2 outline-transparent">
    <span className="mt-0.5 flex-shrink-0 rounded bg-background-brand-subtlest p-2 text-font-brand">
      {icon}
    </span>
    <div>
      <h3 className="font-primary-bold text-sm text-font">{title}</h3>
      <p className="mt-0.5 font-primary-light text-sm text-font-subtle">{description}</p>
    </div>
  </div>
);

interface Props {
  user?: User;
}
