import type { LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Error404 } from "@app/components/error-404";

export const loader: LoaderFunction = async () => {
  throw new Response("Not Found", {
    status: 404,
  });
};

export function CatchBoundary() {
  useEffect(() => {
    toast.warning("Try to go back to the previous page.");
  }, []);

  return (
    <div className="flex h-full items-center justify-center">
      <Error404 />
    </div>
  );
}

// This will never render
export default function Error404Route() {
  return null;
}
