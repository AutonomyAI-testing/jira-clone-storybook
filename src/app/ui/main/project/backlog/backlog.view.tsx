import { useState, useEffect } from "react";
import { useRevalidator } from "@remix-run/react";
import { useEventSource } from "remix-utils";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Project } from "@domain/project";
import { Category } from "@domain/category";
import { IssueId } from "@domain/issue";
import { Search } from "@app/ui/main/project/board/search";
import { SelectSort } from "@app/ui/main/project/board/select-sort";
import { CategorySection } from "./category-section";
import { ProjectContextProvider } from "../project.store";
import { EVENTS } from "@app/events";

export const BacklogView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContextProvider project={project}>
      <div className="box-border flex h-full flex-col">
        {/* Toolbar section */}
        <section className="flex items-center gap-4 px-4 py-4 border-b border-border">
          <Search />
          <SelectSort />
        </section>

        {/* DnD Provider with categories */}
        <DndProvider backend={HTML5Backend}>
          <Categories categories={project.categories} />
        </DndProvider>
      </div>
    </ProjectContextProvider>
  );
};

interface Props {
  project: Project;
}

const Categories = ({ categories }: CategoriesProps): JSX.Element => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [submittingIssues, setSubmittingIssues] = useState<IssueId[]>([]);
  const { revalidate } = useRevalidator();

  // Real-time updates: listen for issues created by other users or sessions
  useEventSource("backlog/issue/issue-event", {
    event: EVENTS.ISSUE_CREATED,
  });

  // Real-time updates: listen for issues changed (category moved, status updated, etc.)
  const dataUpdated = useEventSource("backlog/issue/issue-event", {
    event: EVENTS.ISSUE_CHANGED,
  });

  // Clear submitting state when fresh data arrives, indicating server confirmation
  useEffect(() => {
    setSubmittingIssues([]);
  }, [categories]);

  // Revalidate loader data when external events update the backlog
  useEffect(() => {
    revalidate();
  }, [dataUpdated, revalidate]);

  return (
    <section className="flex-1 overflow-y-auto px-4 py-4">
      <div className="max-w-4xl">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            isDragging={isDragging}
            submittingIssues={submittingIssues}
            setSubmittingIssues={setSubmittingIssues}
            handleDragging={setIsDragging}
          />
        ))}
      </div>
    </section>
  );
};

interface CategoriesProps {
  categories: Category[];
}
