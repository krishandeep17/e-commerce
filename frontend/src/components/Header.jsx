import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import UserDropdownMenu from "../features/authentication/UserDropdownMenu";
import CartDropdownMenu from "../features/Cart/CartDropdownMenu";
import ProductSearchDialog from "../features/products/ProductSearchDialog";
import useBreakpoint from "../hooks/useBreakpoint";
import ElevationScroll from "./ElevationScroll";
import { LoginIcon } from "./icons";
import Logo from "./Logo";

export default function Header() {
  const isSmallScreen = useBreakpoint("sm");
  const isLoggedIn = true;

  const renderLoginButton = isSmallScreen ? (
    <IconButton
      component={RouterLink}
      to="/login"
      aria-label="login"
      color="inherit"
    >
      <LoginIcon />
    </IconButton>
  ) : (
    <Button
      component={RouterLink}
      to="/login"
      size="large"
      variant="text"
      startIcon={<LoginIcon />}
    >
      Login
    </Button>
  );

  return (
    <ElevationScroll>
      <AppBar
        component="header"
        sx={{
          backgroundColor: "white",
          color: "text.primary",
          py: 1,
        }}
      >
        <Container sx={{ px: { xs: 0 } }}>
          <Toolbar component="nav" sx={{ justifyContent: "space-between" }}>
            <Logo width="180" height="30" />

            <Stack direction="row" alignItems="center">
              <ProductSearchDialog />

              <CartDropdownMenu />

              {isLoggedIn ? <UserDropdownMenu /> : renderLoginButton}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
