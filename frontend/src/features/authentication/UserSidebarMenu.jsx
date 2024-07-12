import {
  Avatar,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import defaultAvatar from "../../assets/images/avatar.svg";
import { user } from "../../data/data-users";

import {
  LogoutIcon,
  OrderIcon,
  PurchasesIcon,
  UserIcon,
} from "../../components/icons";

const accountMenuItems = [
  {
    title: "My Profile",
    url: "/account/profile",
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

export default function UserSidebarMenu() {
  const fullName = `${user?.firstName} ${user?.lastName}`;

  return (
    <Stack
      component={Paper}
      variant="outlined"
      py={2}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} px={2}>
        <Avatar
          src={user?.avatar || defaultAvatar}
          alt={`${user?.firstName}'s Avatar`}
          sx={{ width: 50, height: 50 }}
        />

        <Stack overflow="hidden">
          <Typography fontWeight="bold" textTransform="capitalize" noWrap>
            {fullName}
          </Typography>
          <Typography variant="body2" noWrap>
            {user?.email}
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={1} px={2}>
        {accountMenuItems.map((item) =>
          item.url ? (
            <Button
              key={item.title}
              component={NavLink}
              to={item.url}
              variant="text"
              startIcon={item.icon}
              sx={{
                justifyContent: "flex-start",
                "&.active": {
                  backgroundColor: "rgba(19, 17, 24, 0.04)",
                },
              }}
            >
              {item.title}
            </Button>
          ) : (
            <Button
              key={item.title}
              variant="text"
              color="error"
              startIcon={item.icon}
              sx={{ justifyContent: "flex-start" }}
            >
              {item.title}
            </Button>
          )
        )}
      </Stack>
    </Stack>
  );
}
