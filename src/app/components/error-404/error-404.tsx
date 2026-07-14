import { ErrorPageView } from "@app/ui/error-page";

export const Error404 = ({ message, href }: Props) => {
  // Build custom actions if legacy href/message are provided
  const actions = href
    ? [{ label: message || "Go home", href, color: "primary" as const }]
    : undefined;

  return (
    <ErrorPageView
      errorCode={404}
      description={!href && message ? message : undefined}
      actions={actions}
    />
  );
};

interface Props {
  message?: string;
  href?: string;
}
