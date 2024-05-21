import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}
