import { Button, Divider, Paper, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import UserProfile from "../features/authentication/UserProfile";
import LogoutIcon from "./LogoutIcon";
import OrderIcon from "./OrderIcon";
import PurchasesIcon from "./PurchasesIcon";
import UserIcon from "./UserIcon";

const profileNavItems = [
  {
    title: "Personal Information",
    type: "link",
    url: "/account",
    icon: <UserIcon />,
  },
  {
    title: "My Purchases",
    type: "link",
    url: "purchases",
    icon: <PurchasesIcon />,
  },
  {
    title: "My Orders",
    type: "link",
    url: "orders",
    icon: <OrderIcon />,
  },
  {
    title: "Logout",
    type: "button",
    url: "",
    icon: <LogoutIcon />,
  },
];

export default function Sidebar() {
  return (
    <Stack
      component={Paper}
      variant="outlined"
      py={2}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Stack direction="row" alignItems="center" spacing={1.5} px={2}>
        <UserProfile />
      </Stack>

      <Stack spacing={1} px={2}>
        {profileNavItems.map((item) =>
          item.type === "button" ? (
            <Button
              key={item.title}
              variant="text"
              startIcon={item.icon}
              sx={{ justifyContent: "initial" }}
            >
              {item.title}
            </Button>
          ) : (
            <Button
              key={item.title}
              component={RouterLink}
              to={item.url}
              variant="text"
              startIcon={item.icon}
              sx={{ justifyContent: "initial" }}
            >
              {item.title}
            </Button>
          )
        )}
      </Stack>
    </Stack>
  );
}
