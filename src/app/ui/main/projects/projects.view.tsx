import { Link, Outlet } from "@remix-run/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxValueNone } from "react-icons/rx";
import { ProjectSummary } from "@domain/project";
import { Button } from "@app/components/button";
import { ProjectCard } from "./project-card";

export const ProjectsView = ({
  projectsSummary,
}: ProjectsViewProps): JSX.Element => {
  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">PROJECTS</h1>
      <div className="mt-8">
        <Link to="new" className="flex w-fit">
          <Button color="neutral" variant="subtlest" className="py-3 pl-3 pr-4">
            <span>
              <AiOutlinePlus size={22} />
            </span>
            <span className="leading-4">Add Project</span>
          </Button>
        </Link>
      </div>
      {projectsSummary.length > 0 ? (
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,_400px)] gap-8">
          {projectsSummary.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <EmptyProjects />
      )}
      <Outlet />
    </div>
  );
};

interface ProjectsViewProps {
  projectsSummary: ProjectSummary[];
}

const EmptyProjects = (): JSX.Element => (
  <div className="mt-16 flex flex-col items-center text-font-subtlest">
    <RxValueNone size={48} />
    <p className="mt-4 font-primary-light text-xs uppercase">
      No projects found
    </p>
    <p className="mt-2 font-primary-light text-sm">
      You are not a member of any project yet. Add a project to get started.
    </p>
  </div>
);
