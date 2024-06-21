import { Divider, Paper, Stack, Typography } from "@mui/material";

import OrderTable from "../features/orders/OrderTable";

export default function Orders() {
  return (
    <Stack
      component={Paper}
      variant="outlined"
      py={2}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography component="h5" variant="h6" fontWeight="700" px={2}>
        My Orders
      </Typography>

      <OrderTable />
    </Stack>
  );
}
