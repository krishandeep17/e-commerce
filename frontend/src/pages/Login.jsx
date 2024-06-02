import {
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import handImg from "../assets/images/hand.png";
import loginHeroImg from "../assets/images/image-1.svg";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      component="main"
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: { xxs: `url(${loginHeroImg})`, sm: "none" },
      }}
    >
      <Logo
        width="204"
        height="34"
        sx={{
          position: "absolute",
          top: "24px",
          left: { xxs: "50%", sm: "24px" },
          transform: { xxs: "translateX(-50%)", sm: "none" },
          zIndex: 10,
        }}
      />

      <Grid
        item
        xxs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: { sm: `url(${loginHeroImg})` },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid item xxs={12} sm={8} md={5} sx={{ backdropFilter: "blur(1px)" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          px={{ xxs: 1, sm: 0 }}
        >
          <Container
            maxWidth="sm"
            component={Paper}
            elevation={isMobile ? 4 : 0}
            sx={{
              py: 4,
              "@media (max-height: 600px)": {
                mt: 10,
              },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              mb={{ xxs: 1, sm: 0 }}
            >
              <Typography component="h2" variant="h4">
                Welcome
              </Typography>
              <img
                src={handImg}
                width="30"
                height="30"
                alt="Waving Hand"
                loading="lazy"
              />
            </Stack>

            <Typography color="brand.gray">Please login here</Typography>

            <LoginForm />
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
}
