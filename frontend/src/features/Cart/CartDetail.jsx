import { Grid } from "@mui/material";

import CartTable from "./CartTable";
import OrderSummary from "./OrderSummary";

export default function CartDetail() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <CartTable />
      </Grid>

      <Grid item xs={12} md={4}>
        <OrderSummary />
      </Grid>
    </Grid>
  );
}
