import { Container, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function Account() {
  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 2 }}>
      <Typography component="h2" variant="h5" mb={4}>
        My Account
      </Typography>

      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={3.5}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8.5}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
