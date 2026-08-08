import { Error404 } from "@app/components/error-404";

export default function NotFound404Route() {
  return (
    <div className="bg-elevation-surface">
      <Error404
        message="The page you're looking for has wandered off. Click below to go back."
        href="/"
      />
    </div>
  );
}
