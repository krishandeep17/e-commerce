import { Link, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import logo from "../assets/logos/logo-black.svg";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const navLinks = [
  { title: "Home", type: "link", url: "/" },
  { title: "Shop", type: "link", url: "/products" },
  { title: "Login", type: "button", url: "/login" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      py={4}
    >
      <Link component={RouterLink} to="/">
        <img
          src={logo}
          width={170}
          height={28}
          alt="E-Commerce Logo"
          loading="lazy"
        />
      </Link>

      {isMobile ? (
        <MobileNav navLinks={navLinks} />
      ) : (
        <MainNav navLinks={navLinks} />
      )}
    </Stack>
  );
}
