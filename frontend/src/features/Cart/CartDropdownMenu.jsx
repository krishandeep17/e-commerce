import {
  Badge,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Link,
  Menu,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
} from "../../components/icons";
import { products } from "../../data/data-products";
import useBreakpoint from "../../hooks/useBreakpoint";
import { MAX_QUANTITY } from "../../utils/constants";
import { formatCurrency } from "../../utils/helpers";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "rgb(243 244 246)",
  border: "1px solid rgb(209 213 219)",
  borderRadius: 5,
  padding: theme.spacing(0.125),

  "&:hover": {
    backgroundColor: "rgb(229 231 235)",
  },
}));

export default function CartDropdownMenu() {
  const [anchorElCart, setAnchorElCart] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const isSmallScreen = useBreakpoint("sm");

  const cartItems = products.slice(0, 4);

  const numCartItems = cartItems?.length || 0;

  const totalAmount = useMemo(
    () =>
      cartItems
        .map((product) => product.price)
        .reduce((acc, cur) => acc + cur, 0),
    [cartItems]
  );

  const isMinQuantity = quantity === 1;
  const isMaxQuantity = quantity === MAX_QUANTITY;

  const handleOpenCartSummary = (event) => setAnchorElCart(event.currentTarget);

  const handleCloseCartSummary = () => setAnchorElCart(null);

  const handleDecreaseQuantity = () =>
    !isMinQuantity && setQuantity((quantity) => quantity - 1);

  const handleIncreaseQuantity = () =>
    !isMaxQuantity && setQuantity((quantity) => quantity + 1);

  return (
    <>
      {isSmallScreen ? (
        <IconButton
          aria-label="show cart items"
          aria-controls="cart-summary"
          aria-haspopup="true"
          color="inherit"
          onClick={handleOpenCartSummary}
        >
          <Badge
            badgeContent={numCartItems > 0 ? numCartItems : 0}
            color="error"
          >
            <ShoppingBagIcon />
          </Badge>
        </IconButton>
      ) : (
        <Button
          variant="text"
          aria-label="show cart items"
          aria-controls="cart-summary"
          aria-haspopup="true"
          startIcon={
            // <Badge
            //   badgeContent={numCartItems > 0 ? numCartItems : 0}
            //   color="error"
            // >
            // </Badge>
            <ShoppingBagIcon />
          }
          endIcon={<ChevronDownIcon />}
          onClick={handleOpenCartSummary}
        >
          My Cart
        </Button>
      )}

      <Menu
        anchorEl={anchorElCart}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        id="cart-summary"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElCart)}
        onClose={handleCloseCartSummary}
        component="div"
      >
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          maxWidth={340}
        >
          <Typography p={2} fontWeight="600">
            Your shopping cart{" "}
            <Typography component="span" color="text.secondary">
              &#x28;
              {cartItems?.length} item
              {cartItems?.length > 1 && "s"}
              &#x29;
            </Typography>
          </Typography>

          {cartItems.map((product) => (
            <Box
              key={product?._id}
              p={2}
              display="grid"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              alignItems="center"
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Link
                  component={RouterLink}
                  to={`/products/${product?._id}`}
                  onClick={handleCloseCartSummary}
                  minWidth="fit-content"
                >
                  <img
                    src={product?.image}
                    width="36"
                    height="36"
                    alt={`${product?.name} Image`}
                    loading="lazy"
                    style={{ aspectRatio: 1, objectFit: "contain" }}
                  />
                </Link>

                <Stack overflow="hidden">
                  <Link
                    component={RouterLink}
                    to={`/products/${product?._id}`}
                    underline="hover"
                    fontWeight="600"
                    variant="body2"
                    noWrap
                    onClick={handleCloseCartSummary}
                  >
                    {product?.name}
                  </Link>
                  <Typography variant="body2">
                    {formatCurrency(product.price)}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={1.5}
              >
                <Stack direction="row" alignItems="center">
                  <StyledIconButton
                    aria-label="decrease quantity"
                    size="small"
                    disabled={isMinQuantity}
                    onClick={handleDecreaseQuantity}
                  >
                    <MinusIcon fontSize="inherit" />
                  </StyledIconButton>

                  <Typography
                    variant="body2"
                    fontWeight="500"
                    width={35}
                    textAlign="center"
                  >
                    {quantity}
                  </Typography>

                  <StyledIconButton
                    aria-label="increase quantity"
                    size="small"
                    disabled={isMaxQuantity}
                    onClick={handleIncreaseQuantity}
                  >
                    <PlusIcon fontSize="inherit" />
                  </StyledIconButton>
                </Stack>

                <Tooltip title="Remove" TransitionComponent={Fade}>
                  <IconButton
                    aria-label="remove from cart"
                    size="small"
                    color="error"
                  >
                    <TrashIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          ))}

          <Box p={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Typography fontWeight="600">Total</Typography>
              <Typography fontWeight="600">
                {formatCurrency(totalAmount)}
              </Typography>
            </Stack>

            <Button
              component={RouterLink}
              to="/cart"
              variant="contained"
              fullWidth
              onClick={handleCloseCartSummary}
            >
              See your cart
            </Button>
          </Box>
        </Stack>
      </Menu>
    </>
  );
}
