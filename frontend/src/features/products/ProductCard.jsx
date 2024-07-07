import {
  Box,
  Button,
  Fade,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { AddShoppingCartIcon, StarIcon } from "../../components/icons";
import ProductImage from "../../components/ProductImage";
import { formatCurrency } from "../../utils/helpers";

export default function ProductCard({ product }) {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper variant="outlined" sx={{ overflow: "hidden" }}>
        <ProductImage
          src={product.image}
          size="231"
          alt={`${product.name} Image`}
        />

        <Stack spacing={1.25} p={3} pt={2.5}>
          <Typography
            component="h4"
            variant="h6"
            fontWeight="bold"
            overflow="hidden"
            display="-webkit-box"
            sx={{
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.name}
          </Typography>
          <Typography
            overflow="hidden"
            display="-webkit-box"
            sx={{
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.description}
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap-reverse"
            gap={1}
          >
            <Typography
              component="h6"
              fontSize={{ sm: "1.125rem" }}
              fontWeight="600"
            >
              {formatCurrency(product.price)}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={0.5}>
              <StarIcon />
              <Box component="span">{product.rating}</Box>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            mt={0.5}
            sx={{ "@media (max-width: 300px)": { flexWrap: "wrap" } }}
          >
            <Button
              component={RouterLink}
              to={`/products/${product._id}`}
              variant="outlined"
              sx={{ minWidth: 133, flexGrow: 1 }}
            >
              More details
            </Button>
            <Tooltip TransitionComponent={Fade} title="Add to cart">
              <IconButton
                aria-label="shopping cart"
                sx={{
                  borderRadius: "10px",
                  bgcolor: "primary.main",
                  color: "rgb(255,255,255)",
                  padding: "9px 23px",
                  "&:hover": {
                    bgcolor: "primary.main",
                  },
                  "@media (max-width: 300px)": { flexGrow: 1 },
                }}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Paper>
    </Grid>
  );
}
