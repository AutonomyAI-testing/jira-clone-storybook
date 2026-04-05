import { Integration } from "@domain/integration";
import { IntegrationRow } from "@app/components/integration-row";

export const IntegrationPanel = ({
  integrations,
  onConnect,
  onRevoke,
}: Props): JSX.Element => {
  return (
    <div className="space-y-3">
      {integrations.map((integration) => (
        <IntegrationRow
          key={integration.id}
          integration={integration}
          onConnect={onConnect}
          onRevoke={onRevoke}
        />
      ))}
    </div>
  );
};

interface Props {
  integrations: Integration[];
  onConnect: (integrationId: string) => void;
  onRevoke: (integrationId: string) => void;
}
