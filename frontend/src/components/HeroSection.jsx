import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import heroImg from "../assets/heros/home-hero.png";

export default function HeroSection() {
  return (
    <Box
      component="section"
      maxWidth={1400}
      mx="auto"
      py={{ xs: 6.25, sm: "10%", md: "15%" }}
      sx={{
        backgroundColor: "brand.gray_100",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: { xs: "center", sm: "revert", xl: "center" },
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Typography component="h1" variant="h2" mb={1.2}>
          Unleash Innovation <br /> in Every Byte.
        </Typography>
        <Typography component="p" variant="subtitle1" mb={4}>
          Explore a World of Cutting-Edge Tech
        </Typography>
        <Button component={RouterLink} to="/products" variant="contained">
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}
