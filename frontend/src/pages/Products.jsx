import { Container, Grid } from "@mui/material";

import ProductGallery from "../features/products/ProductGallery";
import ProductOperations from "../features/products/ProductOperations";

export default function Products() {
  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3} lg={2}>
          <ProductOperations />
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <ProductGallery />
        </Grid>
      </Grid>
    </Container>
  );
}
