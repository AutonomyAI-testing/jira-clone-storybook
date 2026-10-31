import { useLocation } from "@remix-run/react";
import { useSortBy } from "./useSortBy";

/**
 * The board URL a panel was opened from, keeping the board's own sort order.
 * Panels close back onto the board, and returning there without `sortBy` would
 * silently reset the order the user picked.
 */
export const useBoardUrl = (): string => {
  const location = useLocation();
  const sortBy = useSortBy();
  const boardUrl = location.pathname.split("/issue")[0];

  return sortBy ? `${boardUrl}?sortBy=${sortBy}` : boardUrl;
};
