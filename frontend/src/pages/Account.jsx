import { Container, Grid, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";

export default function Account() {
  return (
    <Container maxWidth="lg" component="section" sx={{ mt: 2 }}>
      <Typography component="h2" variant="h5" mb={4}>
        My Profile
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} md={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}
