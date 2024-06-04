import { Container, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Logo from "./Logo";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const navLinks = [
  { title: "Home", type: "link", url: "/" },
  { title: "Shop", type: "link", url: "/products" },
  { title: "Login", type: "button", url: "/login" },
];

export default function Header() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg" component="header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={4}
      >
        <Logo width="180" height="30" />

        {isSmallScreen ? (
          <MobileNav navLinks={navLinks} />
        ) : (
          <MainNav navLinks={navLinks} />
        )}
      </Stack>
    </Container>
  );
}
