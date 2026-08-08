import { useState, useCallback, useEffect } from "react";
import { Outlet, useFetcher } from "@remix-run/react";
import { useEventSource } from "remix-utils";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link } from "@remix-run/react";
import { MdDragIndicator } from "react-icons/md";
import cx from "classix";
import { Project } from "@domain/project";
import { Category, CategoryId, CategoryType } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { Search } from "@app/ui/main/project/board/search";
import { SelectSort } from "@app/ui/main/project/board/select-sort";
import { ProjectContextProvider, useProjectStore } from "../project.store";
import { PriorityIcon } from "@app/components/priority-icon";
import { UserAvatar } from "@app/components/user-avatar";
import { TaskIcon } from "@app/components/icons";
import { EVENTS } from "@app/events";

const DRAG_LIST_ITEM = "LIST_ITEM";

interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
  sourceIndex: number;
}

export const ListView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContextProvider project={project}>
      <div className="box-border flex h-full flex-col">
        <section className="flex items-center">
          <Search />
          <div className="ml-4">
            <SelectSort />
          </div>
        </section>
        <DndProvider backend={HTML5Backend}>
          <ListContent categories={project.categories} />
        </DndProvider>
        <Outlet />
      </div>
    </ProjectContextProvider>
  );
};

interface Props {
  project: Project;
}

const ListContent = ({ categories }: ListContentProps): JSX.Element => {
  const [localCategories, setLocalCategories] =
    useState<Category[]>(categories);
  const { search } = useProjectStore();
  const fetcher = useFetcher();
  const revalidate = useEventSource("board/issue/issue-event", {
    event: EVENTS.ISSUE_CHANGED,
  });

  // Sync categories when they change from parent
  useEffect(() => {
    setLocalCategories(categories);
  }, [categories]);

  const handleDragDrop = useCallback(
    (draggedIssueId: IssueId, sourceCategoryId: CategoryId, sourceIndex: number, targetCategoryId: CategoryId) => {
      if (sourceCategoryId === targetCategoryId) {
        // Same category - reorder locally (no server call)
        setLocalCategories((prev) =>
          prev.map((cat) => {
            if (cat.id === sourceCategoryId) {
              const issues = [...cat.issues];
              const [draggedIssue] = issues.splice(sourceIndex, 1);
              // For now, append to end within same category
              issues.push(draggedIssue);
              return { ...cat, issues };
            }
            return cat;
          })
        );
      } else {
        // Different category - submit to server
        fetcher.submit(
          {
            _action: "updateIssueCategory",
            issueId: draggedIssueId,
            categoryId: targetCategoryId,
          },
          { method: "post" }
        );
      }
    },
    [fetcher]
  );

  return (
    <section className="mt-6 flex flex-col gap-4 flex-grow overflow-y-auto">
      {localCategories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          search={search}
          onDragDrop={handleDragDrop}
        />
      ))}
    </section>
  );
};

interface ListContentProps {
  categories: Category[];
}

const CategorySection = ({
  category,
  search,
  onDragDrop,
}: CategorySectionProps): JSX.Element => {
  const filteredIssues = category.issues.filter((issue) =>
    issue.name.toLowerCase().includes(search.toLowerCase())
  );

  const bgColorClass = getCategoryBgColor(category.type);
  const textColorClass = getCategoryTextColor(category.type);

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_LIST_ITEM,
      drop: (item: DropItem) => {
        onDragDrop(item.issueId, item.categoryId, item.sourceIndex, category.id);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [category.id, onDragDrop]
  );

  return (
    <div className="flex flex-col">
      {/* Category Header */}
      <div
        className={cx(
          "sticky top-0 z-10 flex items-center gap-2 border-b border-border bg-elevation-surface px-4 py-2"
        )}
      >
        <span
          className={cx(
            "rounded px-1.5 py-0.5 text-2xs uppercase font-primary-bold",
            bgColorClass,
            textColorClass
          )}
        >
          {category.name}
        </span>
        <span className="text-xs text-font-subtlest">
          ({filteredIssues.length})
        </span>
      </div>

      {/* Issues List */}
      <div
        ref={dropRef}
        className={cx(
          "flex flex-col border border-border rounded",
          isOver && "border-border-success bg-background-drop"
        )}
      >
        {filteredIssues.length === 0 ? (
          <div className="px-4 py-6 text-center text-sm text-font-subtlest">
            Drop issues here
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filteredIssues.map((issue, index) => (
              <IssueRow
                key={issue.id}
                issue={issue}
                categoryId={category.id}
                index={index}
                onDragDrop={onDragDrop}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

interface CategorySectionProps {
  category: Category;
  search: string;
  onDragDrop: (
    issueId: IssueId,
    sourceCategoryId: CategoryId,
    sourceIndex: number,
    targetCategoryId: CategoryId
  ) => void;
}

const IssueRow = ({
  issue,
  categoryId,
  index,
  onDragDrop,
}: IssueRowProps): JSX.Element => {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: DRAG_LIST_ITEM,
      item: {
        issueId: issue.id,
        categoryId,
        sourceIndex: index,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id, categoryId, index]
  );

  const issueIdPrefix = issue.id.split("-")[0];

  return (
    <li
      ref={dragRef}
      className={cx(
        "group flex items-center gap-3 border-b border-border px-4 py-2.5 bg-elevation-surface-raised hover:bg-elevation-surface-raised-hovered cursor-default",
        isDragging && "opacity-50"
      )}
    >
      {/* Drag handle */}
      <span className="text-font-subtlest opacity-0 group-hover:opacity-100 cursor-grab transition-opacity duration-200">
        <MdDragIndicator size={20} />
      </span>

      {/* Priority icon */}
      <PriorityIcon priority={issue.priority.id} size={18} />

      {/* Task icon */}
      <TaskIcon size={16} />

      {/* Issue name - truncated */}
      <Link
        to={`issue/${issue.id}`}
        className="flex-1 truncate text-sm text-font hover:text-font-brand hover:underline"
      >
        {issue.name}
      </Link>

      {/* Issue ID prefix */}
      <span className="whitespace-nowrap text-2xs text-font-subtlest">
        {issueIdPrefix}
      </span>

      {/* Assignee avatar */}
      <UserAvatar {...issue.asignee} size={24} tooltip />
    </li>
  );
};

interface IssueRowProps {
  issue: Issue;
  categoryId: CategoryId;
  index: number;
  onDragDrop: (
    issueId: IssueId,
    sourceCategoryId: CategoryId,
    sourceIndex: number,
    targetCategoryId: CategoryId
  ) => void;
}

function getCategoryBgColor(type: CategoryType): string {
  switch (type) {
    case "TODO":
      return "bg-background-accent-grey-subtler";
    case "IN_PROGRESS":
      return "bg-background-accent-blue-subtler";
    case "DONE":
      return "bg-background-accent-green-subtler";
  }
}

function getCategoryTextColor(type: CategoryType): string {
  switch (type) {
    case "TODO":
      return "text-font-accent-grey";
    case "IN_PROGRESS":
      return "text-font-accent-blue";
    case "DONE":
      return "text-font-accent-green";
  }
}
