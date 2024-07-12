import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import BreadcrumbsNavigation from "../../components/BreadcrumbsNavigation";
import {
  AddShoppingCartIcon,
  StarIcon,
  StarOutlineIcon,
} from "../../components/icons";
import ProductImage from "../../components/ProductImage";
import { products } from "../../data/data-products";
import { formatCurrency } from "../../utils/helpers";
import ProductReviews from "./ProductReviews";
import RelatedProducts from "./RelatedProducts";

export default function ProductDetail() {
  const { id: productId } = useParams();

  const product = products.find((product) => product._id === productId);

  const hasStock = product?.countInStock > 0;

  const breadcrumbsLinks = [
    { label: "Home", type: "link", url: "/" },
    { label: "Products", type: "link", url: "/products" },
    {
      label: product?.category,
      type: "link",
      url: `/products?category=${product?.category}`,
    },
    { label: product?.name, type: "text" },
  ];

  return (
    <>
      <Container maxWidth="lg" component="section">
        <BreadcrumbsNavigation breadcrumbsLinks={breadcrumbsLinks} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ProductImage
              src={product.image}
              size="350"
              alt={`${product.name} Image`}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box mt={1.25}>
              <Typography component="h2" variant="h5" mb={1}>
                {product.name}
              </Typography>

              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                mb={1.8}
              >
                <Typography variant="body2" textTransform="capitalize">
                  {product.category}
                </Typography>

                <Typography variant="body2">
                  {hasStock ? "In stock" : "Out of stock"}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap-reverse"
                gap={2}
              >
                <Typography fontSize={{ sm: "1.125rem" }} fontWeight="600">
                  {formatCurrency(product.price)}
                </Typography>

                <Stack direction="row" alignItems="center" spacing={0.75}>
                  <Rating
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarOutlineIcon fontSize="inherit" />}
                  />

                  <Typography component="span" variant="body2">
                    {product.numReviews} review{product.numReviews > 1 && "s"}
                  </Typography>
                </Stack>
              </Stack>

              <Stack spacing={0.5} py={3}>
                <Typography component="h6" fontWeight="600">
                  Description
                </Typography>
                <Typography>{product.description}</Typography>
              </Stack>

              <Stack spacing={2}>
                <Button variant="contained" disabled={!hasStock}>
                  Buy now
                </Button>
                <Button
                  variant="outlined"
                  disabled={!hasStock}
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to cart
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {product?.reviews?.length > 0 && (
        <ProductReviews reviews={product?.reviews} />
      )}

      <RelatedProducts
        currentProductId={product?._id}
        currentProductCategory={product?.category}
      />
    </>
  );
}
