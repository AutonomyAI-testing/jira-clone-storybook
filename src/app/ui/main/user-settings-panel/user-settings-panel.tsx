import { useState } from "react";
import * as Dialog from "@app/components/dialog";
import { Integration, integrationsMock } from "@domain/integration";
import { IntegrationRow } from "@app/components/integration-row";

export const UserSettingsPanel = ({
  open = true,
  onOpenChange,
}: Props): JSX.Element => {
  const [integrations, setIntegrations] = useState<Integration[]>(integrationsMock);

  const handleConnect = (integrationId: string): void => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === integrationId
          ? {
              ...integration,
              connected: true,
              account: `user@example.com`,
              connectedAt: new Date(),
            }
          : integration
      )
    );
  };

  const handleRevoke = (integrationId: string): void => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === integrationId
          ? {
              ...integration,
              connected: false,
              account: undefined,
              connectedAt: undefined,
            }
          : integration
      )
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>User Settings</Dialog.Title>
          <p className="mb-8 text-font-subtle">
            Manage your user settings preferences
          </p>

          {/* Integrations List */}
          <div className="space-y-3">
            {integrations.map((integration) => (
              <IntegrationRow
                key={integration.id}
                integration={integration}
                onConnect={handleConnect}
                onRevoke={handleRevoke}
              />
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

interface Props {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
