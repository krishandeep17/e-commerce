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

import { formatCurrency } from "../../utils/helpers";

export default function OrderSummary() {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table
        sx={{
          minWidth: 235,
          "& td, & th": { fontSize: "1rem" },
        }}
        aria-label="order summary"
      >
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>Order Summary</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Subtotal &#x28;4 items&#x29;
            </TableCell>

            <TableCell align="right">{formatCurrency(2646)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Discounts
            </TableCell>

            <TableCell align="right" sx={{ color: "error.main" }}>
              {formatCurrency(-350)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Taxes &amp; Charges
            </TableCell>

            <TableCell align="right">{formatCurrency(24)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Delivery Charges
            </TableCell>

            <TableCell align="right" sx={{ color: "success.main" }}>
              FREE
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row" sx={{ fontWeight: "bold" }}>
              Total
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              {formatCurrency(2320)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2} sx={{ border: "none" }}>
              <Button variant="contained" fullWidth>
                Continue to checkout
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
