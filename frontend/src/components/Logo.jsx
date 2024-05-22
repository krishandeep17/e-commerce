import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import blackLogo from "../assets/logos/logo-black.svg";
import whiteLogo from "../assets/logos/logo-white.svg";

export default function Logo({ color = "black" }) {
  return (
    <Link component={RouterLink} to="/" lineHeight="0">
      <img
        src={color === "white" ? whiteLogo : blackLogo}
        width={170}
        height={28}
        alt="E-Commerce Logo"
        loading="lazy"
      />
    </Link>
  );
}
