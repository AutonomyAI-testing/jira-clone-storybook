import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MdClose } from "react-icons/md";
import cx from "classix";
import { Button } from "@app/components/button";

type ModalType = "profile" | "notifications" | "danger" | null;

export const WorkspaceSettingsView = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const closeModal = () => setOpenModal(null);

  return (
    <div className="p-8">
      <h1 className="mb-8 font-primary-black text-2xl text-font">
        Workspace Settings
      </h1>

      {/* Cards row */}
      <div className="flex flex-wrap gap-6">
        <SettingsCard
          title="Profile"
          description="Update your name and email address."
          icon={<UserIcon />}
          onClick={() => setOpenModal("profile")}
        />
        <SettingsCard
          title="Notifications"
          description="Manage how and when you receive alerts."
          icon={<BellIcon />}
          onClick={() => setOpenModal("notifications")}
        />
        <SettingsCard
          title="Danger zone"
          description="Irreversible workspace actions."
          icon={<DangerIcon />}
          danger
          onClick={() => setOpenModal("danger")}
        />
      </div>

      {/* Profile Modal */}
      <Dialog.Root
        open={openModal === "profile"}
        onOpenChange={(open) => !open && closeModal()}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            className={cx(
              "fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center",
              "bg-black/40 backdrop-blur-sm"
            )}
          >
            <Dialog.Content
              className="relative w-full max-w-md rounded-lg bg-elevation-surface-overlay p-6 shadow-lg focus:outline-none"
              onEscapeKeyDown={closeModal}
            >
              <Dialog.Title className="mb-6 font-primary-black text-2xl text-font">
                Profile
              </Dialog.Title>

              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded text-font-subtlest hover:bg-background-neutral-hovered hover:text-font border-none bg-transparent"
                  aria-label="Close dialog"
                >
                  <MdClose size={20} />
                </button>
              </Dialog.Close>

              <ProfileForm onClose={closeModal} />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Notifications Modal */}
      <Dialog.Root
        open={openModal === "notifications"}
        onOpenChange={(open) => !open && closeModal()}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            className={cx(
              "fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center",
              "bg-black/40 backdrop-blur-sm"
            )}
          >
            <Dialog.Content
              className="relative w-full max-w-md rounded-lg bg-elevation-surface-overlay p-6 shadow-lg focus:outline-none"
              onEscapeKeyDown={closeModal}
            >
              <Dialog.Title className="mb-6 font-primary-black text-2xl text-font">
                Notifications
              </Dialog.Title>

              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded text-font-subtlest hover:bg-background-neutral-hovered hover:text-font border-none bg-transparent"
                  aria-label="Close dialog"
                >
                  <MdClose size={20} />
                </button>
              </Dialog.Close>

              <NotificationsForm />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Danger Zone Modal */}
      <Dialog.Root
        open={openModal === "danger"}
        onOpenChange={(open) => !open && closeModal()}
      >
        <Dialog.Portal>
          <Dialog.Overlay
            className={cx(
              "fixed top-0 left-0 bottom-0 right-0 z-50 flex items-center justify-center",
              "bg-black/40 backdrop-blur-sm"
            )}
          >
            <Dialog.Content
              className="relative w-full max-w-md rounded-lg bg-elevation-surface-overlay p-6 shadow-lg focus:outline-none"
              onEscapeKeyDown={closeModal}
            >
              <Dialog.Title className="mb-6 font-primary-black text-2xl text-font">
                Danger zone
              </Dialog.Title>

              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded text-font-subtlest hover:bg-background-neutral-hovered hover:text-font border-none bg-transparent"
                  aria-label="Close dialog"
                >
                  <MdClose size={20} />
                </button>
              </Dialog.Close>

              <DangerZoneForm onClose={closeModal} />
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

/* -------- Settings Card -------- */

interface SettingsCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  danger?: boolean;
  onClick: () => void;
}

