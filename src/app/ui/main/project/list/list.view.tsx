import {
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { Link, useFetcher } from "@remix-run/react";
import { MdDragIndicator } from "react-icons/md";
import { RxValueNone } from "react-icons/rx";
import cx from "classix";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Project } from "@domain/project";
import { Category, categoryTypeDict } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { CategoryId } from "@domain/category";
import { PriorityIcon } from "@app/components/priority-icon";
import { TaskIcon } from "@app/components/icons";
import { UserAvatar } from "@app/components/user-avatar";
import { ProjectContextProvider, useProjectStore } from "@app/ui/main/project";
import { useSortBy } from "@app/hooks/useSortBy";

const DRAG_LIST_ROW = "LIST_ROW";

interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
}

export const ListView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContextProvider project={project}>
      <DndProvider backend={HTML5Backend}>
        <ListViewContent project={project} />
      </DndProvider>
    </ProjectContextProvider>
  );
};

const ListViewContent = ({ project }: Props): JSX.Element => {
  // Track if any row is currently being dragged to show drop zones
  const [isDragging, setIsDragging] = useState<boolean>(false);
  // Track issues awaiting server response after category change
  const [submittingIssues, setSubmittingIssues] = useState<IssueId[]>([]);
  // Maintain local ordering of issues within each category
  const [orderedIssues, setOrderedIssues] = useState<
    Record<CategoryId, Issue[]>
  >(() => {
    const initial: Record<CategoryId, Issue[]> = {};
    project.categories.forEach((cat) => {
      initial[cat.id] = [...cat.issues];
    });
    return initial;
  });

  const { search } = useProjectStore();

  const handleDragging = useCallback((isDrag: boolean) => {
    setIsDragging(isDrag);
  }, []);

  // Apply search filter to each category while preserving local ordering
  const filteredAndOrderedCategories = project.categories.map((category) => ({
    ...category,
    issues: (orderedIssues[category.id] || category.issues).filter((issue) =>
      issue.name.toLowerCase().includes(search)
    ),
  }));

  return (
    <div className="box-border flex h-full flex-col bg-elevation-surface-sunken p-4">
      <div className="mb-4 text-font-subtlest">
        <h2 className="text-lg font-primary-bold">All Issues</h2>
      </div>

      {/* Table header */}
      <div className="mb-2 flex items-center rounded-t-md bg-elevation-surface-raised px-4 py-3 text-xs font-primary-light uppercase text-font-subtlest">
        <div className="w-8 flex-shrink-0">{/* Drag handle column */}</div>
        <div className="w-8 flex-shrink-0">{/* Icon column */}</div>
        <div className="flex-grow">Issue Name</div>
        <div className="w-24 flex-shrink-0">Priority</div>
        <div className="w-28 flex-shrink-0">Category</div>
        <div className="w-20 flex-shrink-0">Assignee</div>
      </div>

      {/* Category groups and rows */}
      <div className="flex-1 overflow-y-auto rounded-b-md bg-elevation-surface-raised">
        {filteredAndOrderedCategories.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-8 text-font-subtlest">
            <RxValueNone size={36} />
            <p className="mt-4 font-primary-light text-xs uppercase">
              No issues found
            </p>
          </div>
        ) : (
          filteredAndOrderedCategories.map((category) => (
            <CategoryGroup
              key={category.id}
              category={category}
              isDragging={isDragging}
              submittingIssues={submittingIssues}
              setSubmittingIssues={setSubmittingIssues}
              handleDragging={handleDragging}
              orderedIssues={orderedIssues}
              setOrderedIssues={setOrderedIssues}
            />
          ))
        )}
      </div>
    </div>
  );
};

interface CategoryGroupProps {
  category: Category;
  isDragging: boolean;
  submittingIssues: IssueId[];
  setSubmittingIssues: Dispatch<SetStateAction<IssueId[]>>;
  handleDragging: (isDragging: boolean) => void;
  orderedIssues: Record<CategoryId, Issue[]>;
  setOrderedIssues: Dispatch<SetStateAction<Record<CategoryId, Issue[]>>>;
}

