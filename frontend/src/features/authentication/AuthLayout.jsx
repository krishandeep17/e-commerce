import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Container, Grid, Link, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import handImg from "../../assets/images/wave-hand.png";
import Logo from "../../components/Logo";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function AuthLayout({
  heroImg,
  heading,
  subHeading,
  style = { mt: { xs: 10, sm: 0 } },
  type = "",
  children,
}) {
  const isSmallScreen = useBreakpoint("sm");

  return (
    <Grid
      container
      component="main"
      minHeight="100svh"
      sx={{
        position: "relative",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: { xs: `url(${heroImg})`, sm: "none" },
      }}
    >
      <Logo
        width="204"
        height="34"
        sx={{
          position: "absolute",
          top: 24,
          left: { xs: "50%", sm: 24 },
          transform: { xs: "translateX(-50%)", sm: "none" },
          zIndex: 10,
        }}
      />

      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: { sm: `url(${heroImg})` },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xs={12} sm={8} md={5} sx={{ backdropFilter: "blur(1px)" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          px={{ xs: 2, sm: 0 }}
          pb={{ xs: 2, sm: 0 }}
        >
          <Container
            maxWidth="sm"
            component={Paper}
            elevation={isSmallScreen ? 4 : 0}
            sx={{ py: 4, ...style }}
          >
            {type === "recover-password" ? (
              <>
                <Link
                  component={RouterLink}
                  to="/login"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mb: 3,
                  }}
                >
                  <ArrowBackIosNewRounded />
                  <Typography fontSize="1.125rem">Back</Typography>
                </Link>

                <Typography component="h3" variant="h4" mb={1}>
                  {heading}
                </Typography>
              </>
            ) : (
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Typography component="h3" variant="h4">
                  {heading}
                </Typography>
                <img
                  src={handImg}
                  width="30"
                  height="30"
                  alt="Waving Hand"
                  loading="lazy"
                />
              </Stack>
            )}

            <Typography color="brand.gray_500">{subHeading}</Typography>

            {children}
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
}
