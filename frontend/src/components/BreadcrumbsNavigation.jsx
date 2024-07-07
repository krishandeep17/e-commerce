import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { ChevronRightIcon } from "./icons";

export default function BreadcrumbsNavigation({ breadcrumbsLinks }) {
  return (
    <Breadcrumbs
      separator={<ChevronRightIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 4 }}
    >
      {breadcrumbsLinks.map((link) =>
        link.type === "link" ? (
          <Link
            key={link.label}
            component={RouterLink}
            to={link.url}
            underline="hover"
            color="inherit"
          >
            {link.label}
          </Link>
        ) : (
          <Typography key={link.label} color="text.primary">
            {link.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
}
