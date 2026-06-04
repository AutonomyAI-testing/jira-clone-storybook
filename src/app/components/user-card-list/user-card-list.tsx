import { User } from "@domain/user";
import { UserCard } from "./user-card";
import cx from "classix";

export const UserCardList = ({
  users,
  title,
  onUserClick,
  className,
}: UserCardListProps): JSX.Element => {
  return (
    <div className={cx("flex flex-col", className)}>
      {title && (
        <h3 className="mb-3 font-primary-bold text-lg text-font">{title}</h3>
      )}
      {users.length === 0 ? (
        <div className="py-8 text-center text-font-subtle">No users found</div>
      ) : (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} onClick={onUserClick} />
          ))}
        </div>
      )}
    </div>
  );
};

interface UserCardListProps {
  users: User[];
  title?: string;
  onUserClick?: (userId: string) => void;
  className?: string;
}
