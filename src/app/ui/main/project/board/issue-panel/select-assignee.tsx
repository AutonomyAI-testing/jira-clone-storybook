import { useState } from "react";
import { User, UserId } from "@domain/user";
import { useProjectStore } from "@app/ui/main/project";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export const SelectAssignee = ({ initAssignee }: Props): JSX.Element => {
  const projectStore = useProjectStore();
  const users = projectStore.project.users;

  const [selectedValue, setSelectedValue] = useState<User>(initAssignee);

  const onValueChange = (userId: UserId) => {
    const assignee = projectStore.project.users.find(
      (user) => user.id === userId
    );

    if (assignee) {
      setSelectedValue(assignee);
    }
  };

  return (
    <Select.Root
      name="assignee"
      defaultValue={initAssignee.id}
      onValueChange={onValueChange}
    >
      <Select.Trigger aria-label="Open assignee select">
        <div className="mr-2">
          <UserAvatar {...selectedValue} size={32} />
        </div>
        <Select.Value />
        <Select.TriggerIcon />
      </Select.Trigger>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
          {users.map((user, index) => (
            <Select.Item key={index} value={user.id}>
              <Select.ItemIndicator />
              <UserAvatar {...user} />
              <Select.ItemText>{user.name}</Select.ItemText>
            </Select.Item>
          ))}
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Root>
  );
};

interface Props {
  initAssignee: User;
}
