import { Container, Grid, Typography } from "@mui/material";

import { products } from "../../data/data-products";
import ProductCard from "./ProductCard";

export default function RelatedProducts({
  currentProductId,
  currentProductCategory,
}) {
  const relatedProducts = products.filter(
    (product) =>
      product.category === currentProductCategory &&
      product._id !== currentProductId
  );

  return (
    relatedProducts.length > 0 && (
      <Container maxWidth="lg" component="section" sx={{ mt: 8 }}>
        <Typography component="h2" variant="h3" mb={4}>
          Related Products
        </Typography>

        <Grid container spacing={4}>
          {relatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    )
  );
}
