import { Divider, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { format } from "date-fns";
import { formatCurrency } from "../../utils/helpers";

export default function OrderTable() {
  const orders = [
    {
      id: "6568742fa63bff8fe68032f3",
      amount: 1499,
      createdAt: "2023-12-27T22:39:02+05:30",
    },
    {
      id: "655e089644fa280bdf620207",
      amount: 2099,
      createdAt: "2023-09-08T00:57:52+05:30",
    },
    {
      id: "6558f15b9868c7d22deb8306",
      amount: 799,
      createdAt: "2024-03-27T00:21:34+05:30",
    },
  ];

  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      {orders?.map((order) => (
        <Stack
          key={order?.id}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={1.5}
          px={2}
          sx={{
            "@media (max-width: 480px)": {
              flexDirection: "column",
              alignItems: "initial",
            },
          }}
        >
          <Stack spacing={0.5} overflow="hidden">
            <Typography
              fontWeight="bold"
              whiteSpace="nowrap"
              overflow="hidden"
              textOverflow="ellipsis"
              textTransform="capitalize"
            >
              Order {order?.id}
            </Typography>
            <Typography>Total&#x3A; {formatCurrency(order?.amount)}</Typography>
            <Typography variant="body2">
              Ordered On&#x3A;{" "}
              {format(new Date(order?.createdAt), "MMM dd yyyy, hh:mm aa")}
            </Typography>
          </Stack>

          <Link
            component={RouterLink}
            to={order?.id}
            underline="none"
            color="text.secondary"
            sx={{
              "&:hover, &:active": {
                color: "text.primary",
              },
            }}
          >
            View Order
          </Link>
        </Stack>
      ))}
    </Stack>
  );
}
