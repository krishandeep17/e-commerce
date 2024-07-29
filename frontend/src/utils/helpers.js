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

export const calculatePrices = (totalItemsPrice, numItems) => {
  // Calculate the discount price
  const discountPrice = -(5 * totalItemsPrice) / 100;

  // Calculate the tax price
  const taxPrice = 0.15 * totalItemsPrice;

  // Calculate the shipping price
  const shippingPrice = totalItemsPrice > 150 ? 0 : 10 * numItems;

  // Calculate the total price
  const totalPrice = totalItemsPrice + discountPrice + taxPrice + shippingPrice;

  return { discountPrice, taxPrice, shippingPrice, totalPrice };
};
