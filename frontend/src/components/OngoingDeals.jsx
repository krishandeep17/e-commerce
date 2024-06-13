import { EastRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import dealImg from "../assets/images/deal.png";

import {
  MILLISECONDS_PER_DAY,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_MINUTE,
  MILLISECONDS_PER_SECOND,
} from "../utils/constants";

const ONGOING_DEALS_LAST_DATE = new Date();
ONGOING_DEALS_LAST_DATE.setDate(ONGOING_DEALS_LAST_DATE.getDate() + 7);

function StatBox({ label, value }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        textAlign: "center",
        minWidth: "100px",
        borderColor: "brand.gray_200",
      }}
    >
      <Typography component="h4" variant="h5">
        {value}
      </Typography>
      <Typography>{label}</Typography>
    </Paper>
  );
}

export default function OngoingDeals() {
  const [hasOngoingDeal, setHasOngoingDeal] = useState(true);
  const [time, setTime] = useState([
    { label: "days", value: 0 },
    { label: "hours", value: 0 },
    { label: "minutes", value: 0 },
    { label: "seconds", value: 0 },
  ]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const currentTime = new Date();

      const timeDifference = Math.max(
        Number(ONGOING_DEALS_LAST_DATE) - Number(currentTime),
        0
      );

      const days = Math.floor(timeDifference / MILLISECONDS_PER_DAY);

      const hours = Math.floor(
        (timeDifference % MILLISECONDS_PER_DAY) / MILLISECONDS_PER_HOUR
      );

      const minutes = Math.floor(
        (timeDifference % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE
      );

      const seconds = Math.floor(
        (timeDifference % MILLISECONDS_PER_MINUTE) / MILLISECONDS_PER_SECOND
      );

      setTime([
        { label: "days", value: days },
        { label: "hours", value: hours },
        { label: "minutes", value: minutes },
        { label: "seconds", value: seconds },
      ]);

      if (timeDifference === 0) {
        setHasOngoingDeal(false);
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    hasOngoingDeal && (
      <Container maxWidth="lg" component="section" sx={{ mt: 12.5 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Stack spacing={3.75}>
              <Typography component="h2" variant="h3">
                Deals of the Month
              </Typography>

              <Typography>
                Get ready for a shopping experience like never before with our
                Deals of the Month! Every purchase comes with exclusive perks
                and offers, making this month a celebration of savvy choices and
                amazing deals. Don&#39;t miss out! 🎁🛒
              </Typography>

              <Box
                display="grid"
                gridTemplateColumns={{
                  xs: "repeat(2, 1fr)",
                  lg: "repeat(4, 100px)",
                }}
                gap={2.5}
              >
                {time.map(({ label, value }) => (
                  <StatBox key={label} label={label} value={value} />
                ))}
              </Box>

              <Button
                component={RouterLink}
                to="/products"
                variant="contained"
                sx={{ width: "fit-content" }}
                endIcon={<EastRounded />}
              >
                View Products
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="picture" bgcolor="brand.gray_100" p={4}>
              <img
                src={dealImg}
                width="488"
                height="372"
                loading="lazy"
                alt="Laptop image with text - 'LAPTOP MEGA BARGAINS! UP TO 50% OFF'"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
  );
}
