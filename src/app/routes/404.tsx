import { ErrorPageView } from "@app/ui/error-page";

export default function NotFound404Route() {
  return <ErrorPageView errorCode={404} />;
}