const SettingsCard = ({
  title,
  description,
  icon,
  danger = false,
  onClick,
}: SettingsCardProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "flex w-64 cursor-pointer flex-col items-start gap-3 rounded-lg border-none p-6 text-left shadow-sm duration-150",
        "bg-elevation-surface-raised hover:bg-elevation-surface-raised-hovered active:bg-elevation-surface-raised-pressed",
        danger && "border border-border-danger"
      )}
    >
      <span
        className={cx(
          "flex h-10 w-10 items-center justify-center rounded-full",
          danger
            ? "bg-background-danger text-font-danger"
            : "bg-background-brand-subtlest text-icon-brand"
        )}
      >
        {icon}
      </span>
      <span
        className={cx(
          "font-primary-bold text-lg",
          danger ? "text-font-danger" : "text-font"
        )}
      >
        {title}
      </span>
      <span className="text-sm text-font-subtlest">{description}</span>
    </button>
  );
};

/* -------- Profile Form -------- */

const ProfileForm = ({ onClose }: { onClose: () => void }): JSX.Element => {
  const [name, setName] = useState("Woody");
  const [email, setEmail] = useState("woody@toybox.com");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="profile-name"
          className="text-sm font-primary-bold text-font"
        >
          Name
        </label>
        <input
          id="profile-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={cx(
            "w-full rounded px-3 py-2 text-sm text-font",
            "bg-background-input outline outline-2 outline-border-input",
            "hover:bg-background-input-hovered",
            "focus:bg-background-input-pressed focus:outline-border-focused focus:outline-none focus:ring-2 focus:ring-border-focused",
            "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest"
          )}
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="profile-email"
          className="text-sm font-primary-bold text-font"
        >
          Email
        </label>
        <input
          id="profile-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cx(
            "w-full rounded px-3 py-2 text-sm text-font",
            "bg-background-input outline outline-2 outline-border-input",
            "hover:bg-background-input-hovered",
            "focus:bg-background-input-pressed focus:outline-border-focused focus:outline-none focus:ring-2 focus:ring-border-focused",
            "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest"
          )}
          placeholder="your@email.com"
        />
      </div>

      <div className="mt-2 flex justify-end">
        <Button color="primary" variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
};

/* -------- Notifications Form -------- */

const NotificationsForm = (): JSX.Element => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <ToggleRow
        id="email-alerts"
        label="Email alerts"
        checked={emailAlerts}
        onCheckedChange={setEmailAlerts}
      />
      <ToggleRow
        id="weekly-summary"
        label="Weekly summary"
        checked={weeklySummary}
        onCheckedChange={setWeeklySummary}
      />
    </div>
  );
};

interface ToggleRowProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const ToggleRow = ({
  id,
  label,
  checked,
  onCheckedChange,
}: ToggleRowProps): JSX.Element => {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={id} className="cursor-pointer text-sm text-font">
        {label}
      </label>
      <button
        id={id}
        role="switch"
        aria-checked={checked}
        onClick={() => onCheckedChange(!checked)}
        className={cx(
          "relative h-6 w-11 cursor-pointer rounded-full border-none transition-colors duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-border-focused",
          checked
            ? "bg-background-brand-bold"
            : "bg-background-neutral-bold"
        )}
      >
        <span
          className={cx(
            "absolute top-0.5 block h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
            checked ? "translate-x-[22px]" : "translate-x-0.5"
          )}
        />
      </button>
    </div>
  );
};

/* -------- Danger Zone Form -------- */

const DangerZoneForm = ({
  onClose,
}: {
  onClose: () => void;
}): JSX.Element => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-font-subtlest">
        This action is irreversible. Deleting the workspace will permanently
        remove all projects, issues, and data associated with it.
      </p>
      <div className="flex justify-end gap-3">
        <Button color="neutral" variant="subtlest" onClick={onClose}>
          Cancel
        </Button>
        <Button color="danger" variant="contained">
          Delete workspace
        </Button>
      </div>
    </div>
  );
};

/* -------- Icon helpers -------- */

const UserIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BellIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const DangerIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
