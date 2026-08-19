import { useState } from "react";
import { BiUser, BiBell } from "react-icons/bi";
import { MdWarning } from "react-icons/md";
import { SettingsCard } from "./settings-card";
import { ProfileModal } from "./profile-modal";
import { NotificationsModal } from "./notifications-modal";
import { DangerZoneModal } from "./danger-zone-modal";

export const WorkspaceSettingsView = (): JSX.Element => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);

  return (
    <div className="p-6">
      <h1 className="font-primary-black text-2xl">WORKSPACE SETTINGS</h1>
      <div className="mt-8 grid max-w-[800px] gap-4">
        <SettingsCard
          icon={<BiUser size={20} />}
          title="Profile"
          subtitle="Manage your name and email"
          onClick={() => setProfileOpen(true)}
        />
        <SettingsCard
          icon={<BiBell size={20} />}
          title="Notifications"
          subtitle="Configure alert preferences"
          onClick={() => setNotificationsOpen(true)}
        />
        <SettingsCard
          icon={<MdWarning size={20} />}
          title="Danger Zone"
          subtitle="Irreversible workspace actions"
          variant="danger"
          onClick={() => setDangerOpen(true)}
        />
      </div>

      <ProfileModal open={profileOpen} onOpenChange={setProfileOpen} />
      <NotificationsModal
        open={notificationsOpen}
        onOpenChange={setNotificationsOpen}
      />
      <DangerZoneModal open={dangerOpen} onOpenChange={setDangerOpen} />
    </div>
  );
};
