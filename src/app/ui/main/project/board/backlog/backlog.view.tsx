import { useState, useEffect, useCallback } from "react";
import { useFetcher } from "@remix-run/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import cx from "classix";
import { MdDragIndicator } from "react-icons/md";
import { Project } from "@domain/project";
import { Category, CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon";
import { UserAvatar } from "@app/components/user-avatar";
import { ProjectContextProvider } from "../../project.store";

export const BacklogView = ({ project }: Props): JSX.Element => {
  return (
    <ProjectContextProvider project={project}>
      <DndProvider backend={HTML5Backend}>
        <BacklogContent categories={project.categories} />
      </DndProvider>
    </ProjectContextProvider>
  );
};

interface Props {
  project: Project;
}

const DRAG_BACKLOG_ISSUE = "BACKLOG_ISSUE";

interface BacklogDropItem {
  issueId: IssueId;
  categoryId: CategoryId;
  index: number;
}

const BacklogContent = ({ categories }: BacklogContentProps): JSX.Element => {
  const [localCategories, setLocalCategories] =
    useState<Category[]>(categories);
  const fetcher = useFetcher();

  // Sync with project categories when they change
  useEffect(() => {
    setLocalCategories(categories);
  }, [categories]);

  const handleDropOnCategory = useCallback(
    (item: BacklogDropItem, targetCategoryId: CategoryId) => {
      // Same category drop - reorder locally
      if (item.categoryId === targetCategoryId) {
        return;
      }

      // Cross-category drop - submit to server
      fetcher.submit(
        {
          _action: "updateIssueCategory",
          issueId: item.issueId,
          categoryId: targetCategoryId,
        },
        {
          method: "post",
        }
      );
    },
    [fetcher]
  );

  const handleDropOnIssue = useCallback(
    (dragItem: BacklogDropItem, dropItem: BacklogDropItem) => {
      // Same category reorder
      if (dragItem.categoryId === dropItem.categoryId) {
        setLocalCategories((prev) => {
          const updated = prev.map((cat) => {
            if (cat.id === dragItem.categoryId) {
              const issues = [...cat.issues];
              const dragIndex = issues.findIndex(
                (i) => i.id === dragItem.issueId
              );
              const dropIndex = issues.findIndex(
                (i) => i.id === dropItem.issueId
              );

              if (dragIndex > -1 && dropIndex > -1) {
                const [draggedIssue] = issues.splice(dragIndex, 1);
                issues.splice(dropIndex, 0, draggedIssue);
              }

              return { ...cat, issues };
            }
            return cat;
          });
          return updated;
        });
      } else {
        // Cross-category move
        fetcher.submit(
          {
            _action: "updateIssueCategory",
            issueId: dragItem.issueId,
            categoryId: dropItem.categoryId,
          },
          {
            method: "post",
          }
        );
      }
    },
    [fetcher]
  );

  return (
    <div className="box-border flex h-full flex-col gap-6 p-6">
      {localCategories.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          onDropOnCategory={handleDropOnCategory}
          onDropOnIssue={handleDropOnIssue}
        />
      ))}
    </div>
  );
};

interface BacklogContentProps {
  categories: Category[];
}

interface CategorySectionProps {
  category: Category;
  onDropOnCategory: (
    item: BacklogDropItem,
    targetCategoryId: CategoryId
  ) => void;
  onDropOnIssue: (dragItem: BacklogDropItem, dropItem: BacklogDropItem) => void;
}

