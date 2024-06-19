import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import CartDetail from "../features/Cart/CartDetail";

export default function Cart() {
  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 2 }}>
      <Typography component="h2" variant="h5" mb={4}>
        Shopping Cart
      </Typography>

      <CartDetail />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        spacing={3}
        bgcolor="brand.gray_100"
        py={{ xs: 5, sm: 6 }}
        px={{ xs: 2, sm: 4, md: 6 }}
        mt={{ xs: 8, sm: 10 }}
      >
        <Box>
          <Typography component="h2" variant="h3" mb={2}>
            Continue Shopping
          </Typography>
          <Typography>
            Discover more products that are perfect for gift, for your wardrobe,
            or a unique addition to your collection.
          </Typography>
        </Box>

        <Button component={RouterLink} to="/products" variant="contained">
          Continue shopping
        </Button>
      </Stack>
    </Container>
  );
}
