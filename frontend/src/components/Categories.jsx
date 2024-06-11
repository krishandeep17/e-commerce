import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { categories } from "../data/data-categories";

export default function Categories() {
  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 12.5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        flexWrap="wrap"
        mb={6}
      >
        <Typography component="h2" variant="h3">
          Shop by Categories
        </Typography>
        <Link
          component={RouterLink}
          to="/products"
          underline="none"
          lineHeight="normal"
        >
          Show All
        </Link>
      </Stack>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.value}>
            <Link
              component={RouterLink}
              to={`/products?category=${category.value}`}
              underline="none"
              p={2.5}
              minHeight={360}
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              sx={{
                backgroundColor: "brand.gray_100",
                backgroundImage: `url(${category.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Typography
                borderRadius={1.25}
                p={2}
                width="100%"
                textAlign="center"
                bgcolor="brand.gray_50"
              >
                {category.label}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