const CategoryGroup = ({
  category,
  isDragging,
  submittingIssues,
  setSubmittingIssues,
  handleDragging,
  orderedIssues,
  setOrderedIssues,
}: CategoryGroupProps): JSX.Element => {
  const fetcher = useFetcher();
  const { search } = useProjectStore();

  // Color mapping for category header based on status type
  const categoryColor = {
    TODO: "var(--Neutral700)",
    IN_PROGRESS: "var(--Blue700)",
    DONE: "var(--Green700)",
  };

  const filteredIssues = (orderedIssues[category.id] || category.issues).filter(
    (issue) => issue.name.toLowerCase().includes(search)
  );

  // Setup drop zone for this category - detects when items are dragged over
  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_LIST_ROW,
      drop: (item: DropItem) => updateIssueOnDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [category.id, orderedIssues]
  );

  const updateIssueOnDrop = (item: DropItem) => {
    // Only submit if issue moved to a different category
    if (item.categoryId !== category.id) {
      fetcher.submit(
        {
          _action: "updateIssueCategory",
          issueId: item.issueId,
          categoryId: category.id,
        },
        { method: "post" }
      );

      if (!submittingIssues.includes(item.issueId)) {
        setSubmittingIssues((prev) => [...prev, item.issueId]);
      }
    }
  };

  // Clear submitting state once server confirms the update
  useEffect(() => {
    if (fetcher.data && fetcher.data.issueId) {
      const { issueId } = fetcher.data;
      setSubmittingIssues((prev) => prev.filter((id) => id !== issueId));
    }
  }, [fetcher, setSubmittingIssues]);

  return (
    <div ref={dropRef} className="relative">
      {/* Drop overlay */}
      {isDragging && (
        <div
          className={cx(
            "absolute z-40 w-full border-2",
            isOver
              ? "border-solid border-border-success bg-background-drop"
              : "border-dashed border-border-brand"
          )}
          style={{ height: "100%" }}
        />
      )}

      {/* Category header */}
      <div
        className="sticky top-0 flex items-center bg-elevation-surface-sunken px-4 py-3 font-primary-light text-xs uppercase"
        style={{ color: categoryColor[category.type] }}
      >
        <span>
          {categoryTypeDict[category.type]} ({filteredIssues.length})
        </span>
      </div>

      {/* Issue rows */}
      {filteredIssues.length === 0 ? (
        <div className="px-4 py-6 text-center text-font-subtlest">
          <p className="text-xs">No issues in this category</p>
        </div>
      ) : (
        filteredIssues.map((issue) => (
          <ListRow
            key={issue.id}
            issue={issue}
            categoryId={category.id}
            isSubmitting={submittingIssues.includes(issue.id)}
            handleDragging={handleDragging}
            orderedIssues={orderedIssues}
            setOrderedIssues={setOrderedIssues}
          />
        ))
      )}
    </div>
  );
};

interface ListRowProps {
  issue: Issue;
  categoryId: CategoryId;
  isSubmitting: boolean;
  handleDragging: (isDragging: boolean) => void;
  orderedIssues: Record<CategoryId, Issue[]>;
  setOrderedIssues: Dispatch<SetStateAction<Record<CategoryId, Issue[]>>>;
}

const ListRow = ({
  issue,
  categoryId,
  isSubmitting,
  handleDragging,
  orderedIssues,
  setOrderedIssues,
}: ListRowProps): JSX.Element => {
  // Build link with sort parameter if sorting is active
  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  // Show drag handle on hover (unless submitting)
  const [showDragHandle, setShowDragHandle] = useState(false);

  type Collected = { isDragging: boolean };

  // Setup drag source for this issue
  const [{ isDragging }, dragRef] = useDrag<DropItem, unknown, Collected>(
    () => ({
      type: DRAG_LIST_ROW,
      item: {
        issueId: issue.id,
        categoryId,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      end: (item, monitor) => {
        if (monitor.didDrop()) {
          // Update local state if drop was successful
          const dropResult = monitor.getDropResult();
        }
      },
    }),
    [issue.id, categoryId]
  );

  // Notify parent when drag state changes
  useEffect(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]);

  return (
    <div
      ref={isSubmitting ? undefined : dragRef}
      className={cx(
        "flex items-center border-b border-border bg-elevation-surface-raised px-4 py-3 transition-colors duration-200",
        !isDragging && "hover:bg-background-neutral",
        isDragging && "opacity-50"
      )}
      onMouseEnter={() => setShowDragHandle(true)}
      onMouseLeave={() => setShowDragHandle(false)}
    >
      {/* Drag handle */}
      <div className="w-8 flex-shrink-0 flex items-center justify-center">
        {showDragHandle && !isSubmitting && (
          <MdDragIndicator
            size={18}
            className="text-font-subtlest"
            style={{ cursor: "grab" }}
          />
        )}
      </div>

      {/* Task icon */}
      <div className="w-8 flex-shrink-0 flex items-center justify-center">
        <TaskIcon size={18} />
      </div>

      {/* Issue name */}
      <Link to={issueLink} className="flex-grow">
        <span className="text-font text-sm hover:underline">
          {issue.name}
        </span>
      </Link>

      {/* Priority icon */}
      <div className="w-24 flex-shrink-0 flex items-center justify-center">
        <PriorityIcon priority={issue.priority.id} size={16} />
      </div>

      {/* Category badge */}
      <div className="w-28 flex-shrink-0">
        <span className="inline-block rounded bg-elevation-surface-sunken px-2 py-1 text-2xs text-font-subtlest">
          {categoryTypeDict[issue.categoryType || "TODO"]}
        </span>
      </div>

      {/* Assignee avatar */}
      <div className="w-20 flex-shrink-0 flex items-center justify-center">
        {issue.asignee && (
          <UserAvatar
            {...issue.asignee}
            size={28}
            tooltip={true}
          />
        )}
      </div>
    </div>
  );
};

interface Props {
  project: Project;
}
