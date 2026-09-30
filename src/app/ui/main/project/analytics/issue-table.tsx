import cx from "classix";
import {
  HiOutlineBookmark,
  HiOutlineClipboardList,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { BiGitBranch } from "react-icons/bi";
import { User } from "@domain/user";
import { CategoryType } from "@domain/category";
import { RecentIssueRow } from "@domain/analytics";
import { PriorityIcon } from "@app/components/priority-icon";
import { UserAvatar } from "@app/components/user-avatar";

const typeIcon: Record<string, JSX.Element> = {
  Story: <HiOutlineBookmark size={14} />,
  Task: <HiOutlineClipboardList size={14} />,
  Bug: <HiOutlineExclamationCircle size={14} />,
  "Sub-task": <BiGitBranch size={14} />,
};

const statusLabel: Record<CategoryType, string> = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

const statusClass: Record<CategoryType, string> = {
  TODO: "bg-background-accent-grey-subtler text-font-accent-grey",
  IN_PROGRESS: "bg-background-accent-blue-subtler text-font-accent-blue",
  DONE: "bg-background-accent-green-subtler text-font-accent-green",
};

export const IssueTable = ({ rows, users }: Props): JSX.Element => (
  <div className="flex flex-col">
    <div className="grid grid-cols-[70px_1fr_100px_140px_110px_50px_44px] gap-3 border-b border-border px-1 py-2.5 font-primary-light text-2xs uppercase text-font-subtlest">
      <span>Key</span>
      <span>Summary</span>
      <span>Priority</span>
      <span>Assignee</span>
      <span>Status</span>
      <span className="text-right">Pts</span>
      <span className="text-right">Age</span>
    </div>
    {rows.map((row) => {
      const assignee = users.find((u) => u.id === row.assigneeId);

      return (
        <div
          key={row.key}
          className="grid grid-cols-[70px_1fr_100px_140px_110px_50px_44px] items-center gap-3 border-b border-border px-1 py-3 text-sm text-font"
        >
          <span className="flex items-center gap-1.5 font-primary-light text-2xs text-font-subtlest">
            {typeIcon[row.type]}
            {row.key}
          </span>
          <span className="truncate">{row.title}</span>
          <span className="flex items-center gap-1.5 text-2xs text-font-subtlest">
            <PriorityIcon priority={row.priorityId} size={14} />
            {row.priorityId}
          </span>
          <span className="flex min-w-0 items-center gap-1.5 text-2xs text-font-subtlest">
            {assignee && <UserAvatar {...assignee} size={20} />}
            <span className="truncate">{assignee?.name || "Unassigned"}</span>
          </span>
          <span>
            <span
              className={cx(
                "inline-flex w-fit items-center gap-1 rounded px-2 py-0.5 text-2xs uppercase",
                statusClass[row.status]
              )}
            >
              {statusLabel[row.status]}
            </span>
          </span>
          <span className="text-right text-2xs text-font-subtlest">
            {row.points}
          </span>
          <span className="text-right text-2xs text-font-subtlest">
            {row.age}
          </span>
        </div>
      );
    })}
  </div>
);

interface Props {
  rows: RecentIssueRow[];
  users: User[];
}
