import {
  Box,
  Divider,
  Fade,
  IconButton,
  Link,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { MinusIcon, PlusIcon, TrashIcon } from "../../components/icons";
import ProductImage from "../../components/ProductImage";
import useBreakpoint from "../../hooks/useBreakpoint";
import { formatCurrency } from "../../utils/helpers";
import {
  decreaseItemQuantity,
  getCartItems,
  increaseItemQuantity,
  removeItemFromCart,
} from "./cartSlice";

export default function CartTable() {
  const isSmallScreen = useBreakpoint("sm");
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  return (
    <Paper variant="outlined" sx={{ py: 2 }}>
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {!isSmallScreen && (
          <Box
            display="grid"
            gridTemplateColumns="50px 1fr 124px 82px 40px"
            gap={{ sm: 3, md: 4 }}
            px={2}
          >
            <Typography>&nbsp;</Typography>
            <Typography fontWeight="500">Products</Typography>
            <Typography fontWeight="500" textAlign="center">
              Quantity
            </Typography>
            <Typography fontWeight="500">Subtotal</Typography>
            <Typography>&nbsp;</Typography>
          </Box>
        )}

        {cartItems.map((product) => (
          <Box
            key={product._id}
            display="grid"
            gridTemplateColumns="50px 1fr auto"
            gap={{ xs: 2, sm: 3, md: 4 }}
            px={2}
          >
            <Link
              component={RouterLink}
              to={`/products/${product._id}`}
              height="fit-content"
            >
              <ProductImage
                src={product.image}
                size="50"
                alt={product.name}
                p={0.75}
              />
            </Link>

            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr auto" }}
              alignItems="center"
              justifyContent="space-between"
              gap={{ xs: 2, sm: 3, md: 4 }}
            >
              <Box overflow="hidden">
                <Link
                  component={RouterLink}
                  to={`/products/${product._id}`}
                  underline="none"
                >
                  <Typography
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    mb={0.8}
                  >
                    {product.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {formatCurrency(product.price)}
                  </Typography>
                </Link>
              </Box>

              <Stack
                direction="row"
                alignItems="center"
                border="1px solid"
                borderColor="brand.gray_500"
                borderRadius={{ xs: 1.5, sx: 2.5 }}
                width="fit-content"
              >
                <IconButton
                  aria-label="decrease quantity"
                  color="inherit"
                  sx={{
                    borderRadius: "10px 0 0 10px",
                    borderRight: "1px solid",
                    borderColor: "brand.gray_500",
                  }}
                  size={isSmallScreen ? "small" : "medium"}
                  disabled={product.quantity === 1}
                  onClick={() => dispatch(decreaseItemQuantity(product._id))}
                >
                  <MinusIcon fontSize="inherit" />
                </IconButton>

                <Typography
                  variant="body2"
                  fontSize={{ sm: "1rem" }}
                  minWidth={{ xs: "28px", sm: "40px" }}
                  textAlign="center"
                >
                  {product.quantity}
                </Typography>

                <IconButton
                  aria-label="increase quantity"
                  color="inherit"
                  sx={{
                    borderRadius: "0 10px 10px 0",
                    borderLeft: "1px solid",
                    borderColor: "brand.gray_500",
                  }}
                  size={isSmallScreen ? "small" : "medium"}
                  disabled={product.quantity === product.stock}
                  onClick={() => dispatch(increaseItemQuantity(product._id))}
                >
                  <PlusIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            </Box>

            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              justifyContent={{ xs: "space-between", sm: "normal" }}
              alignItems={{ xs: "end", sm: "center" }}
              spacing={{ xs: 1, sm: 3, md: 4 }}
            >
              <Typography
                mb={{ xs: 0.3, sm: 0 }}
                minWidth={{ xs: "fit-content", sm: "82px" }}
                textAlign={{ xs: "right", sm: "left" }}
              >
                {formatCurrency(product.totalPrice)}
              </Typography>

              <Tooltip title="Remove" TransitionComponent={Fade}>
                <IconButton
                  aria-label="remove from cart"
                  color="error"
                  onClick={() => dispatch(removeItemFromCart(product._id))}
                >
                  <TrashIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
