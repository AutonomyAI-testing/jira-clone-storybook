import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <div className="flex h-full min-h-screen items-center justify-center">
      <Error404
        message="The page you're looking for has vanished into thin air."
        href="/"
      />
    </div>
  );
}
