import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <Error404
      message="Looks like you're lost in the void."
      href="/"
    />
  );
}
