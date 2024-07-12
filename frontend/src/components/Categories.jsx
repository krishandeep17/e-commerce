import { Container, Grid, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

import { categories } from "../utils/constants";

const CategoryCard = styled(Link)(({ theme }) => ({
  backgroundColor: theme.palette.brand.gray_100,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: theme.spacing(2.5),
  minHeight: 360,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
}));

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
        <Link component={RouterLink} to="/products" underline="hover">
          Show All
        </Link>
      </Stack>

      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.label}>
            <CategoryCard
              component={RouterLink}
              to={`/products?category=${category.slug}`}
              underline="none"
              sx={{
                backgroundImage: `url(${category.image})`,
              }}
            >
              <Typography
                borderRadius={1.25}
                p={2}
                width="100%"
                textAlign="center"
                bgcolor="white"
              >
                {category.label}
              </Typography>
            </CategoryCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
