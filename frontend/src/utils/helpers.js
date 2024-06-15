import { formatDistanceToNow, parseISO } from "date-fns";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export function formatRelativeDate(dateString) {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true }).replace("about ", "");
}
