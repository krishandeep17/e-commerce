import { Box, Divider, Stack, Typography } from "@mui/material";
import { format } from "date-fns";
import { Link as RouterLink } from "react-router-dom";

import ProductImage from "../../components/ProductImage";
import { products } from "../../data/data-products";
import { formatCurrency } from "../../utils/helpers";

export default function UserPurchases() {
  const purchasedProducts = products.slice(0, 4);

  return (
    <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      {purchasedProducts?.map((product) => (
        <Box
          key={product?._id}
          component={RouterLink}
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
            <Typography>{formatCurrency(product?.price)}</Typography>
            <Typography variant="body2">
              Purchased On&#x3A; {format(new Date(), "MMM dd yyyy, hh:mm aa")}
            </Typography>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
