import { User } from "@domain/user";
import { Category } from "@domain/category";

export type ProjectId = string;

// Options offered by the registration wizard when the first project is created.
export const teamSizes = ["Just me", "2-10", "11-50", "51+"] as const;
export interface Project {
  id: ProjectId;
  name: string;
  description?: string;
  teamSize?: string;
  users: User[];
  categories: Category[];
  image: string;
  createdAt?: number;
  updatedAt?: number;
}

// TODO: Make createdAt and updatedAt mandatory
export type ProjectSummary = Pick<Project, "id" | "name" | "description" | "image" | "createdAt">;

export const projectToProjectSummary = (project: Project): ProjectSummary => ({
  id: project.id,
  name: project.name,
  description: project.description,
  image: project.image,
  createdAt: project.createdAt,
});
