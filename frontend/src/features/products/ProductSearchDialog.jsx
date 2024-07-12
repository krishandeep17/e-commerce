import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  CloseIcon,
  SearchIcon,
  StarIcon,
  StarOutlineIcon,
} from "../../components/icons";
import { products } from "../../data/data-products";
import { categories } from "../../utils/constants";
import { formatCurrency } from "../../utils/helpers";

const popularSearches = [
  {
    _id: 5,
    title: "Apple iPhone 15 Pro (1TB) - Blue Titanium",
  },
  {
    _id: 13,
    title: "Apple iPhone 14 (128 GB) - Blue",
  },
  {
    _id: 6,
    title: "Apple iPhone 15 Pro Max (256 GB) - Natural Titanium",
  },
];

const featuredProducts = products.slice(0, 3);

export default function ProductSearchDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const search = formJson.search;

    console.log(search);

    event.currentTarget.reset();
  };

  return (
    <>
      <IconButton color="inherit" sx={{ mr: { sm: 0.5 } }} onClick={handleOpen}>
        <SearchIcon />
      </IconButton>

      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>
          Search Products
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              type="search"
              name="search"
              autoFocus
              fullWidth
              placeholder="Search for products, brands, or categories..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "gray" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="submit" variant="contained">
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </form>

          <Divider sx={{ marginY: 2 }} />

          <Box>
            <Typography component="h6" fontWeight="500" mb={1}>
              Popular Searches
            </Typography>

            <Stack overflow="hidden" spacing={0.5}>
              {popularSearches.map((result) => (
                <Link
                  key={result._id}
                  component={RouterLink}
                  to={`/products/${result._id}`}
                  underline="hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "GrayText",
                  }}
                  onClick={handleClose}
                >
                  <SearchIcon fontSize="inherit" />
                  <Typography noWrap>{result.title}</Typography>
                </Link>
              ))}
            </Stack>
          </Box>

          <Divider sx={{ marginY: 2 }} />

          <Box>
            <Typography component="h6" fontWeight="500" mb={1}>
              Browse by Category
            </Typography>

            <Grid container spacing={2}>
              {categories.map((category) => (
                <Grid key={category.label} item xs={12} sm={4}>
                  <Button
                    component={RouterLink}
                    to={`/products?category=${category.slug}`}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    startIcon={<category.icon />}
                    onClick={handleClose}
                  >
                    {category.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ marginY: 2 }} />

          {featuredProducts.length > 0 && (
            <Box>
              <Typography component="h6" fontWeight="500" mb={1}>
                Featured Products
              </Typography>

              <Grid container spacing={2}>
                {featuredProducts.map((product) => (
                  <Grid key={product._id} item xs={12} sm={6} md={4}>
                    <Paper variant="outlined" sx={{ p: 2 }}>
                      <Link
                        component={RouterLink}
                        to={`/products/${product?._id}`}
                        underline="none"
                      >
                        <img
                          src={product?.image}
                          width={230}
                          height={230}
                          alt={`${product?.name} Image`}
                          style={{
                            aspectRatio: 1,
                            objectFit: "contain",
                            marginInline: "auto",
                          }}
                        />

                        <Stack spacing={1} mt={2} overflow="hidden">
                          <Typography fontWeight="500" noWrap>
                            {product?.name}
                          </Typography>

                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                          >
                            <Rating
                              value={product?.rating}
                              precision={0.5}
                              readOnly
                              size="small"
                              icon={<StarIcon fontSize="inherit" />}
                              emptyIcon={<StarOutlineIcon fontSize="inherit" />}
                            />

                            <span>{product?.rating}</span>
                          </Stack>

                          <Typography fontWeight="bold">
                            {formatCurrency(product?.price)}
                          </Typography>
                        </Stack>
                      </Link>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
