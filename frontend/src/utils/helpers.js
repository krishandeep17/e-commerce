import { formatDistanceToNow, parseISO } from "date-fns";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export const formatRelativeDate = (dateString) =>
  formatDistanceToNow(parseISO(dateString), { addSuffix: true }).replace(
    "about ",
    ""
  );
