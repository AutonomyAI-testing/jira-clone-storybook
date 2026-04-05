import { CSSProperties } from "react";
import { FiLink2, FiX } from "react-icons/fi";
import {
  SiFigma,
  SiSlack,
  SiLinear,
  SiJira,
} from "react-icons/si";
import cx from "classix";
import { Integration } from "@domain/integration";
import { Button } from "@app/components/button";

export const IntegrationRow = ({
  integration,
  onConnect,
  onRevoke,
}: Props): JSX.Element => {
  const getIcon = (): JSX.Element => {
    const iconProps = { size: 24 };
    
    switch (integration.icon) {
      case "figma":
        return <SiFigma {...iconProps} />;
      case "slack":
        return <SiSlack {...iconProps} />;
      case "linear":
        return <SiLinear {...iconProps} />;
      case "jira":
        return <SiJira {...iconProps} />;
      default:
        return <div className="h-6 w-6 rounded bg-background-neutral" />;
    }
  };

  const description = integration.connected
    ? `Connected to ${integration.name} | Account: ${integration.account}`
    : integration.description;

  return (
    <div className="flex items-center justify-between gap-4 rounded border border-border px-4 py-3 bg-elevation-surface-raised hover:bg-elevation-surface-raised-hovered transition-colors duration-100">
      {/* Icon */}
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded text-icon">
        {getIcon()}
      </div>

      {/* Text Content */}
      <div className="flex-grow min-w-0">
        <div className="font-primary-bold text-font">{integration.name}</div>
        <div className="text-sm text-font-subtle truncate">
          {description}
        </div>
      </div>

      {/* Action Button */}
      <div className="flex-shrink-0">
        {integration.connected ? (
          <Button
            color="danger"
            variant="subtlest"
            size="sm"
            onClick={() => onRevoke(integration.id)}
            className="flex items-center gap-2"
            aria-label={`Revoke ${integration.name} connection`}
          >
            <FiX size={16} />
            <span>Revoke</span>
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            size="sm"
            onClick={() => onConnect(integration.id)}
            className="flex items-center gap-2"
            aria-label={`Connect ${integration.name}`}
          >
            <FiLink2 size={16} />
            <span>Connect</span>
          </Button>
        )}
      </div>
    </div>
  );
};

interface Props {
  integration: Integration;
  onConnect: (integrationId: string) => void;
  onRevoke: (integrationId: string) => void;
}
