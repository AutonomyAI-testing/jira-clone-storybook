import { useEffect } from "react";
import { Link, useFetcher } from "@remix-run/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineArchive } from "react-icons/md";
import cx from "classix";
import { useDrag } from "react-dnd";
import { CategoryId } from "@domain/category";
import { Issue, IssueId } from "@domain/issue";
import { PriorityId } from "@domain/priority";
import { TaskIcon } from "@app/components/icons";
import { PriorityIcon } from "@app/components/priority-icon";
import { useSortBy } from "@app/hooks/useSortBy";

export interface DropItem {
  issueId: IssueId;
  categoryId: CategoryId;
}

export const IssueCard = ({
  issue,
  categoryId,
  isSubmitting,
  handleDragging,
  archivedCategoryId,
}: Props): JSX.Element => {
  const issueIdPrefix = issue.id.split("-")[0];
  const sortBy = useSortBy();
  const fetcher = useFetcher();
  const issueLink = sortBy
    ? `issue/${issue.id}?sortBy=${sortBy}`
    : `issue/${issue.id}`;

  type Collected = { isDragging: boolean };

  const [{ isDragging }, dragRef] = useDrag<DropItem, unknown, Collected>(
    () => ({
      type: DRAG_ISSUE_CARD,
      item: {
        issueId: issue.id,
        categoryId,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [issue.id]
  );

  useEffect(() => {
    handleDragging(isDragging);
  }, [isDragging, handleDragging]);

  const handleArchive = () => {
    if (!archivedCategoryId) return;
    fetcher.submit(
      {
        _action: "updateIssueCategory",
        issueId: issue.id,
        categoryId: archivedCategoryId,
      },
      { method: "post" }
    );
  };

  return (
    <div ref={isSubmitting ? undefined : dragRef} className="group relative">
      <IssueCardContent
        link={issueLink}
        name={issue.name}
        priorityId={issue.priority.id}
        idPrefix={issueIdPrefix}
        isSubmitting={isSubmitting}
      />
      {archivedCategoryId && categoryId !== archivedCategoryId && (
        <div className="absolute right-1 top-1 opacity-0 transition-opacity group-hover:opacity-100">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="flex items-center justify-center rounded p-0.5 text-font-subtlest hover:bg-background-neutral hover:text-font focus:outline-none"
                aria-label="Issue actions"
                onClick={(e) => e.preventDefault()}
              >
                <BsThreeDotsVertical size={14} />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="z-50 min-w-[140px] rounded-md bg-elevation-surface-overlay p-1 shadow-blue"
                align="end"
                sideOffset={4}
              >
                <DropdownMenu.Item
                  className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-xs text-font outline-none hover:bg-background-neutral focus:bg-background-neutral"
                  onSelect={handleArchive}
                >
                  <MdOutlineArchive size={14} className="text-font-subtlest" />
                  Archive
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      )}
    </div>
  );
};

interface Props {
  issue: Issue;
  categoryId: CategoryId;
  isSubmitting: boolean;
  handleDragging: (isDragging: boolean) => void;
  archivedCategoryId?: CategoryId;
}

export const IssueCardContent = ({
  link,
  name,
  priorityId,
  idPrefix,
  isSubmitting,
}: IssueCardContentProps): JSX.Element => (
  <div
    style={{ minWidth: "200px" }}
    className={cx(
      "flex w-full cursor-pointer flex-col rounded border-none bg-elevation-surface-raised p-3 text-left shadow-xs duration-200 ease-in-out hover:bg-elevation-surface-raised-hovered active:bg-elevation-surface-raised-pressed",
      isSubmitting && "opacity-50"
    )}
  >
    <Link to={link}>
      <>
        <p className="line-clamp-2 min-h-[48px] w-full text-font">{name}</p>
        <div className="flex items-center justify-between pt-4">
          <span className="flex items-center">
            <TaskIcon size={18} />
            <span className="ml-1.5 text-2xs text-font-subtlest">
              {idPrefix}
            </span>
          </span>
          <PriorityIcon priority={priorityId} />
        </div>
      </>
    </Link>
  </div>
);

interface IssueCardContentProps {
  link: string;
  name: string;
  priorityId: PriorityId;
  idPrefix: string;
  isSubmitting: boolean;
}

export const DRAG_ISSUE_CARD = "ISSUE_CARD";
