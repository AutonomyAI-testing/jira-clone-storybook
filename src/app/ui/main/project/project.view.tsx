import { Outlet, Link, useLocation } from "@remix-run/react";
import { Sidebar } from "@app/ui/main/project/sidebar";

// Map route path segments to display titles for project sections
const sectionTitles: Record<string, string> = {
  board: "Board",
  analytics: "Analytics",
  backlog: "Backlog",
};
const defaultSection = "board";

export const ProjectView = ({
  name,
  description,
  image,
}: Props): JSX.Element => {
  const location = useLocation();
  // Extract the last segment of the route path (e.g., 'board', 'analytics') to determine current section
  const section = location.pathname.split("/").slice(-1)[0];

  // Display title for current section, falling back to default if route segment is not recognized
  const sectionTitle = sectionTitles[section] || sectionTitles[defaultSection];

  return (
    <div className="relative flex h-full flex-grow">
      <Sidebar
        projectName={name}
        projectDescription={description || "Description undefined"}
        projectImage={image || "/images/default-project.png"}
      />
      <div className="z-10 flex h-full w-full flex-grow flex-col px-5 py-6">
        <section>
          <Link to="/projects" className="underline underline-offset-[3px]">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span>{name}</span>
          <h1 className="mb-5 mt-4 font-primary-black text-2xl" style={{ color: '#e34935' }}>
            {sectionTitle}
          </h1>
        </section>
        <Outlet />
      </div>
    </div>
  );
};

interface Props {
  name: string;
  description?: string;
  image: string;
}
