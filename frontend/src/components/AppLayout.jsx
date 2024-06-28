import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Box component="main" mt={{ xs: 8, sm: 10 }}>
        <Outlet />
        <Services />
      </Box>
      <Footer />
    </>
  );
}
