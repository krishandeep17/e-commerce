import { Grid } from "@mui/material";

import CartSummary from "./CartSummary";
import CartTable from "./CartTable";

export default function CartDetail() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={8}>
        <CartTable />
      </Grid>

      <Grid item xs={12} md={4}>
        <CartSummary />
      </Grid>
    </Grid>
  );
}
