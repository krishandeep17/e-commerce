import { Grid, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

import { products } from "../../data/data-products.js";
import ProductCard from "./ProductCard.jsx";

export default function ProductGallery() {
  const [searchParams] = useSearchParams();
  const selectedCategories = searchParams.getAll("category");

  // 1) FILTER
  const filteredProducts = products.filter(
    (product) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category)
  );

  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "createdAt-desc";
  const modifier = sortBy === "createdAt-asc" ? 1 : -1;

  const sortedProducts = filteredProducts?.sort(
    (a, b) => (new Date(a.createdAt) - new Date(b.createdAt)) * modifier
  );

  return (
    <>
      <Typography component="h5" fontWeight="bold" mb={3}>
        Showing 1 - 9 of {sortedProducts?.length} products
      </Typography>

      <Grid container spacing={4}>
        {sortedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Grid>
    </>
  );
}
