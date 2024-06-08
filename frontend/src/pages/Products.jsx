import { Box, Container } from "@mui/material";

import ProductOperations from "../features/products/ProductOperations";

export default function Products() {
  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 6.25 }}>
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "100%", md: "1fr 75%" }}
        gap={{ xs: 6, md: 7.5 }}
      >
        <ProductOperations />
      </Box>
    </Container>
  );
}
