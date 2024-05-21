import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileNav({ navLinks }) {
  const [openNavMenu, setOpenNavMenu] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setOpenNavMenu(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setOpenNavMenu(null);
  };
  return (
    <Box>
      <Tooltip title="Open menu">
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="primary"
        >
          <MenuOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={openNavMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(openNavMenu)}
        onClose={handleCloseNavMenu}
        sx={{ mt: "50px" }}
      >
        {navLinks.map((link) =>
          link.type !== "button" ? (
            <MenuItem
              key={link.title}
              onClick={() => {
                handleCloseNavMenu();
                navigate(`${link.url}`);
              }}
            >
              {link.title}
            </MenuItem>
          ) : (
            <MenuItem
              key={link.title}
              onClick={() => {
                handleCloseNavMenu();
                navigate("/login");
              }}
            >
              <Button variant="contained">{link.title}</Button>
            </MenuItem>
          )
        )}
      </Menu>
    </Box>
  );
}
