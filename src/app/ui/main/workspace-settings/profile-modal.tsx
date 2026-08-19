import { useState } from "react";
import { IoClose } from "react-icons/io5";
import * as Dialog from "@app/components/dialog";
import { Button } from "@app/components/button";
import { useUserStore } from "@app/store/user.store";

const MOCK_EMAIL = "user@example.com";

const inputClass =
  "w-full rounded border border-border bg-elevation-surface-raised px-3 py-2 text-font focus:outline-none focus:ring-2 focus:ring-border-brand";

const labelClass = "mb-1 block text-sm font-medium text-font-subtle";

export const ProfileModal = ({
  open,
  onOpenChange,
}: ProfileModalProps): JSX.Element => {
  const { user } = useUserStore();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(MOCK_EMAIL);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content className="max-w-[500px]">
            <Dialog.Close asChild>
              <button
                className="absolute right-4 top-4 cursor-pointer rounded-full p-1 text-icon hover:bg-background-neutral-hovered hover:text-icon-brand"
                aria-label="Close"
              >
                <IoClose size={20} />
              </button>
            </Dialog.Close>
            <Dialog.Title>Profile</Dialog.Title>
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="profile-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="profile-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="profile-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="profile-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button color="neutral" variant="subtlest">
                  Close
                </Button>
              </Dialog.Close>
              <Button
                color="primary"
                disabled
                title="Changes are not persisted in this demo"
              >
                Save changes
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface ProfileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
