import { useState } from "react";
import { IoClose } from "react-icons/io5";
import * as Dialog from "@app/components/dialog";
import { Button } from "@app/components/button";
import { ToggleSwitch } from "./toggle-switch";

export const NotificationsModal = ({
  open,
  onOpenChange,
}: NotificationsModalProps): JSX.Element => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

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
            <Dialog.Title>Notifications</Dialog.Title>
            <div className="flex flex-col divide-y divide-border">
              <ToggleSwitch
                label="Email Alerts"
                checked={emailAlerts}
                onCheckedChange={setEmailAlerts}
              />
              <ToggleSwitch
                label="Weekly Summary"
                checked={weeklySummary}
                onCheckedChange={setWeeklySummary}
              />
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Dialog.Close asChild>
                <Button color="neutral" variant="subtlest">
                  Close
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface NotificationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
