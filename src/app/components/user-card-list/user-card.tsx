import { User } from "@domain/user";
import { UserAvatar } from "@app/components/user-avatar";
import cx from "classix";

export const UserCard = ({
  user,
  onClick,
  className,
}: UserCardProps): JSX.Element => {
  return (
    <div
      className={cx(
        "flex h-full flex-col items-center gap-3 rounded-md bg-elevation-surface-sunken p-5 text-center transition-colors duration-150",
        onClick && "cursor-pointer",
        onClick &&
          "hover:bg-elevation-surface-hovered hover:shadow-md active:bg-elevation-surface-pressed",
        className
      )}
      onClick={() => onClick?.(user.id)}
    >
      <UserAvatar {...user} size={56} />
      <div className="flex w-full flex-col items-center gap-1">
        <span className="truncate font-medium text-font">{user.name}</span>
        <span className="inline-flex items-center rounded-full bg-background-brand-subtlest px-2.5 py-0.5 text-xs font-medium text-font-brand">
          Active
        </span>
      </div>
    </div>
  );
};

interface UserCardProps {
  user: User;
  onClick?: (userId: string) => void;
  className?: string;
}
