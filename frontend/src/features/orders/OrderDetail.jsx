import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";

import ProductImage from "../../components/ProductImage";
import { products } from "../data/data-products";
import { formatCurrency } from "../utils/helpers";

export default function OrderDetail() {
  const { id: orderId } = useParams();

  const orderedProducts = products.slice(0, 4);

  const totalAmount = useMemo(
    () =>
      orderedProducts
        .map((product) => product.price)
        .reduce((acc, cur) => acc + cur, 0),
    [orderedProducts]
  );

  return (
    <Stack
      component={Paper}
      variant="outlined"
      py={2}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Box overflow="hidden" px={2}>
        <Typography
          fontWeight="bold"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          component="h5"
          variant="h6"
        >
          Order {orderId}
        </Typography>
      </Box>

      <Stack
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Stack spacing={1} px={2}>
          <Typography>ID&#x3A; {orderId}</Typography>
          <Typography>Payment Method&#x3A; PayPal</Typography>
          <Typography variant="body2">
            Ordered On&#x3A; {format(new Date(), "MMM dd yyyy, hh:mm aa")}
          </Typography>
          <Typography variant="body2">
            Delivered On&#x3A; {format(new Date(), "MMM dd yyyy, hh:mm aa")}
          </Typography>
          <Typography fontWeight="bold">
            Total&#x3A; {formatCurrency(totalAmount)}
          </Typography>
        </Stack>

        {orderedProducts?.map((product) => (
          <Box
            key={product?._id}
            component={NavLink}
            to={`/products/${product._id}`}
            color="inherit"
            display="grid"
            gridTemplateColumns="auto 1fr"
            alignItems="flex-start"
            gap={{ xs: 2, sm: 3 }}
            px={2}
            sx={{
              textDecoration: "none",
            }}
          >
            <ProductImage
              src={product?.image}
              size="50"
              alt={`${product?.name} Image`}
              p={1}
            />

            <Stack spacing={0.5} overflow="hidden">
              <Typography
                fontWeight="bold"
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {product?.name}
              </Typography>
              <Typography>Quantity&#x3A; 1</Typography>
              <Typography>{formatCurrency(product?.price)}</Typography>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
