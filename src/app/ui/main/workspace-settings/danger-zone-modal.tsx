import { useNavigate } from "@remix-run/react";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";
import * as Dialog from "@app/components/dialog";
import * as AlertDialog from "@app/components/alert-dialog";
import { Button } from "@app/components/button";

export const DangerZoneModal = ({
  open,
  onOpenChange,
}: DangerZoneModalProps): JSX.Element => {
  const navigate = useNavigate();

  const handleDelete = () => {
    onOpenChange(false);
    toast.success("Workspace deleted.");
    navigate("/projects");
  };

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
            <Dialog.Title className="text-font-danger">
              Danger Zone
            </Dialog.Title>
            <p className="mb-6 text-sm text-font-subtle">
              The following actions are irreversible. Please proceed with
              caution.
            </p>
            <div className="rounded border border-border-danger p-4">
              <h4 className="font-primary-bold text-font">
                Delete Workspace
              </h4>
              <p className="mt-1 text-sm text-font-subtle">
                Permanently delete this workspace and all of its data. This
                action cannot be undone.
              </p>
              <div className="mt-4">
                <AlertDialog.Root>
                  <AlertDialog.Trigger asChild>
                    <Button color="danger">Delete Workspace</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Portal>
                    <AlertDialog.Overlay />
                    <AlertDialog.Content>
                      <AlertDialog.Title>Delete Workspace?</AlertDialog.Title>
                      <p className="text-sm text-font-subtle">
                        This will permanently delete the workspace and all its
                        data. This action cannot be undone.
                      </p>
                      <AlertDialog.Description>
                        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                        <AlertDialog.Action onClick={handleDelete}>
                          Delete
                        </AlertDialog.Action>
                      </AlertDialog.Description>
                    </AlertDialog.Content>
                  </AlertDialog.Portal>
                </AlertDialog.Root>
              </div>
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

interface DangerZoneModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
