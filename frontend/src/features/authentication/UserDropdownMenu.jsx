import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import defaultAvatar from "../../assets/images/avatar.svg";
import {
  ChevronDownIcon,
  LogoutIcon,
  OrderIcon,
  PurchasesIcon,
  UserIcon,
} from "../../components/icons";
import { user } from "../../data/data-users";
import useBreakpoint from "../../hooks/useBreakpoint";

const accountMenuItems = [
  {
    title: "My Account",
    url: "/account",
    icon: <UserIcon />,
  },
  {
    title: "My Purchases",
    url: "/account/purchases",
    icon: <PurchasesIcon />,
  },
  {
    title: "My Orders",
    url: "/account/orders",
    icon: <OrderIcon />,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
  },
];

export default function UserDropdownMenu() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const isSmallScreen = useBreakpoint("sm");

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleLogout = () => {
    handleCloseUserMenu();
  };

  return (
    <>
      {isSmallScreen ? (
        <IconButton
          aria-label="account of current user"
          aria-controls="user-menu"
          aria-haspopup="true"
          onClick={handleOpenUserMenu}
        >
          <Avatar
            src={user?.avatar || defaultAvatar}
            alt={`${user?.firstName}'s Avatar`}
            sx={{ width: 28, height: 28 }}
          />
        </IconButton>
      ) : (
        <Button
          variant="text"
          aria-label="account of current user"
          aria-controls="user-menu"
          aria-haspopup="true"
          startIcon={
            <Avatar
              src={user?.avatar || defaultAvatar}
              alt={`${user?.firstName}'s Avatar`}
              sx={{ width: 28, height: 28 }}
            />
          }
          endIcon={<ChevronDownIcon />}
          onClick={handleOpenUserMenu}
        >
          My Account
        </Button>
      )}

      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        id="user-menu"
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        component="div"
      >
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          maxWidth={224}
        >
          <Box pt={1} px={1} pb={2}>
            <Avatar
              src={user?.avatar || defaultAvatar}
              alt={`${user?.firstName}'s Avatar`}
              sx={{ mx: "auto" }}
            />

            <Stack my={1} overflow="hidden" textAlign="center">
              <Typography variant="body2" fontWeight="600" noWrap>
                Hello&#x2C; {user?.firstName}
              </Typography>
              <Typography variant="body2" noWrap>
                {user?.email}
              </Typography>
            </Stack>

            <Button
              component={RouterLink}
              to="/account/profile"
              variant="outlined"
              fullWidth
              color="inherit"
              onClick={handleCloseUserMenu}
            >
              View Profile
            </Button>
          </Box>

          <Box p={1}>
            {accountMenuItems.map((item) =>
              item.url ? (
                <Button
                  key={item.title}
                  component={RouterLink}
                  to={item.url}
                  variant="text"
                  fullWidth
                  color="inherit"
                  startIcon={item.icon}
                  sx={{ justifyContent: "flex-start" }}
                  onClick={handleCloseUserMenu}
                >
                  {item.title}
                </Button>
              ) : (
                <Button
                  key={item.title}
                  variant="text"
                  fullWidth
                  color="error"
                  startIcon={item.icon}
                  sx={{ justifyContent: "flex-start" }}
                  onClick={handleLogout}
                >
                  {item.title}
                </Button>
              )
            )}
          </Box>
        </Stack>
      </Menu>
    </>
  );
}
