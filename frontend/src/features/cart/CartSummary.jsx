import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";

import { calculatePrices, formatCurrency } from "../../utils/helpers";
import { getCartItems, getCartItemsTotalPrice } from "./cartSlice";

export default function CartSummary() {
  const cartItems = useSelector(getCartItems);
  const cartItemsTotalPrice = useSelector(getCartItemsTotalPrice);

  const numCartItems = cartItems?.length;

  const { discountPrice, taxPrice, shippingPrice, totalPrice } =
    calculatePrices(cartItemsTotalPrice, numCartItems);

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table
        sx={{
          minWidth: 235,
          "& td, & th": { fontSize: "1rem" },
        }}
        aria-label="cart summary"
      >
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Summary</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Subtotal &#x28;{numCartItems} item
              {numCartItems > 1 && "s"}&#x29;
            </TableCell>

            <TableCell align="right">
              {formatCurrency(cartItemsTotalPrice)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Discounts
            </TableCell>

            <TableCell align="right" sx={{ color: "error.main" }}>
              {formatCurrency(discountPrice)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Taxes &amp; Charges
            </TableCell>

            <TableCell align="right">{formatCurrency(taxPrice)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Delivery Charges
            </TableCell>

            <TableCell
              align="right"
              sx={!shippingPrice > 0 && { color: "success.main" }}
            >
              {shippingPrice > 0 ? formatCurrency(shippingPrice) : "FREE"}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
              Total
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              {formatCurrency(totalPrice)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2} sx={{ border: "none" }}>
              <Button variant="contained" fullWidth>
                Proceed to checkout
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
