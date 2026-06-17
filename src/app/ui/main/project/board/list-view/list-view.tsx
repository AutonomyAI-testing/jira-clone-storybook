import { useState, useCallback, useMemo, useEffect } from "react";
import { Category, CategoryType } from "@domain/category";
import { Issue } from "@domain/issue";
import { ListRow } from "./list-row";

export const ListView = ({ categories }: ListViewProps): JSX.Element => {
  // Flatten all issues from all categories
  const flattenedIssues = useMemo(() => {
    return categories.flatMap((category) =>
      category.issues.map((issue) => ({
        issue,
        categoryType: category.type,
      }))
    );
  }, [categories]);

  const [orderedIssues, setOrderedIssues] = useState(flattenedIssues);

  // Update ordered issues when categories change
  useEffect(() => {
    setOrderedIssues(flattenedIssues);
  }, [flattenedIssues]);

  const handleMove = useCallback(
    (fromIndex: number, toIndex: number) => {
      const newOrdered = [...orderedIssues];
      const [moved] = newOrdered.splice(fromIndex, 1);
      newOrdered.splice(toIndex, 0, moved);
      setOrderedIssues(newOrdered);
    },
    [orderedIssues]
  );

  return (
    <div className="mt-12 h-full flex flex-col">
      <div className="rounded-md bg-elevation-surface-sunken p-3 flex-1 overflow-y-auto">
        {orderedIssues.length === 0 ? (
          <div className="flex items-center justify-center h-full text-font-subtlest">
            No issues found
          </div>
        ) : (
          <div className="flex flex-col gap-0">
            {orderedIssues.map((item, index) => (
              <ListRow
                key={`${item.issue.id}-${index}`}
                issue={item.issue}
                index={index}
                categoryType={item.categoryType}
                onMove={handleMove}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface ListViewProps {
  categories: Category[];
}
