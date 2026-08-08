import type { LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import { useParams } from "@remix-run/react";
import { toast } from "react-toastify";
import { ProjectId } from "@domain/project";
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

  return <Error404 />;
}

// This will never render
export default function Error404Route() {
  return null;
}
