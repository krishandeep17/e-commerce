import { Grid, Typography } from "@mui/material";

import { useGetProductsQuery } from "../../services/productsApiSlice.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGallery() {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Typography component="h5" fontWeight="bold" mb={3}>
        Showing 1 - 9 of {products?.length} products
      </Typography>

      <Grid container spacing={4}>
        {products?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </Grid>
    </>
  );
}
