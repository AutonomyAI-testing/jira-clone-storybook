import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <Error404
      message="The page you're looking for has vanished into the digital void."
      href="/"
    />
  );
}
