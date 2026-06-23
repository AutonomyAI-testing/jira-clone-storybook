import { useState, Dispatch, SetStateAction } from "react";
import { useFetcher } from "@remix-run/react";
import cx from "classix";
import { useDrop } from "react-dnd";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { Category } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { IssueRow, DropItem, DRAG_ISSUE_ROW } from "./issue-row";
import { useProjectStore } from "@app/ui/main/project";

export const CategorySection = ({
  category,
  isDragging,
  submittingIssues,
  setSubmittingIssues,
  handleDragging,
}: Props): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const fetcher = useFetcher();
  const { search } = useProjectStore();

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: DRAG_ISSUE_ROW,
      drop: (item: DropItem) => updateIssueOnDrop(item),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [category.id]
  );

  const updateIssueOnDrop = (item: DropItem) => {
    // Skip if item is being dropped into the same category
    if (item.categoryId === category.id) {
      return;
    }

    // Submit the category change to the server
    fetcher.submit(
      {
        _action: "updateIssueCategory",
        issueId: item.issueId,
        categoryId: category.id,
      },
      {
        method: "post",
      }
    );

    // Track issues awaiting server response to show loading state
    if (!submittingIssues.includes(item.issueId)) {
      setSubmittingIssues((prev) => [...prev, item.issueId]);
    }
  };

  // Filter issues by search term for real-time search functionality
  const filteredIssues = (): Issue[] =>
    category.issues.filter((issue) => {
      return issue.name.toLowerCase().includes(search.toLowerCase());
    });

  const issues = filteredIssues();

  return (
    <div
      ref={dropRef}
      className={cx(
        "mb-4 rounded",
        isOver && isDragging && "ring-2 ring-border-brand"
      )}
    >
      {/* Section header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-3 py-3 font-primary-bold text-sm uppercase text-font-subtlest cursor-pointer hover:bg-elevation-surface-raised-hovered rounded-t bg-elevation-surface-raised"
      >
        <RiArrowDropLeftLine
          size={20}
          className={cx(
            "flex-shrink-0 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
        <span>{category.name}</span>
        <span className="text-2xs font-primary-light px-1.5 py-0.5 rounded bg-background-neutral text-font-subtlest ml-auto flex-shrink-0">
          {issues.length}
        </span>
      </div>

      {/* Section body */}
      {isExpanded && (
        <div className="bg-elevation-surface-raised rounded-b">
          {issues.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-font-subtlest">
              <p className="text-xs uppercase font-primary-light">No issues</p>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {issues.map((issue, index) => (
                <li key={issue.id}>
                  <IssueRow
                    issue={issue}
                    categoryId={category.id}
                    index={index}
                    isSubmitting={submittingIssues.includes(issue.id)}
                    handleDragging={handleDragging}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

interface Props {
  category: Category;
  isDragging: boolean;
  submittingIssues: IssueId[];
  setSubmittingIssues: Dispatch<SetStateAction<IssueId[]>>;
  handleDragging: (isDragging: boolean) => void;
}
