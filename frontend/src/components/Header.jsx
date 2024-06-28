import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Fade,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { cloneElement, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import EllipsisVerticalIcon from "./EllipsisVerticalIcon";
import LoginIcon from "./LoginIcon";
import Logo from "./Logo";
import LogoutIcon from "./LogoutIcon";
import OrderIcon from "./OrderIcon";
import PurchasesIcon from "./PurchasesIcon";
import SearchIcon from "./SearchIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";
import UserIcon from "./UserIcon";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: "rgba(19, 17, 24, 0.04)",
  width: "100%",
  marginRight: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    width: "auto",
    marginRight: "0",
    backgroundColor: "transparent",
    "&:hover, &:focus-within, &:has(input:not(:placeholder-shown))": {
      backgroundColor: "rgba(19, 17, 24, 0.04)",
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0",
      "&:focus, &:not(:placeholder-shown)": {
        paddingRight: theme.spacing(1),
        width: "22ch",
      },
    },
    [theme.breakpoints.up("md")]: {
      "&:focus, &:not(:placeholder-shown)": {
        width: "28ch",
      },
    },
  },
}));

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function navigateAndCloseMenu(url) {
    navigate(url);
    handleMenuClose();
  }

  function navigateAndCloseMobileMenu(url) {
    navigate(url);
    handleMobileMenuClose();
  }

  function logout() {
    setIsLoggedIn(false);
    handleMenuClose();
  }

  return (
    <>
      <ElevationScroll>
        <AppBar
          component="header"
          sx={{
            bgcolor: "brand.gray_50",
            color: "text.primary",
            py: { sm: 1 },
          }}
        >
          <Container sx={{ px: { xs: 0 } }}>
            <Toolbar component="nav">
              <Box display={{ xs: "none", sm: "block" }}>
                <Logo width="180" height="30" />
              </Box>

              <Box flexGrow={1} />

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase
                  placeholder="Search Products..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchValue}
                  onChange={handleInputChange}
                />
              </Search>

              <Box
                sx={{ display: { xs: "none", sm: "flex" } }}
                alignItems="center"
              >
                <Tooltip TransitionComponent={Fade} title="Open cart">
                  <IconButton
                    component={NavLink}
                    to="/cart"
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={4} color="error">
                      <ShoppingCartIcon fontSize="inherit" />
                    </Badge>
                  </IconButton>
                </Tooltip>
                {isLoggedIn ? (
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip TransitionComponent={Fade} title="Open profile">
                      <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="account-menu"
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                      >
                        <Avatar
                          src="."
                          alt="Krishandeep's Profile Picture"
                          sx={{ width: 32, height: 32 }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                ) : (
                  <Button
                    component={NavLink}
                    to="/login"
                    underline="none"
                    sx={{ px: 0 }}
                  >
                    Login
                  </Button>
                )}
              </Box>

              <Box display={{ xs: "flex", sm: "none" }}>
                <IconButton
                  aria-label="show more"
                  aria-controls="account-menu-mobile"
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <EllipsisVerticalIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        id="account-menu-mobile"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem onClick={() => navigateAndCloseMobileMenu("/cart")}>
          <IconButton
            size="large"
            aria-label="show 4 new cart items"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon fontSize="inherit" />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>

        {isLoggedIn ? (
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="account-menu"
              aria-haspopup="true"
            >
              <Avatar
                src="."
                alt="Krishandeep's Profile Picture"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        ) : (
          <MenuItem onClick={() => navigateAndCloseMobileMenu("/login")}>
            <IconButton
              size="large"
              aria-label="login user"
              aria-haspopup="true"
              color="inherit"
            >
              <LoginIcon fontSize="inherit" />
            </IconButton>
            <p>Login</p>
          </MenuItem>
        )}
      </Menu>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        id="account-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => navigateAndCloseMenu("/account")}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <UserIcon fontSize="inherit" />
          </IconButton>
          <p>My Account</p>
        </MenuItem>
        <MenuItem onClick={() => navigateAndCloseMenu("/account/purchases")}>
          <IconButton
            size="large"
            aria-label="purchases of current user"
            aria-controls="account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <PurchasesIcon fontSize="inherit" />
          </IconButton>
          <p>My Purchases</p>
        </MenuItem>
        <MenuItem onClick={() => navigateAndCloseMenu("/account/orders")}>
          <IconButton
            size="large"
            aria-label="orders of current user"
            aria-controls="account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <OrderIcon fontSize="inherit" />
          </IconButton>
          <p>My Orders</p>
        </MenuItem>
        <MenuItem onClick={logout}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon fontSize="inherit" />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      </Menu>
    </>
  );
}
