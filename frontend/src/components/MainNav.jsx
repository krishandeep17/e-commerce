import { Button, Link, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function MainNav({ navLinks }) {
  return (
    <Stack component="nav" direction="row" alignItems="center" spacing={3}>
      {navLinks.map((link) =>
        link.type !== "button" ? (
          <Link key={link.title} component={RouterLink} to={link.url}>
            {link.title}
          </Link>
        ) : (
          <Button
            key={link.title}
            component={RouterLink}
            to="/login"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Login
          </Button>
        )
      )}
    </Stack>
  );
}
