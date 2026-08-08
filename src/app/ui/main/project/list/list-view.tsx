import { useState, useCallback, useRef, useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react";
import cx from "classix";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MdDragIndicator } from "react-icons/md";
import { Project } from "@domain/project";
import { Issue, IssueId } from "@domain/issue";
import { CategoryId, CategoryType, categoryTypeDict } from "@domain/category";
import { PriorityIcon } from "@app/components/priority-icon";
import { TaskIcon } from "@app/components/icons";
import { UserAvatar } from "@app/components/user-avatar";
import { Kbd } from "@app/components/kbd-placeholder";
import { Search } from "../board/search";
import { SelectSort } from "../board/select-sort";
import { ProjectContextProvider, useProjectStore } from "../project.store";
import { useSortBy } from "@app/hooks/useSortBy";

export const ListView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContextProvider project={project}>
      <DndProvider backend={HTML5Backend}>
        <ListViewContent project={project} />
      </DndProvider>
    </ProjectContextProvider>
  );
};

interface Props {
  project: Project;
}

const ListViewContent = ({ project }: ContentProps): JSX.Element => {
  // Flatten all issues from all categories
  const allIssues = project.categories.flatMap((category) =>
    category.issues.map((issue) => ({
      ...issue,
      categoryId: category.id,
      categoryType: category.type,
    }))
  );

  // Maintain flattened issues in local state for drag-and-drop reordering
  const [flatIssues, setFlatIssues] = useState<FlatIssue[]>(allIssues);
  const { search } = useProjectStore();
  const navigate = useNavigate();

  // Filter issues dynamically based on search query from project store
  const filteredIssues = flatIssues.filter((issue) =>
    issue.name.toLowerCase().includes(search)
  );

  // Callback for drag-and-drop reordering in the list
  const moveIssue = useCallback((fromIndex: number, toIndex: number) => {
    setFlatIssues((prev) => {
      const newIssues = [...prev];
      const [movedIssue] = newIssues.splice(fromIndex, 1);
      newIssues.splice(toIndex, 0, movedIssue);
      return newIssues;
    });
  }, []);

  // Keyboard shortcut: Shift+N to navigate to new issue creation page
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "n") {
        e.preventDefault();
        navigate("issue/new");
      }
    },
    [navigate]
  );

  // Register keyboard listener on window to support global shortcuts throughout the page
  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div className="box-border flex h-full flex-col">
      <section className="flex items-center">
        <Search />
        <div className="inline">
          <SelectSort />
        </div>
      </section>

      <section className="mt-12 flex h-full flex-col">
        <span className="mb-2 block justify-self-end font-primary-light text-2xs text-font-subtlest">
          Press <Kbd>Shift</Kbd> + <Kbd>N</Kbd> to create a new issue
        </span>

        <div className="flex flex-col gap-2">
          {filteredIssues.length === 0 ? (
            <div className="flex h-full items-center justify-center text-font-subtlest">
              No issues found
            </div>
          ) : (
            filteredIssues.map((issue, index) => (
              <DraggableIssueRow
                key={issue.id}
                issue={issue}
                index={index}
                moveIssue={moveIssue}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

interface ContentProps {
  project: Project;
}

export interface FlatIssue extends Issue {
  categoryId: CategoryId;
  categoryType: CategoryType;
}

const DRAG_LIST_ROW = "LIST_ROW";

const getCategoryBadgeClass = (categoryType: CategoryType): string => {
  switch (categoryType) {
    case "TODO":
      return "bg-background-accent-grey-subtler text-font-accent-grey";
    case "IN_PROGRESS":
      return "bg-background-accent-blue-subtler text-font-accent-blue";
    case "DONE":
      return "bg-background-accent-green-subtler text-font-accent-green";
    default:
      return "bg-background-neutral text-font";
  }
};

interface DragItem {
  index: number;
}

const DraggableIssueRow = ({
  issue,
  index,
  moveIssue,
}: DraggableIssueRowProps): JSX.Element => {

  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  // Preserve sort order when navigating to issue details for consistent list experience
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  type Collected = { isDragging: boolean };

  // Enable row dragging with react-dnd for reordering in the list
  const [{ isDragging }, dragRef] = useDrag<DragItem, unknown, Collected>(
    () => ({
      type: DRAG_LIST_ROW,
      item: { index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [index]
  );

  // Accept drops from other rows and reorder when hovering
  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_LIST_ROW,
      hover: (item: DragItem) => {
        if (item.index !== index) {
          moveIssue(item.index, index);
          item.index = index;
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [index, moveIssue]
  );

  // Attach both drag and drop refs to the same element
  const combineRefs = useCallback(
    (el: HTMLDivElement | null) => {
      dragRef(el);
      dropRef(el);
    },
    [dragRef, dropRef]
  );

  return (
    <div
      ref={combineRefs}
      className={cx(
        "group flex cursor-pointer items-center gap-3 rounded border-none bg-elevation-surface-raised px-4 py-3 text-left duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered",
        isDragging && "opacity-50",
        isOver && "border-t-2 border-border-brand"
      )}
    >
      {/* Drag Handle */}
      <div
        className={cx(
          "flex items-center text-icon-subtlest opacity-0 transition-opacity duration-200 group-hover:opacity-100",
          isDragging && "cursor-grabbing"
        )}
        style={{ cursor: "grab" }}
      >
        <MdDragIndicator size={20} />
      </div>

      {/* Category Badge */}
      <div
        className={cx(
          "flex w-fit items-center rounded px-1.5 py-0.5 text-2xs uppercase",
          getCategoryBadgeClass(issue.categoryType)
        )}
      >
        {categoryTypeDict[issue.categoryType]}
      </div>

      {/* Priority Icon */}
      <div className="flex items-center">
        <PriorityIcon priority={issue.priority.id} />
      </div>

      {/* Task Icon and ID */}
      <span className="flex items-center gap-1.5">
        <TaskIcon size={18} />
        <span className="text-2xs text-font-subtlest">{issueIdPrefix}</span>
      </span>

      {/* Issue Name (Link) */}
      <Link to={issueLink} className="flex-grow">
        <p className="line-clamp-1 text-sm text-font hover:underline">
          {issue.name}
        </p>
      </Link>

      {/* Assignee Avatar */}
      <div className="flex items-center">
        <UserAvatar
          name={issue.asignee.name}
          image={issue.asignee.image}
          color={issue.asignee.color}
          size={24}
        />
      </div>
    </div>
  );
};

interface DraggableIssueRowProps {
  issue: FlatIssue;
  index: number;
  moveIssue: (fromIndex: number, toIndex: number) => void;
}
