import {
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineTag,
  HiOutlineDownload,
  HiOutlineRefresh,
} from "react-icons/hi";
import { SprintInfo } from "@domain/analytics";
import { Button } from "@app/components/button";
import { FilterChip } from "./filter-chip";

export const AnalyticsHeader = ({ sprint }: Props): JSX.Element => (
  <div className="flex flex-wrap items-center justify-between gap-3">
    <p className="font-primary-light text-xs text-font-subtlest">
      {sprint.name} · {sprint.range} · Day {sprint.day} of {sprint.length}
    </p>
    <div className="flex items-center gap-2">
      <FilterChip
        icon={<HiOutlineCalendar size={14} />}
        label="Last 6 sprints"
        active
      />
      <FilterChip
        icon={<HiOutlineUserGroup size={14} />}
        label="All assignees"
      />
      <FilterChip icon={<HiOutlineTag size={14} />} label="All issue types" />
      <div className="mx-1 h-6 w-px bg-border" />
      <Button
        color="neutral"
        variant="subtlest"
        aria-label="Export analytics"
      >
        <HiOutlineDownload size={14} />
        Export
      </Button>
      <Button color="primary" aria-label="Refresh analytics">
        <HiOutlineRefresh size={14} />
        Refresh
      </Button>
    </div>
  </div>
);

interface Props {
  sprint: SprintInfo;
}