const CategorySection = ({
  category,
  onDropOnCategory,
  onDropOnIssue,
}: CategorySectionProps): JSX.Element => {
  const [{ isOver: isOverSection }, dropRefSection] = useDrop(
    () => ({
      accept: DRAG_BACKLOG_ISSUE,
      drop: (item: BacklogDropItem) => {
        onDropOnCategory(item, category.id);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [category.id, onDropOnCategory]
  );

  const getBadgeColor = () => {
    switch (category.type) {
      case "TODO":
        return "bg-background-accent-grey-subtler text-font-accent-grey";
      case "IN_PROGRESS":
        return "bg-background-accent-blue-subtler text-font-accent-blue";
      case "DONE":
        return "bg-background-accent-green-subtler text-font-accent-green";
      default:
        return "";
    }
  };

  return (
    <section ref={dropRefSection} className="flex flex-col gap-3">
      {/* Category Header */}
      <div
        className={cx(
          "flex items-center gap-3 rounded-md bg-elevation-surface-sunken px-4 py-2 uppercase text-font-subtlest transition-colors duration-200",
          isOverSection && "bg-elevation-surface-raised"
        )}
      >
        <h3 className="font-primary-light text-xs font-medium">
          {category.name}
        </h3>
        <span className="text-2xs">({category.issues.length})</span>
        <span
          className={cx(
            "ml-auto rounded px-2 py-1 text-2xs font-medium",
            getBadgeColor()
          )}
        >
          {category.type}
        </span>
      </div>

      {/* Issues List */}
      <div className="flex flex-col gap-2">
        {category.issues.length === 0 ? (
          <div className="rounded-md bg-elevation-surface-sunken px-4 py-8 text-center text-font-subtlest">
            <p className="text-sm">No issues in this category</p>
          </div>
        ) : (
          category.issues.map((issue, index) => (
            <BacklogIssueRow
              key={issue.id}
              issue={issue}
              categoryId={category.id}
              index={index}
              onDropOnIssue={onDropOnIssue}
            />
          ))
        )}
      </div>
    </section>
  );
};

const BacklogIssueRow = ({
  issue,
  categoryId,
  index,
  onDropOnIssue,
}: BacklogIssueRowProps): JSX.Element => {
  const issueIdPrefix = issue.id.split("-")[0];

  const [{ isDragging }, dragRef] = useDrag<
    BacklogDropItem,
    never,
    { isDragging: boolean }
  >(
    () => ({
      type: DRAG_BACKLOG_ISSUE,
      item: {
        issueId: issue.id,
        categoryId,
        index,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id, categoryId, index]
  );

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_BACKLOG_ISSUE,
      drop: (item: BacklogDropItem) => {
        onDropOnIssue(item, {
          issueId: issue.id,
          categoryId,
          index,
        });
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [issue.id, categoryId, index, onDropOnIssue]
  );

  return (
    <div
      ref={dropRef}
      className={cx(
        "relative transition-colors duration-200",
        isOver && "border-t-2 border-border-brand"
      )}
    >
      <div
        ref={dragRef}
        className={cx(
          "flex w-full items-center gap-3 rounded-md bg-elevation-surface-raised px-3 py-2.5 shadow-xs duration-200 hover:bg-elevation-surface-raised-hovered active:bg-elevation-surface-raised-pressed",
          isDragging && "opacity-50"
        )}
      >
        {/* Drag Handle */}
        <div className="flex cursor-grab items-center text-icon-subtle active:cursor-grabbing">
          <MdDragIndicator size={20} />
        </div>

        {/* Task Icon & Issue ID */}
        <div className="flex items-center gap-1.5">
          <TaskIcon size={16} />
          <span className="text-2xs text-font-subtlest">{issueIdPrefix}</span>
        </div>

        {/* Issue Name */}
        <p className="line-clamp-2 flex-grow text-sm text-font">{issue.name}</p>

        {/* Priority Icon */}
        <div className="flex-shrink-0">
          <PriorityIcon priority={issue.priority.id} />
        </div>

        {/* Assignee Avatar */}
        <div className="flex-shrink-0">
          <UserAvatar
            name={issue.asignee.name}
            image={issue.asignee.image}
            color={issue.asignee.color}
            size={28}
          />
        </div>
      </div>
    </div>
  );
};

interface BacklogIssueRowProps {
  issue: Issue;
  categoryId: CategoryId;
  index: number;
  onDropOnIssue: (dragItem: BacklogDropItem, dropItem: BacklogDropItem) => void;
}
