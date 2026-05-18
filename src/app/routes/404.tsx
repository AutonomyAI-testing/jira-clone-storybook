import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <Error404
      title="Page not found"
      subtitle="Looks like this page got lost in the void. Don't worry, let's get you back on track."
      primaryText="Go home"
      primaryHref="/"
      secondaryText="Go back"
    />
  );
}
