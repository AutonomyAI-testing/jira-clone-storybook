export type IntegrationId = string;

export type Integration = {
  id: IntegrationId;
  name: string;
  description: string;
  icon: string;
  connected: boolean;
  account?: string;
  connectedAt?: Date;
};
