import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import blackLogo from "../assets/logos/logo-black.svg";
import whiteLogo from "../assets/logos/logo-white.svg";

export default function Logo({ color = "black", width, height, sx = {} }) {
  return (
    <Link component={RouterLink} to="/" lineHeight="0" sx={sx}>
      <img
        src={color === "white" ? whiteLogo : blackLogo}
        width={width}
        height={height}
        alt="E-Commerce Logo"
        loading="lazy"
      />
    </Link>
  );
}
