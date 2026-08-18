import { useState, useEffect, useRef } from "react";
import * as Dialog from "@app/components/dialog";
import { Button } from "@app/components/button";
import cx from "classix";
import { IoClose } from "react-icons/io5";
import { HiUser, HiBell, HiExclamationCircle } from "react-icons/hi";

type ModalType = "profile" | "notifications" | "danger" | null;

export const WorkspaceSettingsView = () => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const close = () => setOpenModal(null);

  return (
    <div className="flex-grow overflow-y-auto p-10">
      <h1 className="mb-2 font-primary-black text-3xl text-font">
        Workspace Settings
      </h1>
      <p className="mb-8 text-font-subtlest">
        Manage your workspace preferences and account settings.
      </p>

      <div className="flex flex-wrap gap-6">
        <SettingsCard
          icon={<HiUser size={28} className="text-icon-brand" />}
          title="Profile"
          description="Update your name and email address."
          onClick={() => setOpenModal("profile")}
        />
        <SettingsCard
          icon={<HiBell size={28} className="text-icon-brand" />}
          title="Notifications"
          description="Choose what updates you receive."
          onClick={() => setOpenModal("notifications")}
        />
        <SettingsCard
          icon={<HiExclamationCircle size={28} className="text-icon-danger" />}
          title="Danger zone"
          description="Irreversible actions for your workspace."
          onClick={() => setOpenModal("danger")}
          danger
        />
      </div>

      {/* Profile Modal */}
      <ModalShell
        open={openModal === "profile"}
        onClose={close}
        title="Profile"
      >
        <ProfileModalContent onClose={close} />
      </ModalShell>

      {/* Notifications Modal */}
      <ModalShell
        open={openModal === "notifications"}
        onClose={close}
        title="Notifications"
      >
        <NotificationsModalContent />
      </ModalShell>

      {/* Danger Zone Modal */}
      <ModalShell
        open={openModal === "danger"}
        onClose={close}
        title="Danger zone"
      >
        <DangerModalContent onClose={close} />
      </ModalShell>
    </div>
  );
};

/* ─── Settings Card ─── */

interface SettingsCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  danger?: boolean;
}

const SettingsCard = ({
  icon,
  title,
  description,
  onClick,
  danger,
}: SettingsCardProps) => (
  <button
    onClick={onClick}
    className={cx(
      "group flex w-[240px] flex-col items-start gap-3 rounded-lg border p-6 text-left shadow-sm transition-shadow duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2",
      danger
        ? "border-border-danger bg-background-danger hover:bg-background-danger-hovered focus-visible:ring-background-danger-bold"
        : "border-border bg-elevation-surface-raised hover:bg-background-neutral focus-visible:ring-background-brand-bold"
    )}
  >
    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-elevation-surface">
      {icon}
    </span>
    <div>
      <p
        className={cx(
          "font-primary-bold text-base",
          danger ? "text-font-danger" : "text-font"
        )}
      >
        {title}
      </p>
      <p className="mt-1 text-sm text-font-subtlest">{description}</p>
    </div>
  </button>
);

/* ─── Modal Shell ─── */

interface ModalShellProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalShell = ({ open, onClose, title, children }: ModalShellProps) => {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-elevation-surface px-8 py-6 shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-primary-black text-xl text-font">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-7 w-7 items-center justify-center rounded text-icon hover:bg-background-neutral hover:text-icon-brand"
          >
            <IoClose size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

/* ─── Profile Modal Content ─── */

const ProfileModalContent = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("Daniel Serrano");
  const [email, setEmail] = useState("daniel@example.com");

  return (
    <div className="flex flex-col gap-4">
      <Field label="Name">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded border border-border bg-elevation-surface-sunken px-3 py-2 text-sm text-font outline-none focus:border-border-brand"
        />
      </Field>
      <Field label="Email">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-border bg-elevation-surface-sunken px-3 py-2 text-sm text-font outline-none focus:border-border-brand"
        />
      </Field>
      <div className="mt-2 flex justify-end gap-2">
        <Button color="neutral" variant="subtlest" onClick={onClose}>
          Cancel
        </Button>
        <Button color="primary" variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
};

/* ─── Notifications Modal Content ─── */

const NotificationsModalContent = () => {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <Toggle
        label="Email alerts"
        description="Get notified about mentions and assignments."
        checked={emailAlerts}
        onChange={setEmailAlerts}
      />
      <Toggle
        label="Weekly summary"
        description="Receive a weekly digest of activity."
        checked={weeklySummary}
        onChange={setWeeklySummary}
      />
    </div>
  );
};

/* ─── Danger Modal Content ─── */

const DangerModalContent = ({ onClose }: { onClose: () => void }) => (
  <div className="flex flex-col gap-4">
    <p className="text-sm text-font-subtlest">
      This action is permanent and cannot be undone. All projects, issues, and
      data will be deleted.
    </p>
    <div className="mt-2 flex justify-end gap-2">
      <Button color="neutral" variant="subtlest" onClick={onClose}>
        Cancel
      </Button>
      <Button color="danger" variant="contained">
        Delete workspace
      </Button>
    </div>
  </div>
);

/* ─── Reusable helpers ─── */

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-font-subtle">{label}</label>
    {children}
  </div>
);

interface ToggleProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}

const Toggle = ({ label, description, checked, onChange }: ToggleProps) => (
  <div className="flex items-center justify-between gap-4">
    <div>
      <p className="text-sm font-semibold text-font">{label}</p>
      {description && (
        <p className="text-xs text-font-subtlest">{description}</p>
      )}
    </div>
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cx(
        "relative h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-background-brand-bold",
        checked ? "bg-background-brand-bold" : "bg-background-neutral-bold"
      )}
    >
      <span
        className={cx(
          "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200",
          checked ? "translate-x-[22px]" : "translate-x-0.5"
        )}
      />
    </button>
  </div>
);
