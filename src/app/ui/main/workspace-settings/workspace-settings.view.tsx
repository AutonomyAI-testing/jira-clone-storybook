import { useState } from "react";
import cx from "classix";
import { MdOutlinePerson, MdOutlineNotifications, MdOutlineWarningAmber } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import * as Dialog from "@app/components/dialog";
import * as AlertDialog from "@app/components/alert-dialog";
import { Button } from "@app/components/button";
import { useUserStore } from "@app/store/user.store";

// ─── Types ───────────────────────────────────────────────────────────────────

type ModalType = "profile" | "notifications" | "danger" | null;

interface SettingsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  danger?: boolean;
  onClick: () => void;
}

// ─── Settings Card ────────────────────────────────────────────────────────────

const SettingsCard = ({
  icon,
  title,
  description,
  danger = false,
  onClick,
}: SettingsCardProps): JSX.Element => (
  <button
    onClick={onClick}
    className={cx(
      "group flex h-[140px] w-full max-w-[380px] cursor-pointer flex-col justify-between rounded bg-elevation-surface-raised p-5 text-left shadow-sm outline outline-2 outline-transparent duration-100 ease-linear",
      danger
        ? "hover:-translate-y-0.5 hover:bg-background-danger-hovered hover:shadow-md hover:outline-border-danger"
        : "hover:-translate-y-0.5 hover:bg-background-brand-subtlest-hovered hover:shadow-md hover:outline-border-brand"
    )}
  >
    <span
      className={cx(
        "text-icon",
        danger ? "group-hover:text-font-danger" : "group-hover:text-icon-brand"
      )}
    >
      {icon}
    </span>
    <div>
      <h2
        className={cx(
          "font-primary-black text-lg",
          danger ? "group-hover:text-font-danger" : "group-hover:text-font-brand"
        )}
      >
        {title}
      </h2>
      <p className="mt-1 text-sm text-font-subtle">{description}</p>
    </div>
  </button>
);

// ─── Toggle Switch ────────────────────────────────────────────────────────────

const ToggleSwitch = ({
  checked,
  onChange,
  label,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  id: string;
}): JSX.Element => (
  <div className="flex items-center justify-between py-3">
    <label htmlFor={id} className="cursor-pointer select-none text-sm text-font">
      {label}
    </label>
    <button
      role="switch"
      id={id}
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cx(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-border-brand",
        checked ? "bg-background-brand-bold" : "bg-background-neutral-bold"
      )}
    >
      <span
        className={cx(
          "inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  </div>
);

// ─── Profile Modal Content ────────────────────────────────────────────────────

const ProfileModalContent = (): JSX.Element => {
  const { user } = useUserStore();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState("user@example.com");

  const labelClass = "block mb-1 text-sm font-medium text-font-subtle";
  const inputClass =
    "w-full rounded border border-border bg-elevation-surface px-3 py-2 text-sm text-font placeholder-font-disabled outline-none focus:border-border-brand focus:ring-1 focus:ring-border-brand";

  return (
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
          placeholder="Your name"
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
          placeholder="you@example.com"
        />
      </div>
      <div className="mt-2 flex justify-end">
        <Dialog.Close asChild>
          <Button color="primary" variant="contained" aria-label="Save profile">
            Save
          </Button>
        </Dialog.Close>
      </div>
    </div>
  );
};

// ─── Notifications Modal Content ──────────────────────────────────────────────

const NotificationsModalContent = (): JSX.Element => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="flex flex-col divide-y divide-border">
      <ToggleSwitch
        id="notif-email-alerts"
        label="Email alerts"
        checked={emailAlerts}
        onChange={setEmailAlerts}
      />
      <ToggleSwitch
        id="notif-weekly-summary"
        label="Weekly summary"
        checked={weeklySummary}
        onChange={setWeeklySummary}
      />
    </div>
  );
};

// ─── Danger Zone Modal Content ────────────────────────────────────────────────

const DangerZoneModalContent = (): JSX.Element => (
  <div className="flex flex-col gap-4">
    <p className="text-sm text-font-subtle">
      Permanently delete this workspace and all its data. This action{" "}
      <strong className="text-font-danger">cannot be undone</strong>.
    </p>
    <div className="flex justify-end">
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <Button
            color="danger"
            variant="contained"
            aria-label="Delete workspace"
          >
            Delete workspace
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay />
          <AlertDialog.Content>
            <AlertDialog.Title>Delete workspace?</AlertDialog.Title>
            <AlertDialog.Description>
              This action is permanent and cannot be undone. Are you sure you
              want to delete this workspace?
            </AlertDialog.Description>
            <div className="mt-8 flex w-full justify-end gap-4">
              <AlertDialog.Cancel aria-label="Cancel delete">
                Cancel
              </AlertDialog.Cancel>
              <AlertDialog.Action aria-label="Confirm delete workspace">
                Delete
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  </div>
);

// ─── Modal Wrapper ────────────────────────────────────────────────────────────

const MODAL_CONFIG: Record<
  NonNullable<ModalType>,
  { title: string; content: () => JSX.Element }
> = {
  profile: {
    title: "Profile",
    content: ProfileModalContent,
  },
  notifications: {
    title: "Notifications",
    content: NotificationsModalContent,
  },
  danger: {
    title: "Danger zone",
    content: DangerZoneModalContent,
  },
};

// ─── Main View ────────────────────────────────────────────────────────────────

export const WorkspaceSettingsView = (): JSX.Element => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const closeModal = () => setOpenModal(null);

  const activeConfig = openModal ? MODAL_CONFIG[openModal] : null;
  const ActiveContent = activeConfig?.content ?? null;

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">WORKSPACE SETTINGS</h1>

      {/* Cards grid */}
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,_380px)] gap-6">
        <SettingsCard
          icon={<MdOutlinePerson size={28} />}
          title="Profile"
          description="Update your display name and email address."
          onClick={() => setOpenModal("profile")}
        />
        <SettingsCard
          icon={<MdOutlineNotifications size={28} />}
          title="Notifications"
          description="Manage email alerts and weekly digest preferences."
          onClick={() => setOpenModal("notifications")}
        />
        <SettingsCard
          icon={<MdOutlineWarningAmber size={28} />}
          title="Danger zone"
          description="Delete your workspace. This cannot be undone."
          danger
          onClick={() => setOpenModal("danger")}
        />
      </div>

      {/* Shared Dialog */}
      <Dialog.Root open={openModal !== null} onOpenChange={(v) => !v && closeModal()}>
        <Dialog.Portal>
          <Dialog.Overlay>
            <Dialog.Content className="max-w-[500px]">
              {/* Header row */}
              <div className="mb-6 flex items-center justify-between">
                <Dialog.Title className="mb-0">
                  {activeConfig?.title ?? ""}
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    aria-label="Close modal"
                    className="rounded p-1 text-icon hover:bg-background-neutral-hovered hover:text-font"
                  >
                    <IoClose size={20} />
                  </button>
                </Dialog.Close>
              </div>

              {/* Dynamic content */}
              {ActiveContent && <ActiveContent />}
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
